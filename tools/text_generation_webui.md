# text-generation-webui: power-user web UI for local LLMs

text-generation-webui sits in the local model runner category alongside [LM Studio](lm_studio.md) and [Ollama](ollama.md), aimed at users who want every loader and sampler exposed rather than a polished default. text-generation-webui (often "oobabooga," after the maintainer's GitHub handle) is the power user's local LLM interface. Where LM Studio is polished and Ollama is minimal, text-generation-webui has every knob exposed: every loader, every quantization format, every sampler, every chat template. For people who want to actually understand what their local model is doing, this is the substrate.

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
* **Sampler experimentation.** Mirostat, dynamic temperature, DRY, top n sigma - all the modern sampling techniques exposed. Useful for evaluating model behavior.
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

## Alternatives

* If you want a friendlier GUI with HF browser, [LM Studio](lm_studio.md) is the polished pick.
* If you want a CLI-first runner with an OpenAI-compatible API, [Ollama](ollama.md) is the default.
* If you want to serve models for production traffic (not single-user experimentation), [vLLM](vllm.md) is the right substrate.
* If you want a lighter desktop app for chat with local models, [Jan](jan.md) or [GPT4All](gpt4all.md) are simpler picks.

## FAQ

### Is text-generation-webui free?

Yes - AGPL-licensed, free to run. The cost is your own hardware (GPU VRAM is the binding constraint) and your time learning the interface.

### text-generation-webui vs Ollama - which should I use?

Different shapes. [Ollama](ollama.md) is CLI-first, minimal config, OpenAI-compatible API; text-generation-webui is a busy web UI with every loader and sampler exposed. I default to Ollama for casual use and open text-generation-webui when I need fine-grained control.

### Does it support GGUF / quantized models?

Yes - llama.cpp, exllamav2, AutoAWQ, GPTQ are all supported loaders. The Models tab lets you pick a loader per model; sticking with the recommended config in the install script is the path of least resistance.

### Can I use it as an API?

Yes - it ships an OpenAI-compatible API endpoint. Useful for local development against the same SDKs you'd use in production, but [vLLM](vllm.md) is the better choice for actual production serving.

## Pointers

* Repo: [github.com/oobabooga/text-generation-webui](https://github.com/oobabooga/text-generation-webui)
* For polished GUI: [lm_studio.md](lm_studio.md). For CLI / API: [ollama.md](ollama.md).
* For production serving: [vllm.md](vllm.md).
* The HF model card "Use with text-generation-webui" instructions are usually accurate; follow them per model.
