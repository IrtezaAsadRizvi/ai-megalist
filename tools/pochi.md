# Pochi: parallel-agent VS Code extension

Pochi sits in the AI-native IDE category as a VS Code extension, alongside [Cursor](cursor.md), [Windsurf](windsurf.md), and [Continue](continue.md). Pochi is the VS Code native agent from the TabbyML team, the same group that built one of the better OSS code completion engines. The differentiator versus Cursor and Windsurf is "parallel agents" (multiple agent runs at once on different tasks) and tight support for local models. It feels less like a polished commercial product and more like a power tool for engineers who want to run agents the way they run scripts.

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

## Alternatives

* If you want the most polished AI IDE for single-task work, [Cursor](cursor.md) is the default.
* If you want the same shape with an OSS lean and lower price, [Windsurf](windsurf.md) is the alternative.
* If you'd rather stay in vanilla VS Code with a BYO-model plugin, [Continue](continue.md) is the OSS pick.
* If you want a terminal agent instead of an IDE, [Claude Code](claude_code.md) is the same job from a different surface.

## FAQ

### Is Pochi free?

Free during development as the product matures. Pricing is evolving; check the current terms before committing. You'll still pay model costs (OpenAI, Anthropic, etc.) on top of any platform fees.

### Pochi vs Cursor - which one?

Different shapes. [Cursor](cursor.md) is a polished standalone editor focused on single-task surgical edits. Pochi is a VS Code extension built around running multiple agents in parallel. Pick Cursor for polish, Pochi for multi-tasking.

### Does Pochi support local models?

Yes - that's one of its differentiators. It plugs into TabbyML's local infrastructure and supports [Ollama](ollama.md). Local model performance is bounded by your hardware; frontier cloud models still produce stronger agent behaviour.

### What does "parallel agents" actually mean?

Multiple agent runs going at once on different tasks in the same workspace. Useful for unrelated refactors that don't touch the same files. Risky when two agents do touch the same files - scope work carefully or you'll fight merge conflicts.

## Pointers

* Web: [pochi.app](https://www.pochi.app)
* TabbyML: [tabbyml.com](https://www.tabbyml.com) (the broader ecosystem).
* Pairs and competes with [cursor.md](cursor.md), [windsurf.md](windsurf.md), [trae.md](trae.md), and [void.md](void.md) (alternative editors), plus [claude_code.md](claude_code.md) (terminal agent). Pochi's parallelism is the one feature that feels truly distinct.
