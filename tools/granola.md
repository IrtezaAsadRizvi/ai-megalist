# Granola

Granola is the meeting notes app I stopped opening Notion to replace. The model that finally clicked for me was a "bot free" one: nothing joins your call, you write rough notes during the meeting, and Granola polishes them after, using the audio it captured locally. You end up with notes that sound like you, because they were partly you.

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

* **Type during the call.** Not full sentences — just the tags I want to remember. ("budget concern from Sara," "need to follow up on infra audit," "decision: ship Tuesday.")
* **Hit Enhance.** Granola turns my fragments into a structured summary, augmented with what was actually said. The output is short, scannable, and roughly in my voice.
* **Link decisions and action items.** Granola pulls these out automatically; I review and assign owners.
* **Templates.** I have a "1:1" template, a "design review" template, and a "customer call" template. Each shapes the post enhance summary differently.
* **Search across meetings.** "What did Sara say about pricing in March?" works.

## Gotchas

* The bot free approach means anything not captured by your microphone (e.g. someone presenting on a separate device) is missed. For multi room calls, fall back to a bot tool.
* Audio is processed locally for transcription, but the enhancement step calls a hosted model. Check your privacy review if this matters.
* The "augment with what was said" magic only works if you took some notes. Empty in, empty out — Enhance on a blank doc gives a generic transcript summary.
* I find the iPhone app less useful than the Mac one. Most of my meetings happen at a keyboard anyway.

## Pointers

* [granola.ai](https://www.granola.ai)
* Their templates page is the best onboarding. Steal one before writing your own.
* Free year for startups under 30 employees with seed funding (worth checking).
* Bot based alternative: [Fathom](https://fathom.video) (free unlimited, joins as a participant).
