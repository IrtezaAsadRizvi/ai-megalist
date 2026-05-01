# Hex

Hex is the data notebook for teams. Imagine if Jupyter and Mode had a kid that grew up in 2024 — collaborative, web hosted, Python + SQL native, with AI ("Magic") woven through the editing experience. For data teams that want shared notebooks with the polish of a modern app, Hex is the leading option.

## What it actually is

A web based data platform. You write Python and SQL in a notebook style editor; charts and tables render inline; reports can be published as interactive web apps. Magic AI features include natural language to SQL / Python, AI generated charts, and AI explanations of code. Connects to most data warehouses (Snowflake, BigQuery, Redshift, Databricks) and databases.

## Setup

1. Go to [hex.tech](https://hex.tech), sign up.
2. Free tier (Hex Personal): unlimited single user use; limited compute.
3. Pricing: Team $59/seat/mo, Enterprise quote.
4. Connect a data source (warehouse or database) via OAuth or service account.
5. Create a project. Drop a SQL cell; query data; drop a Python cell; analyse; drop a chart cell.

## How I use it day to day

* **Honest:** I've used Hex on a handful of analyses; my default for personal is Jupyter, for team work I'd recommend Hex.
* **SQL + Python in the same notebook.** Query the warehouse; pipe into pandas; chart. Cell types are different; data flows between them.
* **Magic SQL.** Natural language to SQL ("daily active users in March by plan tier"); Hex generates the SQL; I tune.
* **Magic Python.** "Plot the same data as a stacked bar with monthly totals." Hex writes the matplotlib / Plotly code.
* **Publish as app.** Notebook → published interactive app with parameter controls, scheduled refresh, shareable URL. Stakeholders use it without seeing code.
* **Collaboration.** Multiple people in the same notebook; Google Docs style cursors; cell comments. Real time.

## Gotchas

* Pricing for teams gets real. Solo personal is generous; multi user lifts costs.
* Heavy compute jobs run on Hex's infrastructure; large queries hit timeouts. Tune SQL or move to a real ETL tool.
* Magic AI is good at common patterns; uneven on novel analyses. Read every generated cell before running.
* For pure exploratory work alone, Jupyter / VS Code is simpler. Hex's value is collaboration and publishing.
* For BI dashboards (less code, more drag and drop): Mode, Lightdash, Tableau.

## Pointers

* [hex.tech](https://hex.tech)
* For BI specifically with AI: [Mode](https://mode.com).
* For chat with CSVs / sheets without notebook: [julius.md](julius.md).
* For local Jupyter with AI assistance: [continue.md](continue.md) in VS Code, or Cursor with Jupyter support.
