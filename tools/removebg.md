# Remove.bg: one-click background removal

Remove.bg sits in the image editing category, the single-feature specialist alongside [Clipdrop](clipdrop.md). Remove.bg is one of the original AI image tools - single feature, one click, faster than learning to do it manually. The product hasn't changed much since 2018 because the basic job (remove the background from a photo) didn't need to. The technology underneath has improved; the value proposition is unchanged.

## What it actually is

A web app at [remove.bg](https://www.remove.bg). Upload an image; AI cuts out the foreground; download with transparent background. Plus integrations: Photoshop plugin, API, Sketch plugin, Figma plugin, Windows / macOS desktop app. From Kaleido AI (Vienna).

## Setup

1. Go to [remove.bg](https://www.remove.bg).
2. Drop an image. Free preview at low resolution.
3. Sign up for full resolution (1 free credit per signup).
4. Pricing: Pay as you go ($1 to $9 per credit), Subscription ($9 to $99/mo for 40 to 1000 images).
5. (Optional) API key for programmatic use.
6. (Optional) Photoshop / Figma plugins for in app integration.

## How I use it day to day

* **Honest:** When all I need is "background removed," I open Remove.bg. It's the fastest path.
* **Single image quick edits.** Drop, click, download. 10 seconds.
* **API for automation.** Wired into a small script for a friend's e commerce site that removes backgrounds on uploaded product photos.
* **Photoshop plugin** for the times I'm already in Photoshop. Single click; the result lands as a layer.
* **Bulk processing** on the subscription tier. 100 product photos in a few minutes; consistent quality.

## Gotchas

* Quality is excellent on most subjects, weaker on hair / fur with complex backgrounds. For premium product / fashion photography, manual touch up is sometimes needed.
* Free preview is low resolution; full resolution requires credits.
* For broader image editing toolkit (cleanup, upscale, relight, generate backgrounds), [clipdrop.md](clipdrop.md) bundles background removal with more.
* Single feature focus is both the strength and the limitation. For one off needs, fastest. For workflows, alternative tools have more.
* Pricing per image adds up at scale; subscription is the floor for heavy use.

## Alternatives

* If you want broader edits (cleanup, upscale, relight), [Clipdrop](clipdrop.md) is the wider toolkit.
* If you're already inside Photoshop, [Photoshop Generative Fill](photoshop_genfill.md) plus the Object Selection tool handles backgrounds in-place.
* If you want OSS local removal with no per-image cost, rembg ([github.com/danielgatis/rembg](https://github.com/danielgatis/rembg)) is the right pick.

## FAQ

### Is Remove.bg free?

You get one free credit on signup and free low-resolution previews. Full-resolution downloads cost credits - $1-$9 each pay-as-you-go, or a subscription from $9/mo for 40 images up to $99/mo for 1000. For occasional use, pay-as-you-go is fine.

### Does Remove.bg have an API?

Yes. The API is straightforward and well-documented; useful for wiring into upload flows on e-commerce sites or scripting batch jobs.

### How good is Remove.bg on hair?

Decent on simple backgrounds, weaker on complex ones. For premium product or fashion photography with fine detail (hair, fur, transparent fabrics), expect to do manual touch-up in Photoshop or Affinity.

## Pointers

* [remove.bg](https://www.remove.bg)
* For broader image editing: [clipdrop.md](clipdrop.md), Photoshop's Object Selection + Subject Selection.
* For OSS alternative: rembg ([github.com/danielgatis/rembg](https://github.com/danielgatis/rembg)).
* The Remove.bg blog has interesting case studies on edge case backgrounds.
