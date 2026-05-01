# Pipedream

Pipedream is the workflow automation platform built for developers who'd rather write a Node or Python step than drag and drop in Zapier. Each step is real code with full access to npm or pip; the platform handles auth, scheduling, and event sources. With AI steps now first class, it's a credible "code first n8n" with a hosted twist.

## What it actually is

A workflow automation platform where steps are real code (Node.js, Python, Go, Bash). Triggers from HTTP, schedules, or any of 1,000+ third party app event sources. AI is integrated as a step type (OpenAI, Anthropic, etc.). Hosted SaaS with a generous free tier; paid tiers for more invocations and team features.

## Setup

1. Sign up at [pipedream.com](https://pipedream.com). Free tier is real, not a trial.
2. Create a workflow: pick a trigger (HTTP, schedule, an app event).
3. Add steps. Each step is either a prebuilt action (1,000+ apps) or custom code in Node / Python / etc.
4. (Optional) Add AI steps: drop in a "use OpenAI" step or call any HTTP API directly.
5. Deploy. Pipedream gives you a URL or scheduled trigger; the workflow runs in the cloud.

## How I use it day to day

* **Glue between APIs.** When two services don't have a Zapier integration but both have HTTP APIs, Pipedream lets me write the connector in 20 lines and ship it.
* **AI enriched webhooks.** Receive a Stripe webhook, summarize the customer's history with Claude, post the summary to Slack. Three steps; ten minutes.
* **Scheduled scripts I'd otherwise self host.** A cron job that pulls data, calls an LLM, writes results to a Notion page. Pipedream removes the "where do I run this" question.

For pure point and click automation, Zapier is friendlier. For self hosted control, n8n. Pipedream sits in the developer's pocket.

## Gotchas

* The free tier is generous but capped on invocations and credits. Heavy use needs a paid plan.
* Code steps run in their own sandboxes; cold starts add latency. For latency sensitive paths, bake in a warm trigger.
* Logging is good; debugging long workflows can still be tedious. Test step by step.
* The platform stores secrets and OAuth tokens; trust model is "their cloud, their security." Read the policy before connecting sensitive accounts.

## Pointers

* Web: [pipedream.com](https://pipedream.com)
* Docs: [pipedream.com/docs](https://pipedream.com/docs)
* Pricing: free tier with reasonable limits; paid tiers for more invocations, longer timeouts, team features.
* Pairs with [n8n.md](n8n.md) (OSS, self hosted alternative), [make.md](make.md) (more visual), and [zapier.md](zapier.md) (broadest catalog). For AI specific orchestration with state, [langgraph.md](langgraph.md) is a different shape of tool.
