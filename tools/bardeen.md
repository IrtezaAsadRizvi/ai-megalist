# Bardeen: browser-side AI automation

Bardeen is what [Zapier](zapier.md) might have looked like if it had been built five years later, browser-first, and with AI baked in from the start. Rather than a cloud orchestrator that integrates SaaS APIs, Bardeen is a Chrome extension that automates *the things you do in your browser*. Scrape a list of LinkedIn profiles, enrich them, drop them in a Sheet. Watch a Gmail thread, extract attachments, file them. The AI layer ("Magic Box" / agentic mode) tries to write the workflow for you when you describe what you want.

## What it actually is

A Chrome / Edge extension + cloud backend from Bardeen.ai. Triggers can be browser events, schedules, or webhooks. Actions span ~120+ integrations: Gmail, Slack, Notion, Airtable, Salesforce, LinkedIn, Google Sheets, OpenAI, and more. The differentiator vs Zapier/Make: Bardeen can drive a real browser, so it works on sites without an API (LinkedIn search results, Google Maps, anything you'd otherwise scrape).

## Setup

1. Install the Bardeen Chrome / Edge extension. Sign up.
2. Browse the Playbook gallery for prebuilt automations or describe what you want in **Magic Box** and let AI draft it.
3. Connect integrations (Gmail, Slack, etc.) as the workflow asks.
4. Test, then schedule / set the trigger.
5. (Optional) Upgrade to a paid plan for unlimited runs and premium integrations.

## How I use it day to day

* **List-building from LinkedIn** - search → scrape → enrich → push to Sheet. Saves an hour of manual work.
* **Inbox triage** flows - "if email matches X, file attachment to Drive folder Y, ping Slack channel Z."
* **Cross-tab data extraction** - scrape one tab, fill a form in another. Hard for pure-API tools.
* **One-off scrapes** with the "right-click → scrape data" tool.

## Gotchas

* It's a browser extension. The browser has to be open for some flows (the ones that drive a real tab). Cloud-only Bardeen handles others.
* Some sites push back on automation; LinkedIn especially. Use sane rate limits.
* Magic Box is impressive but not perfect - complex flows still need manual editing.
* Pricing scales with usage; check the latest pricing page before relying on it for high-volume work.

## Alternatives

* [Zapier AI](zapier.md) / [Make](make.md) / [n8n](n8n.md) - cloud-side workflow tools with bigger integration catalogs but no browser automation.
* [Browser Use](browser_use.md) - DIY OSS for developers who want code, not no-code.
* [MultiOn](multion.md) - agent that drives the browser via API.
* [Pipedream](pipedream.md) - code-first workflow alternative.

## FAQ

### Is Bardeen free?

Yes - free tier with monthly action limits. Paid plans for higher volume and team features.

### Bardeen vs Zapier?

[Zapier](zapier.md) connects APIs in the cloud. Bardeen drives the browser. Different jobs - use both if your workflows span sites with and without APIs.

### Can it scrape any site?

Most. Sites with heavy anti-bot defenses (and especially LinkedIn) push back; Bardeen's response is "respect rate limits and stay logged in as a normal user."

### Does it have an API?

Limited - the product is browser-first. Webhooks and Zapier integration cover most external triggers.

### What's the Magic Box / agentic mode?

The AI surface where you describe what you want and Bardeen tries to construct the workflow. Useful for ideation; still needs human editing for production-quality flows.

## Pointers

* Site: [bardeen.ai](https://www.bardeen.ai)
* Docs: [bardeen.ai/help](https://www.bardeen.ai/help)
* Compare with [zapier.md](zapier.md), [n8n.md](n8n.md), and [make.md](make.md) for cloud-side workflow tools.
