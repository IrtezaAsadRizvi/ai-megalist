# LiteLLM

LiteLLM is the unified gateway across LLM providers. The premise is simple — every provider has a slightly different API; LiteLLM gives you one API (OpenAI compatible) over all of them. For multi provider apps, fallback strategies, cost tracking, and quick provider switching, LiteLLM is the substrate.

## What it actually is

An open source Python library and a proxy server (also OSS, with optional paid features). Two ways to use it:
* **As a Python library.** `from litellm import completion`; pass any provider's model string; LiteLLM handles the API specifics.
* **As a proxy server.** Run LiteLLM as an HTTP service; point your apps at it; configure routing, fallbacks, rate limits, cost tracking, and auth keys centrally.

Supports 100+ providers (OpenAI, Anthropic, Gemini, Bedrock, Vertex, Azure, Together, Fireworks, Groq, Replicate, plus self hosted).

## Setup

### As a library
1. `pip install litellm`.
2. Provider keys via env vars (per provider).
3. Quick test:
   ```python
   from litellm import completion
   response = completion(
     model="claude-sonnet-4-6",
     messages=[{"role": "user", "content": "hello"}]
   )
   print(response.choices[0].message.content)
   ```

### As a proxy
1. `pip install 'litellm[proxy]'`.
2. Create `config.yaml` with model list, providers, routing.
3. `litellm --config config.yaml`. Default port 4000.
4. Apps use `OPENAI_API_BASE=http://localhost:4000` and any model name from the config.

## How I use it day to day

* **Multi provider apps.** Run the same code; switch providers via the model string. A/B different providers; fall back when one is down.
* **Cost tracking across providers.** The proxy logs every call with token counts and dollars per provider.
* **Rate limit and fallback rules.** Route 80% to a cheap provider; 20% to a frontier one; auto fall back if either is down. Configured declaratively.
* **API key management.** The proxy holds provider keys; team members use proxy keys without ever seeing the underlying provider keys. Useful for orgs with many devs.
* **Custom routing.** Route image gen requests to Replicate, chat to Anthropic, embeddings to OpenAI. One unified endpoint.

## Gotchas

* Some advanced provider features (e.g. Anthropic's prompt caching, OpenAI's Realtime API) need provider specific calls; LiteLLM exposes most of them, but not always immediately.
* The proxy is one more service to operate. For solo dev work, the library is enough; proxy shines at team / enterprise scale.
* Cost tracking accuracy depends on token counting; LiteLLM has provider tokenisers, but edge cases exist.
* Fallback logic requires careful thought. "Fall back to cheaper model" can silently degrade your product if not monitored.
* For OpenAI compatible providers (most), LiteLLM is a thin layer; for very different APIs, the abstraction sometimes leaks.

## Pointers

* [litellm.ai](https://www.litellm.ai)
* Docs: [docs.litellm.ai](https://docs.litellm.ai)
* Repo: [github.com/BerriAI/litellm](https://github.com/BerriAI/litellm)
* For broader app frameworks that include provider abstraction: [langchain.md](langchain.md), [vercel_ai_sdk.md](vercel_ai_sdk.md).
* For observability of LLM calls: LangSmith, Langfuse, Helicone.
