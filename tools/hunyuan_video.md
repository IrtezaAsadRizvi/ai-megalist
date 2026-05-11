# HunyuanVideo: Tencent's open-weights text-to-video model

HunyuanVideo is the moment open-weights video caught up enough to feel real. Tencent released a 13B-parameter video model with weights and code in late 2024; the quality genuinely competed with closed Runway/Kling outputs of the same era. It's where you go when you want to fine-tune a video model, run it on your own GPU, or build a product on top without paying per-clip to a closed provider.

## What it actually is

A 13B-parameter diffusion-transformer video model from Tencent. Open weights (custom license; commercial use allowed under conditions). Text-to-video at up to ~720p, 5-second clips out of the box; community forks push duration and resolution further. Image-to-video, LoRA fine-tuning, and ControlNet-style conditioning have all been added by the community via ComfyUI nodes and Diffusers integrations.

## Setup

1. **Easiest:** [Replicate](replicate.md), [Fal.ai](https://fal.ai), or a HuggingFace Inference endpoint - prompt-in, video-out, no install.
2. **Local (serious GPU required):** clone github.com/Tencent/HunyuanVideo. The reference setup needs ~60GB VRAM at full precision; quantized variants run on a 24GB card (4090, 3090) with patience.
3. **In ComfyUI:** install the HunyuanVideo nodes; load the GGUF / FP8 quantized model for consumer cards.
4. (Optional) Train a LoRA on a few seconds of reference footage for character/style consistency.

## How I use it day to day

* **OSS baseline** to compare against [Veo](veo.md), [Runway](runway.md), and [Kling](kling.md) when evaluating closed models.
* **Local generation** for content I'd rather not push through a cloud provider's moderation layer.
* **LoRA fine-tuning** for character consistency across clips - the closed providers don't let you do this.
* **ComfyUI workflows** that chain HunyuanVideo with [Flux](flux.md) (image-to-video pipelines) or upscaling.

## Gotchas

* The hardware bar is real. Even quantized, you want a 24GB+ card and patience. Cloud is the practical path for casual use.
* The reference repo evolves fast. Pin a commit if you're shipping a product.
* Default output is short and low-res by frontier standards. Community workflows push further but quality degrades.
* The license is custom - allows commercial use under conditions. Read it before building a SaaS on top.

## Alternatives

* [Wan 2.x](wan.md) - Alibaba's open-weights video, often higher quality at the same parameter range.
* [Veo 3.1](veo.md) - closed; current quality leader for all-rounder use.
* [Runway](runway.md) / [Kling](kling.md) - closed; pro creative controls.
* [LTX-Video (Lightricks)](https://github.com/Lightricks/LTX-Video) - OSS, optimized for very fast inference.
* [Genmo Mochi](https://github.com/genmoai/models) - another OSS contender.

## FAQ

### Is HunyuanVideo free?

The weights are free under a custom license; you pay for compute (your own GPU or a cloud provider like [Replicate](replicate.md)).

### HunyuanVideo vs Wan 2.x?

Both are open-weights Chinese-lab video models. [Wan](wan.md) tends to win on motion quality; HunyuanVideo wins on community tooling and ComfyUI integration. The frontier moves fast - check current comparisons.

### Can I run it on a Mac?

Theoretically with MLX/quantized variants, but expect very slow generation. Cloud is the practical path.

### Can I fine-tune it?

Yes - LoRA training is supported by the community tooling. Hardware requirements are nontrivial; cloud GPUs are usually the move.

### What's the license?

Custom Tencent license; allows commercial use with conditions (notably around model derivatives and certain market restrictions). Check the LICENSE file.

## Pointers

* GitHub: [github.com/Tencent/HunyuanVideo](https://github.com/Tencent/HunyuanVideo)
* Project page: [aivideo.hunyuan.tencent.com](https://aivideo.hunyuan.tencent.com)
* HuggingFace: search "tencent/HunyuanVideo"
* For the other major open-weights video model, see [wan.md](wan.md).
