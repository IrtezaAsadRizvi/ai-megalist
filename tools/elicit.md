# Elicit: AI literature-review workflow for researchers

Elicit is a research tool in the academic-literature category, the structured-workflow counterpart to [Consensus](consensus.md) (claim verification) and grounded-PDF tools like [NotebookLM](notebooklm.md) and [SciSpace](scispace.md). The AI research assistant I'd recommend to a graduate student or anyone who needs to read literature systematically. The product is shaped by a real research workflow - search papers, screen abstracts, extract data into a table, summarise across papers. Each step is augmented; none is replaced. The output is a structured literature review you can audit, not a black box answer.

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
* **Citations export.** BibTeX, Zotero - the substrate for actually writing the literature review you used Elicit to start.

## Gotchas

* Coverage is academic papers (Semantic Scholar) plus some supplementary. Books, dissertations, gray literature are weaker.
* The model occasionally extracts wrong data into table cells. Always verify the cited passage; don't paste extracted data without checking.
* For bleeding edge work (papers from the last 30 days), indexing lag matters; cross check with arXiv directly.
* Pricing per credit; complex questions burn more. Watch usage.
* Generated summaries are starting points, not final review prose. Humans still write the discussion.

## Alternatives

* If you want claim verification ("is X true?") with a Consensus Meter rather than full literature review, [Consensus](consensus.md) is the right shape.
* If you want grounded Q&A on PDFs you upload yourself, [NotebookLM](notebooklm.md) is the broader tool.
* If you want PDF-chat with paper explanations as the primary surface, [SciSpace](scispace.md) is the natural pair.
* For deep scientific search across niche papers, Undermind digs further than Elicit.

## FAQ

### Is Elicit free?

Yes - 5,000 credits/mo on the free tier. Plus is $12/mo, Pro $49/mo, Teams $149/mo. Credits burn faster on complex questions; for a thesis-scale literature review, plan on Pro.

### Elicit vs Consensus - which should I use?

Different jobs. [Consensus](consensus.md) answers "what does the research say?" with an aggregated meter - good for quick triage. Elicit is for "I'm doing a literature review" - structured extraction tables, screening, citation export. Use Consensus to scope; use Elicit to do the work.

### Can Elicit replace a systematic review?

It accelerates the screening and extraction phases significantly; it doesn't replace the human judgment in inclusion/exclusion criteria or the discussion section. Treat it as a tool that takes the literature review from weeks to days, not minutes.

### Does Elicit hallucinate citations?

Less than open-web tools because it grounds answers in a real paper index (Semantic Scholar). Extracted data into table cells can still be wrong - always verify the cited passage by clicking through. Don't paste extracted data into your draft without checking.

### Does Elicit export to Zotero?

Yes - BibTeX and Zotero exports are first-class. The substrate for actually writing the literature review you used Elicit to start.

## Pointers

* [elicit.com](https://elicit.com)
* For grounded Q&A on uploaded PDFs: [notebooklm.md](notebooklm.md).
* For peer reviewed search across the open web: [Consensus](https://consensus.app).
* For deep scientific search: [Undermind](https://www.undermind.ai), Semantic Scholar directly.
