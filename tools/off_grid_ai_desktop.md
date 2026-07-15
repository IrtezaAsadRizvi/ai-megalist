# Off Grid AI Desktop: a full on-device AI suite for Mac

Off Grid AI Desktop sits in the local model runner cluster alongside [AnythingLLM](anythingllm.md), [Jan](jan.md), and [GPT4All](gpt4all.md), but it aims wider than "local chat." It is an open-source macOS app that bundles a local LLM, image generation, voice dictation, RAG over your own data, MCP connectors, an encrypted vault, and clipboard history - all running on-device. No account, no telemetry, nothing routes through a server the maker owns. The core is AGPL-3.0; a separate paid Pro package adds memory and screen-capture features.

## What it actually is

An Electron desktop app for macOS. It ships a bundled llama.cpp engine for local chat, an on-device image generator, whisper-based voice dictation, and a RAG pipeline over your own files. It connects to tools through MCP (Model Context Protocol) with approval-gated actions, keeps secrets in an encrypted vault, and tracks clipboard history. The full app runs locally - the point is that your data stays on your machine by default. Core is AGPL-3.0 licensed; Pro (memory, screen capture) is a separate package.

## Setup

1. Download from [getoffgridai.co/desktop](https://getoffgridai.co/desktop), or build from source at [github.com/off-grid-ai/off-grid-ai-desktop](https://github.com/off-grid-ai/off-grid-ai-desktop).
2. Open the app. It bundles the local LLM engine (llama.cpp) - no separate model server to install.
3. Chat runs on-device. No account and no sign-in.
4. Point the RAG pipeline at your own files to ask grounded questions over them.
5. (Optional) Add MCP connectors for tool actions - each action is approval-gated.
6. (Optional) Use voice dictation (whisper), on-device image generation, the encrypted vault, and clipboard history.

## How I use it day to day

* **Private chat** - ask sensitive questions of a local model with nothing leaving the Mac.
* **RAG over my own data** - point it at my files and get grounded answers without a cloud embedder.
* **Voice dictation** - whisper transcription on-device instead of a cloud speech API.
* **Image generation** - local image gen when I do not want to send prompts to a hosted service.
* **MCP connectors** - wire up tool actions with an approval step before anything runs.

## Gotchas

* macOS only today. There is no Windows or Linux build.
* On-device inference is bound by your Mac's RAM and chip - larger models need more memory, and speed tracks your hardware.
* Screen capture and persistent memory live in the paid Pro package, not the AGPL core.
* Being a bundled-engine app, it carries its own llama.cpp build rather than talking to an existing Ollama install.

## Alternatives

* [AnythingLLM](anythingllm.md) - local-first RAG desktop app; cross-platform, RAG-focused rather than a full suite.
* [Jan](jan.md) - Apache-2.0 local chat desktop app; text-first, cross-platform.
* [GPT4All](gpt4all.md) - MIT local LLM desktop app tuned for older hardware.
* [Ollama](ollama.md) - CLI-first local runner if you want a headless engine plus an OpenAI-compatible API.
* [LM Studio](lm_studio.md) - friendly GUI with a Hugging Face model browser.

## FAQ

### Is Off Grid AI Desktop free?

The core is free and open source under AGPL-3.0. A separate paid Pro package adds memory and screen-capture features. There is no account and no telemetry.

### Does it really run fully on-device?

Yes - chat, image generation, voice dictation, and RAG run locally on your Mac. Nothing routes through a server the maker owns.

### What platforms does it support?

macOS only right now. It is an Electron app that bundles its own local LLM engine (llama.cpp).

### Off Grid AI Desktop vs AnythingLLM?

[AnythingLLM](anythingllm.md) is RAG-first and cross-platform. Off Grid AI Desktop is macOS-only but bundles more surfaces - chat, image gen, voice dictation, MCP connectors, an encrypted vault, and clipboard history - in one on-device app.

### Is my data sent anywhere?

No account, no telemetry, no cloud by default. Processing happens on-device, and MCP tool actions are approval-gated before they run.

## Pointers

* Site: [getoffgridai.co/desktop](https://getoffgridai.co/desktop)
* GitHub: [github.com/off-grid-ai/off-grid-ai-desktop](https://github.com/off-grid-ai/off-grid-ai-desktop)
* License: AGPL-3.0 (core); paid Pro package for memory and capture.
* For cross-platform local alternatives, see [anythingllm.md](anythingllm.md), [jan.md](jan.md), and [gpt4all.md](gpt4all.md).
