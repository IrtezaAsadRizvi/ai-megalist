# Lindy

Lindy is the no code AI assistant builder for ops workflows. You describe an assistant ("when an email arrives from a job applicant, summarize the resume, score it against my criteria, and reply with a calendar link"), and Lindy spins up an agent that handles it. It's the closest thing to "Zapier with a brain" that's actually shipped to non technical users.

## What it actually is

A platform for building AI agents and automations without code. Connects to email, calendar, Slack, CRMs, and dozens of business apps. Uses frontier LLMs under the hood. Subscription pricing.

## Setup

1. Sign up at [lindy.ai](https://www.lindy.ai). Free trial; paid tiers for team and higher usage.
2. Pick a template ("Email triage Lindy", "Sales outreach Lindy") or build from scratch.
3. Configure the trigger (email received, form submitted, schedule, manual).
4. Add steps. Lindy describes them in plain language; under the hood they're tool calls.
5. Connect accounts via OAuth as the steps require.
6. Test with sample inputs, then enable.

## How I use it day to day

I'm not a heavy Lindy user; the people I know who are use it for:

* **Inbound triage.** Job applications, sales leads, support requests. Lindy reads, scores, drafts a reply.
* **Recurring research.** Every Monday, summarize the week's PRs, post to Slack.
* **CRM enrichment.** New contact in HubSpot, Lindy researches the person and fills in fields.

For ops teams without engineering support, Lindy can replace what would otherwise be a contractor and a Zapier subscription.

## Gotchas

* Quality tracks the underlying model. Lindy uses frontier models so this is fine in 2026; expect cost to scale with use.
* Debugging an agent that occasionally misfires is harder than debugging a deterministic Zap. Plan for occasional review.
* Pricing is task based and can climb fast on chatty agents. Watch the credit meter.
* The "no code" framing hides a lot of decisions about prompting and tool selection. Power users still benefit from understanding the underlying mechanics.

## Pointers

* Web: [lindy.ai](https://www.lindy.ai)
* Pricing: tiers based on credits and seats.
* Pairs and competes with [relevance_ai.md](relevance_ai.md) (similar pitch, more agent team framed) and [zapier.md](zapier.md) AI Agents (Zapier's own answer). For developers, [n8n.md](n8n.md) and [pipedream.md](pipedream.md) are stronger.
