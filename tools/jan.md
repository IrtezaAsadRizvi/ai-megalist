# Jan: open-source local ChatGPT replacement

Jan is in the local model runner category alongside [Ollama](ollama.md) and [LM Studio](lm_studio.md), and the one I install when I want a local chat UI without an account anywhere. Jan is the open source ChatGPT replacement I install on a fresh laptop when I want a local assistant without any of the SaaS strings. Apache 2.0 licensed, runs models on your machine (or talks to local Ollama / cloud APIs if you want), with a Chat UI that feels like ChatGPT minus the mandatory account.

## What it actually is

A desktop app for macOS, Windows, and Linux. Connects to local models (via its own runtime, llama.cpp under the hood) or cloud providers (OpenAI, Anthropic, Groq, etc.) via API key. Conversation history, system prompts, model switching - the standard chat features, with a clean native UI.

## Setup

1. Download from [jan.ai](https://jan.ai). Drag to Applications.
2. On first launch, Jan offers to download a recommended model (Llama 3.3 8B, ~5 GB).
3. Once downloaded, type in chat. Switching models is a dropdown.
4. (Optional) Add a cloud provider key under Settings → Engines → OpenAI / Anthropic / etc. You can route conversations to cloud models too.
5. (Optional) The local server mode exposes an OpenAI compatible endpoint at `localhost:1337`.

## How I use it day to day

* **As a privacy first chat UI.** When I want to ask sensitive questions of a local model, Jan is the friendliest path.
* **Switching between local and cloud.** Same UI, different model, picked per conversation. Useful when the local model isn't strong enough and I want to escalate.
* **Quick prompt comparisons.** Side by side responses across two models. Faster than swapping endpoints in Postman.
* **OpenAI compatible local server.** For development, I point my code at Jan's local endpoint instead of OpenAI's; same SDK, no token cost.
* **Custom assistants.** Jan supports system prompts saved as named assistants. Cheaper alternative to a custom GPT.

## Gotchas

* Jan's bundled runtime is solid but lags Ollama in performance for some setups. If you're a power user already running Ollama, just point Jan at it instead of using Jan's runtime.
* Multimodal support (vision models, voice) is more limited than ChatGPT's. Text first product.
* Some users have reported memory leaks on long sessions; restart the app weekly if you live in it.
* Plugin system exists but is small; expect to write your own if you want app integrations.
* Cloud provider keys are stored on your machine, encrypted. Read the security model if you're handling them carefully.

## Alternatives

* If you want CLI-first ergonomics and the strongest local-runner ecosystem, [Ollama](ollama.md) is the default.
* If you want a polished GUI with a Hugging Face browser baked in, [LM Studio](lm_studio.md) is the friendlier pick.
* If you want maximum control of inference flags (GPU layers, quant levels), drop down to [llama.cpp](llama_cpp.md).
* If you want the same chat experience but in the cloud with frontier models, [ChatGPT](chatgpt.md) or [Claude](claude.md) are the obvious paths.

## FAQ

### Is Jan free?

Yes - Jan is Apache 2.0 open source, free to download and run. The cost is bring-your-own-cloud-key if you route to OpenAI/Anthropic/etc., or zero if you stay on local models.

### Jan vs Ollama - which should I use?

Different shapes. [Ollama](ollama.md) is CLI-first with an OpenAI-compatible server; Jan is a desktop app with a chat UI. Many users run Ollama as the runtime and point Jan's UI at it - you get the best of both.

### Does Jan run models locally or in the cloud?

Both, your call per conversation. Jan ships with its own local runtime (llama.cpp underneath), and you can also add cloud provider keys (OpenAI, Anthropic, Groq) under Settings → Engines.

### Can Jan replace ChatGPT entirely?

For text chat, mostly yes. Multimodal support (vision, voice) is more limited than ChatGPT's, and the plugin ecosystem is small. If text Q&A is your main use, Jan covers it.

### Does Jan have a server mode?

Yes - the local server exposes an OpenAI-compatible endpoint at `localhost:1337`. Useful for development: point your code at Jan instead of OpenAI; same SDK, no token cost.

## Pointers

* [jan.ai](https://jan.ai)
* GitHub: [github.com/menloresearch/jan](https://github.com/menloresearch/jan)
* For a more powerful local stack: [ollama.md](ollama.md) (CLI first) or [lm_studio.md](lm_studio.md) (GUI alternative).
* For cloud only chat with no install: [chatgpt.md](chatgpt.md), [claude.md](claude.md).
