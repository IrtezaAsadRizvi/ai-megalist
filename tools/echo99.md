# Echo99: private local call recording and transcription for macOS

Echo99 is a native macOS call recorder in the transcription category alongside [Whisper](whisper.md), [Otter](otter.md), and [AssemblyAI](assemblyai.md). Its distinguishing feature is an end-to-end local workflow: it captures microphone and system audio as separate tracks, then transcribes and labels speakers on the Mac without uploading meeting content.

## What it actually is

A free menu-bar app for macOS 14.4 or later. Echo99 records the user's microphone and the Mac's system output into separate WAV files, then creates local JSON and text transcripts with speaker labels. It works with calling apps and browser meetings without joining as a bot, requires no account, and supports both Apple silicon and Intel Macs.

## Setup

1. Download the notarized app from [echo99.app](https://www.echo99.app/).
2. Grant microphone and system-audio permissions.
3. Download the transcription and speaker models during first-run setup.
4. Choose a recording folder or keep the default, `~/Documents/echo99`.
5. Start and stop recording from the menu bar; transcription begins automatically after the call.

## Best for

* Mac users who want call audio and transcripts stored as ordinary local files.
* Calls where a visible meeting bot would be distracting or inappropriate.
* Separating the user's microphone from everyone heard through system audio.
* Working offline after the on-device models have been downloaded.

## Gotchas

* It requires macOS 14.4 or later and is fastest on Apple silicon.
* The current product focuses on recording and speaker-labeled transcripts; AI-generated notes are still in development.
* There is no cloud backup, so users are responsible for protecting or deleting their recording folders.
* The app's launch update check sends an anonymous installation identifier. Recordings and transcripts are not uploaded.
* Recording laws and consent requirements vary by location and call; users must follow the rules that apply to them.

## Alternatives

* [Granola](granola.md) for bot-free capture plus hosted enhancement of rough meeting notes.
* [Fathom](fathom.md) for a visible meeting bot with cloud recording and summaries.
* [Otter](otter.md) for live transcription and a searchable cloud meeting archive.
* [Whisper](whisper.md) for a do-it-yourself open-source transcription pipeline.

## Pointers

* Web: [echo99.app](https://www.echo99.app/)
* Setup guide: [echo99.app/getting-started](https://www.echo99.app/getting-started)
* Privacy policy: [echo99.app/privacy-policy](https://www.echo99.app/privacy-policy)
