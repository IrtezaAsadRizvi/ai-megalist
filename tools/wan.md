# Wan 2.x: Alibaba's open-weights video models

Wan is Alibaba's bet on open video. The 2.x line (Wan 2.1, 2.2, and successors) shipped weights you can actually download, with quality that has, in head-to-head tests, beaten closed providers on certain motion benchmarks. Pair this with [HunyuanVideo](hunyuan_video.md) and you have the two open-weights options serious people use when they want to build on video without an API contract.

## What it actually is

A family of diffusion-transformer video models from Alibaba's Tongyi lab. Apache 2.0 licensed (a meaningful contrast with HunyuanVideo's custom license). Multiple variants: small (1.3B) for consumer cards, big (14B) for serious work. Supports text-to-video, image-to-video, video-to-video, and "first-and-last-frame" generation. Resolutions up to 720p+ depending on variant; durations of several seconds.

## Setup

1. **Easiest:** run on [Replicate](replicate.md), [Fal.ai](https://fal.ai), or HuggingFace Inference Endpoints.
2. **Local:** clone github.com/Wan-Video/Wan2.1 (or the current 2.x repo). The 1.3B variant runs on a 12GB card with quantization; the 14B model wants 24GB+.
3. **In ComfyUI:** Wan nodes are first-class; GGUF / FP8 quantized models available for consumer hardware.
4. (Optional) Fine-tune via the Diffusers integration once it's stabilized for your target variant.

## How I use it day to day

* **Open-weights baseline** for video projects where I want to control the stack.
* **Image-to-video** for animating still concepts I generated in [Flux](flux.md) or [Midjourney](midjourney.md).
* **Apache 2.0 license** makes it the cleaner pick when I want to ship something commercial without license worry.
* **ComfyUI pipelines** that chain image gen → Wan → upscale.

## Gotchas

* Like all video models, prompt engineering matters - "cinematic, slow dolly in, soft natural light" outperforms vague prompts.
* Motion realism is good but not [Veo 3.1](veo.md) good. Closed frontier still leads on that axis.
* The 14B model is heavy. Consumer-card users live with the small variant or quantized big.
* Updates ship frequently; the "best" Wan model changes month to month.

## Alternatives

* [HunyuanVideo](hunyuan_video.md) - the other major open-weights video model.
* [Veo 3.1](veo.md) - closed quality leader, native audio.
* [Runway](runway.md) / [Kling](kling.md) - closed, polished creative controls.
* [LTX-Video](https://github.com/Lightricks/LTX-Video) - OSS, optimized for speed over peak quality.
* [Stable Video Diffusion](stable_diffusion.md) - older OSS option; mostly superseded.

## FAQ

### Is Wan free?

Yes - Apache 2.0 weights and code. You pay for compute.

### Wan vs HunyuanVideo?

The frontier shifts. Wan tends to win on motion quality; [HunyuanVideo](hunyuan_video.md) has had more community tooling. Apache 2.0 license is a real win for Wan when you ship commercial work.

### Can I run Wan on my MacBook?

Smallest variants with quantization, very slowly. Cloud GPUs are the practical path for anything beyond toy generation.

### Does Wan do audio?

Not natively - it's video-only. Add audio post with [ElevenLabs](elevenlabs.md) or [Suno](suno.md). Compare with [Veo](veo.md) which generates audio natively.

### Can I fine-tune?

Yes - the community has shipped LoRA fine-tuning pipelines for Wan. Hardware requirements are nontrivial.

## Pointers

* GitHub: [github.com/Wan-Video](https://github.com/Wan-Video)
* HuggingFace: search "Wan-AI" for current model variants.
* Tongyi: [tongyi.aliyun.com](https://tongyi.aliyun.com)
* For the other OSS video heavyweight, see [hunyuan_video.md](hunyuan_video.md).
