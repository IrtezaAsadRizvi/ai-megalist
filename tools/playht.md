# PlayHT: TTS and voice cloning with low-latency streaming

PlayHT sits in the voice and speech category alongside [ElevenLabs](elevenlabs.md), [Cartesia](cartesia.md), and [Resemble](resemble.md). PlayHT is a TTS and voice cloning platform competing in the same space as ElevenLabs. The pitch is "comparable quality, different pricing curve, faster on streaming for voice agents." The Play 3.0 mini model in particular is targeted at low latency real time use cases. For voice agent infrastructure, PlayHT is one of the credible alternatives.

## What it actually is

A TTS API and web platform with voice cloning, multilingual generation, and a real time streaming endpoint. Models include Play 3.0 (high quality), Play 3.0 mini (low latency), and PlayDialog (multi speaker dialogue). 800+ stock voices; Instant Voice Cloning from 30 seconds of audio.

## Setup

1. Sign up at [play.ht](https://play.ht). Free tier: limited monthly TTS.
2. API key from the dashboard.
3. Quick test:
   ```bash
   curl -X POST https://api.play.ht/api/v2/tts/stream \
     -H "Authorization: Bearer $PLAYHT_API_KEY" \
     -H "X-User-ID: $PLAYHT_USER_ID" \
     -H "content-type: application/json" \
     -d '{"text": "Hello world", "voice": "...", "voice_engine": "Play3.0-mini"}' \
     --output out.mp3
   ```
4. SDKs for Python, Node, Go.

## How I use it day to day

* **Honest:** I default to ElevenLabs / Cartesia for production; PlayHT is the credible alternative I've benchmarked.
* **Voice cloning from short samples.** Instant Voice Clone works on 30 seconds of audio; quality is good.
* **Real time streaming for voice agents.** Play 3.0 mini hits low latency thresholds; competitive with Cartesia.
* **Long form narration.** Audiobooks, podcast intros. Quality is consistent across long generations.
* **Multilingual.** 30+ languages in cloned voices. Localisation use cases.
* **As a fallback / multi provider hedge.** Configured alongside ElevenLabs in some products.

## Gotchas

* Quality of stock voices varies by language; English is the most polished.
* Pricing is per character; long generations add up. Compare with ElevenLabs and Cartesia for your specific volume.
* Voice cloning needs clean audio. Phone recordings produce phone quality clones.
* Some advanced features (PlayDialog multi speaker) are newer and less battle tested than core TTS.
* The web app is functional but most users live in the API.

## Alternatives

* If you want the most polished consumer TTS and cloning, [ElevenLabs](elevenlabs.md) is still the default.
* If you want the absolute lowest latency for voice agents, [Cartesia](cartesia.md) is the specialist.
* If you need on-prem deployment and deepfake detection tooling, [Resemble](resemble.md) is the enterprise pick.
* If you're building voice agent infrastructure end-to-end, pair with [LiveKit](livekit.md), [Vapi](vapi.md), or [Retell](retell.md).

## FAQ

### Is PlayHT free?

Yes, with a limited monthly TTS quota. Paid tiers scale with character usage; pricing is per character so long generations add up. Compare with ElevenLabs and Cartesia for your specific volume.

### PlayHT vs ElevenLabs - which is better?

Different tradeoffs. [ElevenLabs](elevenlabs.md) wins on absolute peak expressiveness (Multilingual v3) and ecosystem polish. PlayHT is competitive on quality, often cheaper at scale, and Play 3.0 mini is genuinely fast for streaming. Multi-provider is the safer play for production.

### How fast is PlayHT for real-time voice?

Play 3.0 mini hits low-latency thresholds suitable for voice agents - competitive with Cartesia. The Play 3.0 high-quality model trades latency for fidelity; pick by use case.

### How much audio do I need for voice cloning?

Instant Voice Clone works on 30 seconds of clean audio. Quality scales with length and cleanliness; phone recordings produce phone-quality clones. For best results, give it a few minutes of studio-grade audio.

## Pointers

* [play.ht](https://play.ht)
* Docs: [docs.play.ai](https://docs.play.ai)
* For most polished TTS / cloning: [elevenlabs.md](elevenlabs.md).
* For ultra low latency voice: [cartesia.md](cartesia.md).
* For full voice agent infrastructure: pair with [livekit.md](livekit.md), Vapi, Retell.
