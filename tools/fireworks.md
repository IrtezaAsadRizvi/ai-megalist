# Fireworks AI

Fireworks is the inference platform that prioritises speed without making you give up the model choice. They run a fast inference stack (FireAttention) and host most major open weight LLMs plus image and audio models. The pricing is competitive with Together, the speeds are competitive with Groq on certain models, and the SDK is straightforward.

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

## Pointers

* [fireworks.ai](https://fireworks.ai)
* Docs: [docs.fireworks.ai](https://docs.fireworks.ai)
* Compare: [together.md](together.md) (similar shape, often competitive pricing), [groq.md](groq.md) (faster, narrower).
* For unified API gateway: [LiteLLM](https://github.com/BerriAI/litellm).
