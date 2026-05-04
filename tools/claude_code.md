# Claude Code: Anthropic's terminal coding agent

> If you can describe it, you can probably ship it from the terminal.

Claude Code is the terminal coding agent in the Anthropic family, the natural pair to [Cursor](cursor.md) in an IDE and the head-to-head competitor to [Codex CLI](codex_cli.md) and [Aider](aider.md) on the command line. You run it inside a repo and it reads, edits, runs, and commits like a (very fast, somewhat overconfident) collaborator. I use it for the kind of work that would be tedious to babysit in an editor: large refactors, repo wide searches, "go figure out why the test is flaky," writing changelogs from git history.

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

## Alternatives

* If you'd rather drive from an IDE with visible diffs and inline edits, [Cursor](cursor.md) is the same model family in a different shape.
* If you want the OpenAI / GPT family in the terminal instead, [Codex CLI](codex_cli.md) is the direct counterpart.
* If you want a smaller, git-native pair-programming loop with full diff control, [Aider](aider.md) is the OSS classic.
* If you want a cloud agent that goes off on its own for an hour, [Devin](devin.md) is the autonomous-engineer pitch.

## FAQ

### Is Claude Code free?

No. It runs on the Anthropic API or your Claude subscription. Pro ($20/mo) covers light Sonnet use; Max ($100-$200/mo) is the realistic floor for sustained Opus use in a real repo. API billing is per token if you go that route.

### Claude Code vs Cursor - which should I use?

Different shapes, often together. [Cursor](cursor.md) is the IDE for surgical inline edits and visible diff review. Claude Code is the terminal agent for "go do this whole thing" tasks - large refactors, test loops, repo archaeology. I run both, often on the same repo.

### Claude Code vs Codex CLI - which is better?

Honestly close in early 2026. Claude Code feels faster on multi-file edits; [Codex CLI](codex_cli.md) digs deeper on bug hunts and is more inclined to write tests proactively. Run both on the same task once and pick the one whose mistakes annoy you less.

### What is CLAUDE.md?

A repo-root file that Claude Code reads on every run, with house conventions, build commands, and any context the model otherwise wouldn't know. Treat it like a small system prompt for the project; keep it tight (under 200 lines) and split if it grows.

### Can Claude Code commit and open PRs?

Yes - it has shell and Git tool access. With a pre-commit hook configured (`pnpm lint`, tests, etc.) it'll respect your existing gates. For full PR-opening flow, point it at `gh pr create` or wire up a sub-agent.

## Pointers

* Docs: [docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code)
* MCP server registry: [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
* Run `claude --help` and `/help` inside the session for the full command list.
* Worth pairing with Cursor - Cursor for surgical edits, Claude Code for "go do this whole thing."
