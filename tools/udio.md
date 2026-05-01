# Udio

Udio is the music generation tool I reach for when Suno's vocals don't fit and I want more control. The model leans toward fewer hits and more layered, produced sounding tracks. The tradeoff is more time per song and a steeper learning curve, but the ceiling is genuinely higher for studio quality output.

## What it actually is

A web based AI music generator at [udio.com](https://www.udio.com). Generates ~32 second clips by default, extendable in 30+ second increments to multi minute songs. Supports custom lyrics, genre tags, audio inpainting (regenerate just one section), and stem export.

## Setup

1. Go to [udio.com](https://www.udio.com), sign up.
2. Free tier: 10 generations/day. Paid: Standard $10/mo (1200 credits), Pro $30/mo (4800 credits).
3. Click Create. Type a prompt: "lofi hip hop, jazzy piano, vinyl crackle" with optional custom lyrics.
4. Generate. Get two ~32 second candidates. Extend, remix, or download.

## How I use it day to day

* **Layered, produced sounding tracks.** Where Suno feels singer songwriter, Udio feels producer. Better for genre work that needs depth (jazz, electronic, soundtrack).
* **Audio inpainting.** A song is 90% there but the bridge is wrong. Mask the bridge, regenerate. Cheaper than starting over.
* **Stems for mixing.** Export vocals / drums / bass / other separately and mix in Logic / Ableton.
* **Long structures.** Build verse → chorus → verse → bridge → chorus by extending a base clip section by section. More work than Suno's "give me a song" mode, more control.
* **Prompt engineering matters more than on Suno.** Genre tags, mood descriptors, vocal style (e.g. "soulful female vocal in the style of...") all change output significantly.

## Gotchas

* Udio is in active litigation with Sony Music as of 2026; the legal situation is fluid. Read terms before commercial release.
* The 32 second default chunk size is small. Multi minute work requires multiple extend operations.
* The model occasionally produces near copies of training data on certain prompts. Listen carefully before publishing.
* Vocals are convincing but slightly uncanny on close listen — the same problem Suno has, slightly different tradeoffs.
* Credits go fast on Pro tier with extends. Budget per song.

## Pointers

* [udio.com](https://www.udio.com)
* Compare with [suno.md](suno.md) — different sweet spots; many producers use both.
* For royalty safe API based music: [Mubert](https://mubert.com).
* For DAW final mix: any real DAW (Logic, Ableton, Reaper).
