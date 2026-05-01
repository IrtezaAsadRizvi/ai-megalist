# Descript

Descript is a video editor where the timeline is a transcript. Delete a sentence in the doc, and the corresponding clip is gone. Once this clicks, every other editor feels like fighting the medium. For long form content (podcasts, interviews, talking head video), I haven't found a faster workflow.

## What it actually is

A desktop app (macOS, Windows) and web app for video and audio editing. The signature feature is text based editing: Descript transcribes your media, shows a synced doc, and lets you cut by deleting words. There's also a stack of AI features: Studio Sound (clean noisy audio), Overdub (clone a voice and type words to "say" them), Eye Contact (correct gaze when reading from notes), Filler Word removal, Multitrack support.

## Setup

1. Download from [descript.com](https://www.descript.com) and install.
2. Free tier gives 1 hour of transcription/month; paid tiers start at $24/mo for individuals.
3. Sign in. Create a new project. Drag in a video or audio file.
4. Wait for transcription (~1 minute per 10 minutes of media).
5. Edit the doc. Watch the timeline update.

## How I use it day to day

* **Removing filler words and silences.** One click for "remove all 'um's" and "shorten gaps over 0.5s." A 60 minute raw record collapses to 50 minutes of cleaner content with no editorial decisions.
* **Cut by transcript.** Reorder paragraphs by dragging them in the doc; the video re cuts. Counterintuitive at first, indispensable once internalised.
* **Studio Sound.** Drop a noisy phone recording in, click Studio Sound, get something close to studio quality. The first time you do this, you'll think it's broken because the difference is so big.
* **Overdub** for fixing typos. I have a clone of my voice; if I misspoke a word in a 30 minute video, I retype the word and Overdub patches it. Faster than re recording.
* **Multi track for podcasts.** Two or three speakers, each on their own track, transcribed and labeled.

## Gotchas

* Descript stores projects on its cloud by default. For privacy sensitive work, switch to local only at Project → Settings.
* Overdub requires explicit voice training (a long script you read out loud). The result is good for word level patches; not good enough to fake a whole monologue.
* The export step can feel slow on long projects. Plan a coffee break.
* Studio Sound is sometimes too aggressive — it can flatten genuine room tone. Compare before/after on a test clip first.
* The UI has a learning curve. Plan an hour to feel competent.

## Pointers

* Docs: [help.descript.com](https://help.descript.com)
* For straight talking head video edits at scale: pair with [opus_clip](https://www.opus.pro) or [captions](https://www.captions.ai) for the short form derivatives.
* For higher quality voice cloning beyond Overdub, see [elevenlabs.md](elevenlabs.md).
