import json
import hashlib
from groq import Groq
from .retrieval_from_qdrant import LegalRetriever
from app.core.config import settings

_cache = {}

def get_cached(query: str):
    key = hashlib.md5(query.lower().strip().encode()).hexdigest()
    return _cache.get(key)

def set_cache(query: str, response: dict):
    key = hashlib.md5(query.lower().strip().encode()).hexdigest()
    _cache[key] = response

# ─────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────
GROQ_API_KEY = settings.GROQ_API_KEY
GROQ_MODEL   = "llama-3.3-70b-versatile"

class LegalQAEngine:
    def __init__(self, retriever=None):
        self.retriever = retriever or LegalRetriever()
        self.client = Groq(api_key=GROQ_API_KEY)
        
    def ask(self, query: str):
        cached = get_cached(query)
        if cached:
            print(f"\n[AI] Returning cached response for query: {query}...")
            return cached

        print(f"\n[AI] Processing query: {query}...")
        
        # 1. Retrieve context
        results = self.retriever.search(query, score_threshold=0.45)
        
        if not results:
            response = {
                "analysis": "I'm sorry, I couldn't find any relevant legal precedents in my database for this specific query.",
                "citations": [],
                "domain": "unknown",
                "confidence_score": 0.0
            }
            set_cache(query, response)
            return response
            
        # 2. Construct Prompt
        context_blocks = []
        for i, res in enumerate(results):
            # Trim chunk text to 3 sentences
            sentences = [s.strip() for s in res['chunk_text'].split('.') if s.strip()]
            trimmed_chunk = '. '.join(sentences[:3]) + ('.' if sentences else '')
            block = (
                f"DOCUMENT {i+1}\n"
                f"SOURCE: {res['law_name']} ({res['domain']})\n"
                f"LEGAL ISSUE: {res['legal_issue']}\n"
                f"RELEVANT ACTS/SECTIONS: {res['acts']} | {res['sections']}\n"
                f"EXCERPT: {trimmed_chunk}\n"
            )
            context_blocks.append(block)
            
        context_text = "\n".join(context_blocks)
        
        system_msg = "Indian legal assistant. JSON output only: {domain, analysis, cited_sections, cited_cases, cited_acts, confidence}. Analysis max 3 sentences. Include disclaimer in analysis."
        
        user_msg = f"USER QUERY: {query}\n\nLEGAL CONTEXT EXCERPTS:\n{context_text}"
        
        # 3. Generate Answer
        try:
            completion = self.client.chat.completions.create(
                model=GROQ_MODEL,
                messages=[
                    {"role": "system", "content": system_msg},
                    {"role": "user", "content": user_msg}
                ],
                temperature=0.1,
                max_tokens=350
            )
            answer = completion.choices[0].message.content
            
            try:
                parsed_answer = json.loads(answer)
            except json.JSONDecodeError:
                parsed_answer = {"analysis": answer}

            # Calculate confidence score
            top_results = results[:3]
            if top_results:
                conf_score = sum(r.get('score', 0) for r in top_results) / len(top_results)
            else:
                conf_score = 0.0
                
            parsed_answer["confidence_score"] = conf_score
            
            response = {
                **parsed_answer,
                "citations": results
            }
            
            set_cache(query, response)
            return response
        except Exception as e:
            return {
                "analysis": f"Error generating response: {e}",
                "citations": [],
                "domain": "error",
                "confidence_score": 0.0
            }

if __name__ == "__main__":
    engine = LegalQAEngine()
    query = "What are the rights of manual scavengers under the Indian Constitution?"
    answer = engine.ask(query)
    print("\n" + "="*50)
    print("LEGAL ANALYSIS")
    print("="*50)
    print(answer)
    print("="*50)
