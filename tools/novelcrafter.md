# NovelCrafter: codex-driven AI writing for novel-length fiction

NovelCrafter is an AI fiction writing tool in the same category as [Sudowrite](sudowrite.md) and [NovelAI](novelai.md), pitched at novel-length writers who need a structured world bible the AI actually reads. NovelCrafter is the fiction writing tool that finally took the world bible problem seriously. Most AI writing tools assume you're writing a blog post: short, self contained, no continuity. Novelists have a different problem: 100,000 words of prose, dozens of characters, settings that need to stay consistent over months of work. NovelCrafter's "codex" is a structured world reference that the AI actually reads when it generates, and that's the reason serious indie novelists have started using it.

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

## Alternatives

* If you want a more generative AI focus and less codex emphasis, [Sudowrite](sudowrite.md) is the category leader for prose generation.
* If you prefer a fiction-tuned model and don't care about codex structure, [NovelAI](novelai.md) is the model-first pick.
* If your project is short-form, a chat with [Claude](claude.md) is often enough and cheaper.
* If you want to write the codex and prose in plain Markdown without a SaaS, [Obsidian](obsidian.md) plus an AI plugin is the local-first path.

## FAQ

### Is NovelCrafter free?

There's a free tier with limits. Paid tiers are monthly subscriptions. You also pay your own model bill (BYO API key) - so two stacking costs to plan around.

### NovelCrafter vs Sudowrite - which should I use?

NovelCrafter when world-bible continuity matters - 100K-word novels with dozens of characters. [Sudowrite](sudowrite.md) when you want the more polished UX and a generative-first workflow. Many novelists try both before committing.

### Which model should I use with NovelCrafter?

Bring your own API key. Claude and the better Mistral models tend to be cited as preferences for long-form fiction. Test on a few scenes before committing - prose quality varies more than chat benchmarks suggest.

### Does the codex actually improve continuity?

Yes - the codex entries get injected as context for relevant scenes, so character details and plot beats stay consistent. Sloppy codex entries produce sloppy generations though - the codex is the work.

## Pointers

* Web: [novelcrafter.com](https://www.novelcrafter.com)
* Pricing: free tier, then subscription tiers.
* Pairs and competes with [sudowrite.md](sudowrite.md) (more generative AI focused, less codex focused) and [novelai.md](novelai.md) (different model approach, different audience). Many novelists try all three before committing.
