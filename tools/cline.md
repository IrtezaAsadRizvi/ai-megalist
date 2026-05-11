# Cline: open-source autonomous coding agent in VS Code

Cline (formerly Claude Dev) is the VS Code extension that turned "an agent edits my repo" into a sidebar people actually leave open all day. It's the OSS sibling of [Cursor](cursor.md) and [Windsurf](windsurf.md) - same agent-driven loop, but as an extension on top of vanilla VS Code, with every action gated by a human-in-the-loop approval. I keep it installed for one specific use: when I want an autonomous agent to plan and execute multi-file changes but I don't want to leave my editor.

## What it actually is

An MIT-licensed VS Code extension that wraps a planning + execution agent around a model of your choice (Anthropic, OpenAI, OpenRouter, Bedrock, Vertex, Ollama, anything OpenAI-compatible). It reads files, edits them, runs terminal commands, and uses a built-in browser tool - all surfaced as diffs and approval prompts in a side panel. The repo is at github.com/cline/cline. Big tells: every step is reviewable; nothing runs until you click approve (unless you turn on auto-approve).

## Setup

1. Install the **Cline** extension from the VS Code marketplace.
2. Open the Cline sidebar. Pick a provider and paste an API key (Anthropic, OpenAI, [OpenRouter](openrouter.md), [AWS Bedrock](aws_bedrock.md), [Azure OpenAI](azure_openai.md), [Ollama](ollama.md), etc).
3. Open a repo, type a task. Cline plans, then executes step by step, asking before each write or shell command.
4. (Optional) Configure auto-approve for low-risk actions (file reads, safe commands) under settings.

## How I use it day to day

* **Multi-file refactors** where I want to review each edit. Cline shows a diff per file before it writes.
* **"Fix this and explain what you changed."** The plan-then-execute loop produces a readable trail.
* **One-off scripts** I don't want polluting my shell history - Cline runs them in its terminal pane and shows output back.
* **Local models** for cheap iteration: point at [Ollama](ollama.md) and run something like Qwen Coder for boilerplate.

## Gotchas

* Token costs are real. The full file context Cline sends per turn adds up fast on Sonnet; cache hits help but watch usage.
* Auto-approve is a footgun. Leave it off for shell commands until you trust the task.
* The MCP support is solid but not every server works out of the box - check the cline.bot/mcp registry.
* Big repos: Cline doesn't have full-repo indexing like [Cursor](cursor.md). Mention files explicitly or use the @-mention to scope context.

## Alternatives

* [Roo Code](roo_code.md) - fork of Cline with more model customization knobs and a faster release cadence.
* [Cursor](cursor.md) - polished closed-source IDE with deeper codebase indexing if you want the all-in-one experience.
* [Windsurf](windsurf.md) - Cascade flow agent built into a forked IDE.
* [Aider](aider.md) - if you'd rather drive from the terminal, Git-native by design.
* [Claude Code](claude_code.md) - Anthropic's first-party CLI agent.

## FAQ

### Is Cline free?

The extension is MIT OSS - no subscription. You pay for whatever model API you connect: Anthropic, OpenAI, [OpenRouter](openrouter.md), or free if you point at [Ollama](ollama.md).

### Cline vs Cursor - which one?

Different shapes. [Cursor](cursor.md) is a forked IDE with codebase indexing built in; Cline is an extension you bolt onto stock VS Code with a transparent approval loop. Cline wins on auditability and BYO-key cost control. Cursor wins on polish and large-codebase context.

### Cline vs Roo Code?

[Roo Code](roo_code.md) is a fork of Cline that ships features faster and exposes more configuration (custom modes, per-mode model selection). The cores are similar.

### Does Cline support MCP?

Yes - first-class MCP client. Add servers via the marketplace tab or `cline_mcp_settings.json`.

### Can Cline run shell commands?

Yes, in its own terminal pane. By default each command requires approval. You can auto-approve specific command patterns in settings, but be careful.

## Pointers

* Docs: [cline.bot](https://cline.bot)
* GitHub: [github.com/cline/cline](https://github.com/cline/cline)
* MCP marketplace: [cline.bot/mcp-marketplace](https://cline.bot/mcp-marketplace)
* If you want the same loop with a faster release cadence, look at [roo_code.md](roo_code.md).
