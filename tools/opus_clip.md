# Opus Clip: long video to short clips, automated

Opus Clip sits in the video-repurposing category alongside [Captions](captions.md), [Submagic](submagic.md), and [Klap](klap.md), aimed at podcasters and creators who don't want to edit. Opus Clip is the long video to short clips tool that does the entire job: it watches your full podcast/lecture/livestream, picks the most "viral" segments, captions them, reframes for vertical, and exports a stack of TikTok / Reels / Shorts ready clips. For creators repurposing long form content, it collapses a multi hour editing job into one click.

## What it actually is

A web app at [opus.pro](https://www.opus.pro). Upload (or paste a URL - YouTube, Zoom, Twitch) a long form video; Opus produces 10 to 30 short clip candidates ranked by an "Opus Virality Score." Each clip comes with auto captions, dynamic reframing (face tracking for vertical), and a hook title.

## Setup

1. Go to [opus.pro](https://www.opus.pro), sign up.
2. Free tier: 90 minutes of upload/month with watermark.
3. Pricing: Starter $19/mo, Pro $79/mo, Business $295/mo (more minutes, no watermark, brand templates, scheduled publishing).
4. Paste a YouTube URL or upload a file (up to 3 hours).
5. Wait 10 to 30 minutes (depends on length). Get a stack of clip candidates.
6. Edit any clip in the in browser editor or export and bring to a real editor.

## How I use it day to day

* **Honest:** I've used Opus Clip on a friend's podcast for evaluation; not a daily tool for me.
* **Podcast → 10 short clips.** Drop a 60 minute interview, get 10 candidates ranked by predicted virality. The picks aren't always right, but the time savings are massive.
* **Auto captions are good.** The accuracy is on par with Whisper, the styling options match TikTok / Reels conventions.
* **Reframe for vertical.** Opus tracks the speaker's face and reframes the 16:9 source to 9:16 with the face centered. Handles cuts and angle changes reasonably.
* **Hook generation.** Each clip gets a suggested title. Quality is "decent first draft"; I rewrite ~70% of them.
* **Schedule + publish.** Pro tier connects to TikTok, Instagram, YouTube Shorts for direct publishing.

## Gotchas

* "Virality scores" are a marketing artifact. Trust your own taste; the scores are weak signal at best.
* The auto reframe sometimes loses important visual context (a chart on screen, a guest's reaction). Watch each clip before publishing.
* Caption styling defaults are loud. Tone them down if your brand is more restrained.
* Pricing is steep for casual use. The free tier is enough to evaluate.
* Long form sources with multiple speakers are harder; Opus tracks the dominant speaker.

## Alternatives

* If you want full transcript-based editing instead of automated picks, [Descript](descript.md) is the right shape.
* If you're mobile-first and care about avatars + B-roll, [Captions](captions.md) is the lighter pick.
* If you mostly want stylish auto-captions on existing clips, [Submagic](submagic.md) is cheaper and more focused.
* If you want similar long-to-short with virality scoring, [Klap](klap.md) is the closest direct competitor.

## FAQ

### Is Opus Clip free?

There's a free tier with 90 minutes of upload per month and a watermark on output. Starter is $19/mo and Pro is $79/mo; Pro is the floor for serious daily use without a watermark.

### How accurate is Opus Clip's virality score?

Weak signal at best. The scores are a marketing artifact; trust your own taste. Treat them as a rough first sort, not a recommendation.

### Opus Clip vs Descript - which one?

Different jobs. Opus Clip automates the "pick clips and reformat" job; [Descript](descript.md) is a real editor where you cut by editing the transcript. Use Opus Clip for volume, Descript when you want control.

### Can Opus Clip handle multiple speakers?

Imperfectly. The auto reframe tracks a dominant speaker; multi-person panels and roundtables produce shakier output. For dialogue-heavy formats, Descript or a manual edit is safer.

## Pointers

* [opus.pro](https://www.opus.pro)
* Comparable: [Captions](https://www.captions.ai) (mobile first, AI avatars), [Submagic](https://www.submagic.co) (caption focused, lighter).
* For full editing control instead of automated clipping: [descript.md](descript.md).
* Pair with [opus_clip.md] for repurposing + [elevenlabs.md](elevenlabs.md) for translation if you go international.
