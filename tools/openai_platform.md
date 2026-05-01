# OpenAI Platform

OpenAI's platform is the most product surface I deal with, partly because GPT was first and partly because OpenAI ships features faster than anyone — Realtime, Responses API, Agents SDK, Vector Stores, fine tuning, image gen, voice. The API is straightforward; the breadth is the real story.

## What it actually is

A developer platform exposing GPT‑5.5, GPT‑5.5‑mini, GPT‑5.5‑nano, the o reasoning series (o4 / o4‑pro), plus image (DALL·E and GPT Image), audio (Realtime API, TTS, Whisper), embeddings, vector stores, the Responses API, Agents SDK, and fine tuning. Console at [platform.openai.com](https://platform.openai.com).

## Setup

1. Sign up at [platform.openai.com](https://platform.openai.com).
2. Add a payment method. New accounts get small free credits.
3. Create an API key (Settings → API Keys).
4. Quick test:
   ```bash
   curl https://api.openai.com/v1/responses \
     -H "Authorization: Bearer $OPENAI_API_KEY" \
     -H "content-type: application/json" \
     -d '{"model": "gpt-5.5", "input": "hello"}'
   ```
5. SDKs: `pip install openai` / `npm i openai`.

## How I use it day to day

* **Responses API as the default.** Newer than Chat Completions; better for stateful conversations and tool use. Most new code uses it.
* **Agents SDK** when I want to build a tool using agent without writing my own loop. The Python SDK handles tool calls, handoffs between agents, guardrails.
* **Vector Stores** for RAG when I don't want to manage Pinecone or Qdrant. Upload files, attach to assistants, retrieval just works (within the cost model).
* **Realtime API** for voice agents. WebSocket; you stream audio in, audio out. The latency is the lowest of any major provider.
* **Image generation** via the Images endpoint (DALL·E 3) or chat (GPT Image). The chat path is now the higher quality one for most uses.
* **o4 reasoning** for hard problems. Slower and more expensive than GPT‑5.5, but worth it on deep reasoning tasks.

## Gotchas

* Pricing varies wildly by model. GPT‑5.5‑nano is cheap enough to log every prompt; o4‑pro is not. Pick deliberately.
* Rate limits scale with tier; new accounts start at Tier 1 (low limits). The progression to Tier 5 happens automatically with spend.
* Fine tuning is a real escape hatch but harder to maintain than prompt engineering. Try prompts first; fine tune only when you have data and a clear win.
* Vector Stores are convenient but not the cheapest at scale. For high volume, host your own (Qdrant, Weaviate, pgvector).
* Multiple APIs (Chat Completions, Responses, Assistants) coexist; Assistants is being deprecated in favor of Responses + Agents SDK. New code → Responses.

## Pointers

* Docs: [platform.openai.com/docs](https://platform.openai.com/docs)
* Pricing: [openai.com/pricing](https://openai.com/pricing)
* The OpenAI Cookbook ([cookbook.openai.com](https://cookbook.openai.com)) is the best free resource for production patterns.
* For unified gateways across providers: see [LiteLLM](https://github.com/BerriAI/litellm).
