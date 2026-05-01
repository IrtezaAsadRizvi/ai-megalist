# Zed

Zed is the editor I open when I want to feel that my computer is fast. It's written in Rust from scratch (not a VS Code fork), uses GPU rendering for the UI, and starts up instantly even on huge repos. The AI features are real but the substrate — a high performance editor — is what makes it appealing.

## What it actually is

An open source editor (GPL v3) from the Atom alumni. Macros, multi cursor, built in terminal, deep Tree sitter integration, and an AI assistant panel that connects to OpenAI, Anthropic, Gemini, Ollama, or any OpenAI compatible endpoint. There's also collaboration: real time multiplayer editing baked in.

## Setup

1. Download from [zed.dev](https://zed.dev). Drag to Applications.
2. Open a repo. Initial indexing is fast.
3. (Optional) Configure the AI panel: `Cmd+?` to open Assistant. Settings → AI to set provider and key.
4. (Optional) Enable Edit Predictions (Zed's autocomplete) under Settings → Edit Predictions.
5. Keybindings: `Cmd+Shift+P` for command palette, `Cmd+T` for buffer search, `Cmd+P` for file finder.

About 5 minutes if you've used VS Code or Sublime.

## How I use it day to day

* **As my "fast editor" for short sessions.** When I open and close files dozens of times a day, the millisecond differences add up. Zed wins on responsiveness.
* **Assistant panel** for chat with the model of my choice. I usually point it at Claude. The panel can read open buffers as context.
* **Edit Predictions** as a Copilot alternative. The model is Zeta (Zed's own); decent in mainstream languages.
* **Multibuffer** is the killer feature most editors don't have. Edit search results, diffs, and grep matches in a single buffer with full editor power — saves enormous time on bulk refactors.
* **Multiplayer** for paired sessions. I share a project URL, a colleague joins; we edit and chat in real time.

## Gotchas

* Zed's plugin ecosystem is smaller than VS Code's. If your workflow depends on a specific extension, check before switching.
* JetBrains keymaps are supported but the muscle memory may not transfer perfectly.
* Some features are Mac first; Linux and Windows lag in polish.
* The AI assistant is good but not as deeply integrated as Cursor's — it's a panel, not a fully woven part of the editor.
* OSS but the cloud collaboration features require sign in to Zed's servers. For air gapped environments, the editor is fine but multiplayer isn't.

## Pointers

* [zed.dev](https://zed.dev)
* Open source: [github.com/zed-industries/zed](https://github.com/zed-industries/zed)
* For an AI native fork of VS Code instead: [cursor.md](cursor.md), [windsurf.md](windsurf.md).
* Zed pairs nicely with terminal coding agents: edit in Zed, run [claude_code.md](claude_code.md) in the integrated terminal.
