import os
import uuid
import numpy as np
import scipy.signal as signal
from pydub import AudioSegment
from app.core.config import settings
import logging

logger = logging.getLogger("studio_pro_suite")


class MasteringService:
    def __init__(self):
        os.makedirs(settings.TEMP_DIR, exist_ok=True)

    def apply_eq(
        self, samples: np.ndarray, sr: int, low_gain_db: float, high_gain_db: float
    ) -> np.ndarray:
        """
        Applies a simple 2-band EQ (Low shelf and High shelf) using scipy IIR filters.
        """
        out = samples.copy()

        # Apply low shelf filter (cutoff at 200 Hz)
        if low_gain_db != 0:
            nyq = sr / 2.0
            cutoff = 200.0 / nyq
            gain_linear = 10 ** (low_gain_db / 20.0)
            if low_gain_db > 0:
                b, a = signal.butter(1, cutoff, btype="lowpass")
                out += (gain_linear - 1.0) * signal.lfilter(b, a, samples, axis=0)
            else:
                # Cut low frequencies
                b, a = signal.butter(1, cutoff, btype="highpass")
                out = (1.0 - gain_linear) * signal.lfilter(
                    b, a, samples, axis=0
                ) + gain_linear * samples

        # Apply high shelf filter (cutoff at 5000 Hz)
        if high_gain_db != 0:
            nyq = sr / 2.0
            cutoff = 5000.0 / nyq
            gain_linear = 10 ** (high_gain_db / 20.0)
            if high_gain_db > 0:
                b, a = signal.butter(1, cutoff, btype="highpass")
                out += (gain_linear - 1.0) * signal.lfilter(b, a, samples, axis=0)
            else:
                b, a = signal.butter(1, cutoff, btype="lowpass")
                out = (1.0 - gain_linear) * signal.lfilter(
                    b, a, samples, axis=0
                ) + gain_linear * samples

        return out

    def apply_compressor(
        self,
        samples: np.ndarray,
        threshold_db: float = -12.0,
        ratio: float = 2.0,
        attack_ms: float = 10.0,
        release_ms: float = 100.0,
        sr: int = 44100,
    ) -> np.ndarray:
        """
        A simple dynamic compressor.
        """
        threshold = 10 ** (threshold_db / 20.0)
        out = samples.copy()

        # Simplify compressor: scale down signals exceeding threshold
        # We can implement a basic envelope follower
        if len(samples.shape) == 2:  # Stereo
            env = np.max(np.abs(samples), axis=1)
        else:
            env = np.abs(samples)

        # Simple attack/release envelope smoothing
        alpha_attack = np.exp(-1.0 / (attack_ms * sr / 1000.0))
        alpha_release = np.exp(-1.0 / (release_ms * sr / 1000.0))

        smoothed_env = np.zeros_like(env)
        curr = 0.0
        for i in range(len(env)):
            val = env[i]
            if val > curr:
                curr = alpha_attack * curr + (1.0 - alpha_attack) * val
            else:
                curr = alpha_release * curr + (1.0 - alpha_release) * val
            smoothed_env[i] = curr

        # Compute gain reduction factor
        gains = np.ones_like(smoothed_env)
        mask = smoothed_env > threshold
        if np.any(mask):
            # Gain reduction formula
            gains[mask] = threshold + (smoothed_env[mask] - threshold) / ratio
            gains[mask] /= smoothed_env[mask]

        if len(samples.shape) == 2:
            out[:, 0] *= gains
            out[:, 1] *= gains
        else:
            out *= gains

        # Apply basic makeup gain
        makeup_gain_linear = 1.2
        out *= makeup_gain_linear

        return out

    def process_mastering(
        self,
        input_path: str,
        low_eq_db: float = 2.0,
        high_eq_db: float = 1.5,
        thresh_db: float = -12.0,
        ratio: float = 2.0,
    ) -> str:
        """
        Loads an audio file, runs the mastering chain, normalizes loudness, and writes to WAV.
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

            # 1. Apply EQ
            processed = self.apply_eq(raw_data, sr, low_eq_db, high_eq_db)

            # 2. Apply Compression
            processed = self.apply_compressor(
                processed, threshold_db=thresh_db, ratio=ratio, sr=sr
            )

            # 3. Apply Peak Limiting (prevent clipping at -0.2 dBFS)
            limit = 10 ** (-0.2 / 20.0)  # ~0.977
            peak = np.max(np.abs(processed))
            if peak > limit:
                processed = (processed / peak) * limit

            # 4. Convert back to integer samples
            processed = np.clip(processed, -1.0, 1.0)
            int_samples = (processed * 32767).astype(np.int16)

            # Recreate AudioSegment
            mastered_segment = AudioSegment(
                int_samples.tobytes(),
                frame_rate=sr,
                sample_width=2,  # 16-bit
                channels=channels,
            )

            # 5. Final loudness normalization using pydub
            # Standard peak normalization to -1.0 dBFS
            mastered_segment = mastered_segment.normalize() - 1.0

            filename = f"mastered_{uuid.uuid4().hex}.wav"
            output_path = os.path.join(settings.TEMP_DIR, filename)
            mastered_segment.export(output_path, format="wav")
            logger.info(f"Mastering complete. Exported to {output_path}")

            return output_path
        except Exception as e:
            logger.error(f"Error in mastering process: {e}")
            raise
