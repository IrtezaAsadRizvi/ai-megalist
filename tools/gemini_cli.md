# Gemini CLI: open-source terminal agent with 1M context

Gemini CLI is Google's terminal coding agent, the OSS counterpart to [Claude Code](claude_code.md) and [Codex CLI](codex_cli.md). Apache 2.0 licensed, with the longest context window of the three (Gemini's 1M context shows up here too). The interesting move is that it's genuinely OSS - no proprietary client wrapper, the whole loop is in the repo.

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

## Alternatives

* If you want the most polished terminal agent experience and the deepest MCP / sub-agent ecosystem, [Claude Code](claude_code.md) is the default.
* For OpenAI's terminal agent on the GPT family, [Codex CLI](codex_cli.md) is the head-to-head pick.
* If you'd rather pair-program in the terminal with explicit git diffs, [Aider](aider.md) is leaner and more deterministic.
* For an autonomous SWE agent that runs longer-horizon tasks, [OpenHands](openhands.md) is the OSS option.

## FAQ

### Is Gemini CLI free?

Yes, the tool itself is Apache 2.0. Auth uses your Google account by default, which means inference runs on the free Gemini quota - generous for casual use. For heavy use, get an API key and pay per token via [Google AI Studio](google_ai_studio.md).

### Gemini CLI vs Claude Code - which is better?

Different shapes. [Claude Code](claude_code.md) has the better tool-use polish, the bigger MCP ecosystem, and stronger sub-agent support. Gemini CLI has the longer context (1M) and is genuinely OSS so you can fork it. I keep both installed.

### Does Gemini CLI support MCP?

Yes - configure servers at `~/.gemini/settings.json`. Most MCP servers work, but a few have adapter quirks compared to Claude Code's reference implementation. Test before committing to one.

### What model does Gemini CLI use by default?

Gemini 2.5 Pro as of April 2026. You can swap to other Gemini variants via the config; the 1M context is the headline reason to use this CLI specifically over Codex or Claude Code on long inputs.

## Pointers

* Repo: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)
* Apache 2.0 means you can fork it; some teams have.
* Pair with [claude_code.md](claude_code.md) and [codex_cli.md](codex_cli.md) - if you do agentic work, having all three on hand is cheap and useful.
