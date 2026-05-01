# Pochi

Pochi is the VS Code native agent from the TabbyML team, the same group that built one of the better OSS code completion engines. The differentiator versus Cursor and Windsurf is "parallel agents" (multiple agent runs at once on different tasks) and tight support for local models. It feels less like a polished commercial product and more like a power tool for engineers who want to run agents the way they run scripts.

## What it actually is

A VS Code extension by TabbyML for AI agent driven coding. Supports parallel agent runs, MCP servers, local models via Tabby's existing infrastructure, and standard cloud providers. The product sits inside VS Code rather than forking the editor. Free during development; pricing model evolving.

## Setup

1. Install the Pochi extension from the VS Code marketplace.
2. Configure a model: cloud (OpenAI, Anthropic, Google) or local (Tabby, Ollama).
3. Open the Pochi sidebar.
4. Spawn an agent: describe the task, watch it run.
5. (Optional) Spawn additional agents in parallel for unrelated tasks.

## How I use it day to day

I've experimented with Pochi rather than committing to it; Cursor and Claude Code remain my defaults. Where Pochi has been useful:

* **Parallel agent workflows.** Kicking off two unrelated refactors at once on different parts of a codebase, watching them complete independently. The mental model is "agents as background workers," which I appreciate.
* **VS Code without forking.** When I want my normal VS Code setup (extensions, theme, keybindings) plus an agent.
* **Local model integration.** TabbyML's local stack is solid; Pochi inherits that.

For a single task at a time, Cursor is more polished. For multi tasking, Pochi has an actual answer.

## Gotchas

* Parallel agents are powerful and dangerous. Two agents touching the same files is a recipe for merge headaches; scope work carefully.
* The product is newer; expect rapid changes.
* Local model performance still depends on your hardware. Frontier cloud models are the default for serious work.
* Pricing model is evolving as the product matures; check current terms before betting on it.

## Pointers

* Web: [pochi.app](https://www.pochi.app)
* TabbyML: [tabbyml.com](https://www.tabbyml.com) (the broader ecosystem).
* Pairs and competes with [cursor.md](cursor.md), [windsurf.md](windsurf.md), [trae.md](trae.md), and [void.md](void.md) (alternative editors), plus [claude_code.md](claude_code.md) (terminal agent). Pochi's parallelism is the one feature that feels truly distinct.
