# shortshort: one long video into 9:16 shorts that start and end on a full sentence

shortshort sits in the video repurposing category alongside [Opus Clip](opus_clip.md), [Klap](klap.md), and [Submagic](submagic.md). It takes one long video you upload and proposes vertical shorts, with the specific constraint that every cut opens and closes on a complete sentence rather than on a timer. It does not score virality, add B-roll, or publish anywhere.

## What it actually is

A web studio at [shortshort.io](https://www.shortshort.io). You upload a single long video (MP4, MOV or WebM, up to 3 hours and 2 GB) and it returns vertical shorts of 15 to 90 seconds.

* **Cutting.** The analysis reads the word-by-word transcript and keeps passages that begin and end on a complete sentence. To do that it lets the length drift up to 25% from the target rather than cutting a thought in half.
* **Reframing.** Each short is reframed to 9:16 by tracking the face on screen, with one zoom level per shot and emphasis pushes bounded between x1.0 and x1.6. Slides, screens, and wide shots are detected and kept full-frame instead of being cropped into.
* **Captions.** Timed word by word, in four styles: Spotlight, Impact, Karaoke, Minimal.
* **Export.** MP4 1080x1920 at 30 fps. "Download all" gives a ZIP containing every short twice, with captions and without.
* **Editing.** Every proposal stays editable before rendering, and the manual editor plus its MP4 export work without an account.
* **Gallery.** A public community gallery shows each published short next to its source video and transcript.

## Setup

1. Open [shortshort.io](https://www.shortshort.io). The manual editor and its MP4 export run without an account, so you can try the editing and export path before signing up.
2. Sign up for the AI analysis: 60 credits free, no card.
3. Upload one long video (MP4, MOV, WebM; 3 hours and 2 GB maximum). There is no YouTube-link import, so you need the file.
4. Review the proposed shorts, adjust the in and out points, pick a caption style, then render.
5. Download individually, or take the ZIP with every short in both captioned and clean versions.

## Pricing

* 1 credit = 1 minute of **source** video, whatever the number of shorts produced from it.
* 60 credits free at sign-up, no card.
* Starter 12 EUR/month, Creator 29 EUR/month, Studio 79 EUR/month.
* Shorts per video: 3 on the free tier, 5 on Starter, 10 on Creator, 20 on Studio, which is the top plan.

## Where it fits day to day

* Talks, interviews, and podcasts where a clip that starts mid-sentence is worse than no clip.
* Screen-recorded material, since slides and wide shots are kept full-frame instead of cropped to a face.
* Delivering both captioned and clean versions of the same short in one pass, for example when a channel burns its own captions.
* Editing by hand and exporting a single 9:16 MP4 without creating an account.

## Gotchas

* **9:16 only.** No 16:9, 1:1, or 4:5 export, and nothing above 1080x1920 at 30 fps.
* **No virality score.** There is no ranking of which short will perform; you choose.
* **No dubbing or translation, no B-roll, no music.** Captions are transcribed from the source audio in its own language.
* **No direct publishing.** You download files and post them yourself. There is no social integration, no public API, and no team seats.
* **File upload only.** No import from a YouTube or other platform link.
* **Credits are counted on the source, not the output.** A 60-minute upload costs 60 credits even if you keep one short.
* **Where the data sits.** Storage is Supabase in the EU (eu-central-1, Frankfurt) and the render worker runs in Europe, but the AI analysis step sends the video to Google Gemini or OpenAI, outside that region.
* **Small operation.** It is run from France by one developer, and it launched in September 2026, so it has far less road behind it than the other tools in this table.

## Alternatives

* If you want automated clip picks with virality ranking and direct publishing, [Opus Clip](opus_clip.md) covers the whole job.
* If virality scoring is the feature you are shopping for, [Klap](klap.md) leans hardest on it.
* If you mainly want stylish auto-captions and B-roll on clips you already have, [Submagic](submagic.md) is the focused pick.
* If you want to edit the long master by editing its transcript, [Descript](descript.md) is the right shape.
* If you need avatars and a mobile-first app, [Captions](captions.md) fits better.

## FAQ

### Is shortshort free?

There are 60 free credits at sign-up with no card, which is 60 minutes of source video, and the free tier returns 3 shorts per video. The manual editor and its MP4 export also work without an account. Paid plans are Starter 12 EUR, Creator 29 EUR, and Studio 79 EUR a month.

### Can it publish to TikTok or YouTube?

No. It renders MP4 files you download and post yourself.

### Can it export 16:9 or 1:1?

No. The only output is 9:16 at 1080x1920, 30 fps.

### Does it translate or dub?

No. Captions follow the source audio; there is no dubbing or translation step.

### How does it decide where to cut?

From the word-by-word transcript: a passage is only kept if it opens and closes on a complete sentence, and the length is allowed to drift up to 25% from the target to respect that.

## Pointers

* Web: [shortshort.io](https://www.shortshort.io)
* Closest in shape: [opus_clip.md](opus_clip.md), [klap.md](klap.md), [submagic.md](submagic.md)
* For editing the long master first: [descript.md](descript.md)
