# LM Studio

LM Studio is what you give your friend who wants to "try a local model" but doesn't want to install Python, set up venvs, or learn what GGUF means. The whole experience is GUI: browse Hugging Face, click download, click chat. Underneath, it's running llama.cpp like everything else, but the layer of polish is genuinely the difference between "tried it once" and "uses it daily."

## What it actually is

A native desktop app for running local LLMs. Available for macOS (Apple Silicon and Intel), Windows, and Linux. Includes a Hugging Face model browser, chat interface, server mode (OpenAI compatible API), and as of 2026 a "Mission Control" panel for headless management.

## Setup

1. Download from [lmstudio.ai](https://lmstudio.ai).
2. Drag to Applications. First launch onboards you with a recommended model.
3. In the Search tab, browse models. Filter by your hardware (LM Studio detects RAM/VRAM and warns about anything that won't fit).
4. Click Download on a model — typically 4 to 80 GB depending on size.
5. Tab to Chat, select model from the dropdown, start typing.

About 10 minutes including a download for an 8B model.

## How I use it day to day

* **Trying new models without ceremony.** I see a release on HF; LM Studio's search finds it; one click; chatting in 5 minutes.
* **Server mode.** Click Local Server tab, hit Start, get an OpenAI compatible API at `localhost:1234`. Point any tool that uses `OPENAI_BASE_URL` at it.
* **Comparing quants.** LM Studio makes it easy to download multiple quantizations of the same model (Q4, Q5, Q8). I compare quality vs speed for my hardware.
* **Multimodal.** Recent versions support vision models (LLaVA, Qwen‑VL). Drop an image into chat, ask about it.
* **Headless / JIT loading.** Mission Control runs models on demand without a UI; useful for long lived dev setups.

## Gotchas

* Apple Silicon is the easy mode. Recent M chips run 70B models comfortably with 64 GB unified memory.
* Models marked "GGUF" work directly. PyTorch/HF format models need conversion (LM Studio can sometimes do this; not always).
* Default context window is small (often 4096). Increase under model settings before hitting limits.
* Chat history is stored locally in plain text. Useful, also a privacy consideration if you share the machine.
* For more programmatic control or production deploys, you eventually outgrow LM Studio and graduate to Ollama, vLLM, or llama.cpp directly.

## Pointers

* [lmstudio.ai](https://lmstudio.ai)
* Their model browser surfaces good defaults; the [hf.co/lmstudio](https://huggingface.co/lmstudio-community) collection is a curated list of safe, capable models.
* For CLI first workflows, see [ollama.md](ollama.md).
* For more power user control (custom configs, GPU pinning), graduate to llama.cpp.
