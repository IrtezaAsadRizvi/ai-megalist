# Midjourney: AI image generator for aesthetic-first work

Midjourney is the AI image generator that keeps winning aesthetic comparisons against [Flux](flux.md), [Ideogram](ideogram.md), and [Stable Diffusion](stable_diffusion.md). It's still the model I reach for when the goal is "make something that looks good," in the bare meaning of those words. Other tools follow the prompt more literally; Midjourney makes things you actually want to print. I've spent a stupid number of evenings prompting it.

## What it actually is

A closed source diffusion model accessed through a web app at [midjourney.com](https://www.midjourney.com) (and historically through Discord, which is being phased down in 2026). The current model is V7. There is no API for production yet, which is a meaningful constraint if you're building.

## Setup

1. Go to [midjourney.com](https://www.midjourney.com), sign in with email or Google.
2. Subscribe - Basic ($10/mo, ~200 images), Standard ($30/mo, unlimited Relax mode), Pro ($60/mo, Stealth Mode for private generations).
3. The web UI is the canonical interface now. Discord still works for legacy users.
4. (Optional) Connect your Discord account to import old creations.

Five minutes to first image.

## How I use it day to day

* **Imagine → variations → upscale.** Generate four candidates, pick the closest, run variations, then upscale. The whole loop takes ~2 minutes.
* **Style references.** `--sref <url>` pulls aesthetic from another image. `--cref <url>` for character consistency across generations. These two flags do most of the work in a real project.
* **Aspect ratio early.** `--ar 16:9` or `--ar 3:4` at the prompt; the composition changes a lot if you set it later.
* **Mood boards.** I often generate 30 images for a single concept and pull the best 3 into Figma. Cheap iteration is the point.
* **For text in images**: don't. Midjourney is at maybe 30 to 40% text accuracy on V7. Use Ideogram for posters and logos.

## Gotchas

* No public API in 2026. If you need to integrate generation into a product, look at Flux or Imagen instead.
* Style consistency across a series is doable with `--cref` and `--sref` but takes practice.
* The image rights vary by tier. Free / Basic users grant Midjourney broad rights; Pro Stealth keeps your prompts and outputs private.
* The community feed is the best learning surface and the best distraction. Discipline yourself.
* Prompt syntax has accumulated cruft over years. The official docs are the only reliable reference.

## Alternatives

* Need accurate text in images (posters, logos, UI mocks)? [Ideogram](ideogram.md) is the right pick.
* Want a real production API and open weights? [Flux](flux.md) is what you wire into a product.
* Want full control and local generation? [Stable Diffusion](stable_diffusion.md) + [ComfyUI](comfyui.md) is the path.
* For one-click photo edits rather than generation, look at [Photoshop GenFill](photoshop_genfill.md) or [Magnific](magnific.md).

## FAQ

### Is Midjourney free?

No. The cheapest tier is Basic at $10/mo (~200 images). There's been an occasional limited free trial; don't plan around it.

### Does Midjourney have an API?

Not officially in 2026. There's no public API. If you're building a product that needs programmatic image gen, use [Flux](flux.md) or Imagen instead.

### Midjourney vs Flux - which is better?

Aesthetics: Midjourney still wins blind tests. Production use: [Flux](flux.md) wins on prompt adherence, an actual API, and the option to run locally. Pick by use case.

### Can Midjourney generate text in images?

Poorly. V7 lands around 30-40% text accuracy. For posters, logos, or anything with words on it, use [Ideogram](ideogram.md).

### Are Midjourney images copyright-free?

Tier-dependent. Free and Basic users grant Midjourney broad rights to their generations. Pro Stealth keeps prompts and outputs private. Read the terms before commercial use - they shift.

## Pointers

* [midjourney.com/help](https://docs.midjourney.com)
* For text rendering: [ideogram.ai](https://ideogram.ai)
* For an open source alternative you can run locally: [Stable Diffusion](stable_diffusion.md) + [ComfyUI](comfyui.md).
* For programmatic use: [blackforestlabs.ai](https://blackforestlabs.ai) (Flux) has a real API.
