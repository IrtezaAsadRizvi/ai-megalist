# Seedance

Seedance is ByteDance's AI video model, and it kept showing up in blind creator tests in 2026 with output that surprised people. Especially strong on motion physics — characters walking, fluid dynamics, complex camera moves through cluttered spaces — Seedance covers a domain where Veo, Runway, and Kling sometimes wobble.

## What it actually is

A text and image to video model from ByteDance Seed (the same group behind Doubao). Available globally via partner platforms (fal.ai, Replicate, Krea) and through ByteDance's own apps. Generates 5 to 10 second clips at 1080p; image to video with reference frame and motion prompts.

## Setup

### Via fal.ai
1. Sign up at [fal.ai](https://fal.ai). API key.
2. Quick test:
   ```bash
   curl -X POST https://fal.run/fal-ai/seedance/text-to-video \
     -H "Authorization: Key $FAL_KEY" \
     -H "content-type: application/json" \
     -d '{"prompt": "a fox runs across a snowy field"}'
   ```

### Via Replicate
1. Sign up at [replicate.com](https://replicate.com).
2. Same idea; pay per generation.

### Via Krea
1. [Krea](https://www.krea.ai) wraps Seedance among other video models in a unified UI.

## How I use it day to day

* **Honest:** I've used Seedance in A/B comparisons; not as my default video model.
* **Motion heavy scenes.** Sports, dancing, vehicles, animals. Seedance captures motion physics more reliably than the average competitor.
* **Image to video with strong source fidelity.** Drop a still; the resulting motion respects the source style and composition closely.
* **Camera moves through cluttered space.** Walking through a forest, a market, a city. Seedance maintains consistency where Runway sometimes warps.
* **As one of the models I A/B.** I run the same prompt across Veo, Runway, Kling, Seedance; pick best per project. Krea makes this convenient.

## Gotchas

* Direct API access varies by region; partner platforms (fal, Replicate, Krea) are the easiest path for most users.
* Audio is not natively generated. Add SFX and music separately.
* Quality on certain stylised outputs (anime, abstract motion) lags more specialised models.
* Cost varies across hosts; compare before committing volume.
* The model is from ByteDance; some enterprises in regulated industries prefer Western hosted alternatives.

## Pointers

* [seed.bytedance.com](https://seed.bytedance.com)
* Hosted on [fal.ai](https://fal.ai), [replicate.md](replicate.md), [krea.md](krea.md).
* Compare with [veo.md](veo.md) (best all round + audio), [runway.md](runway.md) (directorial control), [kling.md](kling.md) (long durations + value).
