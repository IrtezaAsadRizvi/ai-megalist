# Krea: real-time AI image generation as you type

Krea is in the image generation category alongside [Midjourney](midjourney.md) and [FLUX](flux.md), and the one I open when I want a real-time feedback loop instead of "prompt, wait, compare." Krea is the AI image tool with the fastest feedback loop. Real time generation as you type, real time enhancement on a sketch, real time control via brush. Where Midjourney and FLUX have a "prompt → wait → result" rhythm, Krea has a "drag → see → drag → see" rhythm that feels closer to working in Photoshop than working with a model.

## What it actually is

A web app at [krea.ai](https://www.krea.ai) for AI image and video generation with real time iteration. Features include Realtime (sub second generation as you type or sketch), Enhance (upscale + detail), Train (custom style models), and Video tools. Uses a mix of internal models, FLUX, and partner models (Runway, Kling, Veo).

## Setup

1. Go to [krea.ai](https://www.krea.ai), sign up.
2. Free tier: 50 daily generations.
3. Pricing: Basic $10/mo (Pro features, more credits), Pro $35/mo (highest tier).
4. Open Realtime. Type a prompt; the canvas updates as you type. Adjust the seed, the model, the strength.
5. (Optional) Train your own custom model on 5+ reference images.

## How I use it day to day

* **Realtime for quick iteration.** When I'm not sure what I want, the live preview lets me steer toward it without waiting between prompts. This is the unique value.
* **Sketch + Realtime.** Draw a rough composition; Krea fills in the style. Useful when I have a layout in mind but not the visual treatment.
* **Enhance** for upscaling Midjourney / FLUX outputs. Comparable to Magnific; sometimes cheaper.
* **Custom models trained on a brand or character.** Faster than dreambooth; produces consistent style for series work.
* **As a router.** Krea wraps multiple video / image models behind one UI. I use it to A/B Veo vs Runway vs Kling without juggling subscriptions.

## Gotchas

* Realtime quality at full speed is lower than waiting for a non realtime generation. Use Realtime to find direction, then commit to a final at higher quality.
* The UI moves fast; what I read about three months ago has often changed. Check current docs.
* Pro tier is the realistic floor for daily creative work; free tier is for evaluation.
* For pure raw image generation without the realtime loop, FLUX or Midjourney are simpler.
* Some features pass through to partner APIs and inherit their content policies.

## Alternatives

* If you want pure aesthetic peak without the realtime loop, [Midjourney](midjourney.md) is still the pick.
* If you want a real production API and open weights, [FLUX](flux.md) is the substrate.
* If you want game-asset workflows (sprites, textures, ControlNet), [Leonardo](leonardo.md) is closer to that job.
* If you want commercially safe outputs inside Adobe's stack, [Adobe Firefly](adobe_firefly.md) is the safer enterprise pick.

## FAQ

### Is Krea free?

Yes - the free tier covers 50 daily generations, enough to evaluate. Basic at $10/mo and Pro at $35/mo are the realistic floors for daily creative work.

### Krea vs Midjourney - which is better?

Different jobs. [Midjourney](midjourney.md) wins on raw aesthetic peak. Krea wins on the iteration loop - real-time generation as you type or sketch is unique and changes how I work when I don't know what I want yet.

### What is Krea Realtime?

Sub-second generation that updates the canvas as you type or sketch. Quality is below a single committed generation, but the feedback loop is the point - use it to find direction, then run a final at higher quality.

### Can Krea train custom models?

Yes - upload 5+ reference images and Krea trains a custom style model in roughly the time it takes to grab coffee. Faster than building a LoRA in [ComfyUI](comfyui.md); good enough for consistent series work.

### Does Krea generate video?

Yes - Krea wraps multiple video models (Veo, Runway, Kling) behind one UI. Useful for A/B-ing video models without juggling separate subscriptions.

## Pointers

* [krea.ai](https://www.krea.ai)
* For node based local control: [comfyui.md](comfyui.md).
* For pure aesthetic peak: [midjourney.md](midjourney.md).
* For commercial safe: [adobe_firefly.md](adobe_firefly.md).
