# Cerebras Inference: wafer-scale API for ultra-fast token generation

Cerebras sits in the model APIs cluster alongside [Groq](groq.md), [Together AI](together.md), and [Fireworks AI](fireworks.md) - the fast-inference category for open-weight models. Cerebras Inference is the API that makes Groq look slow. Running on Cerebras's wafer scale chips (genuinely a single silicon wafer, not multiple chips), token generation hits 1500+ tokens/second on Llama 70B, 2500+ on Llama 8B. For interactive AI products where time to first token is the constraint, Cerebras is the speed king.

## What it actually is

A managed inference API on Cerebras's CS‑3 systems. Hosts open weight models (Llama 3.x, 4.x, Qwen, etc.) with extreme throughput. OpenAI compatible endpoints. Free tier with daily quotas; paid tiers for production volume.

## Setup

1. Sign up at [cerebras.ai/inference](https://cerebras.ai/inference). Free tier on signup.
2. Get an API key from the dashboard.
3. Quick test:
   ```bash
   curl https://api.cerebras.ai/v1/chat/completions \
     -H "Authorization: Bearer $CEREBRAS_API_KEY" \
     -H "content-type: application/json" \
     -d '{"model":"llama3.3-70b","messages":[{"role":"user","content":"hello"}]}'
   ```
4. (Python) `pip install cerebras_cloud_sdk`. OpenAI client also works directly with the right base URL.

## How I use it day to day

* **Honest:** I've experimented with Cerebras for latency tests; not in production use.
* **When latency dominates UX.** Voice agents, real time tutoring, anything where the user is waiting. Cerebras's tokens/second turns the model from "type then wait" to "type then read in real time."
* **Compared to Groq.** Cerebras is faster on the same model class; Groq has broader model availability. Both crush hyperscaler latencies.
* **Bursty workloads.** Need to process 1000 prompts in under a minute? Cerebras's throughput per request makes the math feasible without parallel orchestration.
* **For demos.** Live on stage demos with AI; Cerebras's responses feel instant. Memorable.

## Gotchas

* Model selection is narrower than Together / Fireworks. Cerebras runs select open models, not everything on Hugging Face.
* Capacity is real but not infinite. During peak demand, even Cerebras has queues.
* Free tier has daily caps; production volumes hit paid tiers.
* For non interactive workloads (batch processing, async jobs), the speed advantage is wasted; cheaper providers may be better fit.
* Cerebras's hardware is unusual; ecosystem of niche libraries is smaller than NVIDIA's. Most users hit the API and don't care.

## Alternatives

* If you want a similar fast inference API with broader model availability, [Groq](groq.md) is the closest comparator.
* If you want the largest catalog of open models even at slower speeds, [Together AI](together.md) and [Fireworks AI](fireworks.md) are the picks.
* If you want frontier closed models (Claude, GPT) and don't need open-weight inference, [Anthropic API](anthropic_api.md) and [OpenAI Platform](openai_platform.md) are the right shops.
* If you want a unified gateway across Cerebras + others, [LiteLLM](litellm.md) sits in front of all of them.

## FAQ

### Is Cerebras free?

Free tier with daily quotas, enough to evaluate. Production volume runs on paid tiers.

### Cerebras vs Groq - which is faster?

Cerebras is faster on the same model class (1500+ tok/s vs Groq's typical 500-800 tok/s on Llama 70B). [Groq](groq.md) has broader model availability and a larger ecosystem. Both crush hyperscaler latencies; pick by model selection.

### What models does Cerebras host?

Select Llama 3.x and 4.x variants, Qwen, and a curated set. Narrower than [Together AI](together.md) or [Fireworks AI](fireworks.md) - they pick models that benefit most from wafer-scale.

### Is Cerebras OpenAI-compatible?

Yes - the OpenAI client works with the right base URL. Drop-in for most code that already speaks OpenAI's API.

### When should I use Cerebras over Anthropic or OpenAI?

When latency dominates UX - voice agents, real-time tutoring, live demos. For complex reasoning quality, [Anthropic API](anthropic_api.md) Sonnet/Opus still win on benchmarks; Cerebras wins when you need the user to read tokens streaming faster than they can type.

## Pointers

* [cerebras.ai/inference](https://cerebras.ai/inference)
* Docs: [inference-docs.cerebras.ai](https://inference-docs.cerebras.ai)
* Compare with [groq.md](groq.md) (also fast, broader model selection).
* For broader catalog at slower speeds: [together.md](together.md), [fireworks.md](fireworks.md).
