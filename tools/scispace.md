# SciSpace: AI reading partner for scientific papers

SciSpace is the AI research tool for chatting with academic papers, sitting alongside [NotebookLM](notebooklm.md) for PDF Q&A and complementing [Elicit](elicit.md) and [Consensus](consensus.md) for paper discovery. SciSpace is the AI tool for the actual reading of scientific papers. Where Elicit and Consensus help you find papers, SciSpace helps you understand them - chat with a paper, ask "what does this equation mean," ask "explain this to a non specialist," summarise per section. For graduate students, journalists, and anyone reading outside their narrow specialty, SciSpace is the patient reading partner.

## What it actually is

A web app at [scispace.com](https://scispace.com). Upload any scientific paper (or use SciSpace's own indexed library); chat with the paper using its full text as context. Plus features for finding related papers, citation navigation, literature review tables, and AI generated explanations of equations / figures / sections.

## Setup

1. Go to [scispace.com](https://scispace.com), sign up.
2. Free tier: 5 PDF uploads/mo, limited chats.
3. Pricing: Premium $20/mo (unlimited uploads, full features).
4. Two paths:
   * **Search SciSpace's library** for a paper, open it, chat.
   * **Upload your own PDF**, chat with it.
5. SciSpace also has a Chrome extension to chat with any PDF / paper you're viewing.

## How I use it day to day

* **Honest:** I tested SciSpace on a few papers outside my comfort zone (proteomics, cosmology); useful as an explanation layer.
* **Reading papers outside my specialty.** Chat asks "explain this paragraph in simpler terms" or "what assumption is this argument resting on." Faster than tracking down references manually.
* **Equation explanations.** Highlight an equation; ask SciSpace to walk through what each variable represents. The AI handles standard notation well.
* **Section summaries.** Long methods sections get a summary; I read the full text only where the summary flags something interesting.
* **Find related papers.** From any open paper, SciSpace surfaces related ones via citation graph + semantic similarity.
* **Literature review tables.** Multiple papers; ask SciSpace to extract specific fields (sample size, key finding, limitation) into a structured table.

## Gotchas

* Quality is bounded by paper text quality. Poorly OCR'd PDFs (older papers, scanned books) produce weaker chat responses.
* The model can confidently misrepresent technical claims. Always cross check load bearing claims against the paper itself.
* Coverage of SciSpace's indexed library is large but not complete; for very recent papers, upload the PDF.
* Free tier is enough to evaluate; serious use needs Premium.
* For systematic literature review (extraction across many papers): [Elicit](https://elicit.com) is shaped for that workflow.

## Alternatives

* If you want free grounded Q&A on PDFs without scientific-specific features, [NotebookLM](notebooklm.md) covers most of the ground.
* If you're doing systematic literature review across many papers, [Elicit](elicit.md) is shaped for that workflow.
* If you want claim-level evidence aggregation across the literature, [Consensus](consensus.md) is the right pick.
* If you mostly need passage-by-passage explanations, [Explainpaper](explainpaper.md) is the focused tool.

## FAQ

### Is SciSpace free?

The free tier covers 5 PDF uploads per month and limited chats. Premium ($20/mo) lifts both to unlimited; that's the tier most working researchers end up on.

### SciSpace vs NotebookLM - which should I use?

Different jobs. [NotebookLM](notebooklm.md) is free, generalist, and great for arbitrary documents. SciSpace is paid and specialised - equation explanations, citation graph, literature review tables. If you mostly read scientific papers, SciSpace earns its keep; otherwise NotebookLM is enough.

### Can SciSpace explain equations?

Yes - highlight an equation, ask, and the model walks through what each variable represents. It handles standard mathematical notation reliably; cross-check load-bearing claims against the paper itself.

### Does SciSpace work on old scanned PDFs?

Quality drops sharply on poorly OCR'd PDFs. For scanned books or pre-digital papers, expect weaker chat responses; run a better OCR pass first if accuracy matters.

## Pointers

* [scispace.com](https://scispace.com)
* For grounded Q&A on PDFs (Google's): [notebooklm.md](notebooklm.md). Free; comparable for many uses.
* For finding papers by question / claim: [elicit.md](elicit.md), [Consensus](https://consensus.app).
* For passage by passage explanations specifically: [Explainpaper](https://www.explainpaper.com).
