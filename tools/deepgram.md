# Deepgram

Deepgram is the speech to text API I default to when I need accuracy *and* speed in production. They've been doing ASR longer than most ("Nova" models since well before the Whisper era) and the streaming endpoints handle real time conversation reliably. For voice agents where latency matters, Deepgram is the safe pick.

## What it actually is

A speech AI platform with REST and WebSocket endpoints. Headlines: Nova‑3 (their current top tier model, English + multilingual), Aura (their TTS, a separate product), and pre built features like speaker diarization, redaction, summarisation, sentiment, and entity detection. Pricing is per second of audio, with substantial free credit on signup.

## Setup

1. Sign up at [deepgram.com](https://deepgram.com). $200 free credit.
2. Get an API key at [console.deepgram.com](https://console.deepgram.com).
3. Quick test (pre recorded):
   ```bash
   curl https://api.deepgram.com/v1/listen \
     -H "Authorization: Token $DEEPGRAM_KEY" \
     -H "Content-Type: audio/mp3" \
     --data-binary @audio.mp3 \
     -d "model=nova-3&smart_format=true"
   ```
4. (Streaming) Use the WebSocket endpoint with the Python or JS SDK. The official `@deepgram/sdk` handles reconnection and audio formatting.

## How I use it day to day

* **Voice agents.** Pair Deepgram (STT) + Groq (LLM) + ElevenLabs / Cartesia (TTS) for end to end voice. Total latency under 1 second is achievable.
* **Live captions.** Stream audio in, get partial transcripts back in <300 ms. Used for accessibility features.
* **Phone call transcription.** Twilio webhook → Deepgram → searchable database. Better for voice quality variation than Whisper in my experience.
* **Diarization** (who said what). Enable with `diarize=true`. Output includes speaker labels per word.
* **Audio intelligence features.** Summarisation, topics, entities — built in, save a separate LLM call. Quality is decent for routine business audio.

## Gotchas

* Nova‑3 is significantly more accurate than older Nova models. Use it.
* Streaming pricing differs from batch. For real time, you're billed per minute connected, not per minute of speech.
* Some features (custom vocabulary, model fine tuning) are gated to paid tiers or enterprise.
* The free credit ($200) is generous; the production pricing is competitive but not the cheapest. Compare with AssemblyAI and OpenAI Whisper API for your workload.
* Latency depends on network proximity to Deepgram's region. Pick the closest region for real time agents.

## Pointers

* Docs: [developers.deepgram.com](https://developers.deepgram.com)
* SDKs: Python, JS/TS, .NET, Go, Rust.
* Compare with [AssemblyAI](https://www.assemblyai.com) (similar shape, different feature mix), [whisper.md](whisper.md) (cheaper, higher latency).
* For voice agent infra: pair with [LiveKit Agents](https://livekit.io/agents) or Vapi.
