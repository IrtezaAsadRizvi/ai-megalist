# GitHub Copilot: inline AI autocomplete in your existing IDE

GitHub Copilot is the inline-completion incumbent in coding AI, the alternative to switching editors for [Cursor](cursor.md) or [Windsurf](windsurf.md), and the safe pick for JetBrains shops. The headline feature is still inline tab completion - frighteningly good in popular languages, useful even in obscure ones - and the rest of the product (Chat, Workspace, Coding Agent) has caught up enough that the "should I use Copilot or Cursor" question doesn't have an obvious answer anymore.

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

## Alternatives

* If you want deeper codebase indexing and a multi-file Composer agent, [Cursor](cursor.md) is the closer pick (means switching to a VS Code fork).
* For an OSS, BYO-model alternative that runs in VS Code or JetBrains, [Continue](continue.md) is the right shape.
* If you want a privacy-first option that runs on-prem or air-gap, [Tabnine](tabnine.md) is built for that.
* For terminal-first agentic coding instead of an IDE, jump to [Claude Code](claude_code.md) or [Codex CLI](codex_cli.md).

## FAQ

### Is GitHub Copilot free?

There's a Free tier (2K completions/month) which is genuinely useful for casual use. Pro is $10/mo, Business $19/user/mo, Enterprise $39/user/mo. Students, teachers, and OSS maintainers get Pro free - check the GitHub Education and Maintainers programs.

### Copilot vs Cursor - which should I use?

Different shapes. Copilot is a plugin in your existing IDE (VS Code, JetBrains, Visual Studio, Neovim, Xcode). [Cursor](cursor.md) is a VS Code fork with deeper codebase indexing and a stronger multi-file agent. If you're in JetBrains or want minimal disruption, Copilot. If you want the cross-file workflow, Cursor.

### Does Copilot work in JetBrains?

Yes - JetBrains support is one of Copilot's strongest moats. Cursor and Windsurf don't run in JetBrains; if your team is on IntelliJ / PyCharm / WebStorm, Copilot or [Continue](continue.md) are the realistic options.

### What models does Copilot use?

A picker across the GPT family, Claude Sonnet, and Gemini, selectable per task in Chat. Inline completion uses GitHub's tuned model under the hood. The model picker is mostly relevant for Chat and Coding Agent, not for tab completion.

### What is Copilot Coding Agent?

A feature where you assign a GitHub issue to Copilot from the web UI; it opens a draft PR within minutes. Great for small, well-scoped tasks ("rename this everywhere," "add tests for module X"). Not great for design decisions. Watch the budget on Business tier.

## Pointers

* Docs: [docs.github.com/copilot](https://docs.github.com/copilot)
* Pricing: [github.com/features/copilot](https://github.com/features/copilot)
* For agentic coding from a terminal instead, see [claude_code.md](claude_code.md) and [codex_cli.md](codex_cli.md).
* For an in editor chat with deeper repo indexing, see [cursor.md](cursor.md).
