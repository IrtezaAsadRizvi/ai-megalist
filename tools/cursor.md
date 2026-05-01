# Cursor

Cursor is what happens when someone asks "what does an editor look like if AI is the primary interface?" and then actually ships it. It's a fork of VS Code, which means the muscle memory and extensions you already have port over almost untouched, and the AI features feel like they were designed in rather than bolted on.

## What it actually is

A standalone desktop editor (macOS, Windows, Linux) built on the VS Code codebase. It indexes your repository, lets you chat with the codebase, autocompletes inline, and runs an agent ("Composer," "Background agents") that edits multiple files at once.

## Setup

1. Download from [cursor.com](https://cursor.com), drag to Applications.
2. On first launch it offers to import VS Code settings and extensions. Say yes.
3. Sign in. Free tier gives you ~50 fast model requests; Pro ($20/mo) lifts that to 500 and adds the better models.
4. Open your repo. Wait for indexing. Larger codebases take a couple of minutes.
5. Press `Cmd+L` for chat, `Cmd+K` for inline edit, `Cmd+I` for Composer (multi file agent).

You're productive in about 10 minutes if you already use VS Code.

## How I use it day to day

* **Cmd+K for surgical edits.** Highlight a function, press Cmd+K, describe the change in one sentence. This is the workflow I use most.
* **Cmd+L for "explain this codebase."** I park questions in the chat panel as I'm reading unfamiliar code. The references include the relevant files inline.
* **Composer for multi file changes.** "Add a rate limit middleware everywhere we touch the public API." Composer makes a plan, shows the diff across files, you accept or edit.
* **Background agents** for tasks I can describe and walk away from. They run on a remote machine, push a branch, open a PR.
* **Codebase indexing** is the secret sauce. The chat actually knows about the rest of your repo, not just the file in your viewport.

## Gotchas

* Indexing can be slow on huge monorepos. Use the `.cursorignore` file to exclude generated code, vendored deps, and node_modules.
* Background agents bill on usage. Watch the dashboard if you turn on auto run.
* The model choice matters a lot. I default to Claude Sonnet for edits and GPT for fast autocomplete. Try the picker.
* Composer occasionally rewrites more than you asked. Always review the diff. (You should anyway.)
* If you're in a JetBrains shop, Cursor isn't for you yet — check Copilot or Continue instead.

## Pointers

* [cursor.com/docs](https://cursor.com/docs)
* The keyboard shortcuts cheat sheet is genuinely worth printing.
* `.cursorrules` at the repo root teaches Cursor your conventions; treat it like a small CLAUDE.md.
* Pair it with [claude_code.md](claude_code.md) when you want to drop into the terminal.
