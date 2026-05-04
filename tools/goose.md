# Goose: Block's OSS local agent with bring-your-own-model

Goose is in the agent category alongside [Claude Code](claude_code.md) and [Codex CLI](codex_cli.md), but its angle is OSS-and-local-first. Apache 2.0, by the team behind Square and Cash App, and the agent I'd recommend to someone who wants Claude Code style autonomy but doesn't want to ship their codebase to a hosted provider every time they ask a question.

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

## Alternatives

* If you want the most polished commercial terminal agent and don't mind sending code to Anthropic, [Claude Code](claude_code.md) is the default.
* For OpenAI's terminal agent on the GPT family, [Codex CLI](codex_cli.md) is the parallel.
* If you want Apache-2.0 OSS with the longest context window, [Gemini CLI](gemini_cli.md) is also a fork-friendly option.
* For autonomous longer-horizon SWE work (the "fix this GitHub issue" loop), [OpenHands](openhands.md) is more aggressive in autonomy.

## FAQ

### Is Goose free?

Yes - Apache 2.0, fully OSS. The cost is the model: bring your own API key (OpenAI, Anthropic, Google) or run a local model via [Ollama](ollama.md). Local Ollama is free at inference time but you pay in electricity and the cost of strong hardware.

### Goose vs Claude Code - which should I use?

Different priorities. [Claude Code](claude_code.md) wins on polish, ecosystem, and out-of-the-box quality. Goose wins if you need OSS, want to keep code off third-party servers, or want to swap models freely. With a frontier model behind it, Goose feels close to Claude Code; with a small local model, expect more babysitting.

### Does Goose support MCP?

Yes - the MCP ecosystem is shared with Claude Code. Add servers via `goose mcp add`. Most reference servers work in both; a few have adapter quirks, so test cross-compatibility before depending on one.

### Can Goose run fully offline?

Yes, paired with [Ollama](ollama.md) or another local OpenAI-compatible server. The agent loop, file edits, and shell tools all work without a network. Quality tracks the local model - 70B-class models on a strong machine are realistic; smaller models struggle on real codebases.

## Pointers

* Repo: [github.com/block/goose](https://github.com/block/goose)
* Docs: [block.github.io/goose](https://block.github.io/goose/)
* Apache 2.0; you can fork freely.
* Pairs with [ollama.md](ollama.md) for local model use, with [claude_code.md](claude_code.md) and [codex_cli.md](codex_cli.md) as the commercial counterparts. If you want the most "developer in control" terminal agent, this is it.
