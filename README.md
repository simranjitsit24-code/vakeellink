# VakeelLink

VakeelLink is a comprehensive legal assistant platform designed to streamline legal research and document processing using advanced RAG (Retrieval-Augmented Generation) techniques.

## Project Structure

This is a monorepo containing the following core components:

- **[`backend/`](./backend/)**: FastAPI-based backend service providing the API for legal retrieval, health checks, and core business logic.
- **[`frontend/`](./frontend/)**: React + Vite frontend application for a modern, responsive user interface.
- **[`data_pipeline/`](./data_pipeline/)**: Scripts and data for scraping legal content, generating embeddings, and managing the vector database (Qdrant).

## Getting Started

### Prerequisites
- Python 3.10+
- Node.js & npm
- Docker (for Qdrant)

### Setup

#### Backend
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env  # Update with your credentials
python src/main.py
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Data Pipeline
```bash
cd data_pipeline
pip install -r ../backend/requirements.txt # Uses same core dependencies
python app.py
```

## Features
- **Legal Document Retrieval**: Semantic search across legal corpuses.
- **RAG-powered Insights**: Intelligent answers to legal queries.
- **Automated Scraping**: Pipeline for ingesting legal data from various sources.
