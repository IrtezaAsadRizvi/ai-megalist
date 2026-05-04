# Automatic1111: classic Stable Diffusion web UI for local image generation

Automatic1111 sits in the image generation cluster as the OSS local-first option alongside [ComfyUI](comfyui.md) and the closed [Midjourney](midjourney.md) / [Flux](flux.md) services - it's how most people first ran [Stable Diffusion](stable_diffusion.md) on their own GPU. Automatic1111 (the GitHub repo) is the original Stable Diffusion web UI. It's older than ComfyUI, less elegant, and still maintained. Tens of thousands of community extensions, the largest tutorial library of any local image gen tool, and a UI that "just works" for the most common workflows. For users who want SD without the node graph mental model, A1111 is the tradition.

## What it actually is

An open source (AGPL) Python web app from "AUTOMATIC1111" (the maintainer). Wraps Stable Diffusion (and now FLUX, SDXL, SD 3.x) inference in a browser UI with extensive controls, sampling options, ControlNet, LoRA, embeddings, hi res fix, batching, and a plugin ecosystem. There's also Forge - a fork that's faster and has additional features.

## Setup

1. Pre reqs: Python 3.10, Git, a GPU (NVIDIA + CUDA preferred; AMD on Linux works; Apple Silicon via PyTorch MPS).
2. Clone: `git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui`.
3. Run: `./webui.sh` (Mac/Linux) or `webui-user.bat` (Windows). First run installs dependencies (~5 GB).
4. Download a model checkpoint (e.g. SDXL from Hugging Face) into `models/Stable-diffusion/`.
5. Open `localhost:7860`.
6. Generate from the prompt textbox; tune width / height / steps / sampler.

About 30 minutes including model download.

## How I use it day to day

* **Honest:** I default to ComfyUI for serious work. A1111 is what I'd recommend to first time SD users.
* **Standard text to image** with the largest tutorial library to learn from. YouTube has thousands of A1111 walkthroughs.
* **Extensions for any feature.** ControlNet, ADetailer (face fix), regional prompter, AnimateDiff, video extensions. Install from the Extensions tab.
* **LoRA stacking** with simple syntax in the prompt: `<lora:character:0.8>`.
* **Hi res fix** for clean upscaling; built in.
* **Batch generation** with prompt matrices and X/Y/Z plots for parameter exploration.

## Gotchas

* The UI shows its age. Functional, not polished. Some users prefer Forge (a fork) or move to ComfyUI for the visual workflow.
* Performance is good but not the fastest; ComfyUI and Forge often run inference faster on the same hardware.
* Extensions can break on A1111 updates. Pin versions; update extensions deliberately.
* For node based workflows (multi step pipelines, custom samplers): [comfyui.md](comfyui.md) is the right tool.
* For absolute beginners: Forge (an A1111 fork) has friendlier defaults.

## Alternatives

* If you want node-graph workflows for multi-step pipelines and the latest custom samplers, [ComfyUI](comfyui.md) is the modern path.
* If you don't want to run anything locally and just want results, [Midjourney](midjourney.md) is the aesthetic peak.
* If you want an API to integrate generation into a product, [Flux](flux.md) has the production interface A1111 lacks.
* If you want to learn the underlying model rather than just run it, [Stable Diffusion](stable_diffusion.md) is the upstream weights ecosystem.

## FAQ

### Is Automatic1111 free?

Yes - AGPL-licensed OSS. You bring your own GPU; no API fees, no telemetry. The cost is electricity and your time.

### Automatic1111 vs ComfyUI - which one?

A1111 is the easier on-ramp, has the largest tutorial library on YouTube, and "just works" for the standard workflows. [ComfyUI](comfyui.md) is the node-graph editor for advanced multi-step pipelines and is faster on the same hardware. Beginners start with A1111; power users tend to migrate to ComfyUI.

### What hardware do I need to run Automatic1111?

NVIDIA GPU with 8GB+ VRAM is the comfortable floor. AMD on Linux works; Apple Silicon via PyTorch MPS works but slowly. SDXL needs 12GB+; Flux models need 16GB+ ideally.

### Is Automatic1111 still maintained?

Yes, though commits have slowed. The Forge fork (lllyasviel/stable-diffusion-webui-forge) is faster and has more active development if you want a closer-to-A1111 experience without the lag.

### What models can I run in Automatic1111?

SD 1.5, SDXL, SD 3.x, FLUX (with the right extension), plus any LoRA / embedding from civitai.com. Drop checkpoints into models/Stable-diffusion/.

## Pointers

* Repo: [github.com/AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
* Forge fork: [github.com/lllyasviel/stable-diffusion-webui-forge](https://github.com/lllyasviel/stable-diffusion-webui-forge)
* For node based: [comfyui.md](comfyui.md).
* Models + LoRAs from [civitai.com](https://civitai.com).
* The /r/StableDiffusion subreddit is the canonical learning resource.
