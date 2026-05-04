# Descript: text-based video and podcast editor

Descript is a video / audio editor in the long-form editing category, distinct from clip-repurposing tools like [Opus Clip](opus_clip.md), [Captions](captions.md), and [CapCut](capcut.md). Where those make shorts, Descript edits the whole thing - a video editor where the timeline is a transcript. Delete a sentence in the doc, and the corresponding clip is gone. Once this clicks, every other editor feels like fighting the medium. For long form content (podcasts, interviews, talking head video), I haven't found a faster workflow.

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
* Studio Sound is sometimes too aggressive - it can flatten genuine room tone. Compare before/after on a test clip first.
* The UI has a learning curve. Plan an hour to feel competent.

## Alternatives

* If you want short-form clip generation from long video, [Opus Clip](opus_clip.md) or [Captions](captions.md) is the right shape.
* If you want a free mobile-first editor with AI assists, [CapCut](capcut.md) is the broader-reach answer.
* If you mainly want voice cloning beyond Overdub, [ElevenLabs](elevenlabs.md) has higher fidelity for narration.
* If you want full timeline control with traditional NLE features, Premiere or DaVinci Resolve is still the heavier-weight environment.

## FAQ

### Is Descript free?

Yes - the free tier gives you 1 hour of transcription per month. Paid tiers start at $24/mo for individuals (Hobbyist) and scale up to Business. For real podcast / video work, paid is the realistic floor.

### Descript vs CapCut - which should I use?

Different jobs. Descript is text-based editing for long-form content - podcasts, interviews, talking-head video. [CapCut](capcut.md) is a traditional timeline editor with AI assists, mobile-first, free. For "edit a 60-minute podcast by deleting filler words," Descript. For "make a TikTok," CapCut.

### Is Overdub good enough to fake a whole monologue?

No - and the policy gates explicitly want you not to. Overdub is for word-level patches (fixing a typo in a 30-minute video). Quality drops noticeably when you ask it for whole sentences from scratch. For full voice cloning, [ElevenLabs](elevenlabs.md) is meaningfully better.

### Does Descript work on Linux?

No - macOS and Windows desktop only. The web app handles some workflows but lags the desktop in features. Linux users are stuck with cloud-only or alternatives.

### Can Descript transcribe in languages other than English?

Yes - 23 languages as of 2026. English transcription is the most accurate; quality drops for less-common languages. For non-English work, validate on a sample before committing to a full project.

## Pointers

* Docs: [help.descript.com](https://help.descript.com)
* For straight talking head video edits at scale: pair with [opus_clip](https://www.opus.pro) or [captions](https://www.captions.ai) for the short form derivatives.
* For higher quality voice cloning beyond Overdub, see [elevenlabs.md](elevenlabs.md).
