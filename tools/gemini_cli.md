# Gemini CLI

Gemini CLI is Google's open source terminal agent, Apache 2.0 licensed, and it has the longest context window of the three big terminal agents (Gemini's 1M context shows up here too). The interesting move is that it's genuinely OSS — no proprietary client wrapper, the whole loop is in the repo.

## What it actually is

A Node based CLI implementing a ReAct loop on top of the Gemini API. It supports MCP servers, file editing, shell, web fetch, and a built in code interpreter. The default model is Gemini 2.5 Pro.

## Setup

1. Install: `npm install -g @google/gemini-cli`.
2. Auth: `gemini auth` opens a browser. Use a Google account; uses your free tier quota by default.
3. Run `gemini` in any repo.
4. (Optional) Add a `GEMINI.md` to the repo root for conventions.
5. (Optional) MCP config at `~/.gemini/settings.json`.

## How I use it day to day

* **When I have a really big input.** Pasting a 500K token codebase and asking architectural questions actually works here, where it would choke other agents.
* **Free tier is generous.** Personal Google accounts get useful daily quota at no cost, which is convenient for casual use.
* **Reading codebases I don't own.** Clone, run `gemini`, ask "explain the auth flow." The 1M context lets me skip the "which files matter" step.
* **As an OSS reference.** Reading the agent loop in the repo helped me understand what Claude Code and Codex are doing under the hood.

## Gotchas

* Gemini's tool use is solid but the model can be more verbose than I'd like. I prompt for terseness explicitly.
* The free tier counts against your personal Google account. If you're a heavy user, get an API key and pay per token instead.
* Some MCP servers behave differently here than in Claude Code; the protocol is the same but adapter quirks differ.
* As of April 2026 the ecosystem of recipes and prompt templates is smaller than Claude Code's. Expect to write your own scaffolding.

## Pointers

* Repo: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)
* Apache 2.0 means you can fork it; some teams have.
* Pair with [claude_code.md](claude_code.md) and [codex_cli.md](codex_cli.md) — if you do agentic work, having all three on hand is cheap and useful.
