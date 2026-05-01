# Mode

Mode is the BI tool for analysts who want SQL, Python, and dashboards in one workspace, with AI assist on top. It's been around long enough to be considered "incumbent" rather than "AI native," but the AI Assistant they shipped in the last couple of years is genuinely useful: write SQL from a description, explain a query someone else wrote, suggest the next step in an analysis. Acquired by ThoughtSpot in 2023, still operating as Mode.

## What it actually is

A cloud BI platform combining SQL editor, Python notebooks, and dashboards. Targets data teams at SaaS and tech companies. AI Assistant features include text to SQL, query explanation, and suggested followups. Subscription pricing; enterprise focused.

## Setup

1. Sign up at [mode.com](https://mode.com). Free Studio plan available.
2. Connect a database: Snowflake, BigQuery, Redshift, Postgres, MySQL, etc.
3. Open a new report: write SQL in the editor, see results live.
4. (Optional) Switch to Python notebook for ML or advanced analytics.
5. Build a dashboard: arrange charts, share with a team via URL.
6. Use the AI Assistant: ask "show me weekly active users by plan" and let it draft the SQL.

## How I use it day to day

I'm not a daily Mode user, but the analysts I've worked with who are use it for:

* **Adhoc analysis.** SQL plus charts plus markdown in one report; the artifact you hand to a stakeholder.
* **Drafting SQL with AI.** The text to SQL works well against schemas the model has been exposed to; useful as a fast first draft, always reviewed before running on production data.
* **Python for the harder questions.** When SQL isn't enough (cohort analysis, predictive modeling), Python notebook in the same workspace.
* **Dashboards as an artifact.** Better than a Slack screenshot, lighter than a custom React dashboard.

## Gotchas

* AI generated SQL needs review. The model can write valid SQL that returns wrong numbers; check the joins.
* Pricing is enterprise oriented. Free tier is real but feature limited.
* Dashboard collaboration is good within Mode; sharing externally is limited compared to Tableau or Looker.
* The product surface is broad; data teams sometimes underuse Python because SQL is the path of least resistance.

## Pointers

* Web: [mode.com](https://mode.com)
* Pricing: Studio (free) through Business and Enterprise.
* Pairs and competes with [hex.md](hex.md) (closer cousin, also notebook focused), Tableau / Looker for pure BI, and [julius.md](julius.md) for the simpler chat with your data flow. Mode is for data teams; Julius is for individual analysts.
