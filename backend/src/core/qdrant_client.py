from qdrant_client import QdrantClient
from qdrant_client.models import Filter, FieldCondition, MatchValue
from core.config import settings
from core.embedder import embedder
import logging

logger = logging.getLogger(__name__)

# Shared client — one connection pool for the whole app
_client: QdrantClient | None = None


def get_qdrant_client() -> QdrantClient:
    global _client
    if _client is None:
        _client = QdrantClient(
            url=settings.QDRANT_URL,
            api_key=settings.QDRANT_API_KEY,
        )
        logger.info(f"Connected to Qdrant: {settings.QDRANT_URL}")
    return _client


def retrieve_chunks(
    query: str,
    top_k: int = None,
    doc_type_filter: str | None = None,
) -> list[dict]:
    """
    Embed the query, search Qdrant, return ranked chunks.

    Args:
        query:           The user's natural language question.
        top_k:           How many chunks to return (defaults to settings.TOP_K_RESULTS).
        doc_type_filter: Optional Qdrant payload filter — e.g. "statute", "case_law".

    Returns:
        List of dicts with keys: id, score, text, metadata.
    """
    k = top_k or settings.TOP_K_RESULTS
    client = get_qdrant_client()

    vector = embedder.embed(query)

    # Build optional filter
    query_filter = None
    if doc_type_filter:
        query_filter = Filter(
            must=[FieldCondition(key="doc_type", match=MatchValue(value=doc_type_filter))]
        )

    hits = client.search(
        collection_name=settings.QDRANT_COLLECTION,
        query_vector=vector,
        limit=k,
        score_threshold=settings.SIMILARITY_THRESHOLD,
        query_filter=query_filter,
        with_payload=True,
    )

    results = []
    for hit in hits:
        results.append(
            {
                "id": str(hit.id),
                "score": round(hit.score, 4),
                "text": hit.payload.get("text", ""),
                "metadata": {k: v for k, v in hit.payload.items() if k != "text"},
            }
        )

    logger.info(f"Retrieved {len(results)} chunks for query: '{query[:60]}...'")
    return results
