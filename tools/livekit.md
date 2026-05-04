# LiveKit Agents: open-source framework for voice agents

LiveKit Agents is in the real-time voice agent category alongside [Vapi](vapi.md), [Retell](retell.md), and Bland - the OSS, self-hostable option where the others are managed platforms. LiveKit Agents is the open source framework for building real time voice and video agents. Where Vapi, Retell, and Bland are managed platforms, LiveKit gives you the primitives - open source, self hostable, with the same stack the big platforms run on internally. For teams that want to control their voice agent infrastructure end to end, LiveKit is the path.

## What it actually is

LiveKit's open source framework for AI agents that operate over WebRTC. Built on top of LiveKit's real time infrastructure (Apache 2.0). Provides:
* **Agent loop**: connect to a LiveKit room, listen to participants, speak back.
* **STT / LLM / TTS plugins** for major providers (Deepgram, Cartesia, ElevenLabs, OpenAI, Anthropic, etc.).
* **Function calling** with structured outputs.
* **Multimodal support**: voice, video, screenshare in the same agent.

You can run agents on LiveKit Cloud (managed) or self hosted on your own LiveKit deployment.

## Setup

1. Install: `pip install livekit-agents livekit-plugins-deepgram livekit-plugins-openai livekit-plugins-elevenlabs`.
2. LiveKit project at [cloud.livekit.io](https://cloud.livekit.io) or self hosted server.
3. Provider keys (Deepgram, OpenAI, ElevenLabs).
4. Quick agent:
   ```python
   from livekit import agents
   from livekit.plugins import openai, deepgram, elevenlabs
   
   async def entrypoint(ctx: agents.JobContext):
       agent = agents.VoiceAgent(
           stt=deepgram.STT(),
           llm=openai.LLM(),
           tts=elevenlabs.TTS(),
           system_prompt="You are a helpful assistant."
       )
       await agent.start(ctx.room)
   
   if __name__ == "__main__":
       agents.cli.run_app(agents.WorkerOptions(entrypoint_fnc=entrypoint))
   ```
5. `python agent.py` - the agent waits for calls.

## How I use it day to day

* **Honest:** I've built a LiveKit Agents demo to evaluate the stack; not in production.
* **Voice agents on web / mobile (not just phone calls).** LiveKit Agents work in browsers, iOS, Android, embedded apps. Vapi is phone first; LiveKit is broader.
* **Custom orchestration.** Mix of LLM calls, function calls, hand offs, multi step reasoning. Lower level than Vapi; more control.
* **Multimodal agents.** Voice + video + screenshare in the same agent. Useful for "co pilot" experiences where the agent sees what you see.
* **Self hosted for compliance.** Full open source stack means truly air gapped voice agents are possible. Few competitors offer this.
* **Plugin architecture.** Swap providers easily; upstream changes to plugins land fast.

## Gotchas

* You build more than with Vapi / Retell. The platforms abstract production concerns; LiveKit gives you primitives.
* LiveKit Cloud is paid (per minute / participant); self hosted is free but you operate the infrastructure.
* Latency depends on your provider mix and deployment. Test end to end with realistic network conditions.
* Plugins have varying maturity; the major providers are well supported, niche providers less so.
* For phone calls specifically, you still need a SIP / telephony bridge. LiveKit supports SIP but configuration is non trivial.

## Alternatives

* If you want a managed phone-first voice agent platform with less plumbing, [Vapi](vapi.md) is the faster path.
* If you want a similar managed alternative with a different feature mix, [Retell](retell.md) covers the same job.
* If you want only the TTS layer for an existing voice stack, [ElevenLabs](elevenlabs.md) or [Cartesia](cartesia.md) plug in cleanly.
* If you want lower-latency real-time voice specifically, pair LiveKit's plugin architecture with [Cartesia](cartesia.md) Sonic for the TTS step.

## FAQ

### Is LiveKit Agents free?

The framework is Apache 2.0 and free. LiveKit Cloud (the managed real-time infrastructure) is paid by per-minute / participant; self-hosted is free but you operate the WebRTC infrastructure yourself.

### LiveKit vs Vapi - which should I use?

Different shapes. [Vapi](vapi.md) is managed and phone-first - faster to start, less control, you don't operate infra. LiveKit is the primitives - open source, self-hostable, multimodal (web, mobile, embedded), with full control over the orchestration. Pick LiveKit when control matters more than time-to-first-call.

### Does LiveKit Agents work in browsers?

Yes - LiveKit is WebRTC-native and works in browsers, iOS, Android, embedded apps. The phone-only assumption built into Vapi and Retell doesn't apply here, which is one of the strongest reasons to pick LiveKit.

### Can I run a voice agent fully on-prem?

Yes - the entire LiveKit stack is open source, so true air-gapped voice agents are possible. Few competitors offer this. You'll still need to bring or self-host the STT / LLM / TTS providers themselves.

### What providers can I plug in?

The plugins library covers the major STT (Deepgram, Whisper), LLM (OpenAI, Anthropic, Gemini), and TTS (ElevenLabs, Cartesia, OpenAI Voice) providers. Niche providers exist with varying maturity; the major ones are well supported.

## Pointers

* [livekit.io/agents](https://livekit.io/agents)
* Repo: [github.com/livekit/agents](https://github.com/livekit/agents)
* Docs: [docs.livekit.io](https://docs.livekit.io)
* For managed alternatives (less control, faster start): [vapi.md](vapi.md), Retell, Bland.
* Pair with [cartesia.md](cartesia.md) or [elevenlabs.md](elevenlabs.md) for the voice layer.
