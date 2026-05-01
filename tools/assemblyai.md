# AssemblyAI

AssemblyAI is the speech AI platform that bundles ASR with the audio intelligence features I'd otherwise stitch together myself — speaker diarization, sentiment, topic detection, summarisation, content moderation, PII redaction. For products that do something with audio beyond just transcribing it, AssemblyAI is often the most direct path.

## What it actually is

A speech to text API plus a layer of audio intelligence features. The current top tier ASR model is Universal‑2 (multilingual, accuracy on par with the best). Beyond transcription: real time streaming, speaker labels, content safety, key phrase extraction, summarisation, sentiment analysis, entity detection, and chapter segmentation.

## Setup

1. Sign up at [assemblyai.com](https://www.assemblyai.com). Free tier: 416 hours of transcription on signup credits.
2. API key from the dashboard.
3. Quick test:
   ```bash
   curl -X POST https://api.assemblyai.com/v2/transcript \
     -H "authorization: $ASSEMBLYAI_KEY" \
     -H "content-type: application/json" \
     -d '{"audio_url": "https://your-audio.mp3", "speaker_labels": true, "summarization": true}'
   ```
4. (Streaming) WebSocket endpoint at `wss://api.assemblyai.com/v2/realtime/ws` for live audio.
5. SDKs for Python, JS/TS, Go, Java, Ruby.

## How I use it day to day

* **Conversation intelligence.** Sales call transcripts → topics + sentiment per speaker + summary. One API call handles all of it.
* **Real time captioning.** Streaming endpoint + WebSocket; partials in <300 ms. Comparable to Deepgram.
* **PII redaction.** Auto remove credit cards, phone numbers, names, addresses from transcripts. Useful for compliance heavy industries.
* **Content moderation.** Detect topics like profanity, weapons, sensitive themes; handy for UGC platforms.
* **Lemur** (their LLM layer over transcripts). Ask questions about a transcript without piping it through a separate model. Convenient.

## Gotchas

* Pricing is competitive but slightly more complex than Deepgram's. Each feature (diarization, PII, etc.) adds to the per second rate.
* Universal‑2 is the model worth using; older models are deprecated soon.
* Real time streaming is good but not as mature as Deepgram's; for ultra low latency voice agents, evaluate both.
* Summarisation and topic detection produce decent outputs for routine content; long, sprawling audio gets weaker results.
* Some features are async (via webhook callback) rather than synchronous. Plan your queue accordingly.

## Pointers

* Docs: [assemblyai.com/docs](https://www.assemblyai.com/docs)
* Compare with [deepgram.md](deepgram.md) (similar shape; different feature mix and latency profile).
* For free open source baseline: [whisper.md](whisper.md).
* Audio intelligence is the differentiator; for pure ASR the choice is Deepgram vs Whisper API for most teams.
