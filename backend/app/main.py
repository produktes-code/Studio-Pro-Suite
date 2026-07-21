import os
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List, Dict, Optional, Any

# Slowapi rate limiting
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

# Import config and security
from app.core.config import settings
from app.core.security import validate_uploaded_file

# Import audio services
from app.services.recording import RecordingService
from app.services.mixing import MixingService
from app.services.mastering import MasteringService
from app.services.effects import EffectsService
from app.services.sampler import SamplerService
from app.services.synthesizer import SynthesizerService
from app.services.analysis import AnalysisService
from app.services.library import LibraryService

import logging

# Setup Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("studio_pro_suite")

# Initialize Rate Limiter
limiter = Limiter(key_func=get_remote_address)

# Initialize FastAPI
app = FastAPI(
    title="Studio Pro Audio Engine API",
    description="Backend API for Studio Pro Suite 3.0 audio workstation services",
    version="1.0.0",
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Setup CORS
origins = settings.get_allowed_origins()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Temp Audio Directory to serve files statically
os.makedirs(settings.TEMP_DIR, exist_ok=True)
app.mount("/static", StaticFiles(directory=settings.TEMP_DIR), name="static")

# Instantiate Services
recording_service = RecordingService()
mixing_service = MixingService()
mastering_service = MasteringService()
effects_service = EffectsService()
sampler_service = SamplerService()
synthesizer_service = SynthesizerService()
analysis_service = AnalysisService()
library_service = LibraryService()


# --- Pydantic Request Models ---
class TrackMixItem(BaseModel):
    filepath: str
    volume_db: float = 0.0
    pan: float = 0.0


class MixRequest(BaseModel):
    tracks: List[TrackMixItem]


class MasteringRequest(BaseModel):
    filepath: str
    low_eq_db: float = 2.0
    high_eq_db: float = 1.5
    threshold_db: float = -12.0
    ratio: float = 2.0


class EffectRequest(BaseModel):
    filepath: str
    effect_type: str  # 'lowpass', 'highpass', 'delay', 'reverb', 'chorus'
    params: Dict[str, Any] = {}


class SamplerRequest(BaseModel):
    sample_path: str
    midi_note: int
    base_note: int = 60
    attack_sec: float = 0.05
    decay_sec: float = 0.1
    sustain_level: float = 0.7
    release_sec: float = 0.2
    gate_time_sec: float = 1.0


class SynthRequest(BaseModel):
    osc_type: str = "sine"
    frequency: float = 440.0
    duration: float = 1.0
    vibrato_rate: float = 0.0
    vibrato_depth: float = 0.0
    tremolo_rate: float = 0.0
    tremolo_depth: float = 0.0


class TagRequest(BaseModel):
    track_id: str
    tag: str


class PlaylistRequest(BaseModel):
    name: str


class PlaylistAddRequest(BaseModel):
    playlist_name: str
    track_id: str


# Helper to convert absolute file path to static URL path
def get_file_url(filepath: str) -> str:
    filename = os.path.basename(filepath)
    return f"http://localhost:8001/static/{filename}"


# --- API Routes ---


@app.get("/health/ready")
def health_ready():
    """
    Ready check to verify disk access, permissions, and dependencies.
    """
    try:
        # Check if TEMP_DIR is writeable
        test_file = os.path.join(settings.TEMP_DIR, ".write_test")
        with open(test_file, "w") as f:
            f.write("OK")
        os.remove(test_file)

        # Check if sounddevice can list devices without crashing
        import sounddevice as sd

        sd.query_devices()

        return {
            "status": "ready",
            "environment": settings.ENV,
            "temp_dir": settings.TEMP_DIR,
            "portaudio": "sounddevice ok",
        }
    except Exception as e:
        logger.error(f"Health check failed: {e}")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Service unavailable: {str(e)}",
        )


@app.post("/api/audio/upload")
@limiter.limit("10/minute")
async def upload_audio(request: Request, file: UploadFile = File(...)):
    """
    Upload an audio track. Checks limits, extension, magic bytes, and auto-analyzes.
    """
    # 1. Validate file (Size, Extension, MIME)
    sanitized_name = await validate_uploaded_file(file)

    # 2. Write file
    filepath = os.path.join(settings.TEMP_DIR, sanitized_name)
    try:
        with open(filepath, "wb") as buffer:
            # Read in chunks
            while chunk := await file.read(1024 * 1024):
                buffer.write(chunk)
    except Exception as e:
        logger.error(f"Failed to write uploaded file: {e}")
        raise HTTPException(status_code=500, detail="Error writing file to disk.")

    # 3. Analyze Audio
    try:
        analysis = analysis_service.analyze_audio(filepath)
    except Exception as e:
        logger.error(f"Failed to analyze track: {e}")
        analysis = {"bpm": 120.0, "key": "C", "energy": 50.0, "energy_curve": []}

    # 4. Save to library
    track = library_service.add_track(filepath, sanitized_name, ["uploaded"], analysis)

    # Add file URL to output
    track["url"] = get_file_url(filepath)
    return track


@app.post("/api/audio/record")
@limiter.limit("5/minute")
def record_audio(request: Request, duration: float = Form(...)):
    """
    Starts mic recording for dynamic duration.
    """
    if duration <= 0 or duration > 60.0:
        raise HTTPException(
            status_code=400, detail="Duration must be between 1 and 60 seconds."
        )

    try:
        filepath = recording_service.record_microphone(duration)
        filename = os.path.basename(filepath)

        # Analyze
        analysis = analysis_service.analyze_audio(filepath)
        # Save to library
        track = library_service.add_track(filepath, filename, ["recorded"], analysis)
        track["url"] = get_file_url(filepath)
        return track
    except Exception as e:
        logger.error(f"Failed to record audio: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/audio/mix")
@limiter.limit("5/minute")
def mix_audio(request: Request, req: MixRequest):
    """
    Mixes multiple tracks into a single WAV.
    """
    try:
        # Mix tracks
        tracks_input = [item.dict() for item in req.tracks]
        filepath = mixing_service.mix_tracks(tracks_input)
        filename = os.path.basename(filepath)

        # Analyze
        analysis = analysis_service.analyze_audio(filepath)
        # Add to library
        track = library_service.add_track(filepath, filename, ["mix"], analysis)
        track["url"] = get_file_url(filepath)
        return track
    except Exception as e:
        logger.error(f"Error mixing audio: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/audio/master")
@limiter.limit("5/minute")
def master_audio(request: Request, req: MasteringRequest):
    """
    Applies parametric EQ, compression, limiter, and peak normalization.
    """
    try:
        filepath = mastering_service.process_mastering(
            req.filepath,
            low_eq_db=req.low_eq_db,
            high_eq_db=req.high_eq_db,
            thresh_db=req.threshold_db,
            ratio=req.ratio,
        )
        filename = os.path.basename(filepath)

        # Analyze
        analysis = analysis_service.analyze_audio(filepath)
        # Add to library
        track = library_service.add_track(filepath, filename, ["mastered"], analysis)
        track["url"] = get_file_url(filepath)
        return track
    except Exception as e:
        logger.error(f"Error mastering audio: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/audio/effects")
@limiter.limit("5/minute")
def apply_effects(request: Request, req: EffectRequest):
    """
    Applies audio effects (delay, reverb, filters, chorus).
    """
    try:
        filepath = effects_service.process_effects(
            req.filepath, req.effect_type, req.params
        )
        filename = os.path.basename(filepath)

        # Analyze
        analysis = analysis_service.analyze_audio(filepath)
        # Add to library
        track = library_service.add_track(
            filepath, filename, [req.effect_type], analysis
        )
        track["url"] = get_file_url(filepath)
        return track
    except Exception as e:
        logger.error(f"Error applying effects: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/audio/sampler")
def sample_trigger(req: SamplerRequest):
    """
    Trigger sample notes with custom pitch shifting and ADSR.
    """
    try:
        filepath = sampler_service.trigger_sample(
            req.sample_path,
            midi_note=req.midi_note,
            base_note=req.base_note,
            attack_sec=req.attack_sec,
            decay_sec=req.decay_sec,
            sustain_level=req.sustain_level,
            release_sec=req.release_sec,
            gate_time_sec=req.gate_time_sec,
        )
        filename = os.path.basename(filepath)

        # Analyze
        analysis = analysis_service.analyze_audio(filepath)
        # Save to library
        track = library_service.add_track(filepath, filename, ["sampler"], analysis)
        track["url"] = get_file_url(filepath)
        return track
    except Exception as e:
        logger.error(f"Error in sampler: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/audio/synthesize")
def synthesize_tone(req: SynthRequest):
    """
    Synthesize waveforms with LFO vibrato/tremolo parameters.
    """
    try:
        filepath = synthesizer_service.generate_tone(
            osc_type=req.osc_type,
            frequency=req.frequency,
            duration=req.duration,
            vibrato_rate=req.vibrato_rate,
            vibrato_depth=req.vibrato_depth,
            tremolo_rate=req.tremolo_rate,
            tremolo_depth=req.tremolo_depth,
        )
        filename = os.path.basename(filepath)

        # Analyze
        analysis = analysis_service.analyze_audio(filepath)
        # Save to library
        track = library_service.add_track(filepath, filename, ["synth"], analysis)
        track["url"] = get_file_url(filepath)
        return track
    except Exception as e:
        logger.error(f"Error in synthesizer: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/audio/library")
def get_library(query: Optional[str] = None, tag: Optional[str] = None):
    """
    Retrieves all tracks, option to search or filter.
    """
    tracks = library_service.search_tracks(query=query, tag=tag)
    # Append dynamic URL to each track
    for t in tracks:
        t["url"] = get_file_url(t["filepath"])
    return tracks


@app.post("/api/audio/library/tag")
def add_tag(req: TagRequest):
    success = library_service.add_tag(req.track_id, req.tag)
    if not success:
        raise HTTPException(status_code=404, detail="Track not found")
    return {"status": "success"}


@app.post("/api/audio/library/playlist")
def create_playlist(req: PlaylistRequest):
    success = library_service.create_playlist(req.name)
    if not success:
        raise HTTPException(status_code=400, detail="Playlist already exists")
    return {"status": "success"}


@app.post("/api/audio/library/playlist/add")
def add_to_playlist(req: PlaylistAddRequest):
    success = library_service.add_to_playlist(req.playlist_name, req.track_id)
    if not success:
        raise HTTPException(status_code=400, detail="Failed to add track to playlist")
    return {"status": "success"}


@app.get("/api/audio/library/playlists")
def get_playlists():
    return library_service.get_playlists()
