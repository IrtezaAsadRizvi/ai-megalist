# Reve

Reve is the image generator that, for a window in 2024 and 2025, posted state of the art prompt fidelity scores on public benchmarks. The team is small, the product is focused, and the bet is specifically that "what the prompt asks for" should be the dominant axis of quality. For complex prompts with many constraints (specific objects, specific colors, specific spatial relationships), Reve often wins.

## What it actually is

A text to image generator by Reve AI Inc. Web app at [reve.art](https://reve.art) (sometimes [preview.reve.art](https://preview.reve.art)). Currently runs on their own model family. Free tier with daily credits; paid plans for more generations.

## Setup

1. Go to [reve.art](https://reve.art). Sign up with email or Google.
2. Type a prompt. The model is most rewarded by precise descriptions; vague prompts produce vague images.
3. Iterate: Reve has a "remix" flow that varies the prompt or the seed.
4. (Optional) Subscribe for more daily credits.

## How I use it day to day

I treat Reve as a specialist tool, not a daily driver:

* **Prompts with many constraints.** "A cyclist in red shorts holding a yellow umbrella, blue door behind, raining" is the kind of prompt where Midjourney goes painterly and Reve renders the literal scene.
* **A second opinion.** When Midjourney misses a detail in a prompt, I'll regenerate the same prompt in Reve and see whether the constraint actually lands.
* **Comparative testing.** When I'm trying to understand a model's failure modes, having Reve in the rotation alongside Midjourney, Flux, and Imagen gives a useful set of contrasts.

For aesthetic peak (cinematic, painterly, art directed), Midjourney is still my default. Reve is for when the brief matters more than the look.

## Gotchas

* Aesthetic ceiling is below Midjourney. Reve images often look "literal" rather than "beautiful."
* The product is small and the team is small; expect occasional outages and feature gaps versus the bigger competitors.
* Free credits are limited; sustained use needs a paid plan.
* Prompt fidelity benchmarks shift quickly as new models release. Reve's lead at any given moment is real but not guaranteed forward.

## Pointers

* Web: [reve.art](https://reve.art)
* Pricing: free credits daily, then subscription tiers.
* Pairs with [midjourney.md](midjourney.md), [flux.md](flux.md), and [ideogram.md](ideogram.md) as the rotation I'd consider for serious image work. Different models for different goals; running prompts across all four is a cheap way to find which one fits the brief.
