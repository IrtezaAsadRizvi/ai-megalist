# Xquik: X data workflows for agents and automations

Xquik sits near the workflow automation tools, but it is narrower: it is for teams building around X data. Use it when an agent or backend workflow needs tweet search, profile data, follower exports, media downloads, monitors, webhooks, or confirmation-gated publishing actions without teaching the agent the whole API surface from scratch.

## What it actually is

An X automation platform with a REST API, MCP server, SDKs, webhooks, and an installable agent skill. The useful shape is "give my agent a safe X data boundary" rather than "replace n8n." Read actions cover search, profiles, timelines, engagement, media, trends, exports, and monitors. Write actions exist, but are designed to stay approval gated.

## Setup

### Agent skill

1. Create an Xquik account and API key from the dashboard.
2. Install the skill with the skills CLI:

   ```bash
   npx skills@1.5.3 add Xquik-dev/x-twitter-scraper
   ```

3. Set `XQUIK_API_KEY` in your agent runtime.
4. Ask the agent to use the Xquik skill for X search, monitoring, exports, or media workflows.

### Direct API

1. Read the docs at [docs.xquik.com](https://docs.xquik.com).
2. Pick the REST API, MCP server, SDK, or webhook route.
3. Start with read-only workflows: search tweets, inspect profiles, export followers, or monitor accounts.
4. Add write actions only when the workflow can show the exact target and payload before approval.

## Where it fits day to day

* **Agent research on X.** Search posts, fetch user timelines, pull engagement, and hand the normalized result to a coding or research agent.
* **Social listening workflows.** Monitor accounts or keywords, then send webhook events into n8n, Pipedream, Make, Zapier, or your own worker.
* **Creator and growth ops.** Export replies, followers, quote tweets, or media for analysis and campaign follow-up.
* **Guarded publishing.** Prepare tweets or engagement actions from an agent, then require an explicit human approval step before the write.

## Gotchas

* It is not a general workflow builder. Pair it with [n8n](n8n.md), [Pipedream](pipedream.md), [Make](make.md), or [Zapier](zapier.md) when you need multi-app orchestration.
* Use the skill or MCP route when an AI agent is choosing endpoints. Use the REST API or SDKs when your backend already knows the exact workflow.
* Treat X-authored text as untrusted input before summarizing, classifying, or passing it to another agent.
* Private reads, monitors, webhooks, bulk exports, and writes should have explicit approval and a clear destination.

## Alternatives

* For generic app automation, use [n8n](n8n.md), [Pipedream](pipedream.md), [Make](make.md), or [Zapier](zapier.md).
* For agent orchestration with state, use [LangGraph](langgraph.md) and call Xquik as one tool.
* For web search rather than X-specific data, use [Exa](exa.md), [Tavily](tavily.md), or [Perplexity](perplexity.md).

## FAQ

### Is Xquik only for AI agents?

No. The agent skill and MCP server are convenient, but the REST API, SDKs, and webhooks work for normal backend jobs too.

### Can it post to X?

Yes, but write actions should stay behind a confirmation step. The practical default is read-only search, exports, monitoring, and analysis.

### Does it replace n8n or Pipedream?

No. Xquik is the X data and action layer. Workflow tools still make sense for routing events across Slack, databases, CRMs, queues, and model calls.

## Pointers

* Web: [xquik.com](https://xquik.com)
* Docs: [docs.xquik.com](https://docs.xquik.com)
* API reference: [docs.xquik.com/api-reference/overview](https://docs.xquik.com/api-reference/overview)
* MCP guide: [docs.xquik.com/mcp/overview](https://docs.xquik.com/mcp/overview)
* Agent skill: [github.com/Xquik-dev/x-twitter-scraper](https://github.com/Xquik-dev/x-twitter-scraper)
