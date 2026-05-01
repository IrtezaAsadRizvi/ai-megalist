# GitHub Copilot

Copilot is the autocomplete I forget I'm using until it's not there. The headline feature is still inline tab completion — frighteningly good in popular languages, useful even in obscure ones — and the rest of the product (Chat, Workspace, Coding Agent) has caught up enough that the "should I use Copilot or Cursor" question doesn't have an obvious answer anymore.

## What it actually is

GitHub's AI coding suite. It comes in three layers: inline completion (the original "ghost text"), Copilot Chat (a panel in the IDE, with codebase context), and Copilot Coding Agent (assigns issues to Copilot, which opens a PR). Models include the GPT family, Claude Sonnet, and Gemini, picked per task. Available in VS Code, JetBrains, Visual Studio, Neovim, Xcode, and a few others.

## Setup

1. You need a GitHub account. Pricing: Free tier (2K completions/month), Pro $10/mo, Business $19/user/mo, Enterprise $39/user/mo.
2. Enable Copilot in your account at [github.com/settings/copilot](https://github.com/settings/copilot).
3. Install the extension for your editor: VS Code Marketplace, JetBrains Plugin Marketplace, or via your editor's package manager.
4. Sign in. The first time it asks you to authorize; takes ~30 seconds.
5. Start typing. The inline completion appears as ghost text; press `Tab` to accept.

## How I use it day to day

* **Inline autocomplete.** The feature most worth the money. Saves dozens of keystrokes per minute in TypeScript and Python.
* **Copilot Chat.** Cmd+I (VS Code) opens an inline chat scoped to the current file. `@workspace` to ask about the whole repo, `@github` to query issues and PRs.
* **Coding Agent.** I assign small, well scoped issues to Copilot from the GitHub web UI. It opens a draft PR within minutes. Great for "rename this everywhere," "add tests for module X," not great for design decisions.
* **Pull request review.** Copilot can review PRs; the comments are inconsistent in quality but occasionally catch real bugs.
* **Copilot Workspace** for spec to PR flows. Type a task, it produces a plan, edits files, opens a PR. Slower than Coding Agent; better for fuzzier requests.

## Gotchas

* The "best in class for autocomplete" claim only holds in popular languages. Less mainstream stacks (Elixir, OCaml, Rust pre 2024) get patchier suggestions.
* Copilot Chat's `@workspace` is good but doesn't fully index your repo the way Cursor does. For deep "explain this codebase" work, Cursor still wins.
* Coding Agent can spend a meaningful chunk of your budget on a single complex task. Set a budget cap if you're on Business.
* Suggestions are public model output. Filtering blocks Copilot from quoting code that exactly matches a public repo, which is on by default but worth verifying.
* JetBrains support is ahead of most competitors; if you're a JetBrains shop, Copilot is the safe pick.

## Pointers

* Docs: [docs.github.com/copilot](https://docs.github.com/copilot)
* Pricing: [github.com/features/copilot](https://github.com/features/copilot)
* For agentic coding from a terminal instead, see [claude_code.md](claude_code.md) and [codex_cli.md](codex_cli.md).
* For an in editor chat with deeper repo indexing, see [cursor.md](cursor.md).
