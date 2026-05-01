# GPT4All

GPT4All is the local LLM desktop app from Nomic. The pitch is "ChatGPT, but it runs on your laptop, even old ones." The model selection is curated (smaller models that run on CPUs and modest GPUs), the UI is clean, and the LocalDocs feature gives you RAG over your own files without any cloud dependency.

## What it actually is

An open source (MIT) desktop app for macOS, Windows, and Linux. Includes a chat UI, a model browser, a Python SDK, and an OpenAI compatible local server. Models supported: Llama, Mistral, Qwen, Phi, DeepSeek and others, in GGUF format. Hardware accelerated via Metal (Apple), CUDA (NVIDIA), Vulkan (cross GPU), and CPU fallback.

## Setup

1. Download from [gpt4all.io](https://gpt4all.io). Drag to Applications.
2. On first launch, GPT4All offers a starter model (~4 GB).
3. Models tab → browse curated list, download with one click.
4. Chat tab → pick a model, chat.
5. (Optional) LocalDocs → point at a folder of files; GPT4All embeds and uses for grounded answers.
6. (Optional) Server tab → start the OpenAI compatible server on localhost.

## How I use it day to day

* **Honest:** I default to Ollama for CLI, LM Studio for casual GUI. GPT4All is the option I'd recommend to people who want simplicity.
* **As a "ChatGPT replacement" recommendation for non technical friends.** Easier than Ollama; cleaner than text-generation-webui; works on older hardware.
* **LocalDocs.** Drop a folder of work documents; GPT4All embeds; chat with your documents privately. Comparable to Open WebUI's RAG, more contained.
* **OpenAI compatible API for local development.** Switch from the real OpenAI to GPT4All without changing code; useful for offline dev.
* **CPU friendly.** On laptops without GPUs, GPT4All performs better than alternatives that assume GPU.

## Gotchas

* Curated model selection means the very latest / largest models may not be there. Check before assuming.
* Quality on CPU is bound by the model size that fits in RAM. 8B models on a 16 GB laptop are realistic; 70B is not.
* LocalDocs RAG quality is decent but not customisable; for production RAG, use a real vector DB.
* The desktop app is the primary surface; the CLI / SDK are less polished.
* For team scale or web UI, [open_webui.md](open_webui.md) is the better fit.

## Pointers

* [gpt4all.io](https://gpt4all.io)
* Repo: [github.com/nomic-ai/gpt4all](https://github.com/nomic-ai/gpt4all)
* Compare with [jan.md](jan.md) (similar shape, OSS, more configurable), [lm_studio.md](lm_studio.md) (more power user features).
* For fully headless / API: [ollama.md](ollama.md).
