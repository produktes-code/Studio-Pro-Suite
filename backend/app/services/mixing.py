import os
import uuid
from typing import List, Dict, Any
from pydub import AudioSegment
from app.core.config import settings
import logging

logger = logging.getLogger("studio_pro_suite")

class MixingService:
    def __init__(self):
        os.makedirs(settings.TEMP_DIR, exist_ok=True)

    def mix_tracks(self, tracks: List[Dict[str, Any]]) -> str:
        """
        Mixes multiple audio tracks.
        Each track in the list is a dict:
        {
            "filepath": str,
            "volume_db": float,  # e.g. -3.0 or +2.5
            "pan": float        # -1.0 (left) to 1.0 (right)
        }
        """
        if not tracks:
            raise ValueError("No tracks provided for mixing")

        loaded_tracks = []
        max_duration_ms = 0

        # Load each track, apply volume and pan
        for t_info in tracks:
            filepath = t_info["filepath"]
            volume_db = t_info.get("volume_db", 0.0)
            pan = t_info.get("pan", 0.0)

            if not os.path.exists(filepath):
                logger.error(f"Track file not found: {filepath}")
                continue

            try:
                segment = AudioSegment.from_file(filepath)
                # Apply volume change
                if volume_db != 0.0:
                    segment = segment + volume_db
                # Apply panning
                if pan != 0.0:
                    segment = segment.pan(max(-1.0, min(1.0, pan)))

                loaded_tracks.append(segment)
                if len(segment) > max_duration_ms:
                    max_duration_ms = len(segment)
            except Exception as e:
                logger.error(f"Error loading audio file {filepath}: {e}")
                raise

        if not loaded_tracks:
            raise ValueError("No valid tracks were loaded for mixing")

        # Create silent base segment with the maximum duration
        mixed = AudioSegment.silent(duration=max_duration_ms, frame_rate=44100)

        # Overlay all tracks
        for segment in loaded_tracks:
            mixed = mixed.overlay(segment, position=0)

        # Export result
        filename = f"mixed_{uuid.uuid4().hex}.wav"
        output_path = os.path.join(settings.TEMP_DIR, filename)
        mixed.export(output_path, format="wav")
        logger.info(f"Mixed track exported to {output_path}")

        return output_path
