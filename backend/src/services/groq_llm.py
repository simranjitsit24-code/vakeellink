from groq import Groq
from core.config import settings
import logging

logger = logging.getLogger(__name__)

_client: Groq | None = None


def get_groq_client() -> Groq:
    global _client
    if _client is None:
        _client = Groq(api_key=settings.GROQ_API_KEY)
    return _client


SYSTEM_PROMPT = """You are a precise legal research assistant. 
Answer questions using ONLY the provided context chunks. 
If the context is insufficient, say so clearly — do not hallucinate legal facts.
Always cite which chunk(s) informed your answer (by chunk index).
Be concise and structured."""


def generate_answer(query: str, chunks: list[dict]) -> dict:
    """
    Send retrieved chunks + user query to Groq, return structured answer.

    Returns:
        { answer: str, model: str, usage: dict }
    """
    if not chunks:
        return {
            "answer": "No relevant legal documents found for this query.",
            "model": settings.GROQ_MODEL,
            "usage": {},
        }

    # Format chunks for the prompt
    context_block = "\n\n".join(
        f"[Chunk {i+1}] (score={c['score']}, source={c['metadata'].get('source', 'unknown')})\n{c['text']}"
        for i, c in enumerate(chunks)
    )

    user_message = f"""Context:\n{context_block}\n\n---\nQuestion: {query}"""

    client = get_groq_client()
    response = client.chat.completions.create(
        model=settings.GROQ_MODEL,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_message},
        ],
        temperature=0.1,   # Low temp = consistent legal answers
        max_tokens=1024,
    )

    answer = response.choices[0].message.content
    usage = {
        "prompt_tokens": response.usage.prompt_tokens,
        "completion_tokens": response.usage.completion_tokens,
        "total_tokens": response.usage.total_tokens,
    }

    logger.info(f"Groq answered — tokens used: {usage['total_tokens']}")
    return {"answer": answer, "model": settings.GROQ_MODEL, "usage": usage}
