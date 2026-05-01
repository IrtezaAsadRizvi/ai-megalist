# Krisp

Krisp started as the noise cancellation app that made remote calls bearable in 2020 and has expanded into AI meeting features without losing the original. The current product covers noise cancellation, accent localisation, voice cloning for translation, and bot free meeting transcription. The underlying technology — real time on device audio processing — is the moat.

## What it actually is

A desktop app (macOS, Windows) that sits between your microphone and any conferencing app. Three product lines:
* **Krisp AI Voice** — noise cancellation, voice clarity, accent localisation.
* **Krisp AI Notes** — bot free meeting transcription and AI summaries.
* **Krisp AI Translation / Voice Cloning** — speak in your language, listener hears their language in your voice.

Free tier covers core noise cancellation; paid unlocks AI features.

## Setup

1. Download from [krisp.ai](https://krisp.ai).
2. Install. Krisp installs a virtual microphone driver.
3. In your conferencing app (Zoom, Meet, Teams, etc.), pick "Krisp Microphone" and "Krisp Speaker" as devices.
4. Free tier: 60 minutes/day noise cancellation.
5. Pricing: Pro $8/mo, Business $14/seat/mo. Adds AI Notes, accent features, translation.

## How I use it day to day

* **Honest:** I've used Krisp's noise cancellation for years; the AI features are newer and I've evaluated less.
* **Background noise cancellation.** Removes typing, dogs, AC hum, traffic. The original feature; still excellent.
* **AI Notes (bot free).** Captures meeting audio locally; transcribes; summarises after. Same model as Granola; different UX.
* **Accent localisation** for non native English speakers. Real time conversion of accent toward neutral American English. Reception varies; some users love it, some find it off putting.
* **Translation with voice cloning.** Speak English; the listener hears Spanish in your voice. Real time. Still impressive demo; production reliability varies.

## Gotchas

* Noise cancellation works on the speaker side (you sound clean) AND the listener side (others sound clean to you). Worth enabling both.
* CPU usage is real (~10 to 15% on M2 MacBook Air). Older machines may struggle.
* Accent features are sensitive. Some users find the modified voice uncanny; others find it freeing. Test before committing.
* Bot free transcription quality is good for clear audio; degrades faster than bot based tools on noisy multi speaker calls.
* Translation latency (~1 to 2 seconds) is good for measured conversations, awkward for fast back and forth.

## Pointers

* [krisp.ai](https://krisp.ai)
* For pure transcription / notes (more polish): [granola.md](granola.md).
* For built in noise cancellation in conferencing apps: NVIDIA Broadcast (NVIDIA GPUs only), Apple Voice Isolation (macOS / iOS native).
* For real time multilingual interpretation: [elevenlabs.md](elevenlabs.md) Real Time, in development.
