# Rows

Rows is the spreadsheet that ate the integrations directory. Cells can be values, formulas, or live data calls (HubSpot contacts, Stripe charges, Google Analytics, OpenAI completions). The AI features (Rows AI, formula assist, ASK) sit naturally inside that already programmable surface, which is why "AI spreadsheet" feels less bolted on here than in the legacy tools.

## What it actually is

A spreadsheet web app by Rows Inc. (Lisbon based). Native integrations with dozens of business APIs. AI features include cell level prompts, formula generation, and an ASK function that returns LLM completions inline. Free tier; paid tiers for higher use and team features.

## Setup

1. Sign up at [rows.com](https://rows.com). Free starter plan.
2. Create a new spreadsheet, or import from CSV / Excel / Google Sheets.
3. Add data sources via the integrations panel: HubSpot, Stripe, Salesforce, etc.
4. Use AI features: the AI Analyst panel for natural language summaries; the `ASK()` function for inline LLM calls.
5. Share with a team or publish as a dashboard.

## How I use it day to day

I'm not a heavy Rows user; the times I have:

* **Pulling from APIs into a spreadsheet.** Stripe revenue by month, HubSpot deal pipeline, etc. Without Rows I'd write a Python script; with Rows it's a function call.
* **Quick LLM enrichment.** Have a column of company names? `=ASK("classify this company's industry: " & A2)` fills the next column. Cheap, fast, occasionally wrong.
* **As a Sheets alternative for SaaS dashboards.** When the data lives in business APIs, Rows is faster than Sheets plus connectors.

For heavy duty modeling I still reach for Excel; for collaboration, Google Sheets. Rows is the integration heavy spreadsheet.

## Gotchas

* The AI features cost credits; chatty ASK() formulas burn through them.
* Some integrations are deeper than others. Verify the one you need is fully featured before betting on it.
* Performance on very large sheets is slower than Sheets or Excel.
* The product is differentiated but the category is contested; Bricks, Equals, and Numerous all play in adjacent territory.

## Pointers

* Web: [rows.com](https://rows.com)
* Pricing: free starter, then Plus, Pro, and Enterprise tiers.
* Pairs and competes with [equals.md](equals.md) (closer to BI, deeper data warehouse), [bricks.md](bricks.md), [numerous.md](numerous.md), and [julius.md](julius.md) (chat with your data, no spreadsheet UI). Rows is the integration heavy spreadsheet; pick a different option if your needs run elsewhere.
