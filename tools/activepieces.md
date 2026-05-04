# Activepieces: open-source self-hosted workflow automation

Activepieces sits in the workflow automation cluster alongside [n8n](n8n.md), [Make](make.md), and [Zapier](zapier.md) - the visual flow builders that wire AI steps into multi-app pipelines. Activepieces is an open source Zapier alternative that takes self hosting seriously. Same premise as n8n (visual flow builder, lots of integrations, code escape hatch), with a slightly different opinion on the UX and a stronger emphasis on AI as a first class trigger and action type. MIT licensed.

## What it actually is

An open source workflow automation platform. Self hosted via Docker, or use the hosted cloud version. Visual flow builder with hundreds of "pieces" (their term for connectors). Code steps in TypeScript. AI integrations baked into the action types. MIT licensed.

## Setup

### Self hosted

1. `docker compose up` from the repo's docker compose example. Activepieces runs locally on a port you choose.
2. Open the web UI; create an admin account.
3. Connect data sources and integrations as you would in any flow tool.
4. Build your first flow: trigger, steps, optional code, deploy.

### Cloud

1. Sign up at [activepieces.com](https://www.activepieces.com).
2. Free tier with limits; paid tiers for higher run counts.
3. Same flow builder, no infrastructure.

## How I use it day to day

I've used Activepieces less than n8n, but the times I have:

* **As a self hosted Zapier replacement for a side project.** Docker compose, a couple of webhooks, done. No external dependency on Zapier's pricing.
* **For AI heavy flows.** The AI step types feel slightly more polished than n8n's, with prompt templating and provider switching as first class concerns.
* **As a candidate when n8n's licensing or UX bothers a customer.** Activepieces' MIT license is more permissive than n8n's fair code license.

## Gotchas

* The connector library is large but smaller than Zapier's; check that the apps you need are supported before committing.
* Self hosting requires you to manage updates, backups, and secrets. If you don't want that work, the cloud tier or Zapier is less hassle.
* The community is smaller than n8n's; expect fewer Stack Overflow style answers when you get stuck.
* Performance on the self hosted version depends on the host machine; long running flows can get queued.

## Alternatives

* If you want the largest connector library and don't care about self hosting, [Zapier](zapier.md) is still the path of least resistance.
* If you want OSS self hosting with a bigger community and more tutorials, [n8n](n8n.md) is the direct competitor.
* If you want a code-first workflow tool with AI steps, [Pipedream](pipedream.md) leans developer.
* If you want a visual scenario builder with AI modules and don't need OSS, [Make](make.md) is the polished cloud option.

## FAQ

### Is Activepieces really free?

Yes if you self host - the MIT licensed core runs on your own Docker host with no usage caps. The hosted cloud has a free tier with run limits and paid tiers for higher volume.

### Activepieces vs n8n - which one?

Both are OSS visual flow builders; n8n has the bigger ecosystem and more Stack Overflow answers, Activepieces has a more permissive MIT license and slightly more polished AI step types. If you need a connector right now, check both connector libraries before picking.

### Can I run Activepieces locally?

Yes, `docker compose up` from the repo gets you a working instance in a few minutes. You manage updates, backups, and secrets yourself - the tradeoff for not paying [Zapier](zapier.md) prices.

### Does Activepieces have AI features built in?

Yes - LLM provider steps (OpenAI, Anthropic, etc.) and AI specific actions are first class pieces. The prompt templating and provider switching feel slightly tighter than [n8n](n8n.md)'s in my experience, though n8n is catching up.

## Pointers

* Web: [activepieces.com](https://www.activepieces.com)
* Repo: [github.com/activepieces/activepieces](https://github.com/activepieces/activepieces)
* MIT licensed; you can fork freely.
* Pairs and competes with [n8n.md](n8n.md) (the closest direct competitor), [make.md](make.md), [zapier.md](zapier.md), and [pipedream.md](pipedream.md). For OSS self hosting, Activepieces and n8n are the two real options.
