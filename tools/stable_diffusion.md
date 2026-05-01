# Stable Diffusion

Stable Diffusion is the model that broke open AI image generation in 2022 by being the first frontier capable model with truly open weights. The image quality has since been overtaken by FLUX and Midjourney, but the *ecosystem* — the LoRAs, the ControlNets, the inpaint workflows, the GUIs — is still unmatched. If you want full control over generation, you run Stable Diffusion.

## What it actually is

A family of open weight latent diffusion models from Stability AI. The current top tier as of 2026 is Stable Diffusion 3.5 Large (base), with SD 3.5 Turbo for fast iteration. There's also the older SD XL which still has the largest community ecosystem of fine tunes and LoRAs.

## Setup

You need a GPU with 8 GB+ VRAM for SDXL, 16 GB+ for SD 3.5. Apple Silicon works (slower) via MPS. Three common stacks:

### ComfyUI (the power user choice)
1. Install: [comfy.org](https://www.comfy.org). Drag the desktop app to Applications.
2. Download a model checkpoint (e.g. SD 3.5 Large from Hugging Face) into `ComfyUI/models/checkpoints/`.
3. Open ComfyUI; load a default workflow from the templates.
4. Connect prompt → KSampler → VAE Decode. Generate.

### Automatic1111 (the classic web UI)
1. `git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui`
2. Run `./webui.sh` (Mac/Linux) or `webui-user.bat` (Windows).
3. Drop a model into `models/Stable-diffusion/`.
4. Open `localhost:7860`.

### Hosted (no install)
* [replicate.com](https://replicate.com), [fal.ai](https://fal.ai), [civitai.com](https://civitai.com) — all run SD with the major LoRAs.

## How I use it day to day

* **ComfyUI for serious work.** The node graph is intimidating for an hour, then liberating. I build workflows that combine text to image + img2img + inpaint + upscaler in a single graph.
* **LoRAs from Civitai.** Tens of thousands of community fine tunes for specific styles, characters, and concepts. Drop one into the LoRA folder, reference by name in the prompt.
* **ControlNet for layout control.** Pose, depth, edges from a reference image. The technique that makes SD usable for production work where composition matters.
* **Inpaint for fixes.** Mask a region, regenerate. Faster than re prompting the whole image.
* **For text in images, use FLUX or Ideogram instead.** SD is weak on rendering legible words.

## Gotchas

* The frontier image quality (raw text to image) is now behind FLUX and Midjourney. Use SD for control and customisation, not for "best image from a single prompt."
* The community ecosystem is largest around SDXL, not SD 3.5. If you want existing LoRAs, expect to use SDXL.
* GPU memory is the constraint. Quantized models and `--medvram` flags help; below 8 GB VRAM, life is painful.
* Civitai has a lot of NSFW content. Models marked "safe" usually are; double check before deploying anything.
* License: SD models have a CreativeML Open RAIL M license — free for most uses, with an ethical use clause. Read it if you're shipping commercially.

## Pointers

* Models: [huggingface.co/stabilityai](https://huggingface.co/stabilityai)
* Community models + LoRAs: [civitai.com](https://civitai.com)
* ComfyUI: [comfy.org](https://www.comfy.org)
* Automatic1111: [github.com/AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
* For best photoreal raw quality: [flux.md](flux.md). For best aesthetics: [midjourney.md](midjourney.md).
