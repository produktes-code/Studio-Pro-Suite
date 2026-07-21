import os
import uuid
import numpy as np
import scipy.signal as signal
from pydub import AudioSegment
from app.core.config import settings
import logging

logger = logging.getLogger("studio_pro_suite")


class EffectsService:
    def __init__(self):
        os.makedirs(settings.TEMP_DIR, exist_ok=True)

    def apply_lowpass_filter(
        self, samples: np.ndarray, cutoff_hz: float, sr: int
    ) -> np.ndarray:
        nyq = sr / 2.0
        cutoff = min(0.99, max(0.01, cutoff_hz / nyq))
        b, a = signal.butter(2, cutoff, btype="lowpass")
        return signal.lfilter(b, a, samples, axis=0)

    def apply_highpass_filter(
        self, samples: np.ndarray, cutoff_hz: float, sr: int
    ) -> np.ndarray:
        nyq = sr / 2.0
        cutoff = min(0.99, max(0.01, cutoff_hz / nyq))
        b, a = signal.butter(2, cutoff, btype="highpass")
        return signal.lfilter(b, a, samples, axis=0)

    def apply_delay(
        self,
        samples: np.ndarray,
        delay_time_sec: float,
        feedback: float,
        wet: float,
        sr: int,
    ) -> np.ndarray:
        delay_samples = int(delay_time_sec * sr)
        if delay_samples <= 0:
            return samples

        out = samples.copy()
        # Ensure working on mono/stereo
        if len(samples.shape) == 2:
            channels = samples.shape[1]
            for c in range(channels):
                # Create a delay buffer
                buffer = np.zeros(len(samples) + delay_samples)
                buffer[: len(samples)] = samples[:, c]
                for i in range(delay_samples, len(buffer)):
                    # Feedback delay loop
                    buffer[i] += feedback * buffer[i - delay_samples]
                # Mix wet and dry
                out[:, c] = (1 - wet) * samples[:, c] + wet * buffer[: len(samples)]
        else:
            buffer = np.zeros(len(samples) + delay_samples)
            buffer[: len(samples)] = samples
            for i in range(delay_samples, len(buffer)):
                buffer[i] += feedback * buffer[i - delay_samples]
            out = (1 - wet) * samples + wet * buffer[: len(samples)]

        return out

    def apply_reverb(
        self, samples: np.ndarray, room_size: float, wet: float, sr: int
    ) -> np.ndarray:
        """
        Implements a simple parallel comb-filter based room reverb (Schroeder-style).
        """
        # Multi-delay times for parallel comb filters (in ms)
        delays = [29.7, 37.1, 41.3, 43.7]
        # Gain factors dependent on room size
        gains = [0.75 * room_size, 0.72 * room_size, 0.69 * room_size, 0.66 * room_size]

        # Calculate comb filters
        comb_outputs = []
        for delay_ms, g in zip(delays, gains):
            delay_samples = int((delay_ms / 1000.0) * sr)
            comb_out = np.zeros_like(samples)

            if len(samples.shape) == 2:
                for c in range(samples.shape[1]):
                    ch_samples = samples[:, c]
                    buffer = np.zeros(len(ch_samples) + delay_samples)
                    buffer[: len(ch_samples)] = ch_samples
                    for i in range(delay_samples, len(buffer)):
                        buffer[i] += g * buffer[i - delay_samples]
                    comb_out[:, c] = buffer[: len(ch_samples)]
            else:
                buffer = np.zeros(len(samples) + delay_samples)
                buffer[: len(samples)] = samples
                for i in range(delay_samples, len(buffer)):
                    buffer[i] += g * buffer[i - delay_samples]
                comb_out = buffer[: len(samples)]

            comb_outputs.append(comb_out)

        # Sum parallel comb outputs
        reverb_signal = sum(comb_outputs) / len(comb_outputs)

        # Mix wet/dry
        return (1.0 - wet) * samples + wet * reverb_signal

    def apply_chorus(
        self,
        samples: np.ndarray,
        depth_ms: float = 3.0,
        rate_hz: float = 1.5,
        sr: int = 44100,
    ) -> np.ndarray:
        """
        Implements a simple Chorus effect by modulating a delay line with an LFO.
        """
        out = np.zeros_like(samples)
        n_samples = len(samples)

        # Base delay of 20 ms
        base_delay_samples = int(0.02 * sr)
        max_mod_samples = int((depth_ms / 1000.0) * sr)

        # LFO: Modulating sine wave
        t = np.arange(n_samples) / sr
        lfo = np.sin(2 * np.pi * rate_hz * t)

        # Stereo delay offset for width
        stereo_offset = [0, int(0.005 * sr)]  # 5 ms difference

        if len(samples.shape) == 2:
            channels = samples.shape[1]
            for c in range(channels):
                offset = stereo_offset[c] if c < len(stereo_offset) else 0
                for i in range(n_samples):
                    # Modulated delay sample pointer
                    mod_delay = (
                        base_delay_samples + offset + int(max_mod_samples * lfo[i])
                    )
                    src_idx = i - mod_delay

                    if src_idx >= 0:
                        # Simple linear interpolation or nearest neighbor
                        out[i, c] = 0.5 * samples[i, c] + 0.5 * samples[src_idx, c]
                    else:
                        out[i, c] = samples[i, c]
        else:
            for i in range(n_samples):
                mod_delay = base_delay_samples + int(max_mod_samples * lfo[i])
                src_idx = i - mod_delay
                if src_idx >= 0:
                    out[i] = 0.5 * samples[i] + 0.5 * samples[src_idx]
                else:
                    out[i] = samples[i]

        return out

    def process_effects(self, input_path: str, effect_type: str, params: dict) -> str:
        """
        Applies requested effect to input audio and returns output filepath.
        """
        if not os.path.exists(input_path):
            raise FileNotFoundError(f"Input file not found: {input_path}")

        try:
            segment = AudioSegment.from_file(input_path)
            sr = segment.frame_rate
            channels = segment.channels

            # Load samples into float32 array (-1.0 to 1.0)
            raw_data = np.array(segment.get_array_of_samples(), dtype=np.float32)
            max_val = 2 ** (segment.sample_width * 8 - 1)
            raw_data = raw_data / max_val

            if channels == 2:
                raw_data = raw_data.reshape((-1, 2))

            # Apply selected effect
            effect_type = effect_type.lower()
            if effect_type == "lowpass":
                cutoff = float(params.get("cutoff", 1000.0))
                processed = self.apply_lowpass_filter(raw_data, cutoff, sr)
            elif effect_type == "highpass":
                cutoff = float(params.get("cutoff", 500.0))
                processed = self.apply_highpass_filter(raw_data, cutoff, sr)
            elif effect_type == "delay":
                delay_time = float(params.get("time", 0.3))
                feedback = float(params.get("feedback", 0.4))
                wet = float(params.get("wet", 0.4))
                processed = self.apply_delay(raw_data, delay_time, feedback, wet, sr)
            elif effect_type == "reverb":
                room_size = float(params.get("room_size", 0.5))
                wet = float(params.get("wet", 0.4))
                processed = self.apply_reverb(raw_data, room_size, wet, sr)
            elif effect_type == "chorus":
                depth = float(params.get("depth_ms", 3.0))
                rate = float(params.get("rate_hz", 1.5))
                processed = self.apply_chorus(raw_data, depth, rate, sr)
            else:
                logger.warning(f"Unknown effect type '{effect_type}', bypassing.")
                processed = raw_data

            # Normalize to prevent clipping
            peak = np.max(np.abs(processed))
            if peak > 0.99:
                processed = (processed / peak) * 0.99

            # Convert back to 16-bit PCM segment
            processed = np.clip(processed, -1.0, 1.0)
            int_samples = (processed * 32767).astype(np.int16)

            out_segment = AudioSegment(
                int_samples.tobytes(), frame_rate=sr, sample_width=2, channels=channels
            )

            filename = f"effect_{effect_type}_{uuid.uuid4().hex}.wav"
            output_path = os.path.join(settings.TEMP_DIR, filename)
            out_segment.export(output_path, format="wav")
            logger.info(f"Effect '{effect_type}' successfully applied to {output_path}")

            return output_path
        except Exception as e:
            logger.error(f"Error applying effect: {e}")
            raise
