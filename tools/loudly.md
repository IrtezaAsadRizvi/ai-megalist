# Loudly

Loudly is the AI music generator built for genre work and royalty free licensing rather than for full songs with vocals. Where Suno and Udio aim at "you can be a musician now," Loudly aims at "you can fill the soundtrack for your YouTube video without paying license fees." It's a more pragmatic product, narrower in scope, and easier to defend on the licensing front.

## What it actually is

An AI music platform by Loudly GmbH (Berlin). Generates instrumental tracks across many genres; outputs are licensed for commercial use under Loudly's plans. Web app, API, and a stem editor. Subscription pricing.

## Setup

1. Sign up at [loudly.com](https://www.loudly.com). Free tier with limits.
2. Pick a genre, mood, length, and BPM.
3. Generate. Loudly returns a track (sometimes multiple variants).
4. (Optional) Edit stems: Loudly provides multitrack control over melody, drums, bass, harmony.
5. (Optional) Export to MP3 or WAV; license tier determines commercial use rights.

## How I use it day to day

I'm not a heavy music user; when I have, the value has been:

* **YouTube and podcast beds.** When I need a 60 second instrumental that doesn't sound like elevator music and doesn't trigger Content ID, Loudly is faster than digging through stock libraries.
* **Genre exploration.** Asking for "lo fi hip hop" or "cinematic orchestral" produces something usable on the first or second try.
* **Stems for editing.** Stem level access is the feature I'd miss if I switched to Suno; remixing the output myself feels more like "my music" than accepting whatever the model handed back.

For full songs with vocals, [suno.md](suno.md) and [udio.md](udio.md) are dramatically more capable. For royalty free instrumentals, Loudly is competitive with the better stock libraries.

## Gotchas

* Quality is genre dependent. Some styles (electronic, ambient) come out cleaner than others (jazz, classical).
* Vocals are not really a thing here. If you want a song with lyrics, use Suno.
* The API is fine but the docs are thin. Expect to read code samples, not specs.
* Licensing terms differ by tier; read carefully if you're using outputs in monetized content.

## Pointers

* Web: [loudly.com](https://www.loudly.com)
* Pricing: free tier with limits, then monthly subscription tiers.
* Pairs with [suno.md](suno.md) and [udio.md](udio.md) when you want full songs, [mubert.md](mubert.md) for similarly licensed background music, and [stable_audio.md](stable_audio.md) if you want OSS adjacent options.
