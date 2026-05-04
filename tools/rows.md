# Rows: AI spreadsheet with native business API integrations

Rows is the AI spreadsheet that competes with [Equals](equals.md), [Bricks](bricks.md), and chat-driven analysis tools like [Julius](julius.md). Rows is the spreadsheet that ate the integrations directory. Cells can be values, formulas, or live data calls (HubSpot contacts, Stripe charges, Google Analytics, OpenAI completions). The AI features (Rows AI, formula assist, ASK) sit naturally inside that already programmable surface, which is why "AI spreadsheet" feels less bolted on here than in the legacy tools.

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

## Alternatives

* If you want chat with your data and no spreadsheet UI at all, look at [Julius](julius.md) instead - it skips cells in favour of natural language Q&A.
* If your data lives in a warehouse and you want closer to BI, [Equals](equals.md) is the deeper option.
* If you mostly want AI inside Sheets / Excel, [Numerous](numerous.md) is the right add in.
* If your needs run to "spreadsheet that talks back," [Bricks](bricks.md) is the closest sibling.

## FAQ

### Is Rows free?

Yes - the starter plan is free with limits on rows, integrations, and AI credits. Plus is the realistic floor for ongoing use; Pro and Enterprise are for teams.

### Rows vs Google Sheets - which should I use?

Different jobs. Sheets wins on collaboration, scale, and Google Workspace integration. Rows wins when your data lives in business APIs (HubSpot, Stripe, Salesforce) - those calls are first class instead of a Zapier hop away.

### Does the ASK function cost money?

Yes - each ASK call burns credits from your plan. Chatty sheets with hundreds of formulas can drain a tier fast; calculate before scaling.

### What integrations does Rows support?

Dozens, including HubSpot, Stripe, Salesforce, Google Analytics, OpenAI, and most major business APIs. Coverage depth varies - verify the specific endpoint you need before betting on it.

## Pointers

* Web: [rows.com](https://rows.com)
* Pricing: free starter, then Plus, Pro, and Enterprise tiers.
* Pairs and competes with [equals.md](equals.md) (closer to BI, deeper data warehouse), [bricks.md](bricks.md), [numerous.md](numerous.md), and [julius.md](julius.md) (chat with your data, no spreadsheet UI). Rows is the integration heavy spreadsheet; pick a different option if your needs run elsewhere.
