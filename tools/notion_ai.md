# Notion AI

Notion AI is the AI you already have, if you live in Notion. The argument for it isn't that it's the best model on any axis — it isn't — but that it's *in the surface where the work happens*. Drafting a doc, summarising a database, asking questions of your team's wiki. Friction matters more than benchmarks for this kind of work.

## What it actually is

An AI feature set across Notion: inline writing assistance (`Space` to summon), Q&A over your workspace, AI Connectors (read from Slack, Google Drive, Linear), and AI Agents that automate multi step work inside the workspace. Built mostly on Claude under the hood, with some routing.

## Setup

1. You need a Notion workspace. [notion.so](https://www.notion.so).
2. Notion AI is included in Plus, Business, and Enterprise plans (the Free tier gets a small allowance).
3. To enable Q&A across your workspace, an admin grants AI access at Settings → AI. Pages can be excluded.
4. (Business+) Wire up AI Connectors to Slack, GDrive, Linear, etc. at Settings → Connections.

## How I use it day to day

* **`Space` mid sentence.** In any block, hit space at the start to summon AI. "Continue writing," "Improve writing," "Translate to French." This is the killer feature for me — I rarely leave the doc.
* **Summarise long pages.** /summary inserts an executive summary block. Useful for shared meeting docs that get long.
* **Q&A.** "What did we decide about pricing in last quarter's planning?" and Notion answers from your workspace, citing pages. The accuracy is good when the source pages are well structured; mediocre when your wiki is messy.
* **Database fills.** Custom AI properties on a database — "Summarise the PDF in this page," "Extract the key risks," "Translate to Spanish." Set once, applies to every row.
* **AI Agents.** Build a small agent that runs weekly: "Pull all PRDs created this week, group by team, post a summary to the leadership page." Still rough as of April 2026, but the trajectory is clear.

## Gotchas

* Q&A quality is downstream of your wiki quality. If half your important docs live in someone's drafts folder, the answers will be partial.
* The AI counts toward a per seat allowance on Business; heavy users will hit caps.
* Cross workspace search is limited. For research across many sources outside Notion, use Claude or Perplexity.
* The AI is opinionated about formatting. It loves bullet lists. If you want prose, ask for prose.
* AI Connectors send your data through the Notion AI pipeline. Read the data residency docs if you're in a regulated industry.

## Pointers

* [notion.so/help/notion-ai](https://www.notion.so/help/notion-ai)
* For a more powerful Q&A tool over your own files, see [notebooklm.md](notebooklm.md).
* For meeting notes specifically, pair with [granola.md](granola.md) and pipe summaries into Notion.
