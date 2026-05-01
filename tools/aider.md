# Aider

Aider is the OSS terminal coding tool I keep recommending to hackers who want to know exactly what their tools are doing. No telemetry, no SaaS, no proprietary middleware. You bring an API key (any major provider), Aider drives Git commits, and the entire stack is Python you can read.

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

## Pointers

* Docs: [aider.chat](https://aider.chat)
* GitHub: [github.com/Aider-AI/aider](https://github.com/Aider-AI/aider)
* The leaderboard at [aider.chat/docs/leaderboards](https://aider.chat/docs/leaderboards) is a useful sanity check on which models actually edit code well.
* Pairs naturally with [ollama.md](ollama.md) for fully local coding.
