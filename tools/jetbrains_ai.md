# JetBrains AI Assistant: AI built into IntelliJ, PyCharm, and friends

JetBrains AI Assistant is the answer to "I already pay for IntelliJ and I just want AI inside it, please." It's not the flashiest assistant - if you want a forked IDE with codebase indexing baked in, [Cursor](cursor.md) is the pick. But if you have a decade of muscle memory in JetBrains IDEs, this is the path that doesn't ask you to leave them.

## What it actually is

A first-party AI plugin bundled across the JetBrains family (IntelliJ IDEA, PyCharm, GoLand, WebStorm, Rider, etc). Combines inline completion, multi-line predictions, chat with project context, and an agent ("Junie") that can plan and execute tasks. Models are a mix of cloud (Anthropic, OpenAI, Google) and JetBrains's own; you can also point at local [Ollama](ollama.md) for completion in certain editions.

## Setup

1. Open any JetBrains IDE (2024.2 or newer). The plugin is bundled.
2. Sign in to your JetBrains account; activate an AI Pro / Free trial.
3. Inline completion is on by default. Open the AI chat panel (right sidebar) for longer asks.
4. (Optional) Enable **Junie** - the autonomous agent - from the AI menu for plan-and-execute tasks.
5. (Optional) Point chat at a local Ollama server in settings if you want offline mode.

## How I use it day to day

* **Inline completion** is the workhorse. Multi-line predictions are good in strongly-typed languages where the IDE already knows the shape.
* **"Explain this code"** on a method I didn't write - the chat has the project's structure in its context, so the answer is grounded.
* **Generate unit tests** - the IDE already knows the test framework conventions; the AI fills in cases.
* **Junie agent** for "implement this Jira ticket" style work - reads the codebase, edits across files, runs tests.
* **Commit message generation** from a staged diff. Saves the "wip" commit habit.

## Gotchas

* Free tier is meaningful but capped. AI Pro is a separate subscription on top of your IDE license.
* Inline completion latency is fine on cloud models, noticeably slower on local Ollama.
* Junie agent is newer than the competition - solid for scoped tasks, less reliable than [Cursor](cursor.md)'s agent on sprawling changes.
* Codebase context is project-aware but not as deep as Cursor's embedding-based indexing for large monorepos.

## Alternatives

* [Cursor](cursor.md) - if you're willing to switch IDEs, the codebase indexing and Composer are sharper.
* [GitHub Copilot](github_copilot.md) - also works as a plugin in JetBrains IDEs; pick this if you're a Copilot shop.
* [Continue](continue.md) - OSS plugin for JetBrains/VS Code with BYO-model.
* [Aider](aider.md) / [Claude Code](claude_code.md) - terminal alternatives if you don't need editor integration.

## FAQ

### Is JetBrains AI free?

There's a free tier with monthly quotas. AI Pro is a paid add-on, separate from the IDE license. Pricing on jetbrains.com.

### JetBrains AI vs Copilot in JetBrains?

[Copilot](github_copilot.md) has a plugin for JetBrains IDEs that does the same job. JetBrains AI is more deeply integrated with refactorings, code-quality tools, and run configurations; Copilot has stronger inline completion in some languages. Many shops let developers pick.

### What's Junie?

JetBrains's autonomous coding agent. Plan-then-execute loop similar to [Cursor](cursor.md)'s agent mode or [Cline](cline.md). Currently rolling out across IDEs.

### Can I use local models?

Yes for chat - point at [Ollama](ollama.md) in settings. Inline completion still routes to cloud by default.

### Which JetBrains IDEs support it?

All of them: IntelliJ IDEA, PyCharm, GoLand, WebStorm, Rider, RubyMine, CLion, DataGrip, RustRover, PhpStorm, etc.

## Pointers

* Product: [jetbrains.com/ai](https://www.jetbrains.com/ai/)
* Docs: [jetbrains.com/help/ai-assistant](https://www.jetbrains.com/help/ai-assistant/)
* Junie: [jetbrains.com/junie](https://www.jetbrains.com/junie/)
* If you want a forked IDE instead of a plugin, jump to [cursor.md](cursor.md).
