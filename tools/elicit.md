# Elicit

Elicit is the AI research assistant I'd recommend to a graduate student or anyone who needs to read literature systematically. The product is shaped by a real research workflow — search papers, screen abstracts, extract data into a table, summarise across papers. Each step is augmented; none is replaced. The output is a structured literature review you can audit, not a black box answer.

## What it actually is

A web app at [elicit.com](https://elicit.com) for literature search and review. Indexes ~125 million academic papers (Semantic Scholar + supplementary). Features: paper search with semantic ranking, abstract extraction tables, key concept extraction across papers, research summaries with source citations.

## Setup

1. Go to [elicit.com](https://elicit.com), sign up.
2. Free tier: 5000 credits/mo. Paid: Plus $12/mo, Pro $49/mo, Teams $149/mo.
3. Start a "Notebook" → type a research question.
4. Elicit returns ranked papers; expand abstract; extract data into a structured table (intervention, outcome, sample size, etc.).
5. Refine question, re run, save.

## How I use it day to day

* **Honest:** I'm not a researcher; I tested by running a literature scan on long context evaluation.
* **Question to ranked papers.** "What's the evidence on long context degradation in LLMs over 100K tokens?" Elicit returns papers, ranked by relevance, with extracted abstracts.
* **Data extraction across papers.** Configure columns ("model," "context length tested," "main finding"). Elicit fills the table from the papers. Auditable; click any cell to see the source passage.
* **Summary across papers.** "Summarise what these 10 papers agree and disagree on." The summary cites which paper each claim comes from.
* **Saved searches.** Subscribe to a question; Elicit notifies on new papers.
* **Citations export.** BibTeX, Zotero — the substrate for actually writing the literature review you used Elicit to start.

## Gotchas

* Coverage is academic papers (Semantic Scholar) plus some supplementary. Books, dissertations, gray literature are weaker.
* The model occasionally extracts wrong data into table cells. Always verify the cited passage; don't paste extracted data without checking.
* For bleeding edge work (papers from the last 30 days), indexing lag matters; cross check with arXiv directly.
* Pricing per credit; complex questions burn more. Watch usage.
* Generated summaries are starting points, not final review prose. Humans still write the discussion.

## Pointers

* [elicit.com](https://elicit.com)
* For grounded Q&A on uploaded PDFs: [notebooklm.md](notebooklm.md).
* For peer reviewed search across the open web: [Consensus](https://consensus.app).
* For deep scientific search: [Undermind](https://www.undermind.ai), Semantic Scholar directly.
