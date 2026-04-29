from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # Server
    HOST: str = "0.0.0.0"
    PORT: int = 8000

    # Embedding model (your existing model, zero change)
    EMBEDDING_MODEL: str = "all-MiniLM-L6-v2"

    # Qdrant Cloud
    QDRANT_URL: str = "https://dd8cf751-1ca8-46fa-8c89-f1f6c6961784.eu-central-1-0.aws.cloud.qdrant.io"
    QDRANT_API_KEY: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIiwic3ViamVjdCI6ImFwaS1rZXk6M2EyMzM4ZDQtNzRjZC00ZGViLTgwMjYtODY2OTkwODg5YmY1In0.hDm23QaqaDxj1yWYhsaIa77V6wB6ij-LaMdM69QzWaM"
    QDRANT_COLLECTION: str = "legal_docs"

    # Groq
    GROQ_API_KEY: str = "gsk_6W6pXW6W6pXW6W6pXW6W6pXW6W6pXW6W6pXW6W6pXW6W6pXW6W6p" # Placeholder - update this!
    GROQ_MODEL: str = "llama-3.3-70b-versatile"

    # CORS — Node.js backend origin goes here
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:5173"]

    # RAG tuning
    TOP_K_RESULTS: int = 5
    SIMILARITY_THRESHOLD: float = 0.35

    class Config:
        env_file = "../.env"
        env_file_encoding = "utf-8"
        extra = "ignore"


settings = Settings()
