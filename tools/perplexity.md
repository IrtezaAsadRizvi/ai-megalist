# Perplexity: cited AI search engine

Perplexity is the default in the AI search category, the one most people benchmark [Phind](phind.md), [Exa](exa.md), and [You.com](you_com.md) against. Perplexity is what I open when I would otherwise have opened five Google tabs. The output is a synthesised answer with inline citations you can click through, which is the right shape for almost every "what is the current state of X" question.

## What it actually is

An AI search engine. You ask a question; it searches the web in real time, pulls passages from results, and writes an answer that footnotes its sources. There is a free tier, a Pro tier ($20/mo) with model selection (Claude, GPT, Sonar), and a newer Comet browser product that puts the same loop into a full agentic browser.

## Setup

1. Go to [perplexity.ai](https://www.perplexity.ai), sign up.
2. Install the iOS/Android app and the desktop app. The mobile app is genuinely useful - voice → cited answer in one motion.
3. (Optional) Install the Chrome extension for an "ask about this page" shortcut.
4. (Optional) Subscribe to Pro for unlimited Pro Search, model picker, and file uploads.
5. (Optional, for the agentic flow) Try Comet at [perplexity.ai/comet](https://www.perplexity.ai/comet).

## How I use it day to day

* **Quick factual lookups with sources.** Whenever I'd otherwise type something into Google and triangulate three pages, I just ask Perplexity and follow one or two of its citations.
* **Pro Search for deeper questions.** It clarifies the question, runs several searches, and writes a longer report. Slower but better for ambiguous prompts.
* **Spaces.** Persistent threads scoped to a topic with their own context. I keep one for "AI tooling I'm tracking" and it's where most of the megalist sources came from, honestly.
* **Reading the citations is the workflow.** I rarely accept Perplexity's prose at face value; I treat it as a smart index over what's actually on the web.

## Gotchas

* The cited sources are sometimes weaker than the synthesis suggests - blog posts and SEO farms make it in alongside primary sources. Always click through if the claim matters.
* Pro Search consumes a daily quota even on Pro. If you're running 50+ research queries a day, you'll feel it.
* The model picker matters more than I expected. Claude tends to be more cautious, Sonar (Perplexity's own) is fastest, GPT can be more creative. I default to Claude.
* Comet is fun but slow and still rough around the edges as of April 2026. The classic search experience is what I rely on.

## Alternatives

* If you're searching for code, docs, and Stack Overflow specifically, [Phind](phind.md) is tuned for it.
* If you want neural search that surfaces source content (papers, raw blog posts) over SEO pages, [Exa](exa.md) is the right pick.
* If you want a paid, ad-free search with FastGPT and Universal Summarizer, [Kagi](kagi.md) is the alternative.
* For long multi-step research reports, [ChatGPT Deep Research](chatgpt.md) or [Gemini Deep Research](gemini.md) go deeper than Perplexity's Pro Search.

## FAQ

### Is Perplexity free?

Yes, the free tier covers basic search and a daily quota of Pro Search. Perplexity Pro at $20/mo unlocks the model picker (Claude, GPT, Sonar), unlimited Pro Search in practice, file uploads, and Spaces.

### Perplexity vs ChatGPT - which is better for research?

Different jobs. Perplexity grounds every answer in clickable citations and is faster for "what's the current state of X." [ChatGPT](chatgpt.md) writes more fluent long-form synthesis and Deep Research goes deeper on multi-step questions. I use both.

### Does Perplexity have an API?

Yes - the Sonar API at docs.perplexity.ai. It's a search API with a generative wrapper, useful for RAG. Pricing is per request plus tokens.

### What's Perplexity Comet?

Their agentic browser - the same search loop wrapped in a full browser that can navigate and act. Fun but slow as of April 2026; the classic search UI is still where the value lives.

## Pointers

* [perplexity.ai](https://www.perplexity.ai)
* [perplexity.ai/comet](https://www.perplexity.ai/comet)
* For dev use, the API is at [docs.perplexity.ai](https://docs.perplexity.ai). It's a search API with a generative wrapper, useful for RAG.
