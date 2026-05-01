# Ollama

Ollama is the easiest way to run a real model on your laptop. The pitch is one sentence: `ollama run llama3.3` and you have a conversation. No Docker compose file, no model conversion script, no GPU driver yak shaving (well, mostly). For someone who has spent a weekend trying to get a HuggingFace model to load locally, this is closer to magic than the marketing copy suggests.

## What it actually is

A small Go binary that wraps llama.cpp, exposes an OpenAI compatible HTTP API on `localhost:11434`, and ships with a model registry you can pull from. It runs on macOS, Linux, and Windows. There's also a clean desktop app for macOS and Windows in 2026 that handles chat without the terminal.

## Setup

1. Install: `curl -fsSL https://ollama.com/install.sh | sh` (Linux) or download the macOS/Windows app from [ollama.com](https://ollama.com).
2. Pull a model: `ollama pull llama3.3` (about 4 GB for the 8B, ~40 GB for the 70B).
3. Run it: `ollama run llama3.3`. You're in a chat now.
4. Hit the API: `curl http://localhost:11434/api/generate -d '{"model":"llama3.3","prompt":"hello"}'`.

I'd budget 10 minutes including the download for the smaller models. Bigger models take longer to pull (tens of GB) and substantially more RAM/VRAM to run.

## How I use it day to day

* **Local Q&A on private documents.** I run a Llama 3.3 8B locally, point a small RAG script at my notes, and don't worry about leaks.
* **As a drop in OpenAI compatible endpoint.** Point any tool that supports `OPENAI_BASE_URL` at `http://localhost:11434/v1` and you can swap in local models for free experimentation.
* **Model A/B.** `ollama pull qwen2.5`, `ollama pull deepseek-r1`, `ollama pull gemma3`. Compare on the same prompt. Cheap.
* **Embeddings.** `ollama pull nomic-embed-text` and you have a local embedder for vector search.
* **In CI.** Some tests want a deterministic small model. A 1B local model is faster and cheaper than calling out.

## Gotchas

* Apple Silicon is the easy mode. NVIDIA Linux works fine. Windows with weird GPUs can be painful.
* The default context window is small (often 2K or 4K). Set `num_ctx` higher when you call the API: `"options": {"num_ctx": 8192}`.
* "Open weights" doesn't mean "as smart as GPT 5." A local 8B model is plenty for autocomplete and small tasks; for serious reasoning, you still want a frontier model.
* Disk fills up fast. `ollama list` shows what you've pulled, `ollama rm <name>` removes one. I've accidentally hoarded 200 GB of weights more than once.
* Quantization matters. The default Q4 quantization is a great speed/quality tradeoff. If output looks dumb, try Q8 or full precision (more VRAM).

## Pointers

* [ollama.com](https://ollama.com), [ollama.com/library](https://ollama.com/library) for the model list.
* OpenAI compatible API docs: [github.com/ollama/ollama/blob/main/docs/openai.md](https://github.com/ollama/ollama/blob/main/docs/openai.md).
* Pair with Open WebUI for a ChatGPT style local UI: [openwebui.com](https://openwebui.com).
* For more control (custom configs, GPU pinning), graduate to llama.cpp or vLLM.
