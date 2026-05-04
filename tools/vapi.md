# Vapi: voice agent platform for phone calls

Vapi sits in the real-time voice agents category alongside [Retell](retell.md) and [LiveKit Agents](livekit.md), pitched as the managed stack for AI receptionists and outbound callers. Vapi is the platform for building voice agents that make and receive phone calls. Where ElevenLabs and Cartesia provide the voice, Vapi provides the rest of the stack: telephony, STT, LLM orchestration, function calling, voicemail handling, transfer to humans, and the dashboard for tuning the conversation. For developers building "AI receptionist" or "AI sales agent" products, Vapi is the substrate.

## What it actually is

A managed voice agent platform. You configure an "Assistant" - pick STT (Deepgram, AssemblyAI), LLM (OpenAI, Anthropic, Groq), TTS (ElevenLabs, Cartesia, PlayHT), define functions (book appointment, look up account), set up phone numbers, route calls. Pricing is per minute of call time on top of underlying provider costs.

## Setup

1. Sign up at [vapi.ai](https://vapi.ai). Free credits.
2. Configure an Assistant in the dashboard:
   * Pick STT, LLM, TTS providers.
   * Write a system prompt for the agent's behaviour.
   * Define functions / tools the agent can call.
3. Buy a phone number (Twilio under the hood) or bring your own.
4. Call the number; talk to your agent.
5. (Programmatic) Use the Vapi SDK to build assistants in code, trigger outbound calls, handle webhooks.

## How I use it day to day

* **Honest:** I've built a Vapi prototype for a contact form replacement; not in production.
* **Inbound voice agent.** Customer calls a number; Vapi routes to an LLM persona that can answer FAQs, route to a human if needed, log the conversation.
* **Outbound calls.** Trigger calls programmatically (e.g. customer signs up; Vapi calls them with a 30 second welcome). Use sparingly; audiences have varying tolerance.
* **Function calling for data lookup.** Agent gets a question about an account; Vapi calls a function; the function queries my DB; agent reads the answer.
* **Transfer to human.** Configurable phrases or LLM judgement triggers a transfer; the call hands off seamlessly.
* **Voicemail handling.** Configure what happens if the call goes unanswered.

## Gotchas

* Total latency = STT + LLM + TTS + telephony. Tuning each piece matters; sub second end to end is the bar for natural conversation.
* Cost stack is real: Vapi per minute + LLM tokens + TTS characters + STT minutes + Twilio minutes. Estimate carefully.
* Voice agents that do anything important need careful prompting and guardrails. Hallucinations on a phone call are immediately visible.
* For purely local development or open source: LiveKit Agents is the OSS alternative.
* Compliance (call recording, consent, data handling) varies by jurisdiction. Plan before deploying.

## Alternatives

* If you want a similar managed shape with different defaults, [Retell](retell.md) is the closest comparator.
* If you want OSS and self-hosted, [LiveKit Agents](livekit.md) is the open framework.
* If you want the voice layer separately and to roll your own orchestration, [ElevenLabs](elevenlabs.md) (TTS) plus [Cartesia](cartesia.md) (low-latency) are the building blocks.
* If you only need IVR-style flows without LLM reasoning, traditional Twilio Studio is simpler.

## FAQ

### Is Vapi free?

Free credits on signup are enough to prototype. After that, pricing is per minute of call time on top of underlying STT, LLM, TTS, and Twilio costs. Estimate the full stack carefully - it adds up.

### Vapi vs Retell - which is better?

Both target the same shape. The differences are dashboard UX, default provider stack, and pricing curve - small but real. Build a prototype in each and pick on which one's quirks you can live with.

### What's the latency on a Vapi call?

Total latency is STT + LLM + TTS + telephony. Sub-second end-to-end is the bar for natural conversation; tuning each piece (especially picking [Cartesia](cartesia.md) or fast Groq models) is what gets you there.

### Can I bring my own phone number?

Yes - Vapi supports BYO number via Twilio. The default flow buys a number on Vapi's account; bring-your-own works for teams with existing telephony setups.

## Pointers

* [vapi.ai](https://vapi.ai)
* Docs: [docs.vapi.ai](https://docs.vapi.ai)
* Comparable: [Retell](https://www.retellai.com), [Bland](https://www.bland.ai).
* For OSS DIY: [livekit.md](livekit.md) Agents.
* Pair with [elevenlabs.md](elevenlabs.md) or [cartesia.md](cartesia.md) for the voice layer.
