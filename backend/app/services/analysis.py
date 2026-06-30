import os
import numpy as np
import librosa
import logging

logger = logging.getLogger("studio_pro_suite")

class AnalysisService:
    def __init__(self):
        pass

    def analyze_audio(self, filepath: str) -> dict:
        if not os.path.exists(filepath):
            raise FileNotFoundError(f"Audio file not found for analysis: {filepath}")

        try:
            logger.info(f"Analyzing audio file: {filepath}")
            # Load with 22050 Hz sampling rate for performance
            y, sr = librosa.load(filepath, sr=22050)
            
            if len(y) == 0:
                raise ValueError("Loaded audio file is empty")

            # 1. BPM / Tempo
            onset_env = librosa.onset.onset_strength(y=y, sr=sr)
            tempo, _ = librosa.beat.beat_track(onset_envelope=onset_env, sr=sr)
            bpm = float(tempo[0]) if isinstance(tempo, np.ndarray) else float(tempo)
            if np.isnan(bpm) or bpm <= 0:
                bpm = 120.0  # Fallback

            # 2. Key Detection (Chroma STFT Peak)
            chromagram = librosa.feature.chroma_stft(y=y, sr=sr)
            mean_chroma = np.mean(chromagram, axis=1)
            notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
            key_idx = int(np.argmax(mean_chroma))
            key = notes[key_idx]

            # 3. Energy curve over time (RMS)
            rms = librosa.feature.rms(y=y)[0]
            # Downsample RMS array to ~100 points for frontend rendering
            max_points = 100
            if len(rms) > max_points:
                indices = np.linspace(0, len(rms) - 1, max_points, dtype=int)
                energy_curve = rms[indices].tolist()
            else:
                energy_curve = rms.tolist()

            # Average energy
            avg_energy = float(np.mean(rms)) * 1000

            result = {
                "bpm": round(bpm, 1),
                "key": key,
                "energy": round(avg_energy, 2),
                "energy_curve": [round(val * 1000, 2) for val in energy_curve]
            }
            logger.info(f"Analysis successful for {filepath}: BPM={result['bpm']}, Key={result['key']}")
            return result
        except Exception as e:
            logger.error(f"Error analyzing audio: {e}")
            raise
