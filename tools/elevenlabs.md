# ElevenLabs: voice cloning, TTS, and dubbing platform

ElevenLabs is the de-facto voice synthesis platform in the voice category, the head-to-head with [PlayHT](playht.md) and [Cartesia](cartesia.md) (low-latency). The first time I cloned my own voice with ElevenLabs I spent ten minutes recording, two minutes waiting, and then about an hour playing my synthetic self saying things I would never say. That's the ElevenLabs experience: quietly the leading voice models on the market, with a UI that lets you do too much before you've thought it through.

## What it actually is

A TTS (text to speech) and voice cloning platform. The same product covers studio narration, real time agents, dubbing across 30+ languages, and a recently added music generation tool. The voice quality is the headline; you'll hear it in podcast ads and indie audiobooks before you notice the brand.

## Setup

1. Sign up at [elevenlabs.io](https://elevenlabs.io). Free tier gives you ~10K characters/month.
2. Pick a voice from the library, or create your own (Instant Voice Clone needs ~1 minute of audio; Professional clones need ~30 minutes for higher fidelity).
3. Type or paste text in the Speech Synthesis tab; click Generate.
4. (Dev) Get an API key from Profile → API Keys; the SDKs cover Python, JS, and direct REST.

## How I use it day to day

* **Narration for short videos.** Pick one of the stock voices, paste a script, render. The default Multilingual v3 model handles inflection well.
* **Dubbing.** Upload a video, pick the target languages, and it produces matched lipsync per language. The quality varies; for production work I redo bad takes.
* **Real time voice agents.** Pair the ElevenLabs Conversational AI product with a phone provider (Twilio, Vapi) to ship a voice agent. Latency is well under 500 ms in my testing, which is the threshold where it stops feeling laggy.
* **My own voice as default narration.** I have a Professional clone of myself; I prefer reading my own articles aloud, but when I don't have the time, the clone substitutes well enough that listeners haven't called it out.

## Gotchas

* Credits burn faster than you expect, especially with the higher quality models. A 10 minute video at v3 quality eats a meaningful chunk of a Creator tier ($22/mo).
* Voice cloning is gated behind verification (ID upload + a consent recording). This is the right policy; it's also a hassle.
* The default voice settings (stability + similarity) trade off naturalness vs. consistency. Stability low = expressive but variable; high = monotone but predictable. I usually sit around 50/75.
* Music generation is impressive but credit hungry; for songwriting workflows, Suno is cheaper.

## Alternatives

* If you need ultra-low-latency real-time voice for agents, [Cartesia](cartesia.md) (Sonic) is faster and meaningfully cheaper at scale.
* If you want a similar TTS + cloning shape with different voice character, [PlayHT](playht.md) is the closest match.
* If you want native multimodal voice through OpenAI's stack, the [OpenAI Voice / Realtime API](openai_voice.md) is the integrated path.
* For songs and music specifically, [Suno](suno.md) is cheaper than ElevenLabs Music for the same output.

## FAQ

### Is ElevenLabs free?

Yes - the free tier gives you ~10K characters/month with stock voices. Paid tiers start at Starter ($5/mo) and scale up; Creator ($22/mo) is the realistic floor for serious narration. Voice cloning requires a paid plan plus identity verification.

### ElevenLabs vs Cartesia - which should I use?

Different jobs. ElevenLabs has the best voice quality for narration, dubbing, and high-fidelity cloning. [Cartesia](cartesia.md) wins on real-time latency (sub-100ms) and per-character cost at scale. For a voice agent on Twilio, Cartesia. For a podcast or audiobook, ElevenLabs.

### Is voice cloning legal?

Cloning your own voice with consent is fine. Cloning someone else's voice without consent is illegal in most jurisdictions and against ElevenLabs' terms. The platform requires identity verification and a consent recording before enabling clones - the right policy.

### How does ElevenLabs handle multiple languages?

The Multilingual v3 model handles 30+ languages with one voice; the same clone speaks every language. Quality varies - English and major European languages are strongest; smaller languages are usable but not flawless.

### Does ElevenLabs offer a real-time API?

Yes - the Conversational AI product handles real-time voice for agents, with WebSocket streaming. Latency is well under 500 ms in my testing, the threshold where it stops feeling laggy. Pair with Twilio or [Vapi](vapi.md) for phone calls.

## Pointers

* [elevenlabs.io/docs](https://elevenlabs.io/docs)
* The Voice Library has thousands of community voices, often better than the stock options.
* For low latency real time: the WebSocket streaming endpoint, not the REST one.
* For OSS alternatives, look at Suno's Bark or Coqui TTS - neither is at parity but both are free.
