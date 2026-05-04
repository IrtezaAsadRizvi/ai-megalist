# Make: visual workflow automation with branching logic

Make is a workflow automation platform that competes with [Zapier](zapier.md) and [n8n](n8n.md), positioned between Zapier's linear flows and n8n's self-hosted complexity. Make (formerly Integromat) is the workflow automation tool I'd recommend to people who want more visual logic than Zapier offers but don't want to host their own n8n. The visual scenario builder shows the flow as a circuit - modules, paths, branches, error handlers - in a way that scales to genuinely complex automations better than Zapier's linear "trigger → action → action."

## What it actually is

A SaaS workflow automation platform. Visual scenario builder, 1500+ integrations, AI modules (OpenAI, Anthropic, Mistral), data stores, schedulers, error handling routes, sub scenarios. Pay per "operation" (each module call counts as one op).

## Setup

1. Go to [make.com](https://www.make.com), sign up.
2. Free tier: 1000 ops/mo, 2 active scenarios.
3. Pricing: Core $9/mo (10K ops), Pro $16/mo (10K ops + features), Teams $29/mo.
4. Click Create New Scenario. Drag modules from the right panel; connect them.
5. Test the scenario manually before scheduling. Make's debugger shows the data flowing through each module.

## How I use it day to day

* **Cross app workflows with branching.** "If the customer is enterprise, route to the sales rep; otherwise, send to the SDR queue." Make's visual paths handle this directly; Zapier's Filter blocks are clunkier.
* **AI augmentations.** Insert OpenAI / Anthropic modules as steps. Same as Zapier; the visual flow is more legible for complex multi step AI work.
* **Data stores.** Make's lightweight DB feature (data stores) saves state between runs. Useful for "is this lead new or already processed?"
* **Sub scenarios** for reusable logic. Enable factor your work; call from many parent scenarios.
* **Error handling routes.** A module fails; Make routes down an error path. More robust than Zapier's "task failed" notifications.

## Gotchas

* Pricing is per operation. Heavy AI workflows (where each LLM call is one op) eat the quota faster than expected.
* The integration catalog is smaller than Zapier's (1500 vs 7000+). Check coverage for your apps.
* Visual scenarios are powerful and overwhelming. Plan layout deliberately or your scenarios become unreadable.
* Some integrations have limits Make doesn't surface clearly. Test thoroughly.
* For dev heavy automations, [n8n.md](n8n.md) self hosted is cheaper at scale and gives you a Code node escape hatch.

## Alternatives

* If you need the largest app catalog and the broadest team adoption, [Zapier](zapier.md) wins on integrations.
* If you're technical and want OSS / self-hosted with a Code node escape hatch, [n8n](n8n.md) is cheaper at scale.
* If you want code-first workflows with AI steps, [Pipedream](pipedream.md) is the developer-friendly pick.
* If you want an OSS Zapier alternative without self-hosting friction, [Activepieces](activepieces.md) is the lighter option.

## FAQ

### Is Make free?

Yes, the free tier covers 1000 ops/mo and 2 active scenarios - enough to test, not enough for production. Core is $9/mo (10K ops); Pro $16/mo with extra features; Teams $29/mo.

### Make vs Zapier - which should I pick?

Make when your automations have branching, error paths, or sub-scenarios. [Zapier](zapier.md) when you need the broadest app catalog and the simplest "trigger -> action" flows. For complex visual logic Make is the more legible tool; for app coverage Zapier still wins.

### What's an "operation" in Make?

Each module call - one HTTP request, one OpenAI call, one Slack post - is one op. Heavy AI workflows where each LLM call is one op eat the quota faster than expected. Plan accordingly.

### Make vs n8n - when do I self-host?

Make if you want a managed SaaS and don't want to maintain anything. [n8n](n8n.md) if you're technical, want OSS, and the per-op pricing on Make stops making sense at your volume. The crossover is usually around 50K-100K ops/mo.

## Pointers

* [make.com](https://www.make.com)
* Templates: [make.com/en/templates](https://www.make.com/en/templates).
* For largest app catalog: [zapier.md](zapier.md). For self hosted OSS: [n8n.md](n8n.md).
* The Make blog has good case studies on complex visual workflows.
