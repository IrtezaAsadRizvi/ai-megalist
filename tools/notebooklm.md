# NotebookLM

NotebookLM is a small surprise of a product. The pitch is plain: you upload a stack of documents, and it answers questions only from those documents. No outside hallucination, no opinions imported from the web. The result is the most boring kind of magic, which is exactly what research often wants.

## What it actually is

Google's grounded Q&A app, built on Gemini. You make a "notebook," add up to 50 sources (PDFs, Google Docs, web pages, YouTube videos, audio), and chat against them. It cites every claim with the exact passage. It will also generate study guides, briefing docs, FAQs, timelines, and the now famous Audio Overview — a two host podcast that summarises the sources, generated in about a minute.

## Setup

1. Go to [notebooklm.google.com](https://notebooklm.google.com).
2. Sign in with a Google account.
3. Click "New" → upload sources, paste links, or import from Drive.
4. Wait ~30 seconds for indexing on a typical paper, longer on big PDFs.
5. Ask questions in the chat panel.

That's it. There is also a paid tier (NotebookLM Plus, bundled with Google AI Pro/Ultra) that raises caps and adds team features.

## How I use it day to day

* **Reading research papers.** Drop in three or four papers on a topic, ask "what do these agree and disagree on?" The cited answers point straight back to passages.
* **Onboarding to a new domain.** Upload textbook chapters and review papers, then walk through the timeline + study guide it generates.
* **Long meeting recordings.** Audio file in, ask "what did we decide about pricing?" Cited.
* **Generating audio overviews to listen to on a walk.** I do this often; it's a surprisingly good way to absorb a paper while my hands are busy.

## Gotchas

* It will not answer from outside the sources. If you ask "what is X?" and X isn't in your notebook, it'll politely refuse. This is the feature, not a bug, but it surprises people.
* The 50 source cap matters once you're doing serious research. Plus raises this; you can also pre summarise old sources into a single doc.
* Audio Overview is generated, not curated. It's good for vibes, not for citation grade summaries.
* It can hallucinate within sources occasionally — the citations are usually right but reread the cited passage if the claim is load bearing.

## Pointers

* [notebooklm.google.com](https://notebooklm.google.com)
* The Audio Overview feature alone is worth showing someone.
* For a comparable open setup: STORM ([storm.genie.stanford.edu](https://storm.genie.stanford.edu)) writes Wikipedia style articles from sources you provide.
