# Topaz Photo AI: pro denoise and upscale for photographers

Topaz Photo AI sits in the image editing category alongside [Magnific](magnific.md), [Photoshop Generative Fill](photoshop_genfill.md), and [Clipdrop](clipdrop.md), but specifically for restoration rather than reinterpretation. Topaz Photo AI is the desktop app pro photographers reach for when they need to fix issues conventional tools can't. Where Magnific invents detail and Photoshop's Super Resolution applies a generic upscaler, Topaz combines specialised models for denoise, sharpen, recover, and upscale into one workflow tuned for photographic quality. The output is restoration, not reinterpretation.

## What it actually is

A desktop app for macOS and Windows from Topaz Labs. Bundles models for:
* **Denoise AI**: clean noise from high ISO photos.
* **Sharpen AI**: recover detail in soft / motion blurred photos.
* **Gigapixel**: upscale up to 6x with detail preservation.
* **Recover Faces**: restore facial detail in low resolution photos.

The app auto detects what each photo needs and proposes a workflow.

## Setup

1. Download from [topazlabs.com](https://www.topazlabs.com). Free trial.
2. Pricing: Photo AI $159 (one time, includes 1 year of model updates). Renewal optional.
3. Install. The app supports drag and drop or batch processing.
4. Drop a photo in. Topaz analyses; suggests denoise / sharpen / upscale / recover faces as applicable.
5. Adjust intensities; preview side by side; save.

## How I use it day to day

* **Honest:** I've used Topaz on personal photos (low light family photos, archival scans). Not a daily tool.
* **High ISO denoising.** Indoor / night photos at ISO 6400+ get cleaned up dramatically while preserving texture. Better than Adobe's denoise in most cases.
* **Recovering soft photos.** Slight motion blur or slightly missed focus. Topaz's Sharpen AI recovers detail; doesn't always work but worth trying before deletion.
* **Upscaling old photos.** Family scans, archival photos. Gigapixel adds plausible detail without the "AI hallucination" feeling.
* **Face recovery on low res images.** Wedding or event photos shot at distance; Topaz can recover usable faces.
* **Batch processing** for many similar photos. A wedding shoot with 200 photos in similar conditions; one config; batch run overnight.

## Gotchas

* The output is restoration biased. For invented detail (Magnific's strength), Topaz isn't the right tool.
* Auto detection is good not perfect. For best results, override the suggestions when you know the photo's actual issues.
* Pricing is one time + optional renewal. Updates are real (new models ship); skipping renewal freezes you.
* Some photos don't have detail to recover; Topaz can amplify what's there but can't conjure what was never captured.
* For video upscaling, see Topaz Video AI (separate product).

## Alternatives

* If you want generative upscaling that invents detail (the "make this look better than it ever did" approach), [Magnific](magnific.md) is the right pick.
* If you want broader photo edits (background removal, relight, replace), [Clipdrop](clipdrop.md) covers more ground in one tool.
* If you want inpainting and outpainting inside a familiar editor, [Photoshop Generative Fill](photoshop_genfill.md) is the path.
* If you want OSS and don't mind scripting, Real-ESRGAN and GFPGAN are credible free alternatives.

## FAQ

### Is Topaz Photo AI free?

No - it's $159 one-time, which includes a year of model updates. The free trial works but watermarks output. Renewal is optional; skipping it freezes you at the current model versions.

### Topaz Photo AI vs Magnific - which should I use?

Different jobs. Topaz is restoration-biased - clean noise, recover detail that's actually there. [Magnific](magnific.md) invents plausible detail, which is what you want for "make this 8K poster" use cases. For archival scans, use Topaz; for hero shots, try both.

### Does Topaz work as a Lightroom or Photoshop plugin?

Yes - it integrates with Lightroom Classic and Photoshop as a plugin/external editor in addition to running standalone. Useful if your existing pipeline lives in Adobe.

### Can Topaz upscale heavily compressed JPEGs?

Partially. Recovery is bounded by what's actually in the file - Topaz amplifies signal, it doesn't conjure detail that was never captured. For badly compressed sources, expect improvement but not magic.

## Pointers

* [topazlabs.com/topaz-photo-ai](https://www.topazlabs.com/topaz-photo-ai)
* For AI generative upscaling (more detail invention): [magnific.md](magnific.md).
* For all in one online editing toolkit: [clipdrop.md](clipdrop.md).
* For free / open source: Real-ESRGAN, GFPGAN are credible alternatives if you'll script.
