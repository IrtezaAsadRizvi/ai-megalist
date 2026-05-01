# Zapier

Zapier is the workflow automation tool with the largest app catalog and the smoothest onboarding. The AI features (AI Actions, Zapier Agents, AI assisted Zap building) bring it into the same space as n8n and Make, with the difference that Zapier has 7000+ integrations vs everyone else's hundreds. For "I need to connect a thing to another thing," Zapier remains the safe pick.

## What it actually is

A SaaS workflow platform. You build "Zaps" — triggers + actions across apps. The AI layer adds:

* **AI Actions** — call OpenAI / Anthropic / etc. as a step in any Zap, with structured output.
* **Zapier Agents** — build a tool using agent that runs on a schedule or on demand.
* **AI Zap building** — describe a workflow in plain English; Zapier proposes the Zap.
* **Tables / Interfaces / Canvas** — the broader Zapier platform (no code databases, forms, visual workflow editors).

## Setup

1. Go to [zapier.com](https://zapier.com), sign up.
2. Free tier: 100 tasks/mo, 5 single step Zaps. Real use starts at Professional ($19.99/mo) and up.
3. Click Create Zap. Pick a trigger (e.g. "New Gmail email"); pick actions (e.g. "Add row to Notion DB," "Summarise with Claude").
4. (Optional) Try Zapier Agents: build a goal driven agent with tools from Zapier's catalog.
5. (Optional) Use the Chrome extension or mobile app for quick captures.

## How I use it day to day

* **Cross app glue.** "When a HubSpot contact is updated, send a Slack DM to their account manager." 5 minutes to build, runs forever.
* **AI as a step.** After triggering on a form submission, summarise the long answer with Claude before posting to Slack. Zapier's AI step is a thin wrapper around the provider API.
* **Zapier Agents** for tasks that need multi step reasoning. Slower and more expensive than a Zap; right when the task can't be expressed as a fixed flow.
* **Tables + AI Actions** for lightweight CRMs / trackers that auto enrich with AI summaries.
* **Quick prototypes** of automations I'd later port to n8n or code if they get serious.

## Gotchas

* Pricing scales with task count. Heavy AI workloads (calling Claude on every email) eat the quota fast. Watch the dashboard.
* Some integrations are official; others are community contributed and inconsistent. Check before committing.
* The "no code" promise has limits. Complex branching workflows are awkward; Code by Zapier (a Python / JS step) is the escape hatch.
* For privacy sensitive automations, your data flows through Zapier's servers. Check residency before standardising.
* For self hosted alternatives: [n8n.md](n8n.md), Activepieces. For the largest ecosystem, Zapier still wins.

## Pointers

* [zapier.com](https://zapier.com)
* App catalog: [zapier.com/apps](https://zapier.com/apps)
* For self hosted: [n8n.md](n8n.md) (open source friendly).
* For Microsoft Power Automate users: similar shape, deeper enterprise integration if you're on M365.
