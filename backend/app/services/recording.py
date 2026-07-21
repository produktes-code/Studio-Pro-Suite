import os
import uuid
import numpy as np
import sounddevice as sd
import soundfile as sf
import logging
from app.core.config import settings

logger = logging.getLogger("studio_pro_suite")


class RecordingService:
    def __init__(self):
        os.makedirs(settings.TEMP_DIR, exist_ok=True)

    def record_microphone(
        self, duration_seconds: float, sample_rate: int = 44100
    ) -> str:
        filename = f"recording_{uuid.uuid4().hex}.wav"
        filepath = os.path.join(settings.TEMP_DIR, filename)

        # Check if an input device exists
        has_input = False
        try:
            devices = sd.query_devices()
            # If default input device exists
            default_input = sd.default.device[0]
            if default_input is not None and default_input >= 0:
                has_input = True
            else:
                has_input = any(d["max_input_channels"] > 0 for d in devices)
        except Exception as e:
            logger.warning(
                f"Error querying audio devices: {e}. Falling back to simulation."
            )

        if has_input:
            try:
                logger.info(
                    f"Recording real microphone for {duration_seconds}s at {sample_rate}Hz..."
                )
                recording = sd.rec(
                    int(duration_seconds * sample_rate),
                    samplerate=sample_rate,
                    channels=1,
                    dtype="float32",
                )
                sd.wait()  # Wait until recording is finished
                sf.write(filepath, recording, sample_rate)
                logger.info(f"Successfully recorded to {filepath}")
                return filepath
            except Exception as e:
                logger.error(
                    f"Failed to record with sounddevice: {e}. Falling back to simulation."
                )

        # Fallback simulation (e.g. in headless environments, CI/CD, or servers without microphone)
        logger.info(
            "Simulating microphone recording (generating a 440Hz sine wave + ambient noise)..."
        )
        t = np.linspace(
            0, duration_seconds, int(sample_rate * duration_seconds), endpoint=False
        )
        # Create a mix of a clean sine wave and slight white noise
        sine_wave = 0.5 * np.sin(2 * np.pi * 440.0 * t)
        noise = 0.05 * np.random.normal(0, 1, len(t))
        simulated_audio = sine_wave + noise
        # Normalize to prevent clipping
        simulated_audio = simulated_audio / np.max(np.abs(simulated_audio))

        sf.write(filepath, simulated_audio, sample_rate)
        logger.info(f"Successfully simulated recording to {filepath}")
        return filepath
