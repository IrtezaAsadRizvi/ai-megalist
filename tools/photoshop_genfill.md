# Photoshop Generative Fill

Photoshop Generative Fill is the AI feature that justifies the Photoshop subscription on its own. Select an area, type what you want there (or leave blank to remove), click Generate. The first time you watch a power line vanish from a landscape photo cleanly, the rest of the AI image tools start to look ornamental — Generative Fill works inside the editor where the image already lives.

## What it actually is

A feature in Adobe Photoshop powered by Adobe Firefly (the same image model). Two main flavors:
* **Generative Fill** — fill a selection with prompted content (or remove with empty prompt).
* **Generative Expand** — extend the canvas in any direction; Photoshop fills the new area plausibly.

Both work non destructively (on a Generative Layer); commercially safe (Firefly trained on licensed content).

## Setup

1. Need a Photoshop subscription (Creative Cloud Photography $20/mo includes Photoshop + 250 generative credits/mo).
2. Photoshop 24.6 or later (likely already current).
3. In Photoshop: select an area (any selection tool works).
4. The Contextual Task Bar shows a "Generative Fill" button. Click; type prompt; click Generate.
5. Three variations appear; pick one or generate more.

## How I use it day to day

* **Removing unwanted objects.** Person photobombing a landscape; trash on a beach; a power line through the sunset. Select; Generate (no prompt); pick the cleanest result.
* **Generative Expand.** Crop too tight; need more sky / room / context. Use Crop tool, expand canvas, generate. The seam is invisible most of the time.
* **Adding elements.** "Add a tree" or "add a person walking on the path." Quality varies; usually a starting point that needs touch up.
* **Replacing backgrounds.** Select subject, invert selection, prompt for new background. Faster than masking + dropping in a stock photo.
* **The non destructive layer.** Every Generative Fill creates its own layer with the prompt embedded. Easy to revisit, regenerate, edit.

## Gotchas

* Generative credits are limited even at the cheapest tier. Heavy use blows through 250/mo fast.
* Quality on large fills is uneven. For big areas, work in patches.
* Hands and faces are still tricky. Generative Fill is best on backgrounds and inanimate objects.
* For the highest quality results on photoreal generation, FLUX or Midjourney still beat Firefly aesthetically. Generative Fill wins on integration.
* Some prompt variations get blocked by content policy. Adobe's filter is conservative.

## Pointers

* [adobe.com/products/photoshop](https://www.adobe.com/products/photoshop.html)
* For comparable inpainting in OSS: [comfyui.md](comfyui.md) with Stable Diffusion.
* For one click background removal specifically: [Remove.bg](https://www.remove.bg), [Clipdrop](https://clipdrop.co).
* For pure photoreal AI generation without editing: [flux.md](flux.md), [adobe_firefly.md](adobe_firefly.md) (the standalone product).
