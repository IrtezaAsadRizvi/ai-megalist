# Groq: ultra-fast LPU inference for open-weight models

Groq is the model-API platform competing with [Together](together.md), [Fireworks](fireworks.md), and [Cerebras](cerebras.md) - hosted inference for open-weight models, with one specific angle: speed. They run models on custom silicon (LPUs - Language Processing Units) and the result is throughput numbers that look like typos: hundreds of tokens per second on Llama 3.3 70B. For interactive applications where time to first token matters, Groq changes the design space.

## What it actually is

A hosted inference platform offering OpenAI compatible endpoints for Llama, DeepSeek, Qwen, Mixtral, and a rotating selection of open weight models. The hardware is custom (the LPU), which is why the speed is so different from GPU based providers. There's a free tier with low rate limits and paid tiers (DevTier, Production) for real workloads.

## Setup

1. Sign up at [console.groq.com](https://console.groq.com).
2. Free tier: 30 requests/min on most models, more than enough to evaluate.
3. Get an API key.
4. Quick test (OpenAI compatible):
   ```bash
   curl https://api.groq.com/openai/v1/chat/completions \
     -H "Authorization: Bearer $GROQ_API_KEY" \
     -H "content-type: application/json" \
     -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"hello"}]}'
   ```
5. Or point any OpenAI SDK at `https://api.groq.com/openai/v1`.

## How I use it day to day

* **Latency sensitive features.** When I need <500ms time to first token on a chat product, Groq is the call. Other providers can match it; few do consistently.
* **Voice agents.** Pair Groq for the LLM + ElevenLabs for TTS + Cartesia or Deepgram for STT. End to end latency drops below 1 second.
* **Bulk processing of cheap models.** Llama 3.3 8B at hundreds of tokens/sec is good enough for many summarisation and classification jobs. Cost per task is tiny.
* **As a fallback.** I configure my apps with multiple providers; Groq goes in the rotation for fast retry on slow primary.
* **Speculative decoding** options for even faster output on certain models.

## Gotchas

* Open weight models only. No GPT, no Claude, no Gemini on Groq.
* The model lineup rotates; check [console.groq.com/docs/models](https://console.groq.com/docs/models) for current availability. Models do get deprecated.
* Capacity is not infinite. During peak demand the production tier still has queues. Plan retries.
* The "blink and you missed it" speed is real but useful only if the rest of your stack matches. A 5 ms model with a 500 ms HTTP layer is still a 500 ms feature.
* Pricing per token is competitive but depends on model. Check before committing.

## Alternatives

* For comparable raw speed on different hardware (wafer-scale), [Cerebras Inference](cerebras.md) is the head-to-head competitor.
* If you want a broader model catalog with fine-tuning support, [Fireworks](fireworks.md) or [Together](together.md) are the picks (slower but more flexible).
* For non-LLM models (vision, audio, niche) on a hosted API, [Replicate](replicate.md) covers more ground.
* To swap providers without code changes, put [LiteLLM](litellm.md) in front of all of them.

## FAQ

### Is Groq free?

Yes - free tier with 30 requests/min on most models, more than enough to evaluate. Paid tiers (DevTier, Production) for real workloads. Per-token pricing is competitive but varies by model; check the current rates before committing.

### Groq vs OpenAI - same thing?

No, completely different (and often confused). OpenAI makes GPT models. Groq is a hardware company that hosts open-weight models (Llama, DeepSeek, Qwen) on custom LPUs. There is no GPT, Claude, or Gemini on Groq.

### How fast is Groq actually?

Hundreds of tokens per second on Llama 3.3 70B - real numbers, not marketing. Time-to-first-token under 500ms is typical, which is what makes Groq the call for voice agents and latency-sensitive UIs. The catch: if your HTTP layer takes 500ms, the speed advantage evaporates.

### Does Groq support fine-tuning?

Limited. Groq's specialty is fast inference of stock open-weight models; if you need fine-tuning or LoRAs, [Fireworks](fireworks.md) or [Together](together.md) are better-shaped.

### Is Groq OpenAI-compatible?

Yes - point any OpenAI SDK at `https://api.groq.com/openai/v1` with your Groq key and most existing code works. Just swap the model name to a Groq-hosted one.

## Pointers

* [console.groq.com](https://console.groq.com)
* Docs: [console.groq.com/docs](https://console.groq.com/docs)
* For comparable fast inference on a different stack: [Cerebras](https://cerebras.ai) (wafer scale) or Together AI (cheaper, slower).
* For complete provider abstraction: [LiteLLM](https://github.com/BerriAI/litellm) lets you swap Groq for OpenAI without touching code.
