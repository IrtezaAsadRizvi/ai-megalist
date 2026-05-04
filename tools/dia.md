# Dia: The Browser Company's AI-native browser

Dia is an AI browser in the same category as [Comet](comet.md), [Arc Search](arc_search.md), and [Edge Copilot](edge_copilot.md). The Browser Company's AI native browser, the successor to Arc. After Arc Browser was put into maintenance mode in 2024, the team rebuilt around AI as the primary input rather than as a sidebar feature. The result is a browser that asks "what are you trying to do?" instead of "where do you want to go?" - a meaningful reframing if it sticks for you.

## What it actually is

A Chromium based desktop browser (macOS first, Windows in beta). Distinguishing features:
* **The URL bar IS a chat.** Type a question; Dia answers. Type a URL; Dia navigates.
* **Skills**: custom Dia behaviours (e.g. "always summarise long articles," "never let me visit Twitter on weekdays").
* **Chat with this page**: a sidebar that knows about your open tabs.
* **Tabs as conversations.** Start a chat in any tab; it persists with that tab.

## Setup

1. Download from [diabrowser.com](https://www.diabrowser.com). macOS as of April 2026; Windows beta available.
2. Installer is a regular DMG; drag to Applications.
3. On first launch, sign in (Dia account; free during preview).
4. Optional: import bookmarks and history from Chrome / Safari / Arc.
5. Browse normally; the AI surfaces are gradually visible as you use it.

## How I use it day to day

* **Honest:** I've tested Dia for ~2 weeks during preview; not my daily browser yet (still defaulting to Arc / Chrome).
* **URL bar as chat.** "Find me the docs for FFmpeg's drawtext filter" goes straight to the docs without a Google search. "What did I read this morning about Kling 3?" pulls from history.
* **Sidebar chat** that knows the current tabs. "Compare these three articles I have open." Genuinely useful when researching.
* **Skills.** Custom rules in plain English. "Always summarise emails over 500 words." "Block Twitter between 9 and 5."
* **Tab persistence.** A chat associated with a tab; I close the tab; reopen later; the chat is still there. Lighter than a separate notes app.

## Gotchas

* Early product. Bugs, missing features, edge case behavior. Not a full Arc replacement yet.
* Privacy: agentic features see your tabs. Read the data policy; opt out where appropriate.
* Limited extension support compared to Chrome. If your workflow depends on specific extensions, check before switching.
* The AI rate limits during preview are real; commits hit ceilings.
* The mental shift (URL bar as chat) takes a week. The first few days you feel slower; then it clicks or it doesn't.

## Alternatives

* If you want Perplexity at the core of the browser instead of a generic AI, [Comet](comet.md) is the closest competitor.
* If you mainly want a sidebar AI in your existing browser, [Edge Copilot](edge_copilot.md) is the lower-friction option.
* If you want a mobile-first AI search that builds web pages, [Arc Search](arc_search.md) is the sibling product still around.
* For browser automation as a developer (not a daily driver), [Browser Use](browser_use.md) or Stagehand is the developer path.

## FAQ

### Is Dia free?

Free during the preview window; pricing model has shifted in past Browser Company products (Arc was free). The AI rate limits during preview hit ceilings, so plan for some friction. Long-term pricing is unannounced as of April 2026.

### Dia vs Comet - which should I use?

Different bets. [Comet](comet.md) is built around Perplexity as the search engine; Dia is built around general-purpose AI with custom Skills. If you already love Perplexity, Comet. If you want a more flexible AI surface and a cleaner design, Dia.

### Did Arc Browser shut down?

Arc was put into maintenance mode in mid-2024; The Browser Company rebuilt around Dia. Arc still works but no new features ship. If you used Arc, Dia is the intended migration path; expect a feature gap until Dia matures.

### What are Dia Skills?

Custom rules in plain English that change browser behaviour. "Always summarise emails over 500 words." "Block Twitter between 9 and 5." "Translate pages in German automatically." It's the AI-native equivalent of browser extensions.

## Pointers

* [diabrowser.com](https://www.diabrowser.com)
* Comparable: [comet.md](comet.md) (Perplexity Comet), Arc (in maintenance mode), Microsoft Edge with Copilot, Brave Leo.
* For browser automation as a developer: [browser_use.md](browser_use.md), Stagehand.
* Worth trying alongside your daily browser; treat as experiment.
