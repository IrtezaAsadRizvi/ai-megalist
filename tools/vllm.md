# vLLM: high-throughput inference engine for production serving

vLLM sits in the local and OSS model runners category alongside [Ollama](ollama.md) and [llama.cpp](llama_cpp.md), but specifically aimed at multi-user GPU serving rather than single-user laptops. vLLM is the inference engine for serving LLMs at production throughput. Where llama.cpp is built for "run a model on this machine," vLLM is built for "serve thousands of concurrent users efficiently on GPU." The headline technique is PagedAttention, which fits more KV cache per GB of VRAM and consequently more concurrent users. If you're hosting models for real traffic, vLLM is the substrate.

## What it actually is

An open source Python library and OpenAI compatible HTTP server (Apache 2.0). Built at UC Berkeley, now widely used in production. Supports most major architectures (Llama, Mistral, Qwen, DeepSeek, Mixtral, Gemma, Phi, Phi 3.5, Qwen3 series). Multi GPU, distributed inference, quantization (AWQ, GPTQ, FP8), speculative decoding, tool calling, structured outputs.

## Setup

1. Need a CUDA capable GPU and Linux. (Some Mac support via MPS, limited.)
2. Install: `pip install vllm`.
3. Quick serve:
   ```bash
   vllm serve meta-llama/Llama-3.3-70B-Instruct \
     --tensor-parallel-size 2 \
     --port 8000
   ```
4. Now there's an OpenAI compatible endpoint at `localhost:8000`. Point any OpenAI SDK at it.
5. (Programmatic) Import as a library:
   ```python
   from vllm import LLM, SamplingParams
   llm = LLM("meta-llama/Llama-3.3-8B-Instruct")
   outputs = llm.generate(["Hello, "], SamplingParams(temperature=0.7, max_tokens=100))
   ```

## How I use it day to day

* **Honest:** I default to hosted inference (Groq, Together) for non sensitive workloads. vLLM is what I'd reach for self hosting.
* **Production self hosted serving.** When data sensitivity or cost requires on prem, vLLM is the engine. Throughput is the highest of the OSS options.
* **Multi GPU sharding.** `--tensor-parallel-size` splits the model across GPUs. Necessary for 70B+ models.
* **Quantization for deployment.** AWQ / GPTQ models load faster and serve more concurrent users with the same VRAM. Quality cost is small; throughput gain is large.
* **Tool calling and structured outputs.** vLLM supports OpenAI compatible tool calling on most models that have native tool use. Works with the same SDKs.
* **Benchmarking.** `vllm bench` gives you tokens/sec / users metrics; useful when sizing infra.

## Gotchas

* Linux + CUDA only is the supported path. Other platforms work in degraded modes.
* OOM errors are common; tune `gpu-memory-utilization`, `max-num-seqs`, `max-model-len` for your hardware.
* Some models need the right config (chat template, EOS token). The HF model card usually tells you; otherwise read vLLM logs.
* Updates can break workflows. Pin versions in production.
* For quick local hacking, llama.cpp / Ollama is easier; vLLM is for serving infrastructure.

## Alternatives

* If you want single-user local inference with minimal config, [Ollama](ollama.md) is the friendlier path.
* If you want CPU-friendly inference and Apple Silicon support, [llama.cpp](llama_cpp.md) is the substrate.
* If you want a polished GUI for experimentation, [LM Studio](lm_studio.md) covers that need.
* If you want managed hosted inference instead of self-serving, [Groq](groq.md) and [Together AI](together.md) are competitive.

## FAQ

### Is vLLM free?

Yes - Apache 2.0 licensed, free to install and run. The cost is your own GPU infrastructure (CUDA-capable cards, ideally H100/A100 for 70B+ models).

### vLLM vs Ollama - which should I use?

Different jobs. [Ollama](ollama.md) is single-user CLI for laptops; vLLM is multi-user GPU serving for production traffic. If you're hosting a model for many concurrent users, vLLM. If you're running locally for yourself, Ollama.

### Does vLLM run on Apple Silicon?

Limited. The supported path is Linux + CUDA. Some MPS (Apple Silicon) support exists but in degraded modes - for Mac local use, [llama.cpp](llama_cpp.md) is the right tool.

### Can vLLM serve quantized models?

Yes - AWQ, GPTQ, and FP8 quantization are supported. Quantized models load faster and serve more concurrent users with the same VRAM; quality cost is small, throughput gain is large.

## Pointers

* Repo: [github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)
* Docs: [docs.vllm.ai](https://docs.vllm.ai)
* For local single user use: [ollama.md](ollama.md), [llama_cpp.md](llama_cpp.md).
* For managed inference: [groq.md](groq.md), Together AI, Fireworks.
* The vLLM Discord is responsive; useful when stuck on hardware specific issues.
