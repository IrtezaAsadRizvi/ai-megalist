# OpenAI Platform: GPT, Realtime, Agents SDK in one developer surface

OpenAI Platform is the developer API alternative to [Anthropic API](anthropic_api.md), [Google AI Studio](google_ai_studio.md), and [Mistral La Plateforme](mistral_la_plateforme.md), distinguished by feature breadth - Realtime, Agents SDK, Vector Stores, image, voice. OpenAI's platform is the most product surface I deal with, partly because GPT was first and partly because OpenAI ships features faster than anyone - Realtime, Responses API, Agents SDK, Vector Stores, fine tuning, image gen, voice. The API is straightforward; the breadth is the real story.

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

## Alternatives

* If you want frontier reasoning with prompt caching as a first-class feature, [Anthropic API](anthropic_api.md) is the alternative.
* If you want long context, multimodal, and Google integration, [Google AI Studio](google_ai_studio.md) is the API path.
* If you want EU residency, [Mistral La Plateforme](mistral_la_plateforme.md) is the obvious pick.
* If you want a unified gateway across all of these, [LiteLLM](litellm.md) abstracts the differences.

## FAQ

### Is OpenAI Platform free?

New accounts get a small free credit allowance. Beyond that, pricing is per-million tokens and varies wildly by model - GPT-5.5-nano is cheap enough to log everything; o4-pro is not. Pick deliberately per task.

### OpenAI vs Anthropic API - which should I use?

OpenAI when you want the broadest feature surface (Realtime, Agents SDK, Vector Stores, image, voice). [Anthropic API](anthropic_api.md) when you want frontier reasoning, 1M context on Opus, and prompt caching that materially changes economics on repeated context. I use both.

### Should I use Chat Completions or the Responses API?

New code should use Responses - it's better for stateful conversations and tool use. Chat Completions still works but isn't where the new features ship. Assistants API is being deprecated in favor of Responses + Agents SDK.

### What's the rate limit on a new account?

Tier 1 starts low (a few thousand tokens / minute on the bigger models). Progression to Tier 5 happens automatically based on cumulative spend - the higher tiers unlock fast for serious projects.

## Pointers

* Docs: [platform.openai.com/docs](https://platform.openai.com/docs)
* Pricing: [openai.com/pricing](https://openai.com/pricing)
* The OpenAI Cookbook ([cookbook.openai.com](https://cookbook.openai.com)) is the best free resource for production patterns.
* For unified gateways across providers: see [LiteLLM](https://github.com/BerriAI/litellm).
