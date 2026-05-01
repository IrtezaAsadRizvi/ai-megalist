# llama.cpp

llama.cpp is the C++ inference engine that everything else in the local LLM ecosystem builds on. Ollama, LM Studio, Jan, GPT4All, Open WebUI — they all wrap llama.cpp underneath. If you want maximum control, want to understand the substrate, or are running on hardware where the wrappers don't quite fit, llama.cpp is where you live.

## What it actually is

An open source (MIT) C++ library and CLI by Georgi Gerganov. Implements transformer inference highly optimised for CPU, Metal (Apple Silicon), CUDA, and Vulkan. Supports Llama, Mistral, Qwen, Gemma, Phi, DeepSeek, basically any major open weight architecture via the GGUF model format.

## Setup

### macOS / Linux
1. `brew install llama.cpp` (macOS) or build from source: `git clone https://github.com/ggml-org/llama.cpp && cd llama.cpp && make`.
2. Download a GGUF model from Hugging Face: `huggingface-cli download TheBloke/Llama-3.3-8B-GGUF llama-3.3-8b-Q4_K_M.gguf`.
3. Run: `llama-cli -m llama-3.3-8b-Q4_K_M.gguf -p "Hello, "`.
4. Or run the server: `llama-server -m model.gguf --port 8080`. OpenAI compatible HTTP API.

### Windows
1. Pre built binaries from [github.com/ggml-org/llama.cpp/releases](https://github.com/ggml-org/llama.cpp/releases).

## How I use it day to day

* **Honest:** I usually go through Ollama. I drop down to llama.cpp when I need a flag Ollama doesn't expose.
* **Custom GPU layer offload.** `--n-gpu-layers 35` to put exactly N layers on GPU; useful when memory is tight.
* **Quantization variations.** Multiple Q levels per model (Q4_K_M, Q5_K_S, Q8_0) — control speed vs quality vs memory directly.
* **Chat templates.** Some models need specific system prompt formatting; llama.cpp respects the GGUF metadata or you can override.
* **Server mode for embedded devices.** Run on a Raspberry Pi 5 (slowly), an old laptop, an air gapped workstation. The build flexibility is the value.
* **Reading the source.** When I want to understand what diffusion / quantization / KV caching actually does, llama.cpp is more readable than PyTorch's transformers code.

## Gotchas

* Compilation can be touchy on some platforms. Stick to pre built binaries unless you need a custom build.
* GGUF is the file format. Models in PyTorch (HF transformers) format need conversion: `python convert-hf-to-gguf.py /path/to/model`.
* CPU only inference works but is slow on big models. GPU acceleration is what makes llama.cpp practical.
* The CLI surface is large and changing. Read `--help`; the helpful flags shift between releases.
* For most users, Ollama or LM Studio is the right level of abstraction. llama.cpp is for power users.

## Pointers

* Repo: [github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)
* Models in GGUF: [huggingface.co/models?library=gguf](https://huggingface.co/models?library=gguf)
* For wrappers built on llama.cpp: [ollama.md](ollama.md), [lm_studio.md](lm_studio.md), [jan.md](jan.md).
* For higher throughput serving: [vLLM](https://github.com/vllm-project/vllm).
