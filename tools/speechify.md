# Speechify: streaming TTS API with its own SIMBA models

Speechify sits in the voice cluster alongside [ElevenLabs](elevenlabs.md), [PlayHT](playht.md), and [Cartesia](cartesia.md). This page is about the developer API at speechify.ai, not the consumer reading app at speechify.com. The API runs on Speechify's own SIMBA model family and is built around streaming, so it fits voice agents as well as long form narration.

## What it actually is

A TTS API with two current models. SIMBA 3.2 is the recommended English model; SIMBA 3.0 covers English plus German, Spanish, French, Italian and Brazilian Portuguese. Streaming endpoint (up to 20,000 characters per request), SSML with emotion tags, word level timestamps, and voice cloning from a 10 to 30 second sample on paid plans. Official SDKs for Python and TypeScript.

## Setup

1. Sign up at [platform.speechify.ai](https://platform.speechify.ai). Free tier: 500K characters a month, no card.
2. API key from the dashboard.
3. Quick test:
   ```bash
   curl -X POST https://api.speechify.ai/v1/audio/stream \
     -H "Authorization: Bearer $SPEECHIFY_API_KEY" \
     -H "Accept: audio/mpeg" \
     -H "Content-Type: application/json" \
     -d '{"input": "Hello world", "voice_id": "geffen_32", "model": "simba-3.2"}' \
     --output out.mp3
   ```
4. SDKs: `pip install speechify-api` or `npm install @speechify/api`. Both read `SPEECHIFY_API_KEY` from the environment.

## Where it fits

* **Voice agents.** Plugins exist for [LiveKit](livekit.md) (`livekit-plugins-speechify`) and Pipecat (`SpeechifyHttpTTSService`), so it drops into an existing agent stack.
* **Long form audio.** The stream endpoint takes up to 20,000 characters in one request and starts returning audio right away.
* **Read along and captions.** Word level timestamps come back with the audio, which helps with highlighting and subtitles.
* **Cloned voices.** Paid plans can clone a voice from a short sample. The speaker has to read a consent phrase, which the API verifies.

## Gotchas

* SIMBA 3.2 is English only. For other languages use SIMBA 3.0, which officially supports six.
* Voice cloning needs a verified consent recording from the speaker, not just a sample.
* The old Simba 1.6 model ids (`simba-english`, `simba-multilingual`) are being retired; use `simba-3.2` or `simba-3.0` in new code.
* Search results often mix up the API (speechify.ai) with the consumer app (speechify.com). Docs live at docs.speechify.ai.

## Alternatives

* If you want the widest voice library and dubbing, [ElevenLabs](elevenlabs.md) is still the default.
* If you want a latency focused specialist, [Cartesia](cartesia.md).
* If you need on-prem deployment and deepfake detection tooling, [Resemble](resemble.md) is the enterprise pick.

## FAQ

### Is Speechify's API free?

There is a free tier with 500K characters a month and no card. Paid plans start at $10 a month (1.9M characters included, then $10 per 1M) and the rate per 1M drops on Pro ($8) and Scale ($6). See [speechify.ai/pricing](https://speechify.ai/pricing).

### Which model should I use?

`simba-3.2` for English, `simba-3.0` for the other supported languages. Both stream and both support cloned voices.

### Does it support SSML?

Yes. Pitch, rate, volume, pauses, emphasis, and emotion presets through SSML tags.

## Pointers

* [speechify.ai](https://speechify.ai)
* Docs: [docs.speechify.ai](https://docs.speechify.ai)
* Pricing: [speechify.ai/pricing](https://speechify.ai/pricing)
* For most polished TTS / cloning: [elevenlabs.md](elevenlabs.md).
* For full voice agent infrastructure: pair with [livekit.md](livekit.md), Vapi, Retell.
