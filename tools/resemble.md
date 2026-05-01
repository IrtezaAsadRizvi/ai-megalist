# Resemble AI

Resemble AI is the voice cloning platform with the deepest enterprise feature set. Where ElevenLabs and Cartesia compete on raw quality and latency, Resemble emphasises voice IP protection, deepfake detection (their separate Detect product), and on prem deployment. For brands managing a portfolio of voice assets and concerned about misuse, Resemble's positioning is unique.

## What it actually is

A voice AI platform with TTS, voice cloning, speech to speech, real time streaming, and the Resemble Detect product (an audio deepfake classifier). Available via web app, API, and on prem deployment for enterprise. Voice cloning supports rapid (10 second sample) and Professional (~10 minutes for higher fidelity) modes.

## Setup

1. Sign up at [resemble.ai](https://www.resemble.ai). Free trial.
2. Pricing: Creator $0.006/sec, Pro custom, Enterprise (on prem available).
3. Get an API key from the dashboard.
4. Quick test (Python):
   ```python
   import requests
   headers = {"Authorization": f"Token {RESEMBLE_KEY}"}
   data = {"voice_uuid": "...", "data": "Hello world"}
   response = requests.post(
     "https://app.resemble.ai/api/v2/clips/sync", headers=headers, json=data
   )
   ```
5. (Voice cloning) Upload a 10+ minute clean voice sample; train; use the generated voice ID in your API calls.

## How I use it day to day

* **Honest:** I default to ElevenLabs / Cartesia; Resemble would be the choice for enterprise deployments with on prem requirements.
* **Voice cloning with consent management.** Resemble's onboarding requires explicit consent recordings; the audit trail is enterprise grade.
* **Speech to speech.** Take audio in voice A; output the same content in voice B. Useful for dubbing, anonymisation, voice acting.
* **Real time streaming** for voice agent infrastructure. Comparable to Cartesia / ElevenLabs but with the on prem option.
* **Resemble Detect** for deepfake auditing. If you publish AI generated audio at scale, having a tool that can also identify it is a real safeguard.
* **On prem.** Enterprise customers running fully air gapped; Resemble's deployment model is the unique value here.

## Gotchas

* Pricing on Pro / Enterprise is enterprise oriented; smaller users often find ElevenLabs / Cartesia friendlier.
* Quality is good but the absolute peak in expressiveness is ElevenLabs Multilingual v3.
* Voice cloning consent + verification is more involved than competitors. This is a feature; also a friction point.
* The Detect product is impressive but not infallible; AI deepfake detection is an arms race.
* Some advanced features are tier locked.

## Pointers

* [resemble.ai](https://www.resemble.ai)
* For most polished consumer cloning: [elevenlabs.md](elevenlabs.md).
* For ultra low latency: [cartesia.md](cartesia.md).
* For on prem enterprise: Resemble + custom contract.
* For voice agent infra: pair with [livekit.md](livekit.md), [vapi.md](vapi.md).
