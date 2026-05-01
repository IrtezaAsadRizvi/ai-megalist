# Make

Make (formerly Integromat) is the workflow automation tool I'd recommend to people who want more visual logic than Zapier offers but don't want to host their own n8n. The visual scenario builder shows the flow as a circuit — modules, paths, branches, error handlers — in a way that scales to genuinely complex automations better than Zapier's linear "trigger → action → action."

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

## Pointers

* [make.com](https://www.make.com)
* Templates: [make.com/en/templates](https://www.make.com/en/templates).
* For largest app catalog: [zapier.md](zapier.md). For self hosted OSS: [n8n.md](n8n.md).
* The Make blog has good case studies on complex visual workflows.
