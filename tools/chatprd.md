# ChatPRD

ChatPRD is the AI assistant for product managers writing PRDs, specs, and product docs. Where ChatGPT can technically write a PRD, ChatPRD is shaped by the actual workflow — templates that match how product teams write, persona aware drafting (engineer vs executive vs sales), and integrations into the tools PMs already use.

## What it actually is

A web app at [chatprd.ai](https://www.chatprd.ai). An AI chat interface plus a library of PM templates (PRD, OKR, post mortem, launch plan, customer interview synthesis, etc.). Generates first drafts of these artifacts based on minimal input; iterates with chat refinement.

## Setup

1. Go to [chatprd.ai](https://www.chatprd.ai), sign up.
2. Free tier: limited monthly drafts.
3. Pricing: Pro $10/mo (unlimited drafts, all templates), Team plans available.
4. Pick a template (e.g. PRD); answer the structured prompts ("what's the problem," "who's the user," "what's the proposed solution"); generate.
5. Iterate via chat — request changes, expand sections, regenerate parts.

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

## Pointers

* [chatprd.ai](https://www.chatprd.ai)
* For general writing with stronger AI: [claude.md](claude.md), [chatgpt.md](chatgpt.md) with custom system prompts.
* For roadmap visualisation: ProductBoard, Aha!, native tools in Linear / Jira.
* For customer research synthesis specifically: Dovetail, Marvin AI.
