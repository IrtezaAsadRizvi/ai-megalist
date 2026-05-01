# Numerous

Numerous is the AI add in for the spreadsheets you already use. Instead of asking you to switch tools, it puts a function (`AI()` and friends) inside Google Sheets and Excel. You stay where your data lives; the AI shows up as a formula. For teams that already standardize on Sheets or Excel, this is a much lower friction path than migrating to a new spreadsheet product.

## What it actually is

A Google Sheets and Excel add in by Numerous AI Inc. Adds AI functions you can use directly in cells: `AI()` for general prompts, plus templated functions for classification, extraction, summarization. Supports OpenAI, Anthropic, and Google models. Subscription pricing.

## Setup

### Google Sheets

1. Open Sheets; Extensions → Add ons → Get add ons.
2. Search "Numerous AI"; install.
3. Authorize. Numerous opens a sidebar.
4. Use functions: `=AI("classify the sentiment", A2)` returns text into a cell.

### Excel

1. Insert → Get Add ins; search Numerous AI.
2. Install and authorize.
3. Same `AI()` and templated functions inside Excel cells.

### API key (optional)

Numerous can use its own backend (paid via Numerous), or you can BYO API keys for cheaper direct access.

## How I use it day to day

* **Bulk classification.** A column of customer feedback gets a sentiment label in seconds via `=AI("sentiment as positive, neutral, or negative", A2)`.
* **Field extraction.** Pulling a job title or company name out of a free text bio column.
* **Quick text generation.** Drafting personalized email opener variants for a list of leads.

For real number crunching I don't use Numerous; this is a text on data tool. For numbers I'd write Python or use Mode / Hex.

## Gotchas

* Cost adds up fast on chatty `AI()` calls across thousands of rows. Watch the usage.
* AI outputs aren't deterministic; the same formula can return different values on different runs. Pin results to static cells when you need stable downstream calculations.
* The free tier is limited; for production use you need a paid plan or BYO API keys.
* Sheets recalc behaviour can re run AI calls more than you'd like. Be deliberate about volatile vs static cells.

## Pointers

* Web: [numerous.ai](https://numerous.ai)
* Add in stores: Google Workspace Marketplace and Microsoft AppSource.
* Pricing: free tier with limits, monthly tiers, BYO key option.
* Pairs and competes with [rows.md](rows.md) and [bricks.md](bricks.md) (AI native spreadsheets) and [equals.md](equals.md). For non spreadsheet chat with your data, [julius.md](julius.md). Numerous is for staying in Sheets or Excel.
