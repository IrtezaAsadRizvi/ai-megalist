# Hume AI: empathic voice with emotional prosody

Hume's pitch is that everyone else is solving "voice that sounds human" and missing the bigger problem: voice that **responds** to human emotion. EVI (Empathic Voice Interface) listens for prosodic cues - tone, pace, hesitation - and adjusts how it speaks back. The result is less "TTS reading a script" and more "an agent that notices when you're frustrated." Whether that's worth building on depends on what you're building.

## What it actually is

A voice AI platform from a research-led team (the founders come out of affective computing work at DeepMind/Google). The core product is EVI - a streaming voice-in/voice-out API that bundles speech recognition, an emotionally-aware LLM, and expressive TTS into one round trip. They also ship a standalone expression-measurement API and a music API (Octave). Funded by EQT, Union Square, and others; growing presence in consumer apps and health-adjacent products.

## Setup

1. Sign up at hume.ai. Grab API credentials.
2. Use the EVI playground first - pick a voice, talk to it, hear how it modulates.
3. For integration: use the Hume SDK (Python/JS) or hit the WebSocket directly. EVI handles ASR + LLM + TTS in one stream.
4. (Optional) Configure a custom voice or a system prompt; you can also slot in a different LLM backend behind EVI.

## How I use it day to day

* **Coaching / support apps** where the bot's empathic tone matters as much as the words.
* **Companion-style chat** with voice that doesn't feel robotic when emotion shifts.
* **Latency-sensitive voice agents** - EVI's streaming is genuinely fast.
* **Expression measurement** as an independent API - score the emotional content of recorded audio without the voice loop.

## Gotchas

* Pricing is per-minute and adds up faster than text APIs. Model your usage.
* Voice catalog is curated, not enormous - smaller than [ElevenLabs](elevenlabs.md). Custom voice cloning is gated.
* "Empathic" is a strong claim. Real users describe it as warmer than peers; some find the prosodic shifts uncanny. Test with your audience.
* Currently English-strong; other languages are catching up.

## Alternatives

* [ElevenLabs](elevenlabs.md) - bigger voice catalog, cloning, dubbing; less "empathic" framing.
* [Cartesia](cartesia.md) - ultra-low-latency Sonic model; competitive on streaming.
* [Sesame](sesame.md) - very natural-feeling conversational voice (Maya / Miles).
* [OpenAI Realtime API](openai_voice.md) - the OpenAI-first equivalent for voice agents.

## FAQ

### Is Hume free?

Free credits on signup; production use is pay-per-minute. Check the latest pricing.

### Hume vs ElevenLabs?

[ElevenLabs](elevenlabs.md) wins on voice catalog, cloning, and dubbing breadth. Hume wins on empathic prosody and the bundled-conversation API. Different jobs.

### What's EVI exactly?

A WebSocket API that takes voice in, runs ASR + LLM + emotionally-aware TTS, and streams voice back - usually within a second of round-trip latency.

### Does Hume's expression measurement work on video?

Yes - the expression-measurement API supports voice prosody, facial expression, and language tone independently.

### What's Octave?

Hume's music generation model. Lesser-known than [Suno](suno.md) / [Udio](udio.md); aimed at API-first use.

## Pointers

* Site: [hume.ai](https://hume.ai)
* Docs: [dev.hume.ai](https://dev.hume.ai)
* EVI playground: in the dashboard after signup.
* Compare with [elevenlabs.md](elevenlabs.md) and [sesame.md](sesame.md) for the broader voice landscape.
