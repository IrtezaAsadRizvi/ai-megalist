# Glide

Glide is the no code platform for turning a spreadsheet into a mobile app. Years before "AI app builder" was a category, Glide had figured out that most internal tools are basically a CRUD UI on a Google Sheet, and that observation is still load bearing. The newer AI features (smart actions, AI columns, prompt to app) layer onto that foundation; the spreadsheet to app translation is what makes Glide work.

## What it actually is

A no code app builder that takes a Google Sheets, Airtable, or Excel data source and produces a mobile or web app. Includes AI columns (LLM powered fields in your data), smart actions, and prompt to app generation. Subscription pricing for individual and team use.

## Setup

1. Sign up at [glideapps.com](https://www.glideapps.com). Free starter tier.
2. Connect a data source: Google Sheets, Airtable, Excel, or Glide's built in tables.
3. Pick a template (employee directory, inventory, customer portal) or start from scratch.
4. Customize layouts: list views, detail views, forms, charts.
5. (Optional) Add AI columns: each cell can be an LLM generated value based on a prompt that references other cells.
6. Publish to web or as a PWA installable on phones.

## How I use it day to day

I'm a casual user; the use cases I've reached for:

* **Internal tools.** Inventory tracker, contact directory, simple CRM. Glide ships in an hour what would take days in a custom build.
* **Forms with logic.** Customer intake, application forms, anything where conditional fields and routing matter.
* **AI enriched data.** Adding a "summary" column or "category" column populated by an LLM based on free text fields.

For consumer facing apps with serious scale, Glide is the wrong tool. For internal tools and small SaaS, it's well worth the subscription.

## Gotchas

* The mobile feel is good but it's a PWA, not a native app. App Store distribution requires more work.
* Custom logic beyond simple actions hits the platform's ceiling. For complex flows, you'll wish you had code.
* AI columns burn through credits; cost scales with row count and prompt length.
* Pricing tiers gate user counts and AI usage; check the matrix before committing.

## Pointers

* Web: [glideapps.com](https://www.glideapps.com)
* Pricing: free starter, then tiers up to enterprise.
* Pairs and competes with [softr.md](softr.md) (similar Airtable focus, different design opinions), [bubble.md](bubble.md) (more powerful, more complex), [base44.md](base44.md), and [lovable.md](lovable.md) (more "app from prompt"). Glide is the spreadsheet first option.
