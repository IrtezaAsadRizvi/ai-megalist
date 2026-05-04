# Eightify: YouTube summary extension for learners

Eightify is a video-summarisation tool in the education category, a focused complement to broader-content tools like [NotebookLM](notebooklm.md) and [Perplexity](perplexity.md). The YouTube summariser I've stopped trying to replace - a Chrome extension that drops a sidebar onto any YouTube video with timestamped key points, an AI summary, and a "send to my notes" pipe to Notion / Obsidian / Mem. For anyone who watches more than a few hours of YouTube a week as part of learning or research, the time saved compounds quickly.

## What it actually is

A browser extension (Chrome, Firefox) and small web app. Pulls the transcript of any YouTube video; sends it through an LLM; produces 8 to 12 timestamped key insights. There's also chat with the video ("ask anything about this") and bulk summarisation for playlists.

## Setup

1. Install Eightify from the Chrome Web Store or Firefox Add ons.
2. Sign up at [eightify.app](https://eightify.app) for full features.
3. Free tier: 3 summaries/day. Pro: $7.49/mo (unlimited).
4. Open any YouTube video; the Eightify panel appears on the right.
5. (Optional) Connect Notion / Obsidian / Mem for one click "save to notes."

## How I use it day to day

* **Triage long videos.** Skim the 10 key points; decide whether the full video is worth my time. Maybe 60% of the time the summary is enough; 40% I watch the parts the summary flagged.
* **Click timestamps to jump.** The interactive timestamps are the productivity feature. Skip to the part that matters.
* **Chat with the video.** "Did the speaker mention X?" Faster than scrubbing.
* **Save to notes.** A summary in Notion takes ~3 seconds via Eightify's send. Builds a personal library of "things I learned from videos" worth searching later.
* **Playlist summarisation.** Bulk process a saved learning playlist; skim 20 video summaries in 10 minutes.

## Gotchas

* Quality is downstream of the source transcript. Auto generated YouTube transcripts have errors; Eightify inherits them.
* Summaries on heavily visual content (tutorials with screen demos) miss the visual half. Plan to watch the original.
* Some videos restrict transcript access; Eightify can't process them.
* The extension is the canonical experience; the web app is a useful supplement, not a replacement.
* For non YouTube video, Eightify isn't the answer - try Glasp's broader video tool, Recall, or NotebookLM if it's a file you can upload.

## Alternatives

* If you want grounded Q&A on uploaded video / audio (not just YouTube), [NotebookLM](notebooklm.md) is the broader tool.
* If you want web summaries beyond YouTube, [Perplexity](perplexity.md) handles general content.
* If you want a video-and-article hybrid for learning workflows, Glasp covers more surface.
* For native YouTube summaries, Google's own summary feature is rolling out gradually inside YouTube - check before paying.

## FAQ

### Is Eightify free?

Yes for 3 summaries/day. Pro is $7.49/mo for unlimited. The free tier is enough to evaluate; daily-learner use justifies the paid tier easily.

### Eightify vs NotebookLM - which should I use?

Different jobs. Eightify is a one-click YouTube extension - drop into any video, get a summary in 5 seconds. [NotebookLM](notebooklm.md) is a heavier workspace where you upload sources and have an ongoing notebook. For triage, Eightify. For sustained study with multiple sources, NotebookLM.

### Does Eightify work on Shorts and live streams?

Shorts: yes, but the summary value is low (the videos are already short). Live streams: no - it needs a finished transcript. For long-form lectures and podcasts, it shines.

### Can I use Eightify offline?

No - it sends the transcript to a cloud LLM. The Chrome extension is the surface; the work happens on Eightify's servers. For offline, you'd need to download the transcript and run a local model on it.

## Pointers

* [eightify.app](https://eightify.app)
* For grounded Q&A on uploaded video / audio: [notebooklm.md](notebooklm.md).
* For broader web content summarisation: [perplexity.md](perplexity.md), Glasp.
* For native YouTube summary - Google's own summary tool inside YouTube has been rolling out gradually; check whether it's enabled in your account before paying for Eightify.
