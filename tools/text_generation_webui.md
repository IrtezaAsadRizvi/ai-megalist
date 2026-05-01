# text-generation-webui

text-generation-webui (often "oobabooga," after the maintainer's GitHub handle) is the power user's local LLM interface. Where LM Studio is polished and Ollama is minimal, text-generation-webui has every knob exposed: every loader, every quantization format, every sampler, every chat template. For people who want to actually understand what their local model is doing, this is the substrate.

## What it actually is

An open source (AGPL) web UI for running local LLMs. Supports multiple loaders (transformers, llama.cpp, exllamav2, exllamav3, ExLlamaV2, AutoAWQ, etc.); chat, instruct, and notebook modes; LoRA and adapter support; OpenAI compatible API; extensions for custom features.

## Setup

1. Clone: `git clone https://github.com/oobabooga/text-generation-webui && cd text-generation-webui`
2. Run installer: `./start_macos.sh` (or `start_linux.sh`, `start_windows.bat`). Prompts for GPU type during install.
3. The first run downloads dependencies (~5 GB). Subsequent runs are fast.
4. Open `localhost:7860`.
5. Models tab → download a model from Hugging Face (paste the repo name) → load.

## How I use it day to day

* **Honest:** I default to Ollama / LM Studio for casual use. text-generation-webui is what I open when I need fine grained control.
* **Sampler experimentation.** Mirostat, dynamic temperature, DRY, top n sigma — all the modern sampling techniques exposed. Useful for evaluating model behavior.
* **LoRA testing.** Load a base model + LoRA adapter; chat through the UI; see the difference. Faster than scripting.
* **Chat template debugging.** When a model produces weird output, the chat template is often wrong; text-generation-webui shows you the actual prompt being sent.
* **Notebook mode** for raw text completion. Useful for testing instruction following on base models.
* **Extensions.** SuperBoogaV2 for embedding based memory; long term memory plugins; speech I/O. Power user playground.

## Gotchas

* The UI has accumulated features for years; layout is busy. Plan time to learn.
* The GitHub repo's README is the canonical docs; some web tutorials are outdated.
* Some loaders need specific GPU drivers / library versions. Stick to the recommended config in the install script.
* Performance is good but not as optimised as vLLM for serving. Use this for experimentation, vLLM for production.
* For most users, LM Studio or Ollama is sufficient. text-generation-webui rewards investment.

## Pointers

* Repo: [github.com/oobabooga/text-generation-webui](https://github.com/oobabooga/text-generation-webui)
* For polished GUI: [lm_studio.md](lm_studio.md). For CLI / API: [ollama.md](ollama.md).
* For production serving: [vllm.md](vllm.md).
* The HF model card "Use with text-generation-webui" instructions are usually accurate; follow them per model.
