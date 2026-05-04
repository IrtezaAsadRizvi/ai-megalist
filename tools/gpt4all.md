# GPT4All: local LLM desktop app for older hardware

GPT4All is in the local model runner cluster alongside [Ollama](ollama.md), [LM Studio](lm_studio.md), and [Jan](jan.md) - aimed at the simplest end of "ChatGPT, but it runs on your laptop, even old ones." The model selection is curated (smaller models that run on CPUs and modest GPUs), the UI is clean, and the LocalDocs feature gives you RAG over your own files without any cloud dependency.

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

## Alternatives

* If you want a CLI-first runner with an OpenAI-compatible API and the broadest model catalog, [Ollama](ollama.md) is the default.
* For a friendlier GUI with a Hugging Face model browser and headless mode, [LM Studio](lm_studio.md) is the upgrade.
* If you want fully OSS with more configurability, [Jan](jan.md) is the closer competitor in the desktop-app space.
* For a multi-user web UI on top of Ollama or any OpenAI-compatible API, [Open WebUI](open_webui.md) is the right tool.

## FAQ

### Is GPT4All really free?

Yes - MIT licensed, no account required, runs entirely on your machine. There's no paid tier; Nomic monetizes through their cloud embedding business, not the desktop app.

### GPT4All vs Ollama - which should I use?

Different shapes. GPT4All is a desktop app with a chat UI - the easier recommendation for non-technical users. [Ollama](ollama.md) is CLI-first and more flexible; the right pick if you're comfortable with a terminal. I default to Ollama for personal use and recommend GPT4All to friends.

### Can GPT4All run on a CPU?

Yes - that's actually its strong suit. On laptops without GPUs it performs better than alternatives that assume GPU acceleration. Realistic ceiling is ~8B-class models on a 16GB-RAM laptop; 70B models won't fit.

### What is LocalDocs?

GPT4All's built-in RAG feature. Point at a folder of files; it embeds them locally and uses them to ground answers. Decent for personal document Q&A; not customizable enough for production RAG (use a real vector DB for that).

## Pointers

* [gpt4all.io](https://gpt4all.io)
* Repo: [github.com/nomic-ai/gpt4all](https://github.com/nomic-ai/gpt4all)
* Compare with [jan.md](jan.md) (similar shape, OSS, more configurable), [lm_studio.md](lm_studio.md) (more power user features).
* For fully headless / API: [ollama.md](ollama.md).
