# Retell: voice agents for call centers and outbound sales

Retell sits in the voice agents category alongside [Vapi](vapi.md), Bland, and [LiveKit](livekit.md), tilted toward enterprise call ops. Retell is the voice agent platform focused on enterprise call center and outbound sales workflows. Where Vapi optimises for general voice agent flexibility and LiveKit for OSS / DIY, Retell is built for "we run thousands of calls per day and need analytics." Call routing, post call analysis, A/B testing of prompts, conversation analytics - the operational tooling around the agents.

## What it actually is

A managed voice agent platform with telephony, STT, LLM, TTS, and call analytics integrated. Build agents in a no code dashboard or via the API. Real time voice agents that handle inbound and outbound calls, with the operator focused tooling for managing them at scale.

## Setup

1. Sign up at [retellai.com](https://www.retellai.com).
2. Free credits on signup.
3. Pricing: per minute of call time, plus underlying STT / LLM / TTS provider costs.
4. Build an agent in the dashboard:
   * Pick voice (Retell's options or BYO via ElevenLabs / Cartesia).
   * Pick LLM (OpenAI, Anthropic, Groq).
   * Define functions (book appointment, lookup record, etc.).
   * Set system prompt and conversation flow.
5. Buy a phone number or BYO via Twilio. Test inbound, configure outbound.

## How I use it day to day

* **Honest:** I've evaluated Retell for a small inbound use case. The analytics tooling is the differentiator for scale.
* **Inbound voice agent for FAQ + routing.** Customer calls; Retell answers; resolves common questions; transfers complex ones to humans.
* **Outbound campaigns.** Bulk dial; agent has a script / objective; logs outcomes per call. Use sparingly - recipient sentiment varies.
* **Call analytics.** Per call sentiment, transcript search, prompt performance. The tools sales operations teams need.
* **A/B testing prompts.** Run variant A on half of calls, variant B on the other; see which resolves better.
* **Compliance recording and retention.** Configurable per call class.

## Gotchas

* Same total latency considerations as Vapi (STT + LLM + TTS + telephony). Tune per provider for the use case.
* Compliance varies by jurisdiction (call recording laws, consent, opt out). Configure carefully.
* For solo dev / hobby use, Retell can be heavier than needed. Vapi is more general purpose.
* Voice agents at scale produce calls that vary in quality; monitor and iterate based on real call recordings.
* Outbound calling has reputation considerations; cold robocalls produce backlash.

## Alternatives

* If you want a more general-purpose voice agent platform with developer flexibility, [Vapi](vapi.md) is the close peer.
* If you want OSS DIY infrastructure you fully control, [LiveKit Agents](livekit.md) is the right shape.
* If you want the simplest "voice with phone number" experience, Bland is the lighter pick.
* For the underlying voice layer, swap in [ElevenLabs](elevenlabs.md), [Cartesia](cartesia.md), or [PlayHT](playht.md).

## FAQ

### Is Retell free?

There are free credits on signup. Pricing is per-minute of call time plus the underlying STT, LLM, and TTS provider costs. Budget by call volume; outbound campaigns at scale add up fast.

### Retell vs Vapi - which one?

Different focuses. Retell is tuned for call center ops at scale - sentiment, A/B testing prompts, transcript search across thousands of calls. [Vapi](vapi.md) is more general-purpose and developer-flexible. Pick Retell when the operational tooling matters; Vapi when you want a general primitive.

### Can I bring my own voice?

Yes - Retell supports BYO via [ElevenLabs](elevenlabs.md), [Cartesia](cartesia.md), or [PlayHT](playht.md). LLM is also a picker (OpenAI, Anthropic, Groq). The platform handles orchestration; you choose components.

### Is outbound voice agent calling legal?

Depends on jurisdiction. Call recording laws, consent requirements, and opt-out rules vary by country and state. Configure compliance carefully and don't rely on the platform defaults; cold robocalls also produce reputation backlash regardless of legality.

## Pointers

* [retellai.com](https://www.retellai.com)
* Comparable: [vapi.md](vapi.md), [Bland](https://www.bland.ai).
* For OSS DIY: [livekit.md](livekit.md) Agents.
* For voice (the audio layer): [elevenlabs.md](elevenlabs.md), [cartesia.md](cartesia.md), [playht.md](playht.md).
