# Leonardo: AI image platform tilted toward game and asset work

Leonardo is in the image generation category alongside [Midjourney](midjourney.md) and [FLUX](flux.md), and the one I'd point a game studio or asset team at over more prompt-centric tools. Leonardo is the AI image platform tilted toward game art and asset generation. Where Midjourney and FLUX optimise for "single beautiful image," Leonardo optimises for "consistent assets, fine tunable models, controllable composition." For game studios, indie devs, and brand teams generating a series of related images, Leonardo's tools fit better than the more prompt centric competitors.

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

## Alternatives

* If you want peak aesthetic for one-off images, [Midjourney](midjourney.md) is still the pick.
* If you want a real production API and open weights, [FLUX](flux.md) is the substrate.
* If you want a real-time iteration loop instead of asset workflows, [Krea](krea.md) is closer to that shape.
* If you want full local control over LoRAs and ControlNet, [ComfyUI](comfyui.md) plus [Stable Diffusion](stable_diffusion.md) is the open-source path.

## FAQ

### Is Leonardo free?

Yes - 150 daily tokens (~10 images) on the free tier. Paid: Apprentice $12/mo, Artisan $30/mo, Maestro $60/mo. Tokens scale with model and features used; ControlNet and high-quality settings burn faster.

### Leonardo vs Midjourney - which is better?

Different jobs. [Midjourney](midjourney.md) wins on raw aesthetic for single images. Leonardo wins on series consistency, custom model training, and asset workflows (sprites, tilesets, texture maps). Game and brand teams pick Leonardo; mood-board and concept-art people pick Midjourney.

### Can Leonardo train custom models?

Yes - 10+ reference images, ~30 minutes to train. Faster than rolling a LoRA in [ComfyUI](comfyui.md), with quality that's competitive for series work where you need a consistent character or brand look.

### Does Leonardo do 3D textures?

Yes - it can generate diffuse, normal, and roughness maps. This is unique among the major image tools and is one of the strongest reasons a 3D / game team would pick Leonardo over Midjourney or FLUX.

### What is Leonardo's Real Time Canvas?

A sketch-and-prompt mode with a live preview, comparable in spirit to [Krea](krea.md) Realtime. Quality at the live preview is below the final generation - use it for direction-finding, then commit to a final.

## Pointers

* [leonardo.ai](https://leonardo.ai)
* For peak aesthetic: [midjourney.md](midjourney.md). For peak photoreal: [flux.md](flux.md).
* For node based local workflows: [comfyui.md](comfyui.md).
* For pure brand consistency in vector + raster: [recraft.md](recraft.md).
