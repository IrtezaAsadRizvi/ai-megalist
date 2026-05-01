# LocalAI

LocalAI is the OpenAI compatible drop in replacement for running models on your own hardware. The pitch is simple: keep using the OpenAI Python SDK, change one base URL, and now your code is calling a local model instead of OpenAI's API. For anyone who already has an OpenAI compatible client and wants to swap in local inference without rewriting the application, LocalAI is the path of least resistance.

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

## Pointers

* Web: [localai.io](https://localai.io)
* Repo: [github.com/mudler/LocalAI](https://github.com/mudler/LocalAI)
* MIT licensed.
* Pairs and competes with [ollama.md](ollama.md) (simpler, more focused), [vllm.md](vllm.md) (production grade serving, OpenAI compatible), [llama_cpp.md](llama_cpp.md) (the engine underneath both LocalAI and Ollama), and [open_webui.md](open_webui.md) (UI on top). Pick LocalAI when OpenAI API compatibility across modalities matters.
