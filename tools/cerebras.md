# Cerebras Inference

Cerebras Inference is the API that makes Groq look slow. Running on Cerebras's wafer scale chips (genuinely a single silicon wafer, not multiple chips), token generation hits 1500+ tokens/second on Llama 70B, 2500+ on Llama 8B. For interactive AI products where time to first token is the constraint, Cerebras is the speed king.

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

## Pointers

* [cerebras.ai/inference](https://cerebras.ai/inference)
* Docs: [inference-docs.cerebras.ai](https://inference-docs.cerebras.ai)
* Compare with [groq.md](groq.md) (also fast, broader model selection).
* For broader catalog at slower speeds: [together.md](together.md), [fireworks.md](fireworks.md).
