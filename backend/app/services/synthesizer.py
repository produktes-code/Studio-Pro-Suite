import os
import uuid
import numpy as np
import scipy.signal as signal
import soundfile as sf
from app.core.config import settings
import logging

logger = logging.getLogger("studio_pro_suite")

class SynthesizerService:
    def __init__(self):
        os.makedirs(settings.TEMP_DIR, exist_ok=True)

    def generate_tone(self, osc_type: str = "sine", frequency: float = 440.0, duration: float = 1.0,
                      vibrato_rate: float = 0.0, vibrato_depth: float = 0.0,
                      tremolo_rate: float = 0.0, tremolo_depth: float = 0.0,
                      sample_rate: int = 44100) -> str:
        """
        Generates a synthetic waveform tone with LFO vibrato (frequency modulation) and tremolo (amplitude modulation).
        """
        n_samples = int(duration * sample_rate)
        t = np.linspace(0, duration, n_samples, endpoint=False)
        dt = 1.0 / sample_rate

        # 1. Vibrato (Frequency modulation LFO)
        if vibrato_depth > 0.0 and vibrato_rate > 0.0:
            # Frequency modulates over time
            freq_lfo = np.sin(2 * np.pi * vibrato_rate * t)
            instant_freqs = frequency + (vibrato_depth * freq_lfo)
            # Phase is the integral of instant frequency over time
            phase = 2 * np.pi * np.cumsum(instant_freqs) * dt
        else:
            phase = 2 * np.pi * frequency * t

        # 2. Waveform generation based on phase
        osc_type = osc_type.lower()
        if osc_type == "sine":
            wave = np.sin(phase)
        elif osc_type == "square":
            wave = signal.square(phase)
        elif osc_type == "sawtooth" or osc_type == "saw":
            wave = signal.sawtooth(phase)
        elif osc_type == "triangle":
            wave = signal.sawtooth(phase, width=0.5)
        else:
            logger.warning(f"Unknown oscillator type '{osc_type}', defaulting to sine.")
            wave = np.sin(phase)

        # 3. Tremolo (Amplitude modulation LFO)
        if tremolo_depth > 0.0 and tremolo_rate > 0.0:
            # Amplitude varies around 1.0
            amp_lfo = 1.0 + (tremolo_depth * np.sin(2 * np.pi * tremolo_rate * t))
            wave *= amp_lfo

        # 4. Apply a quick fade-in/fade-out to prevent clicks
        fade_samples = int(0.01 * sample_rate)  # 10ms fade
        if len(wave) > 2 * fade_samples:
            fade_in = np.linspace(0.0, 1.0, fade_samples)
            fade_out = np.linspace(1.0, 0.0, fade_samples)
            wave[:fade_samples] *= fade_in
            wave[-fade_samples:] *= fade_out

        # Normalize amplitude to -1.0dBFS (0.89 amplitude)
        peak = np.max(np.abs(wave))
        if peak > 0.0:
            wave = (wave / peak) * 0.89

        # Export to WAV
        filename = f"synth_{osc_type}_{uuid.uuid4().hex}.wav"
        output_path = os.path.join(settings.TEMP_DIR, filename)
        sf.write(output_path, wave, sample_rate)
        logger.info(f"Synthesizer exported {osc_type} tone to {output_path}")

        return output_path

    def generate_chord(self, frequencies: list[float], osc_type: str = "sine", duration: float = 1.0, sample_rate: int = 44100) -> str:
        """
        E14: Generates a chord from a list of frequencies. Limits polyphony to 16 notes to prevent CPU exhaustion.
        """
        if len(frequencies) > 16:
            logger.warning(f"Polyphony limit exceeded. Truncating {len(frequencies)} notes to 16.")
            frequencies = frequencies[:16]
            
        if not frequencies:
            raise ValueError("No frequencies provided for chord generation.")
            
        n_samples = int(duration * sample_rate)
        t = np.linspace(0, duration, n_samples, endpoint=False)
        
        mixed_wave = np.zeros(n_samples)
        
        for freq in frequencies:
            phase = 2 * np.pi * freq * t
            if osc_type == "sine":
                wave = np.sin(phase)
            elif osc_type == "square":
                wave = signal.square(phase)
            elif osc_type in ["sawtooth", "saw"]:
                wave = signal.sawtooth(phase)
            elif osc_type == "triangle":
                wave = signal.sawtooth(phase, width=0.5)
            else:
                wave = np.sin(phase)
            mixed_wave += wave
            
        # Apply fade-in/fade-out
        fade_samples = int(0.01 * sample_rate)
        if len(mixed_wave) > 2 * fade_samples:
            fade_in = np.linspace(0.0, 1.0, fade_samples)
            fade_out = np.linspace(1.0, 0.0, fade_samples)
            mixed_wave[:fade_samples] *= fade_in
            mixed_wave[-fade_samples:] *= fade_out
            
        # Normalize
        peak = np.max(np.abs(mixed_wave))
        if peak > 0.0:
            mixed_wave = (mixed_wave / peak) * 0.89
            
        filename = f"chord_{osc_type}_{uuid.uuid4().hex}.wav"
        output_path = os.path.join(settings.TEMP_DIR, filename)
        sf.write(output_path, mixed_wave, sample_rate)
        logger.info(f"Synthesizer exported chord to {output_path}")
        
        return output_path
