# CharaVox: multilingual character voice generation + voice cloning

CharaVox sits in the voice cluster alongside [ElevenLabs](elevenlabs.md), [PlayHT](playht.md), and [Fish Audio](https://fish.audio/), differentiated by role-specific voice pages — instead of starting from a blank prompt, you browse conversion-ready AI voice pages for support agents, podcast hosts, sales reps, and game characters, then route directly into the voice generator. Powered by the open-source [VoxCPM](https://github.com/OpenBMB/VoxCPM) model.

## What it actually is

A commercial AI voice platform with three core surfaces: character voice generation, voice cloning, and studio-quality TTS. Supports 6 languages out of the box (English, Chinese, Japanese, Korean, Spanish, Portuguese). The catalog is browseable by role (support, sales, creator-audio, business-communication), by language, and by voice tags. Each role-specific page is built to match search intent and route visitors into the voice generator. Includes a community voice library and a sound-effects catalog.

## Setup

1. Visit [charavox.com](https://charavox.com) and sign in.
2. Browse the voice library by role or language.
3. Pick a voice, paste your script, generate.
4. For voice cloning, follow the in-app clone workbench flow.

## How I use it day to day

* **Role-specific voice pages.** When I need a "support agent" or "podcast host" voice for a project, I start from the curated role page rather than describing the voice from scratch. Saves 10+ minutes of prompt iteration.
* **Multilingual content.** Six languages with consistent voice personas across them — useful when the same script needs to land in en/zh/ja/ko/es/pt without re-casting.
* **Cloning.** Upload a short sample to clone a voice; quality is competitive with other VoxCPM-based implementations.

## Pricing

Tiered subscription with a free tier; check [charavox.com/pricing](https://charavox.com/pricing) for current numbers.

## When to pick something else

* **Sub-100ms realtime agent latency:** go to [Cartesia](cartesia.md) or [OpenAI Voice](openai_voice.md).
* **11,000+ voice library, dubbing at scale:** go to [ElevenLabs](elevenlabs.md).
* **Self-host / on-prem:** go to [Suno Bark](suno_bark.md) (`OSS`) or the raw [VoxCPM](https://github.com/OpenBMB/VoxCPM) weights.
