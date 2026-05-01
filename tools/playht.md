# PlayHT

PlayHT is a TTS and voice cloning platform competing in the same space as ElevenLabs. The pitch is "comparable quality, different pricing curve, faster on streaming for voice agents." The Play 3.0 mini model in particular is targeted at low latency real time use cases. For voice agent infrastructure, PlayHT is one of the credible alternatives.

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

## Pointers

* [play.ht](https://play.ht)
* Docs: [docs.play.ai](https://docs.play.ai)
* For most polished TTS / cloning: [elevenlabs.md](elevenlabs.md).
* For ultra low latency voice: [cartesia.md](cartesia.md).
* For full voice agent infrastructure: pair with [livekit.md](livekit.md), Vapi, Retell.
