# ElevenLabs

The first time I cloned my own voice with ElevenLabs I spent ten minutes recording, two minutes waiting, and then about an hour playing my synthetic self saying things I would never say. That's the ElevenLabs experience: quietly the best voice models on the market, with a UI that lets you do too much before you've thought it through.

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

## Pointers

* [elevenlabs.io/docs](https://elevenlabs.io/docs)
* The Voice Library has thousands of community voices, often better than the stock options.
* For low latency real time: the WebSocket streaming endpoint, not the REST one.
* For OSS alternatives, look at Suno's Bark or Coqui TTS — neither is at parity but both are free.
