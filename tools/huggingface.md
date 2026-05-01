# Hugging Face

Hugging Face is the GitHub of AI. Models, datasets, demo apps (Spaces), inference endpoints, training infrastructure — if you're doing anything with open weight models, you pass through HF, often multiple times in a single workflow. The platform isn't flashy; the network effect is the value.

## What it actually is

A platform with five major components:
* **Models hub** — millions of open weight models from labs, individuals, and ports.
* **Datasets hub** — public datasets for training and evaluation.
* **Spaces** — host an ML demo (Gradio / Streamlit) for free, point a URL at it.
* **Inference endpoints** — production hosted inference for any model on the hub.
* **Inference Providers / Serverless API** — pay per request access to hosted models without provisioning infrastructure.

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
* License diversity is a feature and a foot gun. Apache 2, MIT, OpenRAIL, custom commercial restrictions — track what you're using.
* Some models require gated access (Llama, certain proprietary releases). Request access; usually approved fast.

## Pointers

* [huggingface.co](https://huggingface.co)
* Spaces: [huggingface.co/spaces](https://huggingface.co/spaces)
* Hub docs: [huggingface.co/docs/hub](https://huggingface.co/docs/hub)
* Run any HF model locally with [ollama.md](ollama.md) or in Python with `transformers`.
* For commercial inference at scale: Together AI, Fireworks, Replicate, or your own vLLM.
