# OpenRouter: one API key for every model

OpenRouter is the tool you install when you realize you have eight provider keys in your `.env` and you'd like to stop. One API key, one OpenAI-compatible endpoint, and you can route requests across Anthropic, OpenAI, Google, Meta, Mistral, DeepSeek, xAI, Together, Fireworks, Groq, Cerebras, and a long tail of OSS models. The pricing is essentially pass-through plus a small margin, and the model picker is the de-facto best place to compare prices.

## What it actually is

A model-aggregator gateway. You hit one endpoint (`https://openrouter.ai/api/v1/chat/completions`, OpenAI-compatible); OpenRouter routes to the cheapest available provider for the model you asked for. Supports streaming, function calling, vision, and tool use across most providers. Has a generous free tier on certain free-model variants. Built and maintained by Alex Atallah's team; growing fast as the default routing layer for indie devs and agent frameworks.

## Setup

1. Sign up at openrouter.ai. Grab an API key.
2. Top up credits (or use free-tier models).
3. Swap your existing OpenAI SDK base URL: `base_url="https://openrouter.ai/api/v1"`, `api_key="<your key>"`.
4. Pick a model: `model="anthropic/claude-opus-4-7"`, `model="openai/gpt-5.5"`, `model="deepseek/deepseek-r2"`, `model="meta-llama/llama-4-405b"`, etc.
5. Done. The same code works across providers.

## How I use it day to day

* **Cheap-model experiments** without signing up for ten dashboards.
* **Cost comparison** - the OpenRouter model page lists per-million-token pricing across every provider for the same model.
* **Fallbacks** - configure a primary and a backup model, OpenRouter handles failover.
* **Provider arbitrage** - the same OSS model is sometimes 4x cheaper on Together vs Fireworks vs Groq; OpenRouter picks the cheapest by default.
* **Agent frameworks** - [LangChain](langchain.md), [LlamaIndex](llamaindex.md), [LiteLLM](litellm.md) all support OpenRouter out of the box, so swapping models is one config line.

## Gotchas

* Latency is one extra hop. Usually invisible; occasionally noticeable on long streaming responses.
* Free-tier models rotate. Don't build production on a "free" SKU.
* Some provider-specific features (Anthropic's prompt caching, OpenAI's batch API) don't always pass through - check the docs per model.
* Rate limits are per-account; high-throughput shops should still go direct.

## Alternatives

* [LiteLLM](litellm.md) - OSS proxy you self-host that does the same routing logic with your own provider keys.
* Direct provider keys ([Anthropic API](anthropic_api.md), [OpenAI Platform](openai_platform.md), [DeepSeek API](deepseek.md), [Groq](groq.md), etc.) - cheaper at scale, more setup.
* [Together AI](together.md) / [Fireworks AI](fireworks.md) - aggregator-ish for OSS models specifically.
* [Replicate](replicate.md) - aggregator for any model, but priced per-second of GPU, not per-token.

## FAQ

### Is OpenRouter free?

The platform is free; you pay per-request to providers (with a small margin). Certain free-model variants are usable at zero cost with rate limits.

### Why use OpenRouter instead of direct keys?

One key, OpenAI-compatible SDK, automatic provider failover, easy cost comparison. The tradeoff is a tiny margin and one extra network hop.

### Does it support function calling / tools?

Yes, where the underlying provider does. Anthropic, OpenAI, Google, Mistral, and most OSS endpoints support tool calls through OpenRouter.

### Does it support prompt caching?

Anthropic prompt caching works on OpenRouter; OpenAI's variant has worked in patches. Confirm on the model page before relying on it for production.

### Can I use it from Python / TypeScript?

Yes - it's OpenAI-API-compatible, so the OpenAI SDK in any language Just Works with the base URL swap.

## Pointers

* Site: [openrouter.ai](https://openrouter.ai)
* Models + pricing: [openrouter.ai/models](https://openrouter.ai/models)
* Docs: [openrouter.ai/docs](https://openrouter.ai/docs)
* If you'd rather self-host the routing layer, see [litellm.md](litellm.md).
