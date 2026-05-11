# Sesame: the conversational voice that finally crosses the uncanny line

Sesame is the AI lab whose demo - a voice named Maya - made a lot of people sit up and realize "OK, we're past the TTS era." The model handles disfluencies, laughs, takes breaths in the right places, and recovers from interruptions in a way nothing else does as of early 2026. Whether you can ship on it yet is a separate question - the product surface is still narrow - but if you're building voice agents and haven't talked to Maya, you should.

## What it actually is

A voice AI company building a "Conversational Speech Model" (CSM) - an end-to-end model rather than ASR + LLM + TTS stitched together. Two voice personalities ship out of the box: **Maya** and **Miles**. The 8B base CSM is open-weights (Apache 2.0); the production product is API-and-app first. Co-founded by Brendan Iribe (Oculus co-founder) and team; backed by Andreessen Horowitz.

## Setup

1. Try the demo at sesame.com - 10-15 minutes free with Maya or Miles, in the browser. This is the part everyone talks about.
2. For developers: the open-weights 1B CSM is on HuggingFace (`sesame/csm-1b`). The larger 8B variant requires more compute.
3. API access for the production model: join the waitlist or request enterprise access via the site.
4. (Future) Sesame is reportedly building a wearable - keep an eye on the product roadmap.

## How I use it day to day

* **The demo** as a benchmark - I send people the link to ground their expectations of "good voice."
* **Open-weights CSM** for experimentation - reasonable quality, big VRAM footprint, useful for research.
* **Voice agent design** - even when I'm not shipping on Sesame, listening to Maya/Miles informs what good interaction feels like.

## Gotchas

* Production API is gated. Don't plan a launch around it until you've confirmed access.
* The free demo has a session length cap. Not for production roleplay.
* The open-weights model is real but several steps behind the hosted Maya/Miles quality. Don't expect demo-grade from the 1B local model.
* Voice catalog is small - two personalities. No cloning yet.

## Alternatives

* [ElevenLabs](elevenlabs.md) - the industry standard for voice cloning, dubbing, agents - way broader feature set.
* [Hume AI](hume.md) - empathic-prosody framing; the closest competitor in vibe.
* [Cartesia (Sonic)](cartesia.md) - ultra-low-latency, more developer-ready.
* [OpenAI Realtime API](openai_voice.md) - frontier multimodal voice from OpenAI.

## FAQ

### Is Sesame free?

The demo is free; production API access is gated and pricing isn't fully public. The 1B open-weights model is free under Apache 2.0.

### Can I use Maya / Miles in my product?

Not freely - they're the hosted product. The open-weights CSM does not include the Maya/Miles voice models.

### Why does Maya sound so different from other TTS?

Two reasons. First, it's an end-to-end conversational model, not ASR+LLM+TTS stitched together - so prosody, disfluencies, and timing are jointly modeled. Second, the team spent serious effort on training data quality.

### Will there be more voices?

Per public statements, yes - the Maya/Miles split is a starting point. Roadmap is opaque.

### Is Sesame building hardware?

Public reporting suggests a wearable is in development. Nothing shipping yet as of early 2026.

## Pointers

* Site / demo: [sesame.com](https://www.sesame.com)
* Open-weights model: HuggingFace `sesame/csm-1b`
* Compare with [hume.md](hume.md) and [elevenlabs.md](elevenlabs.md) for the broader voice landscape.
