# Supermaven

Supermaven is the AI completion tool with absurdly long context. While other completion tools see your current file plus a few open buffers, Supermaven indexes ~1 million tokens of your codebase and uses it for every suggestion. The result is completions that know about functions defined three files away, conventions used in another module, and your team's idiomatic patterns.

## What it actually is

An AI code completion service. IDE extensions for VS Code, JetBrains, Vim/Neovim. Free tier ("Free") is generous; Pro tier ($10/mo) gets the larger context model and faster latency. Acquired by Cursor in 2024 — the underlying tech reportedly powers parts of Cursor's autocomplete.

## Setup

1. Sign up at [supermaven.com](https://supermaven.com).
2. Install IDE extension.
3. Sign in. Free tier requires no payment.
4. Pro: $10/mo. Includes the Babble model with 1M token context, lower latency, priority.
5. Start typing; ghost text completions appear inline.

## How I use it day to day

* **Honest:** Since the Cursor acquisition, I default to Cursor's built in autocomplete. Pre acquisition, Supermaven was my primary.
* **Long context advantage shows in large repos.** On monorepos, completions know about functions you defined elsewhere, types from far away modules, conventions from sibling files.
* **Latency is among the lowest** of any completion tool. Suggestions appear in <100 ms.
* **Tab to accept, Esc to dismiss** — the standard inline completion UX.
* **Works in editors Cursor doesn't.** If you're on Vim or JetBrains and want long context completions, Supermaven is the answer.

## Gotchas

* The free tier model is smaller than the Pro one; the long context advantage requires Pro.
* Some IDE extensions lag the Cursor experience for chat / agent flows. Supermaven is a completion tool first; for chat / refactoring, use a different tool.
* Privacy: Supermaven processes your code on their servers. Self hosted isn't available; for regulated environments, look at Tabnine or Continue.
* Roadmap is uncertain post Cursor acquisition. Standalone product likely continues but check current status.
* For non English / non common languages, completion quality drops as expected.

## Pointers

* [supermaven.com](https://supermaven.com)
* For full agentic IDE: [cursor.md](cursor.md), [windsurf.md](windsurf.md).
* For OSS BYO model: [Continue](https://continue.dev).
* For privacy first / on prem: [tabnine.md](tabnine.md).
