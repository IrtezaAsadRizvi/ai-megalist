# Hex: collaborative data notebook with AI Magic

Hex is in the data analysis category alongside [Mode](mode.md), [Julius](julius.md), and [Rows](rows.md), specifically the notebook-shaped option for analyst teams. Imagine if Jupyter and Mode had a kid that grew up in 2024 - collaborative, web hosted, Python + SQL native, with AI ("Magic") woven through the editing experience. For data teams that want shared notebooks with the polish of a modern app, Hex is the leading option.

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

## Alternatives

* If you want BI dashboards with AI on top instead of a notebook, [Mode](mode.md) is the closer pick.
* For chat-driven analysis on CSVs and sheets without writing code, [Julius](julius.md) is the lighter shape.
* If your data lives in a spreadsheet and you want AI on top, [Rows](rows.md) or [Equals](equals.md) are the right tools.
* For pure solo Jupyter work with AI assist, [Cursor](cursor.md) plus the Jupyter extension covers the same ground without team-collab overhead.

## FAQ

### Is Hex free?

Yes - Hex Personal is free for unlimited single-user use with limited compute, which is genuinely usable for solo analysis. Team is $59/seat/mo, Enterprise on quote. The free tier evaporates fast in real teamwork (collaboration features are paid).

### Hex vs Jupyter - which should I use?

Different shapes. Jupyter is the local solo standard; Hex is the team / publishing layer. If you're doing exploratory analysis alone, Jupyter is simpler and free. If you need shared notebooks with cursors, comments, and publishing-as-app, Hex.

### Hex vs Mode - which is better?

Different defaults. Hex is notebook-first (write SQL + Python + charts as cells). [Mode](mode.md) is BI-first (drag-and-drop dashboards with SQL underneath). For teams that want analysts coding, Hex. For teams that want stakeholders self-serving dashboards, Mode.

### Does Hex Magic write SQL well?

For common patterns yes - "daily active users by plan tier" becomes runnable SQL fast. For novel analyses or unusual schemas, it makes mistakes that look right. Read every generated cell before running it on production data.

## Pointers

* [hex.tech](https://hex.tech)
* For BI specifically with AI: [Mode](https://mode.com).
* For chat with CSVs / sheets without notebook: [julius.md](julius.md).
* For local Jupyter with AI assistance: [continue.md](continue.md) in VS Code, or Cursor with Jupyter support.
