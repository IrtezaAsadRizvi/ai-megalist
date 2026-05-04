# Cody: Sourcegraph's enterprise codebase-aware AI assistant

Cody is the enterprise-leaning AI coding assistant in the same lane as [GitHub Copilot](github_copilot.md) and [Cursor](cursor.md), but shaped around Sourcegraph's code-graph indexing for very large codebases. It inherits a decade of code intelligence work - Sourcegraph has been indexing and searching huge codebases since well before "AI" was the marketing word. The result is a coding assistant that genuinely understands large repos and monorepos in a way most tools struggle with.

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
* **Codebase context.** Where Cursor's `@workspace` indexes the repo at hand, Cody's enterprise mode indexes *all your repos* - useful for cross repo refactors and "where else is this pattern used."
* **Chat with code graph awareness.** "Where is this function defined? Where is it called? What's the dependency graph?" Cody answers from the real index, not from grep.
* **Inline edits and autocomplete** comparable to Copilot in mainstream languages.
* **Multi repo monorepo work.** This is the unique value at scale. For 10M+ line codebases across many repos, no other tool I've tried compares.

## Gotchas

* For small projects or individual developers, Cody's enterprise advantages don't show. Cursor or Copilot are more polished for personal use.
* Cody Free tier is real but limited; the enterprise tier is where the value sits.
* Some features (multi repo context, code graph search) require Sourcegraph backend. Without that, Cody is roughly comparable to other completions tools.
* The Sourcegraph Enterprise dependency means deployment complexity. Plan ops budget.
* JetBrains support is good; some advanced features are VS Code first.

## Alternatives

* If you're a small team or solo, [Cursor](cursor.md) or [GitHub Copilot](github_copilot.md) are more polished daily drivers.
* If you want OSS bring-your-own-model in IDEs, [Continue](continue.md) is the configurable equivalent.
* If you want repo Q&A specifically rather than full coding assistance, [Greptile](greptile.md) overlaps on the indexing side.
* If your codebase fits in a 1M-context window, [Claude Code](claude_code.md) plus a CLAUDE.md often gets close without the Sourcegraph backend.

## FAQ

### Is Cody free?

Yes - Cody Free is real, with rate limits. Cody Pro is $9/mo (higher limits, more models). Cody Enterprise is the tier with multi-repo context, full code-graph awareness, and SSO; pricing is sales-led.

### Cody vs Cursor - which is better?

Different scopes. [Cursor](cursor.md) is a finished AI-native IDE for individuals and small teams; the indexing is per-repo. Cody Enterprise indexes *all your repos* through Sourcegraph, which is the unique value at scale. For a 10M+ line monorepo across many repos, Cody. For a single repo, Cursor.

### Does Cody work in JetBrains?

Yes - the JetBrains plugin is solid, and a few advanced features are VS Code first. If you're a JetBrains shop with a Sourcegraph instance already, Cody is the natural pick.

### Do I need Sourcegraph Enterprise to use Cody?

For Free and Pro, no - they work standalone. The unique value (multi-repo context, full code-graph search) requires a Sourcegraph backend. Without that, Cody is roughly comparable to other completion tools.

## Pointers

* [sourcegraph.com/cody](https://sourcegraph.com/cody)
* Sourcegraph docs: [docs.sourcegraph.com](https://docs.sourcegraph.com)
* For individual / small team use: [cursor.md](cursor.md), [github_copilot.md](github_copilot.md), [windsurf.md](windsurf.md).
* The unique value is large codebase navigation; if you're at that scale, Cody (and Sourcegraph more broadly) is worth evaluating seriously.
