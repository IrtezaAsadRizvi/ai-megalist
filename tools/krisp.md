# Krisp: noise cancellation plus bot-free meeting notes

Krisp lives between meeting notes and audio-quality tooling, alongside [Granola](granola.md) on the bot-free notes side and as the older sibling of features now baked into Zoom and Teams. Krisp started as the noise cancellation app that made remote calls bearable in 2020 and has expanded into AI meeting features without losing the original. The current product covers noise cancellation, accent localisation, voice cloning for translation, and bot free meeting transcription. The underlying technology - real time on device audio processing - is the moat.

## What it actually is

A desktop app (macOS, Windows) that sits between your microphone and any conferencing app. Three product lines:
* **Krisp AI Voice**: noise cancellation, voice clarity, accent localisation.
* **Krisp AI Notes**: bot free meeting transcription and AI summaries.
* **Krisp AI Translation / Voice Cloning**: speak in your language, listener hears their language in your voice.

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

## Alternatives

* If transcription and meeting notes are the actual job and you don't need noise cancellation, [Granola](granola.md) is the more polished pick.
* If you want the EU/GDPR-friendly bot-free option, [Jamie](jamie.md) is built for that.
* If you only need noise cancellation and you're on a recent Mac, Apple Voice Isolation is free and built in.
* If you have an NVIDIA GPU, NVIDIA Broadcast covers noise cancellation locally with no subscription.

## FAQ

### Is Krisp free?

Yes for core noise cancellation - 60 minutes/day free. Pro at $8/mo and Business at $14/seat/mo unlock unlimited use, AI Notes, accent localisation, and translation.

### Does Krisp work with Zoom / Meet / Teams?

Yes - Krisp installs a virtual microphone driver that sits between your real mic and any conferencing app. Pick "Krisp Microphone" and "Krisp Speaker" in the conferencing app and it works everywhere.

### Krisp vs Granola - which for meeting notes?

Different defaults. [Granola](granola.md) is more polished as a notes product. Krisp's edge is bundling notes with noise cancellation in one app - useful if you want both and don't want to run two background processes.

### Does Krisp's accent feature actually work?

Yes, in real time, converting toward neutral American English. Reception varies a lot - some non-native speakers find it freeing, others find the modified voice uncanny. Test it before committing.

### How much CPU does Krisp use?

Around 10-15% on an M2 MacBook Air in my testing. Real but workable on modern machines; older laptops may struggle to run Krisp plus a video call without thermal throttling.

## Pointers

* [krisp.ai](https://krisp.ai)
* For pure transcription / notes (more polish): [granola.md](granola.md).
* For built in noise cancellation in conferencing apps: NVIDIA Broadcast (NVIDIA GPUs only), Apple Voice Isolation (macOS / iOS native).
* For real time multilingual interpretation: [elevenlabs.md](elevenlabs.md) Real Time, in development.
