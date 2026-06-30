import os
import json
import uuid
from typing import List, Dict, Any
from app.core.config import settings
import logging

logger = logging.getLogger("studio_pro_suite")

class LibraryService:
    def __init__(self):
        self.db_path = os.path.join(settings.TEMP_DIR, "library.json")
        self._init_db()

    def _init_db(self):
        if not os.path.exists(self.db_path):
            self._save_db({"tracks": [], "playlists": {}})

    def _load_db(self) -> Dict[str, Any]:
        try:
            with open(self.db_path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            logger.error(f"Error loading library JSON: {e}")
            return {"tracks": [], "playlists": {}}

    def _save_db(self, db_data: Dict[str, Any]):
        try:
            with open(self.db_path, "w", encoding="utf-8") as f:
                json.dump(db_data, f, indent=4, ensure_ascii=False)
        except Exception as e:
            logger.error(f"Error saving library JSON: {e}")

    def add_track(self, filepath: str, filename: str, tags: List[str] = None, analysis: dict = None) -> dict:
        db = self._load_db()
        
        # Check if already exists by filepath
        for track in db["tracks"]:
            if track["filepath"] == filepath:
                return track

        track_id = uuid.uuid4().hex
        new_track = {
            "id": track_id,
            "filename": filename,
            "filepath": filepath,
            "tags": tags or [],
            "bpm": analysis.get("bpm") if analysis else None,
            "key": analysis.get("key") if analysis else None,
            "energy": analysis.get("energy") if analysis else None,
            "energy_curve": analysis.get("energy_curve") if analysis else []
        }
        db["tracks"].append(new_track)
        self._save_db(db)
        logger.info(f"Added track to library: {filename} (ID: {track_id})")
        return new_track

    def get_tracks(self) -> List[dict]:
        db = self._load_db()
        return db["tracks"]

    def search_tracks(self, query: str = "", tag: str = "") -> List[dict]:
        db = self._load_db()
        results = db["tracks"]

        if query:
            q = query.lower()
            results = [t for t in results if q in t["filename"].lower()]

        if tag:
            t_lower = tag.lower()
            results = [t for t in results if any(t_lower == tg.lower() for tg in t["tags"])]

        return results

    def add_tag(self, track_id: str, tag: str) -> bool:
        db = self._load_db()
        for track in db["tracks"]:
            if track["id"] == track_id:
                if tag not in track["tags"]:
                    track["tags"].append(tag)
                    self._save_db(db)
                    return True
        return False

    def remove_tag(self, track_id: str, tag: str) -> bool:
        db = self._load_db()
        for track in db["tracks"]:
            if track["id"] == track_id:
                if tag in track["tags"]:
                    track["tags"].remove(tag)
                    self._save_db(db)
                    return True
        return False

    def create_playlist(self, name: str) -> bool:
        db = self._load_db()
        if name not in db["playlists"]:
            db["playlists"][name] = []
            self._save_db(db)
            return True
        return False

    def add_to_playlist(self, playlist_name: str, track_id: str) -> bool:
        db = self._load_db()
        if playlist_name in db["playlists"]:
            # Check if track exists
            track_ids = [t["id"] for t in db["tracks"]]
            if track_id in track_ids and track_id not in db["playlists"][playlist_name]:
                db["playlists"][playlist_name].append(track_id)
                self._save_db(db)
                return True
        return False

    def get_playlists(self) -> Dict[str, List[str]]:
        db = self._load_db()
        return db["playlists"]
