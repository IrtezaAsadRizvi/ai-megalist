# Groq

Groq is the inference provider that makes you reconsider your assumptions about latency. They run models on custom silicon (LPUs — Language Processing Units) and the result is throughput numbers that look like typos: hundreds of tokens per second on Llama 3.3 70B. For interactive applications where time to first token matters, Groq changes the design space.

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

## Pointers

* [console.groq.com](https://console.groq.com)
* Docs: [console.groq.com/docs](https://console.groq.com/docs)
* For comparable fast inference on a different stack: [Cerebras](https://cerebras.ai) (wafer scale) or Together AI (cheaper, slower).
* For complete provider abstraction: [LiteLLM](https://github.com/BerriAI/litellm) lets you swap Groq for OpenAI without touching code.
