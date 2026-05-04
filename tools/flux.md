# FLUX: photoreal image gen with a real production API

FLUX is the image-gen alternative to [Midjourney](midjourney.md) and [Stable Diffusion](stable_diffusion.md) when you need a production API or open weights you can run yourself. It's developed by Black Forest Labs (a team that left Stability AI) and unlike Midjourney it has a real production API, which is why most apps that need image gen at scale point at FLUX.

## What it actually is

A family of diffusion models for text to image: FLUX 1.1 Pro (highest quality, paid), FLUX.1 Dev (open weights, non commercial), FLUX.1 Schnell (open weights, Apache 2.0, fast). The Pro model is API only; Dev and Schnell run on consumer GPUs. Photorealism is the strong suit; legible text is decent (better than Midjourney, behind Ideogram).

## Setup

### Use the hosted API
1. Sign up at [api.bfl.ai](https://api.bfl.ai) (Black Forest Labs).
2. Get an API key. ~$0.04 per image on FLUX 1.1 Pro, $0.06 on Ultra.
3. POST to `https://api.bfl.ai/v1/flux-pro-1.1` with a prompt.
4. Or use Replicate, fal.ai, Together, Fireworks - all host FLUX with friendlier SDKs.

### Run locally (Dev or Schnell)
1. Install ComfyUI: [comfy.org](https://www.comfy.org).
2. Download FLUX.1 Dev or Schnell weights from Hugging Face (~24 GB for Dev).
3. Drop into `ComfyUI/models/checkpoints/`.
4. Need 16 GB+ VRAM for Dev at full precision; quantized variants run on 12 GB.

## How I use it day to day

* **Production image gen.** FLUX 1.1 Pro via Replicate's API, called from a Cloudflare Worker. Images appear in <5 seconds.
* **Style references.** FLUX supports image conditioning (FLUX.1 Redux) for "make more like this." Useful for keeping a brand consistent.
* **Local for experimentation.** I run Schnell locally for prompt tuning where each iteration takes 1 to 2 seconds. Fewer credits burned on bad ideas.
* **Comparing outputs.** Same prompt across FLUX, Midjourney, and Ideogram - they produce genuinely different images. FLUX leans photoreal, Midjourney aesthetic, Ideogram readable text.

## Gotchas

* FLUX 1.1 Pro Ultra mode is excellent and expensive. Use it for finals, not iteration.
* Dev's license forbids commercial use of generated images directly; check before shipping.
* Local FLUX is heavy. If you have a 12 GB or smaller GPU, prefer Schnell or quantized Dev.
* Prompt style matters. FLUX likes natural language sentences; Midjourney likes comma separated tags. Move from one to the other and you'll get different results until you adjust.
* The hosted endpoints have content policies. Adult content is blocked on Pro; for that, run locally.

## Alternatives

* If you want the aesthetic ceiling for one-off creative work and don't care about an API, [Midjourney](midjourney.md) is still the pick.
* For a fully open-source local stack with the LoRA / ControlNet ecosystem, [Stable Diffusion](stable_diffusion.md) plus [ComfyUI](comfyui.md) is the path.
* If your images need legible text (posters, logos, UI mocks), [Ideogram](ideogram.md) is sharper than FLUX.
* For commercially-safe generation tied to your Adobe stack, [Adobe Firefly](adobe_firefly.md) is the safer corporate pick.

## FAQ

### Is FLUX free?

The Schnell variant is open-weights under Apache 2.0 - free to use commercially if you run it yourself. Dev is open-weights but non-commercial. Pro is API-only at ~$0.04 per image, Ultra at ~$0.06. No free hosted tier worth planning around.

### FLUX vs Midjourney - which is better?

Different jobs. [Midjourney](midjourney.md) wins blind aesthetic tests and is the move for creative one-offs. FLUX wins on prompt adherence, has a real API, and gives you open weights you can run locally. For products, FLUX. For art, Midjourney.

### Can FLUX run locally?

Yes - Dev and Schnell variants. You'll want 16GB+ VRAM for Dev at full precision; quantized variants run on 12GB. Schnell is faster (1-2 seconds per image on a decent GPU) and the right pick for prompt iteration.

### Can FLUX render text in images?

Decently - better than Midjourney, behind [Ideogram](ideogram.md). For short text (a sign, a label) FLUX is fine. For posters, logos, or anything where the words have to be exact, use Ideogram.

### Is FLUX safe for commercial use?

Schnell yes (Apache 2.0). Dev no (non-commercial license). Pro via API yes, but read BFL's terms before shipping. The license confusion has burned at least one team I know - check before depending on a specific variant.

## Pointers

* Black Forest Labs: [blackforestlabs.ai](https://blackforestlabs.ai)
* Models on Hugging Face: [huggingface.co/black-forest-labs](https://huggingface.co/black-forest-labs)
* For node graph workflows: [comfyui.com](https://www.comfy.org).
* The hosted alternatives ([replicate.com](https://replicate.com), [fal.ai](https://fal.ai)) are cheaper and faster than the BFL API for casual use.
