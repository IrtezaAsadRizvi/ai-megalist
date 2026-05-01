# Codex CLI

Codex CLI is OpenAI's answer to Claude Code. Same shape — a terminal agent that lives inside your repo, reads/edits files, runs commands, commits — but built around the GPT family. Since the GPT‑5.5 refresh in early 2026, the agentic execution and code quality are good enough that "which terminal agent should I use" is genuinely a coin flip rather than a clear winner.

## What it actually is

A Node CLI installed globally. It opens an interactive session in any directory, with tool access for shell, file I/O, git, web fetch, and any MCP server you connect. Apache 2.0 licensed (open source). The default model is GPT‑5.5 Codex; o4 reasoning is available for deeper planning steps.

## Setup

1. Need Node 18+: `node --version`.
2. Install: `npm install -g @openai/codex`.
3. First run: `codex` in any repo. It walks you through OpenAI auth (browser based) or you can `export OPENAI_API_KEY=...`.
4. (Optional) Drop a `CODEX.md` in the repo root with house conventions; Codex reads it on launch.
5. (Optional) Wire MCP servers in `~/.codex/config.toml` or per project.

About five minutes from `npm install` to first useful task.

## How I use it day to day

* **Initial repo exploration.** "Map out the auth flow across this codebase and tell me what's surprising."
* **Bug hunts.** "The integration test for `/orders` is flaky. Find the root cause and either fix it or explain why it's hard." Codex tends to dig deeper than I'd expect, sometimes more than I want.
* **Refactors with a defined target.** "Migrate this Express app to Fastify, preserve all routes." Slower than Claude Code in my testing but with better recovery when things break mid run.
* **Pair with a feature flag.** I keep Codex in a "plan, don't execute" mode (`--dry-run`) when working on production code, then run the same plan with execution after review.

## Gotchas

* Auth costs accrue against your OpenAI account; budget caps live at platform.openai.com → Limits.
* The default working directory is wherever you ran `codex`. Confirm before approving destructive commands.
* `--auto-approve` is convenient and dangerous. I use it on side projects, never on prod repos.
* Compared to Claude Code, Codex is more inclined to write tests proactively, which I like, but also occasionally writes tests for code I haven't asked it to touch.
* MCP setup is similar to Claude Code's but config lives at `~/.codex/`. Don't expect cross compatibility.

## Pointers

* GitHub: [github.com/openai/codex](https://github.com/openai/codex)
* `codex --help` and `/help` inside the session for the command list.
* OpenAI's broader Agents SDK (different product, same family) at [platform.openai.com](https://platform.openai.com).
* Worth running side by side with [claude_code.md](claude_code.md) on the same task to develop your own preference.
