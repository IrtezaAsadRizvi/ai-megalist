# Explainpaper: highlight-to-explain reader for academic PDFs

Explainpaper is a research-PDF tool in the same neighborhood as [NotebookLM](notebooklm.md) and [SciSpace](scispace.md), but with a tighter loop - highlight the sentence that confused you, get the explanation pinned to that exact passage. It's the tool I wish I'd had in grad school. You drop in a PDF, highlight any passage you don't understand, and it explains that specific bit in context. The interaction is the whole product: you're not chatting with a paper, you're pointing at the paragraph that confused you and asking what's going on.

## What it actually is

A web app for reading academic papers with an AI explainer attached. Upload a PDF, the document renders in a side by side view, and any text you highlight gets a contextual explanation in the panel beside it. You can adjust the explanation level (5 year old, undergrad, expert) and ask follow up questions about the highlighted region.

## Setup

1. Go to [explainpaper.com](https://www.explainpaper.com) and sign up with email or Google.
2. Drag a PDF onto the upload area, or paste an arXiv link.
3. Wait for the paper to render (a few seconds for most papers, longer for image heavy ones).
4. Click and drag to highlight any passage. The explanation appears in the right panel.
5. (Optional) Ask follow up questions in the same panel; context is preserved.

## How I use it day to day

* **Reading outside my home field.** When a paper drops in an area I don't follow closely (mech interp, RL theory, anything biology adjacent), Explainpaper turns the bit I don't get into a tutor session that's pinned to the exact sentence.
* **Skimming dense methods sections.** Highlight the math, get the intuition. I still go back to the original to verify, but the highlight first explain second loop is fast.
* **Filing notes.** I copy the model's explanation plus my own annotation into Obsidian. The combination is more useful than either alone.

For papers in my own field I usually don't need it; I'd rather struggle with the original prose for ten minutes than reach for the assistant. The tool is a force multiplier for breadth, not depth.

## Gotchas

* Explanations are confidently wrong sometimes. Always cross check load bearing claims against the actual paper or a known reference.
* Image and equation rendering varies. If the paper relies on a figure to make its point, the explainer can miss the gist.
* The free tier has paper count limits. For heavy use the paid plan is reasonable but adds up if you're a student.
* It's a reader, not a literature search. Pair with [elicit.md](elicit.md) or [scispace.md](scispace.md) when you need to find papers, not just understand one.

## Alternatives

* If you want multi-doc Q&A with audio summaries and shared notebooks, [NotebookLM](notebooklm.md) is the broader tool.
* For a research-paper reader with citation graphs and follow-up question prompts, [SciSpace](scispace.md) covers more ground.
* If you need to find papers (not just understand one you have), [Elicit](elicit.md) or [Consensus](consensus.md) is the right starting point.
* For raw long-context Q&A with no special UI, just paste the PDF into [Claude](claude.md) - the 200K-1M context handles most papers in one shot.

## FAQ

### Is Explainpaper free?

There's a free tier capped on paper count per month. The paid plan unlocks unlimited papers; pricing is in the consumer monthly-subscription range. For a heavy student, the paid tier is reasonable but adds up.

### Explainpaper vs NotebookLM - which is better?

Different jobs. Explainpaper is for one paper, one passage, one explanation - tight feedback loop. [NotebookLM](notebooklm.md) is for a stack of sources you want to query together with audio overviews. I use both.

### Can Explainpaper handle math and equations?

Partially. The OCR and rendering of equations is okay but not great, and explanations of dense math are confidently wrong often enough that I cross-check. For pure math passages I sometimes paste the LaTeX into [Claude](claude.md) directly.

### Does it support arXiv links?

Yes - paste an arXiv URL and it pulls the PDF without you needing to download it. Most academic PDFs render fine; image-heavy ones take longer.

## Pointers

* Web: [explainpaper.com](https://www.explainpaper.com)
* Pricing: free tier plus monthly subscription for unlimited papers.
* Pairs with [notebooklm.md](notebooklm.md) when you want to pull multiple papers into a shared notebook and compare them.
* For the math heavy passages where Explainpaper struggles, I sometimes paste the LaTeX into Claude directly; the chat is dumber about the surrounding paper but smarter about the equation.
