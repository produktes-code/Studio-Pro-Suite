import os, secrets
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field

class Settings(BaseSettings):
    ALLOWED_ORIGINS: str = Field(default="*")
    MAX_UPLOAD_SIZE: int = Field(default=2147483648)  # 2GB in bytes
    TEMP_DIR: str = Field(default="")
    SECRET_KEY: str = Field(default_factory=lambda: secrets.token_urlsafe(32))
    ENV: str = Field(default="development")

    model_config = SettingsConfigDict(
        env_file=os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))), ".env"),
        env_file_encoding="utf-8",
        extra="ignore"
    )

    def model_post_init(self, __context):
        if self.ENV.lower() == "production" and "SECRET_KEY" not in os.environ:
            raise ValueError("SECRET_KEY obligatoria en producción (openssl rand -hex 32)")

    def get_allowed_origins(self) -> List[str]:
        if not self.ALLOWED_ORIGINS:
            return ["*"]
        return [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",") if origin.strip()]

settings = Settings()

# Ensure TEMP_DIR exists
if not settings.TEMP_DIR:
    base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    settings.TEMP_DIR = os.path.join(base_dir, "temp_audio")

try:
    os.makedirs(settings.TEMP_DIR, exist_ok=True)
except Exception:
    settings.TEMP_DIR = os.path.join(os.getcwd(), "temp_audio")
    os.makedirs(settings.TEMP_DIR, exist_ok=True)
