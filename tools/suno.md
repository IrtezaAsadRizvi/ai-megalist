# Suno: AI song generator with full vocals and stem editing

Suno is the AI music generator most people start with for full songs with vocals, the polished alternative to [Udio](udio.md) and a different niche from instrumental tools like [Stable Audio](stable_audio.md) and [Mubert](mubert.md). I had a working "song" within sixty seconds of opening Suno for the first time. I typed a vibe, it produced two two minute tracks with vocals that more or less rhymed and a chorus that more or less landed. The bar for "music made with no instrument and no training" used to be high; Suno collapsed it.

## What it actually is

A web based AI music studio. You describe a song (genre, mood, instruments) and optionally provide lyrics. It generates two candidates, each up to four minutes, with vocals. The current model is v5 (April 2026), which sounds noticeably better than v4 - lyrics actually align with the rhythm rather than floating over it.

## Setup

1. Go to [suno.com](https://suno.com), sign up.
2. Free tier gives you 50 credits/day, enough for ~10 full songs.
3. Pro ($10/mo) gives 2,500 credits/month plus commercial use rights.
4. Open the Create panel, choose Custom mode for full control or Simple for a one prompt vibe.

## How I use it day to day

* **Custom mode is where the value is.** Provide a genre tag string ("indie folk, acoustic, melancholic, female vocals, 70 BPM"), paste lyrics, generate. The Simple prompt mode is fine for jingles; for anything you'd loop, go Custom.
* **Stem editing.** v5 lets you split out vocals, drums, bass, and other tracks for export. Bring stems into Logic / Ableton for final mix.
* **Extend** picks up from any point in a track to keep going. Useful when the model gives you 90 seconds you love and 30 seconds you don't.
* **Cover** takes an existing track of yours and re records it in a new style. Permissioned only on tracks you own.

## Lyrics tips

* Use bracketed structure tags: `[Verse 1]`, `[Chorus]`, `[Bridge]`, `[Outro]`. Suno respects them.
* `[Instrumental]` for sections without vocals.
* Short lines beat long lines. The model handles meter better when each line is roughly the same length.
* Vowel choices matter - open vowels (oh, ah) sing better than tight ones at high notes.

## Gotchas

* The vocals are convincing at first listen and slightly uncanny on the third. Editorial quality control is on you.
* Suno's training data is the subject of active litigation (RIAA lawsuit, ongoing as of 2026). Commercial release on Pro tier is officially permitted, but the legal landscape may shift.
* It will sometimes hallucinate words in your lyrics, especially proper nouns. Listen carefully before publishing.
* The same prompt twice gives different songs. Save the seed if you want to iterate from a specific take.

## Alternatives

* If you want finer control, longer tracks, or audio inpainting, [Udio](udio.md) is the contender (mind the Sony litigation).
* If you want royalty-safe music behind a real API for products, [Mubert](mubert.md) is shaped for that.
* If you want SFX and instrumental beds rather than full songs, [Stable Audio](stable_audio.md) covers that range.
* If you're scoring film with classical structure, [AIVA](aiva.md) is the genre specialist.

## FAQ

### Is Suno free?

Yes - free tier gives 50 credits/day, enough for about 10 songs. Pro ($10/mo) gives 2,500 credits/month and adds commercial use rights, which the free tier explicitly lacks.

### Can I sell Suno songs?

Only on Pro tier and above, and the legal status is contested - Suno is in active RIAA litigation as of 2026. Officially permitted under Pro terms; verify before launching anything that depends on clear rights.

### Suno vs Udio - which is better?

Different bets. Suno is the polished default - the lyrics align better with the rhythm in v5. [Udio](udio.md) gives more granular control and longer tracks. I default to Suno; I reach for Udio when I need to inpaint a specific section.

### Can Suno clone my voice?

No - Suno generates voices from prompts, not from samples. For cloning, use [ElevenLabs](elevenlabs.md) or [PlayHT](playht.md).

## Pointers

* [suno.com/help](https://help.suno.com)
* For more granular control (longer tracks, audio inpainting): try Udio.
* For royalty safe stock music with a real API: Mubert.
* Bring stems into a real DAW for the last 10% of polish; Suno is the songwriter, not the engineer.
