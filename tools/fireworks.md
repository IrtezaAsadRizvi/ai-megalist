# Fireworks AI: fast hosted inference for open-weight models

Fireworks is a model-API platform in the same lane as [Together](together.md), [Groq](groq.md), and [Replicate](replicate.md) - hosted inference for open-weight models with an OpenAI-compatible API. They run a fast inference stack (FireAttention) and host most major open-weight LLMs plus image and audio models. The pricing is competitive with Together, the speeds are competitive with Groq on certain models, and the SDK is straightforward.

## What it actually is

A managed inference platform with OpenAI compatible endpoints. Hosts Llama 3.x, Qwen 2.5/3, DeepSeek, Mistral, and others. Also offers image gen (FLUX, SDXL, Stable Audio), function calling, structured outputs, and on demand fine tuning. Pay per token; dedicated deployments available for predictable capacity.

## Setup

1. Sign up at [fireworks.ai](https://fireworks.ai). Free credits on signup.
2. API key from [fireworks.ai/api-keys](https://fireworks.ai/api-keys).
3. Quick test:
   ```bash
   curl https://api.fireworks.ai/inference/v1/chat/completions \
     -H "Authorization: Bearer $FIREWORKS_API_KEY" \
     -H "content-type: application/json" \
     -d '{"model": "accounts/fireworks/models/llama-v3p3-70b-instruct", "messages": [{"role":"user","content":"hello"}]}'
   ```
4. (Python SDK) `pip install fireworks-ai`. OpenAI client also works directly.
5. Image generation via the same API key on different endpoints.

## How I use it day to day

* **Honest:** I've used Fireworks for prototyping; production decisions usually come down to Fireworks vs Together based on specific model availability and pricing.
* **Fast inference on bigger open models.** Llama 70B at competitive tokens/sec; well suited to RAG and agent workloads where latency matters.
* **Function calling with structured outputs.** Fireworks supports both natively; I use it for tool using agents on open models.
* **Image generation.** FLUX and SDXL endpoints. Comparable to Replicate but often faster and cheaper at sustained volume.
* **Fine tuning.** LoRA fine tunes; serverless deployment of the fine tuned models. Faster iteration cycle than self hosted.
* **As a fallback in multi provider setups.** I configure apps with Fireworks as one option; LiteLLM routes between it and others by latency / cost.

## Gotchas

* Model availability shifts. New models land fast; some get deprecated. Check current catalog.
* Free credit on signup is generous; production volumes hit paid tiers quickly.
* Some models are "preview" or have rate limits before they're GA. Read the docs before depending on a specific endpoint.
* For maximum speed on Llama, [groq.md](groq.md) is often faster (different hardware).
* For broader catalog including non LLM: [replicate.md](replicate.md).

## Alternatives

* If you want maximum tokens-per-second on Llama specifically, [Groq](groq.md) is faster (LPU hardware, narrower model list).
* For a similar-shaped platform with often-competitive pricing and fine-tuning, [Together](together.md) is the head-to-head comparison.
* If you need a broad catalog of non-LLM models (vision, audio, niche fine-tunes), [Replicate](replicate.md) covers more ground.
* For OpenAI-compatible inference on a unified gateway across multiple providers, [LiteLLM](litellm.md) sits on top of all of them.

## FAQ

### Is Fireworks free?

There's free credits on signup, generous enough to prototype but burns fast in production. After that it's pay-per-token; dedicated deployments available for predictable capacity. Verify current rates - they shift quarterly.

### Fireworks vs Together - which is better?

Close call. I treat them as interchangeable for most workloads and pick by current pricing and which model I need that week. Fireworks tends to be slightly faster on their FireAttention stack; Together has a slightly broader fine-tuning story.

### Fireworks vs Groq - which is faster?

[Groq](groq.md) wins on raw tokens/sec for Llama-class models (LPU hardware), often by a meaningful margin. Fireworks wins on broader model catalog and fine-tuning support. If latency is the only thing you care about, try Groq first.

### Does Fireworks support fine-tuning?

Yes - LoRA fine-tunes with serverless deployment of the tuned model. The iteration cycle is faster than self-hosting, and you can serve the fine-tune behind the same API key.

### Is Fireworks OpenAI-compatible?

Yes - the chat completions endpoint accepts the OpenAI client directly. Swap the base URL and API key and most existing code works without changes.

## Pointers

* [fireworks.ai](https://fireworks.ai)
* Docs: [docs.fireworks.ai](https://docs.fireworks.ai)
* Compare: [together.md](together.md) (similar shape, often competitive pricing), [groq.md](groq.md) (faster, narrower).
* For unified API gateway: [LiteLLM](https://github.com/BerriAI/litellm).
