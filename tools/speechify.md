# Speechify: streaming TTS API with its own SIMBA models

Speechify sits in the voice cluster alongside [ElevenLabs](elevenlabs.md), [PlayHT](playht.md), and [Cartesia](cartesia.md). This page is about the developer API at speechify.ai, not the consumer reading app at speechify.com. The API runs on Speechify's own SIMBA model family and is built around streaming, so it fits voice agents as well as long form narration.

## What it actually is

A TTS API whose latest model is SIMBA 3.5 (`simba-3.5`): 48 languages under one model id, working with every voice, and the first Speechify model with pronunciation support. SIMBA 3.2 is the English only model, and SIMBA 3.0 covers English plus German, Spanish, French, Italian and Brazilian Portuguese. Streaming endpoint (up to 20,000 characters per request), SSML with emotion tags, word level timestamps, and voice cloning from a 10 to 30 second sample on paid plans. Official SDKs for Python and TypeScript.

## Setup

1. Sign up at [platform.speechify.ai](https://platform.speechify.ai/signup?utm_source=github&utm_medium=listing&utm_campaign=ai-megalist). Free tier: 500K characters a month, no card.
2. API key from the dashboard.
3. Quick test:
   ```bash
   curl -X POST https://api.speechify.ai/v1/audio/stream \
     -H "Authorization: Bearer $SPEECHIFY_API_KEY" \
     -H "Accept: audio/mpeg" \
     -H "Content-Type: application/json" \
     -d '{"input": "Hello world", "voice_id": "geffen_32", "model": "simba-3.5"}' \
     --output out.mp3
   ```
4. SDKs: `pip install speechify-api` or `npm install @speechify/api`. Both read `SPEECHIFY_API_KEY` from the environment.

## Where it fits

* **Voice agents.** Plugins exist for [LiveKit](livekit.md) (`livekit-plugins-speechify`) and Pipecat (`SpeechifyHttpTTSService`), so it drops into an existing agent stack.
* **Long form audio.** The stream endpoint takes up to 20,000 characters in one request and starts returning audio right away.
* **Read along and captions.** Word level timestamps come back with the audio, which helps with highlighting and subtitles.
* **Cloned voices.** Paid plans can clone a voice from a short sample. The speaker has to read a consent phrase, which the API verifies.

## Gotchas

* If you leave `model` out, the API still defaults to `simba-3.0`, so set `simba-3.5` yourself. Pass `language` when the text is not in the voice's own language.
* SIMBA 3.2 is English only and refuses non-English voices.
* Voice cloning needs a verified consent recording from the speaker, not just a sample.
* The old Simba 1.6 model ids (`simba-english`, `simba-multilingual`) are being retired; use `simba-3.5` in new code.
* Search results often mix up the API (speechify.ai) with the consumer app (speechify.com). Docs live at docs.speechify.ai.

## Alternatives

* If you want the widest voice library and dubbing, [ElevenLabs](elevenlabs.md) is still the default.
* If you want a latency focused specialist, [Cartesia](cartesia.md).
* If you need on-prem deployment and deepfake detection tooling, [Resemble](resemble.md) is the enterprise pick.

## FAQ

### Is Speechify's API free?

There is a free tier with 500K characters a month and no card. Paid plans start at $10 a month (1.9M characters included, then $10 per 1M) and the rate per 1M drops on Pro ($8) and Scale ($6). Those are the SIMBA 3.0 and 3.2 rates. SIMBA 3.5 is billed at the same rates until 21 Nov 2026 and lists at twice that after. See [speechify.ai/pricing](https://speechify.ai/pricing?utm_source=github&utm_medium=listing&utm_campaign=ai-megalist).

### Which model should I use?

`simba-3.5`. It is the latest, covers 48 languages including English, and works with every voice. Use `simba-3.2` only if you want the English only model. All of them stream and support cloned voices.

### Does it support SSML?

Yes. Pitch, rate, volume, pauses, emphasis, and emotion presets through SSML tags.

## Pointers

* [speechify.ai](https://speechify.ai?utm_source=github&utm_medium=listing&utm_campaign=ai-megalist)
* Docs: [docs.speechify.ai](https://docs.speechify.ai?utm_source=github&utm_medium=listing&utm_campaign=ai-megalist)
* Pricing: [speechify.ai/pricing](https://speechify.ai/pricing?utm_source=github&utm_medium=listing&utm_campaign=ai-megalist)
* For most polished TTS / cloning: [elevenlabs.md](elevenlabs.md).
* For full voice agent infrastructure: pair with [livekit.md](livekit.md), Vapi, Retell.
