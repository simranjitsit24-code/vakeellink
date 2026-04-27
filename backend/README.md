# Legal RAG — FastAPI Service

Python microservice wrapping your existing RAG pipeline.
Exposes clean HTTP endpoints for the Node.js backend to consume.

## Project Structure

```
legal-rag-api/
├── main.py               # App entry point, lifespan (model loading)
├── requirements.txt
├── railway.toml          # One-click Railway deploy config
├── .env.example          # Copy → .env and fill in keys
│
├── core/
│   ├── config.py         # All env vars via pydantic-settings
│   ├── embedder.py       # Singleton SentenceTransformer
│   ├── qdrant_client.py  # Qdrant Cloud retrieval
│   ├── groq_llm.py       # Groq answer generation
│   └── schemas.py        # Pydantic request/response models
│
└── routers/
    ├── retrieval.py      # POST /api/v1/query  ← main endpoint
    └── health.py         # GET  /health        ← Railway health check
```

## Local Development

```bash
# 1. Clone and enter directory
cd legal-rag-api

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Configure environment
cp .env.example .env
# Edit .env with your Qdrant and Groq keys

# 5. Run
uvicorn main:app --reload --port 8000
```

Visit http://localhost:8000/docs for interactive Swagger UI.

## API Endpoints

### `POST /api/v1/query` — Full RAG pipeline
```json
// Request
{
  "query": "What are the requirements for a valid contract in California?",
  "top_k": 5,
  "doc_type": "statute",      // optional filter
  "include_chunks": false     // set true to see raw retrieved chunks
}

// Response
{
  "answer": "Under California Civil Code...",
  "model": "llama3-8b-8192",
  "usage": { "prompt_tokens": 820, "completion_tokens": 210, "total_tokens": 1030 },
  "chunks_used": 4,
  "chunks": null   // populated only when include_chunks=true
}
```

### `POST /api/v1/retrieve` — Retrieval only (no LLM)
Same request shape. Returns raw chunks with scores.
Useful for debugging or when Node.js wants to handle generation.

### `POST /api/v1/embed` — Embed a text string
```json
// Request
{ "text": "contract formation requirements" }

// Response
{ "embedding": [0.023, -0.145, ...], "dimensions": 384 }
```

### `GET /health` — Health check
```json
{ "status": "ok", "model_loaded": true, "qdrant_connected": true, "version": "1.0.0" }
```

## How Node.js Calls This

```javascript
// In your Express backend
const RAG_URL = process.env.PYTHON_SERVICE_URL;  // e.g. https://legal-rag.railway.app

async function askLegalQuestion(query, userId) {
  const res = await fetch(`${RAG_URL}/api/v1/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, top_k: 5 }),
  });

  if (!res.ok) throw new Error(`RAG service error: ${res.status}`);
  return res.json();  // { answer, model, usage, chunks_used }
}
```

## Deploy to Railway

```bash
# One-time setup
railway login
railway init

# Deploy
railway up

# Set environment variables in Railway dashboard
# or via CLI:
railway variables set GROQ_API_KEY=xxx QDRANT_API_KEY=xxx QDRANT_URL=xxx
```

Railway reads `railway.toml` automatically — no extra config needed.

## Performance Notes

- **Cold start**: ~20s (model download on first deploy, cached after)
- **Warm requests**: ~200-800ms (Qdrant search + Groq generation)
- **Embedding**: ~10ms (in-memory, no network)
- The singleton pattern in `embedder.py` is critical — never re-instantiate the model per request
