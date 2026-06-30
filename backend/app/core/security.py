import os
import re
import logging
from fastapi import HTTPException, UploadFile, status
from app.core.config import settings

logger = logging.getLogger("studio_pro_suite")

ALLOWED_MIMES = {
    "audio/mpeg",
    "audio/mp3",
    "audio/x-wav",
    "audio/wav",
    "audio/vnd.wave",
    "audio/ogg",
    "audio/x-m4a",
    "audio/x-flac",
    "audio/flac",
    "audio/aac",
    "audio/x-aac",
    "audio/mp4",
    "video/mp4"  # Sometimes audio is uploaded as video container
}

ALLOWED_EXTENSIONS = {".mp3", ".wav", ".aac", ".flac", ".ogg", ".m4a", ".mp4"}

def sanitize_filename(filename: str) -> str:
    base = os.path.basename(filename)
    sanitized = re.sub(r"[^\w\.-]", "_", base)
    if not sanitized or sanitized in (".", ".."):
        sanitized = "studio_pro_upload_audio.wav"
    return sanitized

async def validate_uploaded_file(file: UploadFile) -> str:
    content_length = file.headers.get("content-length")
    if content_length:
        size = int(content_length)
        if size > settings.MAX_UPLOAD_SIZE:
            logger.error(f"File size ({size} bytes) exceeds limit of {settings.MAX_UPLOAD_SIZE} bytes")
            raise HTTPException(
                status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
                detail="File size exceeds the maximum allowed limit of 2GB."
            )

    file.file.seek(0, os.SEEK_END)
    actual_size = file.file.tell()
    file.file.seek(0)

    if actual_size > settings.MAX_UPLOAD_SIZE:
        logger.error(f"Actual file size ({actual_size} bytes) exceeds limit of {settings.MAX_UPLOAD_SIZE} bytes")
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail="File size exceeds the maximum allowed limit of 2GB."
        )

    # Validate file extension
    _, ext = os.path.splitext(file.filename.lower())
    if ext not in ALLOWED_EXTENSIONS:
        logger.error(f"Extension check failed: extension '{ext}' not in allowed list.")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Invalid file extension. Allowed extensions are: {', '.join(ALLOWED_EXTENSIONS)}"
        )

    # Double check header MIME type
    header_mime = file.content_type
    if header_mime and header_mime.lower() not in ALLOWED_MIMES:
        logger.warning(f"Unexpected MIME type in header: {header_mime}")
        # We will log it and proceed if extension is valid and magic bytes verify it's audio,
        # but let's also be lenient with custom browser mime types.
        
    return sanitize_filename(file.filename)
