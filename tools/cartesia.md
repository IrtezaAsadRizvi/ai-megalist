# Cartesia

Cartesia is the voice AI lab built for the latency obsessed. Their Sonic model produces TTS at sub 100 ms time to first audio, which is the threshold below which conversations stop feeling robotic and start feeling human. For voice agents where real time matters more than emotive delivery, Cartesia is the leading choice.

## What it actually is

A speech AI platform with two flagship products: Sonic (TTS), Ink (STT). Plus voice cloning, multilingual generation, and SDKs for real time streaming. Pricing is per character / per second; aggressive on latency optimisation. Founded by ex Stanford folks; the technical bar is high.

## Setup

1. Sign up at [cartesia.ai](https://cartesia.ai). Free tier: 10K credits (~10 minutes).
2. API key from the dashboard.
3. Quick test (Python):
   ```python
   from cartesia import Cartesia
   client = Cartesia(api_key="...")
   audio = client.tts.bytes(
     model_id="sonic-english",
     transcript="Hello world",
     voice={"mode": "id", "id": "..."},
     output_format={"container": "wav", "encoding": "pcm_f32le", "sample_rate": 44100}
   )
   ```
4. (Streaming) Use the WebSocket API for real time agents. The SDK handles chunking and buffering.

## How I use it day to day

* **Voice agents.** Sonic + a fast LLM (Groq) + a fast STT (Deepgram) = end to end latency under 800 ms. Conversations that feel alive.
* **Long content TTS.** Cartesia handles long generation without degrading mid stream. I've used it for hour long audio narrations without artifacts.
* **Voice cloning.** Upload 10 seconds of audio; get a custom voice ID. Quality is competitive with ElevenLabs at lower cost.
* **Multilingual.** 15+ languages with the same voice ID; handy for international product personas.
* **As a fallback to ElevenLabs.** Different latency / quality / pricing curves. Different right answer per workload.

## Gotchas

* Sonic's emotional range is narrower than ElevenLabs Multilingual v3. For audiobook level expressiveness, ElevenLabs still leads.
* Voice cloning needs high quality input. Phone quality recordings produce phone quality clones.
* Streaming requires careful client side audio buffering. Read the docs and use the SDK; rolling your own WebSocket handler is a footgun.
* The free tier is enough to evaluate; production volumes hit paid pricing fast.
* Sonic English is the most polished; other languages are improving quickly.

## Pointers

* [cartesia.ai](https://cartesia.ai)
* Docs: [docs.cartesia.ai](https://docs.cartesia.ai)
* For more emotive TTS: [elevenlabs.md](elevenlabs.md).
* For end to end voice agent infra: pair with [LiveKit Agents](https://livekit.io/agents), Vapi, or Retell.
