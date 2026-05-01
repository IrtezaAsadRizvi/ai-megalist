# Qwen Chat

Qwen is the rare frontier tier chat product that also ships its weights for free, and that combination is what keeps it in my regular rotation. Alibaba runs a hosted version at chat.qwen.ai, but the same model I talk to in the browser is the one I can `ollama pull` and run on my laptop. That continuity matters; it changes what I'm willing to put into a prompt.

## What it actually is

Alibaba's chat front end for the Qwen model family. The 2026 lineup centers on the Qwen3 series, including instruction tuned, coder, and thinking (reasoning) variants. Most weights are Apache 2.0 OSS. Hosted at [chat.qwen.ai](https://chat.qwen.ai), with API access through DashScope.

## Setup

1. Go to [chat.qwen.ai](https://chat.qwen.ai), sign in with a Google or Alibaba account.
2. Pick a model from the top selector. Qwen3 Max for general work, Qwen3 Coder for code, Qwen3 Thinking when you want reasoning traces.
3. (Optional) Toggle web search and image generation in the composer.
4. (Optional) For local: `ollama pull qwen3:8b` or pull a larger size if your machine can hold it.
5. (Optional) For API access: get a DashScope key at the Alibaba Cloud console.

## How I use it day to day

* **Multilingual work.** CN to EN translation, both directions. Qwen handles idiom and cultural nuance better than the Western models I've tried, in my experience.
* **Cheap reasoning.** Qwen3 Thinking is competitive with the paid reasoning tiers from OpenAI and Anthropic for a lot of math and code tasks, and the hosted chat is free.
* **Local fallback.** When I'm on a flight or behind a flaky network, having the same model family running on my laptop via Ollama is a real safety net.
* **As a benchmark probe.** When a new Qwen release drops I throw my standard set of prompts at it; it's how I keep calibrated on where the OSS frontier is.

## Gotchas

* The hosted product has been geofenced in a few places; if you see odd account creation friction, a non Chinese phone number sometimes works where Chinese SMS gates fail.
* Memory across sessions is opt in and feels less robust than ChatGPT's. Don't rely on it remembering you next week.
* Output can drift to Mandarin if the prompt has any CN context. Be explicit about output language for mixed inputs.
* The OSS weights are Apache 2.0 but the hosted service has its own ToS. Read the relevant one before using outputs commercially.

## Pointers

* Chat: [chat.qwen.ai](https://chat.qwen.ai)
* Repo and weights: [github.com/QwenLM](https://github.com/QwenLM)
* API docs: [help.aliyun.com/zh/model-studio](https://help.aliyun.com/zh/model-studio/)
* Pairs naturally with [ollama.md](ollama.md) for local use and [deepseek.md](deepseek.md) as the other strong Chinese OSS family.
