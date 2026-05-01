# Magnific

Magnific is the AI image upscaler that doesn't look upscaled. Where most upscalers smooth and blur, Magnific *generates new detail* consistent with what's in the source — pores on a face, threads on fabric, individual leaves on a tree. The output is sometimes more detailed than the original photograph, which is the unsettling and fun part.

## What it actually is

A web app at [magnific.ai](https://magnific.ai) for AI upscaling and image enhancement. Two main products: Upscale (4x or 8x with detail synthesis) and Relight (re illuminate a scene). Models are proprietary, built on top of diffusion. Pricing is per credit.

## Setup

1. Go to [magnific.ai](https://magnific.ai), sign up.
2. Pricing: Pro $39/mo (1750 credits), Premium $99/mo (5500), Business $299/mo (20000).
3. No free tier; small free trial on signup.
4. Drag an image in. Choose Creativity (low = preserve original; high = invent more detail), HDR, Resemblance, Fractality (advanced controls). Generate.
5. Wait ~1 to 2 minutes. Get an upscaled version 4x or 8x larger.

## How I use it day to day

* **Honest:** I've used Magnific for personal projects; not in production daily.
* **Upscaling Midjourney / FLUX outputs.** Generate at 1024x1024 in MJ, upscale to 4096x4096 in Magnific. The upscale isn't just bigger; it's more detailed.
* **Old photos.** Upscale and enhance low res family photos. Mileage varies; sometimes amazing, sometimes the AI invents weird details.
* **Product photography.** Existing product shots upscaled with detail synthesis for billboards / print.
* **Relight.** Take a flat lit photo; relight with directional light or a sunset. The Relight feature is newer and improving.
* **Creativity slider matters.** Low for "make it bigger"; high for "make it look like a different photo." Most uses sit around 3 to 5 (out of 10).

## Gotchas

* Magnific can hallucinate details that weren't in the source. For documentary or factual photos, this is a problem.
* Faces on high creativity look glamorised — different person territory. Use low creativity for portraits.
* Pricing is steep. The cheapest plan is $39/mo; the credits go fast on 8x upscales.
* Output is heavily processed; sometimes the post processing look (unrealistic micro detail) is undesirable. Tune controls.
* For pure resolution increase without detail synthesis: Topaz Photo AI or simple bilinear upscaling in Photoshop. Magnific is for adding detail.

## Pointers

* [magnific.ai](https://magnific.ai)
* For pro photo upscaling: [Topaz Photo AI](https://www.topazlabs.com/topaz-photo-ai).
* For video upscaling: Topaz Video AI.
* For built in Photoshop: Adobe Camera Raw + Super Resolution (free with Photoshop).
