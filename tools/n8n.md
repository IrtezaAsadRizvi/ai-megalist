# n8n

n8n is the workflow automation tool I'd run if I were leaving Zapier in 2026. It's open source, self hostable, has a visual node editor that's genuinely usable, and the AI nodes (LLM calls, agents, RAG) are first class rather than bolted on. The pricing model — free if you self host — makes it the obvious choice for technical teams.

## What it actually is

A workflow automation platform with a node based visual editor. You connect triggers (webhooks, schedules, app events) to action nodes (send Slack, write to a DB, call an API, run code) into multi step workflows. There are 500+ built in integrations and a strong community node ecosystem. Source available license — free for most use.

## Setup

### Self host (Docker)
1. `docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n`
2. Open `http://localhost:5678`. Create an account.
3. Hook up integrations as needed; auth via OAuth or API keys.

### Cloud
1. Go to [n8n.cloud](https://n8n.cloud), sign up.
2. Pricing: Starter $20/mo (5K executions), Pro $50/mo (10K), Enterprise on request.
3. Same UI, no infrastructure on you.

### Quick first workflow
1. Click New Workflow.
2. Drag a Schedule node (every hour) → an HTTP Request node (fetch some data) → an OpenAI node (summarise it) → a Slack node (post the summary).
3. Click Execute Workflow to test, Save to deploy.

## How I use it day to day

* **AI ops automations.** Every morning, n8n pulls our customer support tickets, asks Claude to categorise them by theme, posts a summary to Slack. Maybe 30 lines of equivalent Python; ~10 minutes to build in n8n.
* **Internal RAG.** Drop docs into a folder; n8n watches the folder, embeds, stores in a vector DB. The Q&A workflow on top runs on Slack mentions.
* **Cron alternative.** Anything I'd otherwise put in a cron + small script lives in n8n now. Easier to monitor, easier to modify.
* **AI agents** as nodes. The native Agent node lets you compose tool using agents inside a workflow. Not as flexible as LangGraph but easier to ship.
* **Code node** when the visual nodes can't express what I want. Drop in a Python or JS function; treat n8n as glue.

## Gotchas

* Self hosting needs maintenance (database, backups, upgrades). For one person teams, the cloud tier is often worth it.
* The license (Sustainable Use) is source available, not OSI approved open source. Read it if you're considering forking or commercial use.
* Workflows can grow unwieldy. Use sub workflows and clear node naming or a 50 node workflow becomes unmaintainable.
* AI node pricing depends on which model you wire in; OpenAI / Anthropic charges still apply.
* Some integrations are community contributed and uneven in quality. Pin versions in production.

## Pointers

* Docs: [docs.n8n.io](https://docs.n8n.io)
* Templates: [n8n.io/workflows](https://n8n.io/workflows) — hundreds of starting points worth browsing.
* For SaaS first alternatives: [zapier.com](https://zapier.com), [make.com](https://www.make.com).
* For code first agentic workflows: LangGraph or your own scripts; n8n is the visual middle ground.
