# ChatPRD: AI writing assistant for product managers

ChatPRD is a product-management writing tool, sitting in the same workflow space as a custom GPT or Claude Project on top of [ChatGPT](chatgpt.md) and [Claude](claude.md) - except shaped specifically around PRDs, specs, and PM artifacts. Where a frontier chat model can technically write a PRD, ChatPRD is shaped by the actual workflow - templates that match how product teams write, persona aware drafting (engineer vs executive vs sales), and integrations into the tools PMs already use.

## What it actually is

A web app at [chatprd.ai](https://www.chatprd.ai). An AI chat interface plus a library of PM templates (PRD, OKR, post mortem, launch plan, customer interview synthesis, etc.). Generates first drafts of these artifacts based on minimal input; iterates with chat refinement.

## Setup

1. Go to [chatprd.ai](https://www.chatprd.ai), sign up.
2. Free tier: limited monthly drafts.
3. Pricing: Pro $10/mo (unlimited drafts, all templates), Team plans available.
4. Pick a template (e.g. PRD); answer the structured prompts ("what's the problem," "who's the user," "what's the proposed solution"); generate.
5. Iterate via chat - request changes, expand sections, regenerate parts.

## How I use it day to day

* **Honest:** I've used ChatPRD for one off PRDs; mostly default to Claude / ChatGPT with my own template.
* **First drafts of PRDs.** ChatPRD's structure is closer to what most companies want than a generic LLM's freeform output.
* **Persona aware sections.** Generate the "Engineer summary" or "Executive summary" of the same doc with different framing per audience.
* **Templates beyond PRDs.** OKRs, launch plans, customer research synthesis, post mortems. Useful for new PMs learning the artifact shapes.
* **Iteration in chat.** "Make this section less hand wavy about timelines." "Add a risks section." Lighter than rewriting yourself.

## Gotchas

* The output is competent generic; doesn't replace the thinking a real PM does. Treat as scaffolding, not as the final doc.
* For company specific frameworks (your own RICE scoring, your own design doc structure), ChatPRD's templates may not fit; use ChatGPT / Claude with your own.
* Pricing is reasonable; the free tier is enough to evaluate.
* Output quality is downstream of the input. Vague prompts produce vague drafts.
* For broader PM toolkit: a custom GPT or Claude Project with your team's template + style guide will often outperform.

## Alternatives

* If you already pay for [Claude](claude.md) or [ChatGPT](chatgpt.md), a Project / Custom GPT with your team's template usually outperforms ChatPRD on the same task.
* If you want PM context inside your second brain, [Notion AI](notion_ai.md) is the path - PRD lives next to the rest of the project.
* For research synthesis (customer interviews → themes), Dovetail is the dedicated tool, not a generic LLM.

## FAQ

### Is ChatPRD worth it over ChatGPT or Claude?

Honestly, often no. ChatPRD's templates are the value; if you already have a good PRD template and a Claude Project, you'll match the output. The case for ChatPRD is "I don't have a template and I want one in five minutes." Pro is $10/mo, which is cheap compared to either subscription.

### Does ChatPRD integrate with Linear or Jira?

Limited as of 2026. The product is mostly a web app for drafting; export to Markdown / Notion is the practical path. If you want native ticket flow, write the PRD here and paste into Linear or Jira.

### Can ChatPRD replace a senior PM?

No, and the product doesn't claim it. The output is competent generic - it gives you the artifact shape and a passable first draft, but the thinking (what to build, what to cut, how to sequence) is still yours. Treat it as scaffolding.

### What templates does ChatPRD include?

PRDs, OKRs, launch plans, post-mortems, customer interview synthesis, product strategy. The PRD template is the headline; the others are useful for new PMs learning the artifact shapes.

## Pointers

* [chatprd.ai](https://www.chatprd.ai)
* For general writing with stronger AI: [claude.md](claude.md), [chatgpt.md](chatgpt.md) with custom system prompts.
* For roadmap visualisation: ProductBoard, Aha!, native tools in Linear / Jira.
* For customer research synthesis specifically: Dovetail, Marvin AI.
