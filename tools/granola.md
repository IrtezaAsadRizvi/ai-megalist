# Granola: bot-free AI meeting notes from your local mic

Granola is the meeting-notes tool I default to, the bot-free alternative to [Fathom](fathom.md), [Otter](otter.md), and [Fireflies](fireflies.md). Nothing joins your call - you write rough notes during the meeting, and Granola polishes them after, using the audio it captured locally. You end up with notes that sound like you, because they were partly you.

## What it actually is

A macOS desktop app (Windows in beta as of 2026) that listens to your microphone + system audio, transcribes locally, and produces structured notes. There is no bot in the call; the audio capture is on your machine. After the call, the AI rewrites your hand notes into a clean summary.

## Setup

1. Download from [granola.ai](https://www.granola.ai), drag to Applications.
2. Grant microphone + system audio permissions when prompted (this needs an audio loopback driver; Granola installs one).
3. Sign in. Free tier gives 25 meetings; paid is $18/mo for unlimited.
4. (Optional) Install the Slack/Notion integrations to push notes automatically.
5. Hit "New Meeting" before a call and type rough notes during. After, click "Enhance."

About five minutes to set up.

## How I use it day to day

* **Type during the call.** Not full sentences - just the tags I want to remember. ("budget concern from Sara," "need to follow up on infra audit," "decision: ship Tuesday.")
* **Hit Enhance.** Granola turns my fragments into a structured summary, augmented with what was actually said. The output is short, scannable, and roughly in my voice.
* **Link decisions and action items.** Granola pulls these out automatically; I review and assign owners.
* **Templates.** I have a "1:1" template, a "design review" template, and a "customer call" template. Each shapes the post enhance summary differently.
* **Search across meetings.** "What did Sara say about pricing in March?" works.

## Gotchas

* The bot free approach means anything not captured by your microphone (e.g. someone presenting on a separate device) is missed. For multi room calls, fall back to a bot tool.
* Audio is processed locally for transcription, but the enhancement step calls a hosted model. Check your privacy review if this matters.
* The "augment with what was said" magic only works if you took some notes. Empty in, empty out - Enhance on a blank doc gives a generic transcript summary.
* I find the iPhone app less useful than the Mac one. Most of my meetings happen at a keyboard anyway.

## Alternatives

* If you want unlimited free recording with a bot in the call, [Fathom](fathom.md) is the obvious pick.
* For mature transcription and OtterPilot integrations, [Otter](otter.md) has been doing this longest.
* If you're sales-focused and want CRM auto-sync (HubSpot, Salesforce), [Fireflies](fireflies.md) is the better shape.
* For another bot-free option in EU jurisdictions, Jamie is a comparable alternative.

## FAQ

### Is Granola free?

Yes - the free tier covers 25 meetings, which is enough to evaluate. Paid is $18/mo for unlimited. Granola has run a free-year-for-startups program (under 30 employees with seed funding); worth checking if you qualify.

### Granola vs Fathom - which should I use?

Different defaults. Granola is bot-free (records via local mic) - better for sensitive 1:1s and external calls where a bot would be intrusive. [Fathom](fathom.md) is bot-in-call - better for multi-room calls and shared phone bridges where local audio capture isn't enough. I keep both.

### Does Granola work on Windows?

The Mac app is the primary surface; Windows is in beta as of 2026 and lags on features. If you're on Windows full-time, [Fathom](fathom.md) or [Fireflies](fireflies.md) are more reliable today.

### Is Granola private?

The audio is transcribed locally, but the "Enhance" step (where the AI rewrites your notes) calls a hosted model. If you're processing genuinely sensitive content, read the data-handling docs - the local-first claim only covers transcription, not enhancement.

## Pointers

* [granola.ai](https://www.granola.ai)
* Their templates page is the best onboarding. Steal one before writing your own.
* Free year for startups under 30 employees with seed funding (worth checking).
* Bot based alternative: [Fathom](https://fathom.video) (free unlimited, joins as a participant).
