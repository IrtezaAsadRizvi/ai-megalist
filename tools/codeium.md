# Codeium

Codeium is the free AI coding completion that's stayed free for individuals while shipping seriously capable features. The IDE extension lives in 70+ editors (VS Code, JetBrains, Vim, Sublime, Eclipse, the obscure ones). Owned by the same team that makes Windsurf — Codeium is the lighter weight cousin that fits inside any editor without asking you to switch.

## What it actually is

An IDE extension for AI autocomplete + chat. Free for individuals (with telemetry); Teams ($15/seat/mo) and Enterprise tiers add team features and self hosting. Models include Codeium's own Cascade and various frontier models depending on tier.

## Setup

1. Go to [codeium.com](https://www.codeium.com), sign up.
2. Install the extension for your editor:
   * VS Code: search "Codeium" in extensions.
   * JetBrains: Plugin marketplace.
   * Vim/Neovim: official plugin.
   * Sublime, Eclipse, Xcode, Notepad++, etc.: see [codeium.com/download](https://www.codeium.com/download).
3. Sign in via the editor prompt.
4. Start typing. Tab to accept completions.

## How I use it day to day

* **Honest:** I primarily use Cursor / Copilot; I keep Codeium installed in editors that don't have those (Vim, Sublime).
* **Inline completion** in non standard editors. The breadth of editor support is the unique value — Tabnine and Copilot don't reach as wide.
* **Chat panel** scoped to current file. Less context aware than Cursor's, more present than nothing.
* **Free tier as evaluation.** If you're deciding among tools, Codeium gives you a real workflow at $0 to compare.
* **Pair with the standalone IDE** ([windsurf.md](windsurf.md)) for serious AI coding; the extension is the lightweight alternative.

## Gotchas

* The free tier is genuinely free, but Codeium does collect telemetry (you can opt out partially). Read the privacy policy.
* Quality varies by language. Mainstream languages (Python, TypeScript, Java) get strong completions; obscure ones are spottier.
* Chat features are less integrated than Cursor's; the chat panel feels separate from the editor.
* Some advanced features (agentic edits, multi file refactors) aren't in the extension; those live in the standalone Windsurf editor.
* Codeium / Windsurf was acquired by Cognition (Devin's team) in early 2025. Roadmap may shift.

## Pointers

* [codeium.com](https://www.codeium.com)
* For the standalone agentic IDE: [windsurf.md](windsurf.md).
* For deeper repo context in an editor: [cursor.md](cursor.md).
* For OSS BYO model alternative: [Continue](https://continue.dev).
