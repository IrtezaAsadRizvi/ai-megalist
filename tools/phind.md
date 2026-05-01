# Phind

Phind is the AI search engine for developers. Where Perplexity tries to answer everything, Phind specifically optimises for "the question I would otherwise ask Stack Overflow." The index covers technical documentation, GitHub repos, Stack Overflow itself, and a curated set of dev focused sources. The cited answers are noticeably better grounded for code questions than generic AI search.

## What it actually is

A web based AI search product focused on programming. There's a Pro tier ($20/mo) with access to Phind‑70B (their fine tuned model) and frontier models like Claude and GPT. Free tier is generous for casual use.

## Setup

1. Go to [phind.com](https://www.phind.com), sign up.
2. (Optional) Install the Phind VS Code extension for in editor search.
3. (Optional) Subscribe to Pro: $20/mo for unlimited Pro Search and the Phind‑70B model.
4. (Optional) Browser extension turns Phind into a search override.

## How I use it day to day

* **Debugging error messages.** Paste the stack trace; Phind finds the GitHub issue, the SO thread, and the relevant doc page in one synthesised answer.
* **Comparing libraries.** "What are the tradeoffs between TanStack Query and SWR in 2026?" The answer cites the docs and recent posts, not just the README.
* **Quick API references.** Faster than navigating multi page docs. "How do I do upsert in Drizzle?" gets me the exact syntax.
* **VS Code extension** for inline answers. Highlight code, ask. The extension is decent though not as integrated as Cursor's chat.
* **Cited code snippets.** Phind's answers usually include working examples with a link to the source. I often click through to verify the snippet hasn't been remixed into something subtly wrong.

## Gotchas

* The Phind‑70B model is good for code but weaker for non technical questions. Switch to Claude / GPT in the picker for those.
* Free tier limits hit if you're searching heavily. Pro is the floor for daily use.
* The synthesised answer is sometimes wrong even when the citations are right. Read the cited sources for anything load bearing.
* The community Q&A feature (which used to be a thing) is deprecated; Phind is now purely AI driven.

## Pointers

* [phind.com](https://www.phind.com)
* For non code search: [perplexity.md](perplexity.md).
* For code search inside your repo specifically: pair with [cursor.md](cursor.md) or [claude_code.md](claude_code.md).
* For finding real source material (papers, raw code): [exa.md](exa.md) or Google Scholar.
