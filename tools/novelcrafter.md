# NovelCrafter

NovelCrafter is the fiction writing tool that finally took the world bible problem seriously. Most AI writing tools assume you're writing a blog post: short, self contained, no continuity. Novelists have a different problem: 100,000 words of prose, dozens of characters, settings that need to stay consistent over months of work. NovelCrafter's "codex" is a structured world reference that the AI actually reads when it generates, and that's the reason serious indie novelists have started using it.

## What it actually is

An AI writing platform built specifically for novel length fiction. Includes a chapter scene editor, a structured codex (characters, locations, items, lore), bring your own model support (OpenAI, Anthropic, Mistral, OpenRouter), AI generation with codex injection, and outlining tools. Web app, subscription pricing.

## Setup

1. Sign up at [novelcrafter.com](https://www.novelcrafter.com). Free tier with limits.
2. Bring an API key from your model provider of choice. NovelCrafter doesn't host models; you pay your model bill directly.
3. Create a project; populate the codex (characters, settings, plot beats).
4. Outline using the built in tools, or import an existing outline.
5. Start writing scene by scene; trigger AI generation with the codex automatically injected as context.

## How I use it day to day

I'm not a novelist. The novelists I've talked to who use NovelCrafter describe a workflow like this:

* **Codex first.** Spend the first session populating the codex; this is the work.
* **Scene level generation.** When generating a scene, NovelCrafter pulls the relevant codex entries (characters in the scene, location, recent events) and feeds them to the model. Continuity stays consistent because the model has the right context.
* **Edit on top of generation.** Output is a draft, never the final. Heavy revision is the norm.
* **Long projects benefit most.** For a short story, a chat with Claude or ChatGPT works fine. For a 100k word novel, the codex pays for itself.

## Gotchas

* You pay both the NovelCrafter subscription and your own model bill. For heavy users this stacks up; cheaper than a writing retreat, more than a single chat subscription.
* The codex is only as good as you make it. Sloppy entries produce sloppy generations.
* Bring your own model is a feature; pick one that's good at long form fiction. Claude and the better Mistral models tend to be cited as preferences.
* The product is built by a small team. UI updates ship steadily; expect occasional breaking changes.

## Pointers

* Web: [novelcrafter.com](https://www.novelcrafter.com)
* Pricing: free tier, then subscription tiers.
* Pairs and competes with [sudowrite.md](sudowrite.md) (more generative AI focused, less codex focused) and [novelai.md](novelai.md) (different model approach, different audience). Many novelists try all three before committing.
