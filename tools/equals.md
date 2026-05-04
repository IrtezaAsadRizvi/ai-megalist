# Equals: AI spreadsheet wired to your data warehouse

Equals lives in the AI spreadsheet category alongside [Rows](rows.md) and [Julius](julius.md), but its angle is different - it's a spreadsheet that treats Snowflake / BigQuery queries as first-class cells, with AI on top. The result is a spreadsheet that finance and ops teams can use to build dashboards directly off the warehouse, with AI assist for SQL generation and analysis. Acquired by Numeric in 2024 but still operating.

## What it actually is

A spreadsheet for SaaS finance and ops teams, with native connections to data warehouses (Snowflake, BigQuery, Redshift, Databricks) and SaaS tools (Stripe, HubSpot, Salesforce). Cells can be SQL queries; results live in the sheet and refresh on schedule. AI features include text to SQL and analysis assist. Subscription pricing.

## Setup

1. Sign up at [equals.com](https://equals.com). Demos are gated; some plans available self serve.
2. Connect a data source: warehouse credentials or OAuth into a SaaS app.
3. Create a workbook; add a SQL query as a data block.
4. Reference query results in formulas, charts, and dashboards.
5. Share the workbook with a team; viewers get refreshed data on a schedule.

## How I use it day to day

I'm not a power user; I've watched finance teams use it:

* **Replacing weekly Excel exports.** Instead of someone running a SQL query and pasting into a deck, the deck pulls live from the warehouse.
* **Forecasting models with live data.** Build the model in Equals; underlying numbers update as the warehouse does.
* **Text to SQL for non engineers.** Finance ops people who can read SQL but don't write it fluently get a fast path to working queries.

For pure ad hoc analysis I'd reach for Mode or Hex (more analyst oriented). For business critical models that need to update, Equals' warehouse integration is the differentiator.

## Gotchas

* AI generated SQL needs review. Wrong joins produce wrong forecasts; the spreadsheet will happily display them as truth.
* Pricing skews team and enterprise; not designed for solo users.
* Some warehouse features (row level security, very large queries) need careful handling.
* The spreadsheet metaphor is comfortable for finance but constraining for some analysis tasks. Match the tool to the task.

## Alternatives

* If you want broader SaaS API integrations and a less warehouse-centric spreadsheet, [Rows](rows.md) is a closer fit.
* For ad-hoc analysis on CSVs and chat-driven exploration, [Julius](julius.md) is more analyst-friendly.
* If you want a notebook with SQL plus Python plus AI, [Hex](hex.md) is the analyst-grade option.
* For BI dashboards with AI assist on top of warehouse data, [Mode](mode.md) is the older, more mature pick.

## FAQ

### Is Equals free?

No. Pricing skews team and enterprise; there have been individual / starter tiers but the product is built around shared workbooks, not solo use. Pull the current pricing from equals.com - it shifts.

### Equals vs Google Sheets - which should I use?

Sheets if your data lives in CSVs and SaaS exports. Equals if your numbers live in Snowflake / BigQuery / Redshift / Databricks and you're tired of the weekly export-and-paste routine.

### Does Equals support Snowflake and BigQuery?

Yes, both, plus Redshift and Databricks, plus direct OAuth into Stripe / HubSpot / Salesforce. The native warehouse connection is the whole point of the tool.

### Is Equals' AI SQL trustworthy?

Treat it like any other AI-generated SQL: review every join. The spreadsheet will happily render a wrong forecast as if it were truth, and finance models inherit those errors silently.

## Pointers

* Web: [equals.com](https://equals.com)
* Pricing: tiers from individual through team and enterprise.
* Pairs and competes with [rows.md](rows.md) (broader API integrations, less warehouse focused), [mode.md](mode.md) and [hex.md](hex.md) (analyst notebooks), and Excel / Sheets with custom warehouse connectors. Pick Equals when finance and ops want spreadsheet ergonomics on warehouse data.
