# Retell

Retell is the voice agent platform focused on enterprise call center and outbound sales workflows. Where Vapi optimises for general voice agent flexibility and LiveKit for OSS / DIY, Retell is built for "we run thousands of calls per day and need analytics." Call routing, post call analysis, A/B testing of prompts, conversation analytics — the operational tooling around the agents.

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
* **Outbound campaigns.** Bulk dial; agent has a script / objective; logs outcomes per call. Use sparingly — recipient sentiment varies.
* **Call analytics.** Per call sentiment, transcript search, prompt performance. The tools sales operations teams need.
* **A/B testing prompts.** Run variant A on half of calls, variant B on the other; see which resolves better.
* **Compliance recording and retention.** Configurable per call class.

## Gotchas

* Same total latency considerations as Vapi (STT + LLM + TTS + telephony). Tune per provider for the use case.
* Compliance varies by jurisdiction (call recording laws, consent, opt out). Configure carefully.
* For solo dev / hobby use, Retell can be heavier than needed. Vapi is more general purpose.
* Voice agents at scale produce calls that vary in quality; monitor and iterate based on real call recordings.
* Outbound calling has reputation considerations; cold robocalls produce backlash.

## Pointers

* [retellai.com](https://www.retellai.com)
* Comparable: [vapi.md](vapi.md), [Bland](https://www.bland.ai).
* For OSS DIY: [livekit.md](livekit.md) Agents.
* For voice (the audio layer): [elevenlabs.md](elevenlabs.md), [cartesia.md](cartesia.md), [playht.md](playht.md).
