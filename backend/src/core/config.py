from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000

    # Embedding model (your existing model, zero change)
    EMBEDDING_MODEL: str = "all-MiniLM-L6-v2"

    # Qdrant Cloud
    QDRANT_URL: str = "https://your-cluster.qdrant.io"
    QDRANT_API_KEY: str = ""
    QDRANT_COLLECTION: str = "legal_docs"

    # Groq
    GROQ_API_KEY: str = ""
    GROQ_MODEL: str = "llama3-8b-8192"

    # CORS — Node.js backend origin goes here
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000"]

    # RAG tuning
    TOP_K_RESULTS: int = 5
    SIMILARITY_THRESHOLD: float = 0.6

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
