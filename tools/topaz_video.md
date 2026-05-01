# Topaz Video AI

Topaz Video AI is the desktop app that runs offline, eats GPU cycles, and produces the cleanest upscale of a 480p source I've used. It's not glamorous and it's not in your browser; it's a Mac or Windows app you install, point at a file, and let run for hours. The output is what makes it worth it.

## What it actually is

A desktop application by Topaz Labs for video enhancement. Runs locally on macOS, Windows, and Linux. Includes models for upscaling (low res to 4K), interpolation (low FPS to high FPS), denoising, and stabilization. Perpetual license model (you buy a version) with optional yearly upgrade subscription.

## Setup

1. Buy and download from [topazlabs.com/topaz-video-ai](https://www.topazlabs.com/topaz-video-ai). Free trial available with watermarked output.
2. Install. The app is a few hundred MB; the model files are downloaded on demand.
3. Drag a video onto the app. Pick an enhancement: Upscale, Frame Interpolation, Denoise, Stabilize, or chained combinations.
4. Pick a model variant; each has trade offs (speed vs quality, motion handling vs static handling).
5. Run. A 1080p to 4K upscale of an hour long video can take many hours on consumer GPUs.

## How I use it day to day

I use it occasionally, not daily:

* **Old footage I want to keep.** Family videos from a decade ago, recorded on whatever phone I had then. Topaz takes them from "unwatchable on a 4K TV" to "watchable."
* **Archival material for video projects.** Vintage footage upscaled cleanly looks better than the same footage upscaled by free tools.
* **Frame interpolation for slow motion.** When the original wasn't shot at high frame rate but I want a smooth slow motion effect.

This is a render and walk away tool. Don't expect snappy iteration.

## Gotchas

* Speed is brutally GPU bound. On an M series Mac it's tolerable; on an older machine plan for overnight runs.
* The model choice matters and isn't obvious. The "Apollo" / "Iris" / "Proteus" / etc. lineup keeps changing; experiment on a one minute sample before committing to the full file.
* Output can introduce artifacts (over smoothing, ghost frames in interpolation). Always preview a section before exporting the whole file.
* Pricing model is one time purchase plus optional renewals; if you skip renewals your existing version still works, but new models lock to the upgrade.

## Pointers

* Web: [topazlabs.com/topaz-video-ai](https://www.topazlabs.com/topaz-video-ai)
* Pricing: perpetual license per major version; Pro tier for higher resolution exports.
* Pairs with [topaz_photo.md](topaz_photo.md) for stills, [magnific.md](magnific.md) for AI upscaling of single images with creative reinterpretation, and [descript.md](descript.md) for the editing side of a video project.
