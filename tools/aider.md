# Aider: open-source terminal coding agent

Aider is the OSS option in the terminal coding agent cluster alongside [Claude Code](claude_code.md), [Codex CLI](codex_cli.md), and [Gemini CLI](gemini_cli.md) - bring your own API key, drive Git from the prompt. Aider is the OSS terminal coding tool I keep recommending to hackers who want to know exactly what their tools are doing. No telemetry, no SaaS, no proprietary middleware. You bring an API key (any major provider), Aider drives Git commits, and the entire stack is Python you can read.

## What it actually is

A Python CLI for AI pair programming, built around Git. You run it in a repo; it reads files you mention, edits them, and commits with descriptive messages. Supports OpenAI, Anthropic, Gemini, DeepSeek, Mistral, Ollama (for local models), and anything OpenAI compatible. Apache 2.0 licensed.

## Setup

1. Install: `python -m pip install aider-install && aider-install` (the recommended path, sets up a clean Python env).
   * Alternative: `pipx install aider-chat` if you already manage Python.
2. Set an API key: `export ANTHROPIC_API_KEY=...` or `OPENAI_API_KEY`, etc.
3. `cd` into a Git repo. Run `aider`. (If not a Git repo, Aider will offer to initialise one.)
4. (Optional) Create `.aider.conf.yml` in the repo for default model, edit format, and other preferences.
5. (Optional, for local) Point at Ollama: `aider --model ollama/llama3.3 --openai-api-base http://localhost:11434/v1`.

## How I use it day to day

* **Add files with `/add path/to/file`.** Aider only edits files you've explicitly added; this keeps the context window honest and the model focused.
* **Just describe the change.** "In `models.py`, switch the User model to use UUID primary keys, update the migrations." Aider edits, runs `git diff`, and asks if you want to commit.
* **`/architect`** mode for harder tasks. Aider runs a planning model first (e.g. o4 reasoning), then a faster model executes the edits.
* **Read only files via `/read`.** Useful for reference docs the model should consider but not edit.
* **`/test` and `/run`** to execute tests or scripts; output is fed back into context.
* **Commits are automatic** with a generated message you can override. Each Aider edit is a separate commit, which makes review and revert easy.

## Gotchas

* The model choice matters a lot. For serious work I run Aider with Sonnet or GPT‑5.5, not the cheap defaults.
* Aider's edit format ("diff" vs "whole file") affects success rate by language. Defaults are sensible; switch to `--edit-format diff` if you see corruption on long files.
* No fancy GUI. This is a feature, not a bug, but if you want a polished IDE feel, Cursor or Windsurf are the better fit.
* Long sessions accrue tokens fast. `/clear` between unrelated tasks; `/tokens` to see usage.

## Alternatives

* If you want the polished closed-source terminal agent and you're already in the Anthropic family, [Claude Code](claude_code.md) is the obvious pick.
* If you live in OpenAI's ecosystem and want an Anthropic-style CLI, [Codex CLI](codex_cli.md) is the equivalent.
* If you want an IDE rather than a CLI, [Cursor](cursor.md) is where the GUI workflow lives.
* If you want fully local coding with no API spend, point Aider at [Ollama](ollama.md) - same loop, your hardware.

## FAQ

### Is Aider free?

The tool itself is Apache 2.0 OSS - no subscription. You pay for whatever model API you point it at; Sonnet or GPT-5.5 for serious work, or free if you point it at [Ollama](ollama.md).

### Aider vs Claude Code - which one?

Both are terminal agents driven by frontier models. [Claude Code](claude_code.md) is more polished, has MCP and sub-agents, and is locked to the Anthropic family. Aider is OSS, model-agnostic, and Git-native by design - every edit is a separate commit. I use both.

### Does Aider work with local models?

Yes - point it at [Ollama](ollama.md) with `--model ollama/llama3.3 --openai-api-base http://localhost:11434/v1`. Quality drops vs Sonnet but it's free and private.

### What's the best model for Aider?

The leaderboard at aider.chat/docs/leaderboards is the honest sanity check. As of 2026, Sonnet and GPT-5.5 are the workhorses; cheaper models corrupt long files more often.

### Can Aider edit multiple files at once?

Yes - add files with `/add path` and Aider edits across them in a single turn. The `/architect` mode runs a planning model first, then a faster model executes the edits across files.

## Pointers

* Docs: [aider.chat](https://aider.chat)
* GitHub: [github.com/Aider-AI/aider](https://github.com/Aider-AI/aider)
* The leaderboard at [aider.chat/docs/leaderboards](https://aider.chat/docs/leaderboards) is a useful sanity check on which models actually edit code well.
* Pairs naturally with [ollama.md](ollama.md) for fully local coding.
