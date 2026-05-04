# LocalAI: OpenAI-compatible self-hosted inference for any model

LocalAI is in the local model runner category alongside [Ollama](ollama.md) and [vLLM](vllm.md), and the one I'd pick when "OpenAI API compatibility across multiple modalities from one binary" is the actual requirement. LocalAI is the OpenAI compatible drop in replacement for running models on your own hardware. The pitch is simple: keep using the OpenAI Python SDK, change one base URL, and now your code is calling a local model instead of OpenAI's API. For anyone who already has an OpenAI compatible client and wants to swap in local inference without rewriting the application, LocalAI is the path of least resistance.

## What it actually is

An open source self hosted inference server that exposes an OpenAI compatible REST API. Supports text generation, embeddings, image generation, transcription, and TTS, backed by a variety of underlying engines (llama.cpp, whisper.cpp, stable diffusion, more). MIT licensed. Runs as a Docker container or natively.

## Setup

1. Pull the Docker image: `docker run -p 8080:8080 --name local-ai -ti localai/localai:latest`. (Or pick a tagged variant for GPU support.)
2. Browse to `http://localhost:8080` for the LocalAI dashboard.
3. Pull a model: from the dashboard's gallery, or via the model API.
4. Test: `curl http://localhost:8080/v1/chat/completions -H "Content-Type: application/json" -d '{"model": "your-model", "messages": [...]}'`.
5. Point any OpenAI compatible client at `http://localhost:8080/v1` with a fake API key.

## How I use it day to day

* **Drop in for OpenAI compatible apps.** Existing code that uses `openai` Python SDK works against LocalAI by changing `base_url`.
* **Mixed model serving.** LocalAI can serve multiple model types (LLM, embeddings, image) from one process. Useful when an app needs all three and you don't want three separate services.
* **Air gapped environments.** Self hosted, MIT licensed; suitable for environments where data can't leave the network.

For a single LLM serving need, Ollama is friendlier. LocalAI shines when you want OpenAI compatibility across multiple modalities from one binary.

## Gotchas

* Performance depends on the underlying engine and your hardware. Don't expect frontier latency from a laptop.
* Model pulling and initial loading takes time; production setups typically pre warm models.
* Some OpenAI features (function calling, tools) are partially supported; verify the specific feature you need against the LocalAI version.
* Docker is the recommended path; native installs work but are more finicky.

## Alternatives

* If your only need is local LLM serving with no extra modalities, [Ollama](ollama.md) is friendlier.
* If you want very high-throughput GPU serving for one big model, [vLLM](vllm.md) is the production-grade pick.
* If you want a desktop GUI on top of local models, [LM Studio](lm_studio.md) is the lighter option.
* If you want to gateway multiple cloud + local providers behind one OpenAI-compatible endpoint, [LiteLLM](litellm.md) is the routing layer (not an inference server).

## FAQ

### Is LocalAI free?

Yes - MIT licensed and free to self-host. The cost is whatever GPU / CPU you run it on.

### LocalAI vs Ollama - which should I use?

Different scopes. [Ollama](ollama.md) is focused on LLM serving, simpler to install, and more polished for chat workflows. LocalAI serves LLMs, embeddings, image generation, transcription, and TTS from one process - useful when you want OpenAI compatibility across all of those without three separate services.

### Does LocalAI support function calling?

Partially. Some OpenAI features (function calling, tools) are supported but lag the actual OpenAI API in fidelity. Verify the specific feature against the LocalAI version you're running before depending on it in production.

### Can I run LocalAI air-gapped?

Yes - that's a strong use case. Self-hosted, MIT licensed, Docker-shipped. Suitable for environments where data can't leave the network as long as you can pre-stage the model weights.

### Is LocalAI fast?

Performance depends on the underlying engine (llama.cpp for LLMs, whisper.cpp for STT, etc.) and your hardware. Don't expect frontier-API latency from a laptop; on a proper GPU server it's competitive with hosted options for many workloads.

## Pointers

* Web: [localai.io](https://localai.io)
* Repo: [github.com/mudler/LocalAI](https://github.com/mudler/LocalAI)
* MIT licensed.
* Pairs and competes with [ollama.md](ollama.md) (simpler, more focused), [vllm.md](vllm.md) (production grade serving, OpenAI compatible), [llama_cpp.md](llama_cpp.md) (the engine underneath both LocalAI and Ollama), and [open_webui.md](open_webui.md) (UI on top). Pick LocalAI when OpenAI API compatibility across modalities matters.
