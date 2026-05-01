# Ideogram

Ideogram is the only AI image tool I trust to render legible text. The other models (Midjourney, FLUX, SD) all get text right sometimes; Ideogram gets it right ~90% of the time on V3, which is the threshold that turns "novelty" into "tool I actually use to make posters."

## What it actually is

A text to image model from Ideogram AI, focused on typography, posters, logos, and graphic design. V3 (released late 2025) significantly improved photorealism while keeping its text rendering lead. Web app at [ideogram.ai](https://ideogram.ai); also available via API.

## Setup

1. Go to [ideogram.ai](https://ideogram.ai), sign up.
2. Free tier gives 10 generations/day. Paid tiers: Basic $7/mo, Plus $16/mo, Pro $48/mo.
3. Type a prompt. The "Magic Prompt" feature expands your prompt automatically; toggle off if you want full control.
4. (Optional) Try a Style Reference image to lock aesthetic.
5. (Optional) API access at [developer.ideogram.ai](https://developer.ideogram.ai).

## How I use it day to day

* **Posters.** "Vintage 1970s travel poster for Mars, sunset palette, hand drawn type, the words 'VISIT MARS' in bold serif at the top." Ideogram delivers something I can actually use.
* **Logos.** First pass logo generation. Output is at the "good enough to discuss with a designer" level — not at "ship it."
* **Social cards.** Custom open graph images with readable headlines. Faster than mocking up in Figma for one offs.
* **Magic Prompt.** Sometimes I let it expand my prompt; sometimes I write the full description myself. Magic Prompt is good for fewer sentences in, varied outputs out.
* **Remix.** Take an existing image, prompt for variations. The Style Reference workflow is similar in spirit to Midjourney's `--sref`.

## Gotchas

* Text rendering is best in English. Other Latin scripts work; non Latin scripts (Arabic, Chinese, Devanagari) are unreliable.
* Aesthetic ceiling is below Midjourney. For purely artistic work without text, Midjourney still wins.
* Long phrases (>10 words) are still hit or miss even on V3.
* Pro tier is the only one with API parity. If you need programmatic generation, budget accordingly.
* Magic Prompt is a black box; if you need reproducibility, turn it off.

## Pointers

* [ideogram.ai](https://ideogram.ai)
* API docs: [developer.ideogram.ai](https://developer.ideogram.ai)
* Pair with [midjourney.md](midjourney.md) — Midjourney for the visual, Ideogram for the typography. I often use both in the same project.
* For pure logo work, design tools (Looka, Brandmark) are still more useful than text to image.
