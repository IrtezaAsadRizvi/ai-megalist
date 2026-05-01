# Softr

Softr is the no code app builder for non developers who already live in Airtable or Google Sheets. Point Softr at your spreadsheet; pick from a library of templates (client portal, member directory, internal tool); ship a real web app in an afternoon. The AI features are useful but ancillary; the spreadsheet as backend story is the genuine differentiator.

## What it actually is

A web based no code app builder. Creates apps with auth, payments, custom domains, and database backed UI from spreadsheets (Airtable, Google Sheets, Notion, HubSpot CRM). Templates and "blocks" (pre built UI components) speed up assembly. AI features include AI Generator (prompt → app structure) and Magic Block (prompt → custom block).

## Setup

1. Go to [softr.io](https://www.softr.io), sign up.
2. Free tier: 1 app, Softr branded.
3. Pricing: Basic $59/mo, Professional $167/mo, Business $323/mo (annual). Lifts limits and adds features.
4. Connect a data source (Airtable / Google Sheets / Notion).
5. Pick a template (Client Portal, Member Hub, Job Board, Inventory Manager) or start from scratch.
6. Softr generates the app skeleton; you refine.

## How I use it day to day

* **Honest:** I've used Softr for one off internal tools; not a daily tool for me.
* **Internal tools backed by Airtable.** A team uses Airtable; a non team facing app is needed; Softr ships the front end faster than building a custom web app.
* **Member portals.** Auth, content gating, member only resources — Softr's templates handle this directly.
* **Lightweight CRMs / job boards.** Spreadsheet as backend, Softr as the UI layer. Production capable for low traffic apps.
* **AI Generator** for first draft of app structure. Decent starting point; expect to refine heavily.
* **Magic Block** for custom UI components without code.

## Gotchas

* The "no code" promise hits a wall for complex logic. Softr is for "look up data + simple writes"; serious workflows need [bubble.io](https://bubble.io) or actual code.
* Pricing scales with users and visits. For high traffic apps, costs add up fast.
* Performance is bound by your spreadsheet backend. Airtable / Google Sheets aren't databases at scale.
* Custom domain + advanced auth gates higher tier plans.
* For prompt → app from scratch (not spreadsheet backed): [lovable.md](lovable.md), [bolt_new.md](bolt_new.md).

## Pointers

* [softr.io](https://www.softr.io)
* Pair with Airtable for the backend in 90% of use cases.
* For a more flexible (and complex) no code: [Bubble](https://bubble.io).
* For prompt → full stack with Supabase: [lovable.md](lovable.md).
