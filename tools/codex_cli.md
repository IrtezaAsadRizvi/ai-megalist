# Codex CLI: OpenAI's terminal coding agent

Codex CLI is the OpenAI entry in the terminal coding-agent category, the direct head-to-head with [Claude Code](claude_code.md) and [Aider](aider.md). Same shape - a terminal agent that lives inside your repo, reads/edits files, runs commands, commits - but built around the GPT family. Since the GPT‑5.5 refresh in early 2026, the agentic execution and code quality are good enough that "which terminal agent should I use" is genuinely a coin flip rather than a clear winner.

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

## Alternatives

* If you want the Anthropic family in the same shape, [Claude Code](claude_code.md) is the direct counterpart.
* If you want minimal git-native pair programming with no agent loop, [Aider](aider.md) is the OSS classic.
* If you want a Google-family terminal agent with 1M context, [Gemini CLI](gemini_cli.md) is the third option.
* If you want an editor instead of a terminal, [Cursor](cursor.md) is the IDE form of the same idea.

## FAQ

### Is Codex CLI free?

The CLI is open-source (Apache 2.0) so the binary is free. Usage costs accrue against your OpenAI account at platform.openai.com - per-token pricing on GPT-5.5 Codex and o4. Set budget caps under Limits before you hand it `--auto-approve`.

### Codex CLI vs Claude Code - which is better?

Honestly close in 2026. [Claude Code](claude_code.md) feels faster on multi-file refactors; Codex digs deeper on bug hunts and is more inclined to write tests proactively. Run both on the same task once - the one whose mistakes annoy you less is the right pick for you.

### What is CODEX.md?

A repo-root config file Codex reads on launch, with house conventions and build commands. Same idea as CLAUDE.md for [Claude Code](claude_code.md), different filename. Keep it tight; update it as the codebase changes.

### Does Codex CLI support MCP?

Yes - config lives at `~/.codex/config.toml` or per-project. The MCP server protocol is the same as Claude Code's, but the config locations are not interchangeable. Don't expect to just copy your `~/.claude/` over.

### Is --auto-approve safe?

On side projects, fine. On production repos, no. Codex will run shell commands and write files; `--auto-approve` removes the human checkpoint. Use it on throwaway sandboxes; review plans manually on anything that matters.

## Pointers

* GitHub: [github.com/openai/codex](https://github.com/openai/codex)
* `codex --help` and `/help` inside the session for the command list.
* OpenAI's broader Agents SDK (different product, same family) at [platform.openai.com](https://platform.openai.com).
* Worth running side by side with [claude_code.md](claude_code.md) on the same task to develop your own preference.
