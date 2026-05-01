# Cody

Cody is Sourcegraph's AI coding assistant, which means it inherits a decade of code intelligence work — Sourcegraph has been indexing and searching huge codebases since well before "AI" was the marketing word. The result is a coding assistant that genuinely understands large repos and monorepos in a way most tools struggle with.

## What it actually is

An AI coding assistant available as IDE extensions (VS Code, JetBrains, Visual Studio) and a CLI. Underpinned by Sourcegraph's code search and graph; chat with codebase awareness, autocomplete, multi repo context, and agent capabilities. Ships in three flavors: Cody Free, Cody Pro ($9/mo), Cody Enterprise.

## Setup

### Free / Pro
1. Sign up at [sourcegraph.com/cody](https://sourcegraph.com/cody).
2. Install IDE extension (VS Code marketplace or JetBrains plugin marketplace).
3. Sign in. Pro unlocks higher limits and additional models.

### Enterprise
1. Sourcegraph Enterprise account (separate sales process).
2. Cody connects to your Sourcegraph instance, with full access to your private code graph.
3. Single tenant deployments available; on prem possible for regulated industries.

## How I use it day to day

* **Honest:** I've used Cody on a few engagements with large monorepos; not my daily tool.
* **Codebase context.** Where Cursor's `@workspace` indexes the repo at hand, Cody's enterprise mode indexes *all your repos* — useful for cross repo refactors and "where else is this pattern used."
* **Chat with code graph awareness.** "Where is this function defined? Where is it called? What's the dependency graph?" Cody answers from the real index, not from grep.
* **Inline edits and autocomplete** comparable to Copilot in mainstream languages.
* **Multi repo monorepo work.** This is the unique value at scale. For 10M+ line codebases across many repos, no other tool I've tried compares.

## Gotchas

* For small projects or individual developers, Cody's enterprise advantages don't show. Cursor or Copilot are more polished for personal use.
* Cody Free tier is real but limited; the enterprise tier is where the value sits.
* Some features (multi repo context, code graph search) require Sourcegraph backend. Without that, Cody is roughly comparable to other completions tools.
* The Sourcegraph Enterprise dependency means deployment complexity. Plan ops budget.
* JetBrains support is good; some advanced features are VS Code first.

## Pointers

* [sourcegraph.com/cody](https://sourcegraph.com/cody)
* Sourcegraph docs: [docs.sourcegraph.com](https://docs.sourcegraph.com)
* For individual / small team use: [cursor.md](cursor.md), [github_copilot.md](github_copilot.md), [windsurf.md](windsurf.md).
* The unique value is large codebase navigation; if you're at that scale, Cody (and Sourcegraph more broadly) is worth evaluating seriously.
