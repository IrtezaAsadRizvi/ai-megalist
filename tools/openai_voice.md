# OpenAI Voice / Realtime API: end-to-end speech-to-speech for developers

OpenAI's Realtime API is the integrated voice alternative to multi-component stacks built on [Deepgram](deepgram.md) (STT) plus [Cartesia](cartesia.md) or [ElevenLabs](elevenlabs.md) (TTS) - one provider, lower latency, higher per-minute cost. The OpenAI Realtime API is the multimodal voice endpoint for building real time conversational AI. Where ElevenLabs / Cartesia provide the TTS layer separately, OpenAI's Realtime is end to end - speech in, speech out, with the model reasoning natively over audio. The latency is among the lowest available; the conversational quality is the closest thing to "ChatGPT Voice for developers."

## What it actually is

A WebSocket API at OpenAI for real time speech to speech. Built on GPT‑4o (and successor models). The client streams audio chunks; the API returns audio chunks back in real time, along with text transcripts. Supports interruptions, function calling, custom voices.

## Setup

1. Need an OpenAI API account.
2. Realtime API access is on a separate tier; check `platform.openai.com/docs/guides/realtime` for current availability.
3. Quick connection (Node):
   ```javascript
   const WebSocket = require("ws");
   const ws = new WebSocket("wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview", {
     headers: { Authorization: `Bearer ${OPENAI_API_KEY}` },
   });
   ws.on("open", () => {
     ws.send(JSON.stringify({ type: "session.update", session: { modalities: ["text", "audio"] } }));
   });
   ```
4. SDKs: official `openai` Node and Python SDKs have Realtime support.
5. Pricing is per minute of input / output audio.

## How I use it day to day

* **Honest:** I've prototyped voice agents with the Realtime API; haven't shipped one in production.
* **Interactive voice agents.** End to end speech without separate STT + TTS pipelines. Lower latency; less plumbing.
* **Voice as input modality** for any chat app. Press to talk; the model reasons over the audio directly (not a transcript); responds in audio.
* **Function calling via voice.** "What's the weather in Tokyo?" → model calls a weather function → speaks the answer. Same pattern as text, voice end to end.
* **Multilingual.** The model handles many languages natively; useful for international voice products.
* **Compared to Realtime competitors.** Cartesia + Groq + Deepgram has lower aggregate latency but is multi component; OpenAI Realtime is one provider, more integrated but higher per minute cost.

## Gotchas

* Pricing per minute of audio is significantly higher than separate STT + LLM + TTS providers. For high volume, the math may not work.
* WebSocket handling needs care (audio buffering, interruption logic, reconnection). Use the SDKs; rolling your own is a footgun.
* Some features are still preview / behind feature flags. Check the latest docs.
* For lowest possible latency, dedicated providers (Cartesia for TTS, Groq for LLM) sometimes beat the integrated approach.
* The voices are limited compared to ElevenLabs' library; for character voice work, stick with ElevenLabs + a separate LLM.

## Alternatives

* If you want the lowest aggregate latency by composing specialist components, pair [Deepgram](deepgram.md) + [Groq](groq.md) + [Cartesia](cartesia.md).
* If voice quality and a huge library of voices matters more than integration, [ElevenLabs](elevenlabs.md) plus a separate LLM is the choice.
* If you want a managed voice agent platform that wraps the plumbing, [Vapi](vapi.md), [Retell](retell.md), or [LiveKit Agents](livekit.md) are the options.
* If your stack is Anthropic-first, [Anthropic API](anthropic_api.md) doesn't ship a Realtime equivalent yet - compose with Cartesia / Deepgram instead.

## FAQ

### Is OpenAI Realtime API free?

No, pricing is per minute of input / output audio and is significantly higher than separate STT + LLM + TTS providers. New OpenAI accounts get small free credits to evaluate; production volume requires real budget.

### OpenAI Realtime vs Cartesia + Deepgram - which should I use?

OpenAI Realtime when integration simplicity and reasoning-over-audio matter more than cost. [Cartesia](cartesia.md) + [Deepgram](deepgram.md) (or [Groq](groq.md) for the LLM) when you need lower latency at higher volume and don't mind orchestrating components. The math flips around moderate scale.

### Does OpenAI Realtime support function calling?

Yes - same pattern as text. The model speaks its way to a function call, the function runs, the model speaks the result. Voice end-to-end without a separate STT / TTS layer.

### Can I use a custom voice with OpenAI Realtime?

The voice library is more limited than [ElevenLabs](elevenlabs.md). For branded voice work or character voices, the cleaner pattern is ElevenLabs for TTS plus a chat model for reasoning.

## Pointers

* Docs: [platform.openai.com/docs/guides/realtime](https://platform.openai.com/docs/guides/realtime)
* For multi component (STT + LLM + TTS): [deepgram.md](deepgram.md) / [groq.md](groq.md) / [cartesia.md](cartesia.md).
* For voice agent platforms that wrap this: [vapi.md](vapi.md), [retell.md](retell.md), [livekit.md](livekit.md).
