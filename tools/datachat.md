# DataChat

DataChat is the conversational analytics platform built on a guided language called GEL (Guided English Language). The pitch: instead of writing SQL or learning a BI tool, you have a conversation with your data, and the platform builds a reproducible pipeline from your prompts. It's been around since the pre LLM days and adapted as transformer based models matured.

## What it actually is

A no code conversational analytics platform. Connects to data warehouses, files, and APIs. Translates natural language requests into a structured pipeline (GEL), which then runs against the data. Outputs include charts, tables, ML models, and shareable workbooks. Subscription pricing.

## Setup

1. Request a demo at [datachat.ai](https://datachat.ai). Trial available depending on the plan.
2. Connect a data source.
3. Open a session; start typing or speaking analytics questions.
4. DataChat builds a pipeline as you go; you can review and edit the GEL steps directly.
5. Save sessions as reproducible workbooks; share with stakeholders.

## How I use it day to day

I haven't run DataChat in production. Based on demos and conversations with users:

* **Non technical analysts.** People who can't write SQL but understand data structures get a way to ask questions and get answers without a developer.
* **The pipeline is the value.** Other "chat with your data" tools generate a one off answer. DataChat builds a reusable pipeline you can adapt.
* **Forecasting and ML lite.** The platform includes ML steps (regression, classification, time series) so the conversation can extend beyond reporting into prediction.

For analyst heavy teams I'd still go to Hex or Mode. DataChat is for environments where the people asking the questions don't speak SQL.

## Gotchas

* GEL is a learnable language but it's still a language. The "no SQL" promise is partly a translation; advanced users will learn GEL.
* Like all chat with your data tools, output quality depends on schema understanding. Bad schemas produce bad answers.
* Pricing is enterprise. Not a casual tool.
* The conversational interface can lull users into trusting the output. Always review the pipeline before publishing results.

## Pointers

* Web: [datachat.ai](https://datachat.ai)
* Pricing: contact sales; some self serve trials.
* Pairs and competes with [julius.md](julius.md) (more chat focused, less pipeline focused), [mode.md](mode.md) and [hex.md](hex.md) (analyst tools), and [rows.md](rows.md) / [equals.md](equals.md) (spreadsheet metaphor). DataChat sits between BI and AI assistants.
