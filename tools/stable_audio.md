# Stable Audio: Stability AI's text-to-audio model for SFX and beds

Stable Audio is Stability AI's text-to-audio model for SFX and instrumental beds, a different niche from full-song generators like [Suno](suno.md) and [Udio](udio.md), and overlapping with API-friendly libraries like [Mubert](mubert.md). Stable Audio is Stability AI's audio generation model - the audio counterpart to Stable Diffusion. Built around generating sound effects, ambient music, and short instrumental pieces from text prompts. For game developers, video creators needing custom SFX, and apps that want "type a vibe, get audio," Stable Audio fills a niche the song generators (Suno, Udio) don't.

## What it actually is

A web app at [stableaudio.com](https://stableaudio.com) and an API for the Stable Audio family of models. Generates up to 3 minute audio from text prompts. Strong on instrumental music, soundscapes, and SFX; weaker on full songs with vocals. There's also Stable Audio Open - open weights, runnable locally.

## Setup

1. Go to [stableaudio.com](https://stableaudio.com), sign up.
2. Free tier: limited generations.
3. Pricing: Pro $11.99/mo (500 monthly tracks), Studio $35.99/mo (1500), API tier separate.
4. Type a prompt: "Atmospheric ambient music with a slow building synth pad, 90 BPM, in C minor."
5. Generate. Pick from candidates. Download.

### Stable Audio Open (local)
1. Download weights from [huggingface.co/stabilityai/stable-audio-open-1.0](https://huggingface.co/stabilityai/stable-audio-open-1.0).
2. Run via the official inference repo or wrap in your own pipeline.
3. Free for non commercial use; commercial requires Stability membership.

## How I use it day to day

* **Honest:** I've used Stable Audio for one off SFX needs and for evaluation; not a daily tool.
* **SFX for video.** "Footsteps in gravel," "swooshing wind," "vintage cassette deck whirr." Faster than searching freesound.org and hoping for clean licensing.
* **Ambient music beds.** For long form video where Suno's vocal music is wrong, Stable Audio's instrumental output fits.
* **Game audio prototyping.** Generate placeholder SFX and ambience while real audio is in production.
* **Loops.** "Make it loop seamlessly" works on most short generations.
* **Stable Audio Open** for fully local audio generation when privacy / cost matters.

## Gotchas

* No vocals. For songs with lyrics, use Suno or Udio.
* Quality is reliable on common genres / SFX, weaker on niche or specific cultural sounds.
* Long generations (>1 minute) sometimes drift in quality. For longer pieces, generate sections and stitch.
* Pricing: per track on web, per second on API. Calculate carefully.
* Open weights are great for hacking; the hosted models are the higher quality option.

## Alternatives

* If you want full songs with vocals, [Suno](suno.md) is the polished default in 2026.
* If you want fine control and longer tracks (and are OK with the legal uncertainty), [Udio](udio.md) is the contender.
* If you want royalty-safe music behind a clean API, [Mubert](mubert.md) is shaped for that.
* If you're scoring film or game music with classical structure, [AIVA](aiva.md) is the genre specialist.

## FAQ

### Is Stable Audio free?

There's a limited free tier on the web. Pro is $11.99/mo (500 tracks); Studio is $35.99/mo (1500 tracks); API tier is separate. Stable Audio Open weights are free for non-commercial use locally.

### Can Stable Audio generate songs with vocals?

No - the model is built for instrumental music and sound effects. For songs with lyrics, use [Suno](suno.md) or [Udio](udio.md).

### Can I run Stable Audio locally?

Yes - Stable Audio Open weights are on Hugging Face under a non-commercial license. Hosted models are higher quality; commercial use of the open weights requires a Stability membership.

### Stable Audio vs Suno - which should I use?

Different jobs. [Suno](suno.md) is for full songs (vocals, structure, hooks). Stable Audio is for SFX and instrumental beds, with a real API. Pick by output type, not preference.

## Pointers

* [stableaudio.com](https://stableaudio.com)
* Open weights: [huggingface.co/stabilityai/stable-audio-open-1.0](https://huggingface.co/stabilityai/stable-audio-open-1.0)
* For full songs with vocals: [suno.md](suno.md), [udio.md](udio.md).
* For royalty safe API friendly music: [mubert.md](mubert.md).
* For film scoring: [AIVA](https://www.aiva.ai).
