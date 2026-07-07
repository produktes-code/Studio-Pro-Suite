import os
import uuid
import numpy as np
from scipy.interpolate import interp1d
from pydub import AudioSegment
import soundfile as sf
from app.core.config import settings
import logging

logger = logging.getLogger("studio_pro_suite")

class SamplerService:
    def __init__(self):
        os.makedirs(settings.TEMP_DIR, exist_ok=True)

    def trigger_sample(self, sample_path: str, midi_note: int, base_note: int = 60,
                       attack_sec: float = 0.05, decay_sec: float = 0.1,
                       sustain_level: float = 0.7, release_sec: float = 0.2,
                       gate_time_sec: float = 1.0) -> str:
        """
        Loads a sample, pitches it to match midi_note, applies ADSR envelope, and exports as WAV.
        """
        if not os.path.exists(sample_path):
            raise FileNotFoundError(f"Sample file not found: {sample_path}")

        try:
            # Load audio using soundfile to get float numpy array directly
            data, sr = sf.read(sample_path)
            
            # Convert to mono if it's stereo for sampler simplicity
            if len(data.shape) == 2:
                data = np.mean(data, axis=1)

            # 1. Pitch shifting using scipy.signal.resample (Fourier method with implicit antialiasing filter) - E15
            pitch_factor = 2.0 ** ((midi_note - base_note) / 12.0)
            orig_len = len(data)
            pitched_len = int(orig_len / pitch_factor)
            
            if pitched_len <= 10:
                raise ValueError("Pitch shift resulted in too short of a sample")

            import scipy.signal
            pitched_data = scipy.signal.resample(data, pitched_len)

            # 2. ADSR Envelope generation
            total_duration_sec = gate_time_sec + release_sec
            envelope_len = int(total_duration_sec * sr)
            
            envelope = np.zeros(envelope_len)
            attack_samples = int(attack_sec * sr)
            decay_samples = int(decay_sec * sr)
            release_samples = int(release_sec * sr)
            gate_samples = int(gate_time_sec * sr)

            for i in range(envelope_len):
                if i < gate_samples:
                    # Attack & Decay & Sustain phase
                    if i < attack_samples and attack_samples > 0:
                        envelope[i] = i / attack_samples
                    elif i < (attack_samples + decay_samples) and decay_samples > 0:
                        t = (i - attack_samples) / decay_samples
                        envelope[i] = 1.0 - (1.0 - sustain_level) * t
                    else:
                        envelope[i] = sustain_level
                else:
                    # Release phase
                    if release_samples > 0:
                        t = (i - gate_samples) / release_samples
                        envelope[i] = max(0.0, sustain_level * (1.0 - t))
                    else:
                        envelope[i] = 0.0

            # 3. Apply envelope (truncate or pad the pitched data)
            output_len = min(len(pitched_data), envelope_len)
            final_audio = pitched_data[:output_len] * envelope[:output_len]

            # Normalize to avoid clipping
            peak = np.max(np.abs(final_audio))
            if peak > 0.0:
                final_audio = (final_audio / peak) * 0.95

            # Save file
            filename = f"sample_note_{midi_note}_{uuid.uuid4().hex}.wav"
            output_path = os.path.join(settings.TEMP_DIR, filename)
            sf.write(output_path, final_audio, sr)
            logger.info(f"Triggered sample midi_note={midi_note} exported to {output_path}")

            return output_path
        except Exception as e:
            logger.error(f"Error triggering sampler: {e}")
            raise
