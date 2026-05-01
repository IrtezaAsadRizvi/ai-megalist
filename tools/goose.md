# Goose

Goose is Block's open source agent, designed to run locally on your machine and bring its own model. It's the agent I'd recommend to someone who wants Claude Code style autonomy but doesn't want to ship their codebase to a hosted provider every time they ask a question. Apache 2.0, written by the team behind Square and Cash App, and seriously good at staying out of your way.

## What it actually is

An open source AI agent framework by Block, Inc. Runs locally as a CLI or with a desktop UI. Pluggable LLM provider (OpenAI, Anthropic, Google, Ollama for local models). Pluggable extensions (file editing, shell, browser, MCP servers). Apache 2.0 licensed.

## Setup

1. Install: `curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | sh`. Or use Homebrew: `brew install block/goose/goose`.
2. Configure a provider: `goose configure`. Pick OpenAI, Anthropic, Ollama, or others; supply an API key or local endpoint.
3. Pick a model in the same configure flow.
4. Run `goose session` in a directory; the agent gets file and shell access to that path.
5. (Optional) Add MCP extensions: `goose mcp add ...` to bring in tools like web search, GitHub access, or custom internal services.

## How I use it day to day

* **As a Claude Code alternative for repos I don't want sent to Anthropic.** Goose with a local Ollama model gives me the same agentic feel without the network hop.
* **For long shell driven sessions.** Goose's shell tool is robust; running migrations, building Docker images, or writing scripts and immediately testing them.
* **As a place to plug MCP servers.** The MCP ecosystem is the same as Claude Code's; servers I built once work in both.

Quality of the agent loop tracks the model you give it. With a frontier model (Sonnet, GPT 5.5), Goose feels close to Claude Code. With smaller local models, expect more babysitting.

## Gotchas

* The product is genuinely OSS; there's less polish than the commercial alternatives. UI rough edges, occasional config friction.
* Local model use sounds great in theory; in practice you need a strong machine for it to be productive on real codebases.
* Documentation is improving but lags Claude Code's. Read the GitHub issues for tribal knowledge.
* Some MCP servers are picky about which agent harness they expect; cross compatibility is good but not perfect.

## Pointers

* Repo: [github.com/block/goose](https://github.com/block/goose)
* Docs: [block.github.io/goose](https://block.github.io/goose/)
* Apache 2.0; you can fork freely.
* Pairs with [ollama.md](ollama.md) for local model use, with [claude_code.md](claude_code.md) and [codex_cli.md](codex_cli.md) as the commercial counterparts. If you want the most "developer in control" terminal agent, this is it.
