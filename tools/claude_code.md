# Claude Code

> If you can describe it, you can probably ship it from the terminal.

Claude Code is Anthropic's CLI agent. You run it inside a repo and it reads, edits, runs, and commits like a (very fast, somewhat overconfident) collaborator. I use it for the kind of work that would be tedious to babysit in an editor: large refactors, repo wide searches, "go figure out why the test is flaky," writing changelogs from git history.

## What it actually is

A Node based CLI that wraps Claude (Sonnet by default, Opus on Max). It has tool access for shell, file read/write, web fetch, Git, and any MCP server you wire up. You drive it from a normal terminal; conversation history persists per project.

## Setup

1. Make sure you have Node 18+: `node --version`.
2. Install: `npm install -g @anthropic-ai/claude-code`.
3. Run `claude` in any repo. First launch walks you through auth (browser based).
4. (Optional) Add a `CLAUDE.md` to the repo root with house conventions; Claude Code reads it on every run.
5. (Optional) Wire up MCP servers (e.g. for your DB, your linear, your Slack) in `~/.claude/settings.json` or per project.

About five minutes from `npm install` to first useful task.

## How I use it day to day

* **`/init`** to seed a new repo with a `CLAUDE.md` describing the codebase. Then I trim it.
* **Large refactors.** "Move all auth code from `server/auth/*` into a new `packages/auth` workspace and update imports." I describe it, watch the plan, approve, run tests, commit.
* **Test driven loops.** "Write a failing test for the bug in #423, then fix it." It's good at this and I trust it more than it trusts itself.
* **Repo archaeology.** "Why does this function take a `legacyMode` boolean? Find every callsite and explain." It greps, reads, summarises.
* **Hooks.** Pre commit, post tool use, prompt submit. I use a pre commit hook that runs `pnpm lint` and blocks if it fails.
* **Sub agents.** For tasks that would otherwise pollute the main context, I spawn an `Explore` sub agent that reports back a summary.

## Gotchas

* It will run shell commands and write files. Always read the plan before approving destructive work. Use `--allowed-tools` to scope what it can do.
* The default working directory is wherever you ran `claude`. Confirm this before it starts touching files.
* Conversation history can get long. Use `/clear` between unrelated tasks; long context = slower and more expensive.
* `CLAUDE.md` is loaded into every prompt. Keep it tight. If it grows past 200 lines, split it.
* MCP setup is the most powerful and most fiddly piece. Start with one server (e.g. a DB read only connector) before adding three.

## Pointers

* Docs: [docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code)
* MCP server registry: [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
* Run `claude --help` and `/help` inside the session for the full command list.
* Worth pairing with Cursor — Cursor for surgical edits, Claude Code for "go do this whole thing."
