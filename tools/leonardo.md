# Leonardo

Leonardo is the AI image platform tilted toward game art and asset generation. Where Midjourney and FLUX optimise for "single beautiful image," Leonardo optimises for "consistent assets, fine tunable models, controllable composition." For game studios, indie devs, and brand teams generating a series of related images, Leonardo's tools fit better than the more prompt centric competitors.

## What it actually is

A web app at [leonardo.ai](https://leonardo.ai) with image generation, custom model training, image to image, ControlNet, and an Asset Generator (texture maps, sprites, icons). Models include Leonardo's own Phoenix, Lucid Realism, and Anime XL plus access to FLUX, Stable Diffusion variants.

## Setup

1. Go to [leonardo.ai](https://leonardo.ai), sign up.
2. Free tier: 150 daily tokens (~10 images).
3. Pricing: Apprentice $12/mo, Artisan $30/mo, Maestro $60/mo (annual). Token allowances scale.
4. Generate page: type a prompt, pick a model, set image size, click generate.
5. (Optional, for series work) Train a custom model on 10+ reference images. Takes 30 minutes.

## How I use it day to day

* **Honest:** I've used Leonardo for evaluation; default to Midjourney / FLUX for personal projects.
* **Game asset generation.** Tilesets, character sprites, UI icons. The Asset Generator + Real Time Canvas streamline this.
* **Custom model training** on a brand or character. Faster than building a LoRA in ComfyUI; comparable quality in many cases.
* **Real Time Canvas.** Sketch + prompt, see generation update live. Comparable to Krea but tighter integration with Leonardo's models.
* **ControlNet for composition.** Pose, depth, edges from a reference. Useful for character consistency across scenes.
* **3D textures.** Leonardo supports texture map generation (diffuse, normal, roughness) which is unique among the major image tools.

## Gotchas

* The model picker is large; quality varies. Phoenix is the headline; some older models still ship and are worse.
* Tokens scale by model + features used. ControlNet and high quality settings burn faster.
* For pure photoreal aesthetic without asset workflow concerns, [flux.md](flux.md) or [midjourney.md](midjourney.md) are simpler.
* The Realtime Canvas is great in concept; quality at the realtime preview is below the final generation. Plan two passes.
* Some features (3D textures, certain models) are higher tier locked. Read the plans page.

## Pointers

* [leonardo.ai](https://leonardo.ai)
* For peak aesthetic: [midjourney.md](midjourney.md). For peak photoreal: [flux.md](flux.md).
* For node based local workflows: [comfyui.md](comfyui.md).
* For pure brand consistency in vector + raster: [recraft.md](recraft.md).
