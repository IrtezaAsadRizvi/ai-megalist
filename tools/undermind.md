# Undermind

Undermind is the search tool I reach for when I'm willing to wait ten minutes for an answer. It's a deep scientific search that runs an actual research process in the background: forming queries, reading abstracts, expanding the citation graph, scoring relevance, and coming back with a shortlist plus reasoning. Most search products race for low latency; Undermind explicitly trades it away.

## What it actually is

A research grade scientific search engine that runs multi step retrieval over peer reviewed literature. You ask a question, it spends roughly 5 to 15 minutes searching, and it returns a ranked list of papers along with notes on why each one matched. Targets STEM literature, with strong coverage of biomed, physics, and CS.

## Setup

1. Sign up at [undermind.ai](https://www.undermind.ai). Email or Google.
2. (Optional) Connect institutional access if your library supports it; this matters for full text retrieval on paywalled venues.
3. Open a new search, type the question in natural language.
4. Walk away. The job runs in the background; you'll get a notification when the report is ready.
5. Review the ranked list, click into individual papers, and (optionally) refine and rerun.

## How I use it day to day

* **Lit review starting points.** When I want to know "what's the current state of X" in a field I don't follow, I run Undermind once, get 30 to 50 ranked papers with reasoning, and use that as my reading queue for the week.
* **Finding the obscure prior art.** For very specific technical questions ("has anyone tried Y on Z?") it surfaces the right paper more often than Google Scholar in my experience, because it actually reads abstracts rather than ranking by citation count.
* **Cross checking against [elicit.md](elicit.md).** Elicit is faster and structures answers as tables; Undermind digs deeper. I often run both and take the union.

## Gotchas

* The latency is the price of admission. If you need an answer in a meeting, this isn't your tool.
* Coverage skews STEM. Humanities and social sciences are usable but the underlying corpus is thinner.
* Free tier is limited; serious use needs the paid plan, which is priced for researchers and labs rather than casual readers.
* Like all of these, the relevance scoring can mislead. Always read the paper, not just the model's note about it.

## Pointers

* Web: [undermind.ai](https://www.undermind.ai)
* Pricing: free trial, then per seat monthly; institutional plans available.
* Pairs with [elicit.md](elicit.md) for fast structured answers, [consensus.md](consensus.md) for yes or no on specific scientific questions, and [explainpaper.md](explainpaper.md) once you've narrowed to the papers you actually want to read.
* For broader (less academic) deep research, ChatGPT Deep Research and Gemini Deep Research read more of the open web; Undermind reads more papers. Different tools for different questions.
