# Perplexity Comet: AI-native browser with agentic search

Comet is an AI browser in the same category as [Dia](dia.md), [Arc Search](arc_search.md), and [Edge Copilot](edge_copilot.md) - Chromium plus a deeply-integrated AI surface. It's Perplexity's bet that the browser itself should be an AI agent. The pitch - a Chromium based browser where Perplexity is woven into navigation, search, and tab management - sounded gimmicky in early demos and is genuinely useful in practice once you give it a week. It's the first AI browser that feels like a primary tool rather than an experiment.

## What it actually is

A Chromium based desktop browser (macOS, Windows, with Linux and mobile in the works as of April 2026). Comet replaces the URL bar with a Perplexity prompt, bakes a sidebar AI into every tab (read, summarise, ask about this page), and has agentic flows where the browser performs multi step web tasks for you.

## Setup

1. Download from [perplexity.ai/comet](https://www.perplexity.ai/comet). Free during early access; Perplexity Pro subscribers ($20/mo) get full agentic features.
2. Install. On first launch, sign in with your Perplexity account.
3. Optional: import bookmarks and history from Chrome / Safari / Firefox.
4. Set as default browser if you're committing.

## How I use it day to day

* **The URL bar IS the search.** Type a question, get a Perplexity answer with cited sources. Type a URL, navigate. Type partial - Comet picks the better interpretation.
* **Right side AI panel.** Open on any page. "Summarise this," "What does this page get wrong?", "Compare with [other tab]." Lives alongside the page; doesn't replace it.
* **Agentic browsing.** "Open the top three results, summarise each, save to a Perplexity Space." Comet runs through it while I do something else.
* **Tab management with AI.** "Group my open tabs by topic." Useful when 30 tabs deep into research.
* **Cross tab queries.** "Of my open tabs, which mentions hiring?" Cross referencing without me reading each.

## Gotchas

* Privacy: the agentic features see what you see. If you're on a sensitive page and trigger an agent, it captures that page. Read the data handling docs.
* The browser is still rough as of April 2026 - quirky tab behaviour, occasional UI lag, missing extension support compared to Chrome.
* Some agentic flows are slow (10 to 30 seconds for multi step tasks). Plan async work, don't watch.
* Free tier is rate limited; Pro is needed for serious agentic use.
* Habit shift is real. The "URL bar as a search prompt" reframing is the biggest, and the most rewarding once internalised.

## Alternatives

* If you want an AI-native browser without committing to Perplexity as the search engine, [Dia](dia.md) is the Browser Company's take.
* If you live on Microsoft 365 and want a sidebar instead of a full browser switch, [Edge Copilot](edge_copilot.md) is the lighter path.
* If you mainly want cited web answers and not a new browser, regular [Perplexity](perplexity.md) in Chrome is the answer.
* For browser automation as a developer (not as a daily driver), [Browser Use](browser_use.md) or Stagehand is the developer path.

## FAQ

### Is Comet free?

Free during early access; full agentic features require Perplexity Pro ($20/mo). The free tier is rate-limited - enough to evaluate, not enough for serious daily use.

### Comet vs Dia - which is better?

Different bets. Comet uses Perplexity as the core search engine - if you already love Perplexity, it's the natural fit. [Dia](dia.md) is more general-purpose with skills (custom rules) and a tighter design language. Both are early; pick the one whose taste matches yours.

### Does Comet replace Chrome?

Not quite, in April 2026. It's Chromium under the hood so most extensions work, but a few enterprise extensions and edge-case sites still misbehave. Plan to keep Chrome as a fallback for at least the first month.

### Is Comet safe to browse banking sites in?

It's Chromium, so the underlying browser security is fine. The agentic features are the question - if you trigger an agent on a sensitive page, it captures that page. Read the data-handling docs and disable agentic features on tabs you don't want indexed.

## Pointers

* [perplexity.ai/comet](https://www.perplexity.ai/comet)
* Comparable: [dia.md] (The Browser Company's AI native), Arc Search (mobile), Microsoft Edge Copilot.
* For browser automation as a developer (not as an end user): [browser_use.com](https://browser-use.com), Stagehand.
* The Perplexity blog has Comet usage tips that are worth skimming.
