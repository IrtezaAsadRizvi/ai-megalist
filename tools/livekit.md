# LiveKit Agents

LiveKit Agents is the open source framework for building real time voice and video agents. Where Vapi, Retell, and Bland are managed platforms, LiveKit gives you the primitives — open source, self hostable, with the same stack the big platforms run on internally. For teams that want to control their voice agent infrastructure end to end, LiveKit is the path.

## What it actually is

LiveKit's open source framework for AI agents that operate over WebRTC. Built on top of LiveKit's real time infrastructure (Apache 2.0). Provides:
* **Agent loop** — connect to a LiveKit room, listen to participants, speak back.
* **STT / LLM / TTS plugins** for major providers (Deepgram, Cartesia, ElevenLabs, OpenAI, Anthropic, etc.).
* **Function calling** with structured outputs.
* **Multimodal support** — voice, video, screenshare in the same agent.

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
5. `python agent.py` — the agent waits for calls.

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

## Pointers

* [livekit.io/agents](https://livekit.io/agents)
* Repo: [github.com/livekit/agents](https://github.com/livekit/agents)
* Docs: [docs.livekit.io](https://docs.livekit.io)
* For managed alternatives (less control, faster start): [vapi.md](vapi.md), Retell, Bland.
* Pair with [cartesia.md](cartesia.md) or [elevenlabs.md](elevenlabs.md) for the voice layer.
