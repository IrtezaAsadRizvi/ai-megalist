# Hugging Face: the model and dataset hub for open-weight AI

Hugging Face is the model APIs and OSS-distribution hub at the center of the open-weight ecosystem - the registry that [Replicate](replicate.md), [Together AI](together.md), and most local runners pull from. Hugging Face is the GitHub of AI. Models, datasets, demo apps (Spaces), inference endpoints, training infrastructure - if you're doing anything with open weight models, you pass through HF, often multiple times in a single workflow. The platform isn't flashy; the network effect is the value.

## What it actually is

A platform with five major components:
* **Models hub**: millions of open weight models from labs, individuals, and ports.
* **Datasets hub**: public datasets for training and evaluation.
* **Spaces**: host an ML demo (Gradio / Streamlit) for free, point a URL at it.
* **Inference endpoints**: production hosted inference for any model on the hub.
* **Inference Providers / Serverless API**: pay per request access to hosted models without provisioning infrastructure.

There are also paid tiers: Pro ($9/mo personal benefits), Enterprise (organisation features, governance).

## Setup

1. Sign up at [huggingface.co](https://huggingface.co). Free.
2. Create an access token (Settings → Access Tokens).
3. Install the client: `pip install huggingface_hub`.
4. Login: `huggingface-cli login`.
5. From there:
   * Download a model: `from huggingface_hub import snapshot_download; snapshot_download("meta-llama/Llama-3.3-70B")`
   * Push your own: `from huggingface_hub import upload_folder; upload_folder(folder_path="...", repo_id="me/my-model")`
   * Inference API: `from huggingface_hub import InferenceClient; client = InferenceClient(); client.text_generation(prompt="hello", model="...")`.

## How I use it day to day

* **Finding models.** Search by task, filter by license, sort by downloads. The metadata is surprisingly clean.
* **Reading model cards.** The HF model card format (intended use, training data, evaluation, limitations) is the de facto standard. I read these before downloading.
* **Spaces for trying things.** Someone built a demo of a new technique; it lives in a Space; click to use, no install.
* **Serverless inference** for prototyping. Cheap, fast first try at a model without setting up vLLM.
* **Datasets** for training and eval. The 100K+ dataset library is the substrate for fine tuning.
* **Trending tab.** Surfaces what the community is excited about this week. Better signal than Twitter.

## Gotchas

* Quality of community models varies wildly. Always read the model card; check downloads and likes for signal; verify the license.
* Storage matters. A weight repo can be 100+ GB. Use HF's git lfs; respect their quotas.
* Inference API is convenient but rate limited and not the cheapest at production volumes. Move to dedicated endpoints or self hosted.
* License diversity is a feature and a foot gun. Apache 2, MIT, OpenRAIL, custom commercial restrictions - track what you're using.
* Some models require gated access (Llama, certain proprietary releases). Request access; usually approved fast.

## Alternatives

* If you want a managed "run any model via API" with no infrastructure, [Replicate](replicate.md) is the simplest path.
* If you want hosted OSS model inference at production scale with fine-tuning, [Together AI](together.md) or [Fireworks AI](fireworks.md) are stronger.
* If you want to run the same models locally with no cloud, pair HF downloads with [Ollama](ollama.md) or [LM Studio](lm_studio.md).
* If you want very high-throughput self-hosted serving, point your HF weights at [vLLM](vllm.md) instead of the Inference API.

## FAQ

### Is Hugging Face free?

Yes for browsing, downloading public models and datasets, and basic Spaces hosting. Pro is $9/mo for personal benefits (more storage, faster inference). Inference Endpoints and Enterprise Hub are usage-based and meaningful at production scale.

### Hugging Face vs Replicate - which should I use?

Different shapes. Hugging Face is the registry and the substrate for downloading weights you'll run yourself. [Replicate](replicate.md) is a pay-per-call hosted runtime where you don't manage anything. Many teams use both: HF to find the model, Replicate (or Together / Fireworks) to serve it.

### Can I run Hugging Face models locally?

Yes - that's the main use. Download GGUF builds and load them in [Ollama](ollama.md), [LM Studio](lm_studio.md), or [llama.cpp](llama_cpp.md). For PyTorch / safetensors weights, use the `transformers` library directly.

### What is a Space?

A free hosted demo (Gradio or Streamlit) for any model on the hub. Click to use, no install. The cleanest way to try a new technique someone published this week.

### What's the licensing situation on HF models?

Wildly varied - Apache 2, MIT, OpenRAIL, Llama Community License, custom commercial restrictions. Read the model card before using anything in production. License diversity is a feature and a foot-gun.

## Pointers

* [huggingface.co](https://huggingface.co)
* Spaces: [huggingface.co/spaces](https://huggingface.co/spaces)
* Hub docs: [huggingface.co/docs/hub](https://huggingface.co/docs/hub)
* Run any HF model locally with [ollama.md](ollama.md) or in Python with `transformers`.
* For commercial inference at scale: Together AI, Fireworks, Replicate, or your own vLLM.
