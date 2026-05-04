# Consensus: AI search across peer-reviewed research

Consensus is an academic-search tool in the research category, sitting alongside [Elicit](elicit.md) (systematic review workflow) and [Perplexity](perplexity.md) (open-web cited search). It's the AI search engine specifically for peer reviewed research. Where Perplexity searches the open web and Elicit focuses on systematic review workflows, Consensus answers questions like "is X true?" by aggregating evidence from peer reviewed papers and showing you the consensus (or lack thereof). For science journalism, evidence based decision making, and "what does the actual research say" questions, Consensus is the right shape.

## What it actually is

A web app at [consensus.app](https://consensus.app). Indexes ~200 million scientific papers; uses LLMs to read abstracts (and full text where available); answers questions with cited evidence. Distinguishing feature: the "Consensus Meter" - a visual showing what proportion of relevant papers support / refute / are mixed on a claim.

## Setup

1. Go to [consensus.app](https://consensus.app), sign up.
2. Free tier: limited Pro Analysis searches.
3. Pricing: Premium $11.99/mo, Enterprise.
4. Type a yes/no question or open question: "Does intermittent fasting improve metabolic health?"
5. Consensus returns papers with extracted findings, plus a Consensus Meter aggregating the evidence.

## How I use it day to day

* **Honest:** Not a daily tool; I open Consensus when I want grounded answers on health, education, or social science questions.
* **Yes/no claim verification.** "Is L theanine effective for anxiety?" Consensus aggregates studies; shows distribution of findings; cites each.
* **Methods aware ranking.** Consensus weights study quality (RCTs > observational; systematic reviews > primary studies). The ranking reflects this.
* **Discovering related papers.** Click into a finding; see similar papers; build a reading list.
* **Quick fact checks for science writing.** Faster than reading abstracts manually; cited so I can verify.
* **For "what does the research say" questions across scientific topics, Consensus answers honestly when the answer is "mixed" or "insufficient."**

## Gotchas

* Coverage is biomedical and social science heavy; CS / engineering / physics are smaller domains.
* The Consensus Meter is a useful summary; it can also flatten nuance. Always read the underlying papers for important decisions.
* Some papers are paywalled; abstracts only. For full text access, university libraries or Sci Hub (regional legality varies).
* Free tier is enough to evaluate; daily use needs Premium.
* For systematic literature reviews with structured extraction: [Elicit](https://elicit.com) is the better workflow.

## Alternatives

* If you want structured data extraction across papers (literature reviews), [Elicit](elicit.md) is the better workflow.
* If you want cited answers from the open web, not just journals, [Perplexity](perplexity.md) is the broader tool.
* If you want grounded Q&A on PDFs you upload yourself, [NotebookLM](notebooklm.md) is the right shape.
* For deeper scientific search across niche papers, Undermind digs further than Consensus.

## FAQ

### Is Consensus free?

Yes - the free tier covers basic searches. Premium is $11.99/mo for higher limits and more Pro Analysis runs. Free is enough to evaluate; daily science-writing use needs Premium.

### Consensus vs Elicit - which should I use?

Different jobs. Consensus answers "what does the research say?" with a Consensus Meter aggregating findings. [Elicit](elicit.md) is the workflow for "I'm doing a literature review" - structured extraction tables, screening, citation export. Use Consensus to triage; use Elicit to write.

### Is the Consensus Meter trustworthy?

Useful as a quick summary; flattens nuance. Always read the underlying papers for important decisions - the Meter weights study quality (RCTs > observational) but can't capture every confound. Treat it as a triage signal, not a verdict.

### What papers does Consensus index?

Roughly 200 million scientific papers from Semantic Scholar and supplementary sources. Coverage is biomedical and social-science heavy; CS, engineering, and physics are smaller domains. Some papers are paywalled (abstracts only).

## Pointers

* [consensus.app](https://consensus.app)
* For systematic review and data extraction: [elicit.md](elicit.md).
* For deep scientific search: [Undermind](https://www.undermind.ai).
* For grounded Q&A on PDFs you upload: [notebooklm.md](notebooklm.md), [SciSpace](https://scispace.com).
