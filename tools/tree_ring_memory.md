# Tree Ring Memory: local-first lifecycle memory for AI agents

Tree Ring Memory is in the agent-memory lane next to [Letta](letta.md), Mem0, and the DIY vector-store pattern, but its angle is different: it is a local Rust CLI and protocol-preview memory layer for agents that need to recall, audit, consolidate, redact, and forget lessons across sessions without turning every transcript into permanent context. The useful pitch is "portable memory that agents can explain, test, and delete."

## What it actually is

An MIT-licensed Rust workspace plus `tree-ring` CLI from TerminallyLazy. It stores memory locally under `.tree-ring/` with SQLite/FTS, records explicit memory events, supports recall scoring, JSONL import/export, non-mutating audits, deterministic consolidation, safe maintenance, source adapters for DOX/Revolve-style records, read-only agent-framework discovery, and a Ratatui terminal console.

It is currently a protocol-preview project, not a mature hosted agent platform. That matters: treat it as infrastructure for developers experimenting with agent memory contracts, local recall, and lifecycle governance.

## Setup

1. Install globally:
   ```bash
   curl -fsSL https://raw.githubusercontent.com/TerminallyLazy/Tree-Ring-Memory/main/install.sh | sh
   ```
2. Or use the Homebrew tap on macOS:
   ```bash
   brew tap TerminallyLazy/tree-ring
   brew install tree-ring
   ```
3. Initialize a project store:
   ```bash
   tree-ring init
   ```
4. Add and recall a first memory:
   ```bash
   tree-ring remember "Use project-scoped recall before changing release behavior." --event-type lesson --scope project
   tree-ring recall "release behavior"
   ```
5. Open the terminal console:
   ```bash
   tree-ring tui
   ```

## How I use it day to day

* **Agent session carryover.** Store durable decisions, warnings, preferences, and lessons without stuffing old chat logs into every new context window.
* **Local memory inspection.** SQLite plus the TUI makes memory state visible instead of hiding it inside a SaaS black box.
* **Forgetting and redaction workflows.** The `forget`, `audit`, and `maintain` commands make deletion, redaction, and sensitive-memory review first-class operations.
* **Evidence-backed lessons.** `tree-ring evidence` records evaluated outcomes with source refs, which is useful when you want an agent to remember what actually worked rather than what merely sounded plausible.
* **Portable agent guidance.** `tree-ring init` creates `.tree-ring/AGENTS.md`, `.tree-ring/SKILL.md`, and `.tree-ring/CLI.md` so different agent harnesses can learn how to call the same memory layer.

## Gotchas

* Protocol-preview status means the integration story is still moving. Expect to read the docs and test your own harness path.
* It is a CLI/local-store layer, not a drop-in hosted agent platform. You bring the agent and decide when it calls memory.
* Rust/Cargo is part of the default install path unless you use a release archive or package manager.
* The source adapters intentionally keep source files authoritative. Memory is a recall aid, not a replacement for reading fresh project contracts, evaluations, or logs.
* The privacy posture is explicit rather than magical: agents or users must choose when to remember, redact, forget, consolidate, or export.

## Alternatives

* [Letta](letta.md) - a whole agent framework where memory is part of the agent loop.
* Mem0 - memory-as-a-service that plugs into many agent stacks.
* [LangGraph](langgraph.md) - stateful graph execution; pair it with your own persistence/memory design.
* [Obsidian](obsidian.md) + AI plugins - local human notes, useful if the memory is primarily for the person rather than the agent.
* Plain vector store + summarization - simpler when lifecycle governance, audit, and deletion are not major concerns.

## FAQ

### Is Tree Ring Memory free?

Yes. The repository is MIT licensed. It is local-first infrastructure; you pay only for whatever model or agent you pair with it.

### Does it run fully local?

Yes. The core store is local SQLite/FTS under `.tree-ring/`, and the CLI handles recall, audit, consolidation, import/export, and maintenance locally.

### Is it an agent framework?

No. It is a framework-agnostic memory lifecycle layer. Use it from Codex-style skills, Claude/Codex/Gemini project guidance, DOX/Revolve workflows, or your own agent harness.

### How is it different from a vector database?

A vector store mostly answers "what text is similar?" Tree Ring Memory adds explicit memory events, scopes, ring states, evidence refs, audits, redaction/deletion flows, deterministic consolidation, and local operator visibility.

### Should I use it in production today?

Probably not without your own evaluation. It is best treated as a serious protocol-preview for developers who need explainable, local, deletable agent memory and are willing to test the integration path.

## Pointers

* Repo: [github.com/TerminallyLazy/Tree-Ring-Memory](https://github.com/TerminallyLazy/Tree-Ring-Memory)
* Launch page: [terminallylazy.github.io/Tree-Ring-Memory](https://terminallylazy.github.io/Tree-Ring-Memory/)
* Release: [v0.11.0](https://github.com/TerminallyLazy/Tree-Ring-Memory/releases/tag/v0.11.0)
* Homebrew tap: [github.com/TerminallyLazy/homebrew-tree-ring](https://github.com/TerminallyLazy/homebrew-tree-ring)
* Start by comparing with [letta.md](letta.md) if your question is "agent owns its memory" vs "my local tool owns the memory lifecycle."
