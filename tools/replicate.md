# Replicate

Replicate is "any model, one API call." Image gen, video gen, audio, language models, niche research models — Replicate hosts thousands of them with a uniform interface. For developers who don't want to manage GPUs, build inference servers, or worry about which library a particular model uses, Replicate is the path of least resistance.

## What it actually is

A serverless model inference platform. You call models via REST or any of the SDKs (Python, Node, Go, Elixir, Swift). Pay per second of compute or per request. Models are deployed by the original authors, by Replicate, or by community members; you can also push your own.

## Setup

1. Sign up at [replicate.com](https://replicate.com). Free credit on signup.
2. API token from the dashboard.
3. Quick test:
   ```python
   import replicate
   output = replicate.run(
     "black-forest-labs/flux-1.1-pro",
     input={"prompt": "a sunset over Mt Fuji"}
   )
   print(output)  # URL to generated image
   ```
4. (Or in JS) `npm i replicate` and the same shape.

## How I use it day to day

* **Image generation in apps.** FLUX, SDXL, Recraft — call from a backend, get a URL, store, serve. The SDK handles cold starts, polling, errors.
* **Video generation.** Veo, Kling, Runway, Pika — most major video models are on Replicate (with API keys often cheaper than going direct).
* **Niche models.** Speech enhancement, image upscaling, depth estimation, segmentation. Replicate has a long tail that other platforms don't.
* **Cog for deploying my own.** [Cog](https://cog.run/) is the tool Replicate uses to package models. Push my own model with Cog; it gets a Replicate URL and an API.
* **Webhooks for async.** Long running jobs (video gen) call back when done. Better than polling.

## Gotchas

* Cold starts. A model that hasn't been called recently can take 30 to 90 seconds to spin up. For interactive apps, use "always on" pricing or pre warm.
* Pricing per second of compute can be tricky to reason about. Some models are cheap (small image gen), some are expensive (video gen, long context LLMs). Estimate before scaling.
* Quality of community models varies. Stick to verified / popular ones for production.
* The same model may be cheaper on a specialised provider (FLUX direct, Groq for text). Replicate's value is breadth, not always price.
* Webhook delivery requires your endpoint to be reachable; for local dev, use a tunnel (ngrok, cloudflared).

## Pointers

* [replicate.com](https://replicate.com)
* Cog (for packaging your own models): [cog.run](https://cog.run)
* Compare with [fal.ai](https://fal.ai) (similar shape, often faster on image gen) and [together.ai](https://www.together.ai) (LLM heavy).
* For raw OpenAI compatible: provider's own APIs (Anthropic, OpenAI, etc.).
