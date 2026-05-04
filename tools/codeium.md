# Codeium: free inline code completion across 70+ editors

Codeium is an inline-completion / chat extension in the same category as [GitHub Copilot](github_copilot.md), [Tabnine](tabnine.md), and [Continue](continue.md) - the lightweight side of the AI-coding category, the part that lives inside whatever editor you already use. The free-for-individuals tier is the headline. The IDE extension lives in 70+ editors (VS Code, JetBrains, Vim, Sublime, Eclipse, the obscure ones). Owned by the same team that makes Windsurf - Codeium is the lighter weight cousin that fits inside any editor without asking you to switch.

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
* **Inline completion** in non standard editors. The breadth of editor support is the unique value - Tabnine and Copilot don't reach as wide.
* **Chat panel** scoped to current file. Less context aware than Cursor's, more present than nothing.
* **Free tier as evaluation.** If you're deciding among tools, Codeium gives you a real workflow at $0 to compare.
* **Pair with the standalone IDE** ([windsurf.md](windsurf.md)) for serious AI coding; the extension is the lightweight alternative.

## Gotchas

* The free tier is genuinely free, but Codeium does collect telemetry (you can opt out partially). Read the privacy policy.
* Quality varies by language. Mainstream languages (Python, TypeScript, Java) get strong completions; obscure ones are spottier.
* Chat features are less integrated than Cursor's; the chat panel feels separate from the editor.
* Some advanced features (agentic edits, multi file refactors) aren't in the extension; those live in the standalone Windsurf editor.
* Codeium / Windsurf was acquired by Cognition (Devin's team) in early 2025. Roadmap may shift.

## Alternatives

* If you want the largest plugin ecosystem and JetBrains parity, [GitHub Copilot](github_copilot.md) is the realistic default.
* If you want the same team's heavier agentic IDE, [Windsurf](windsurf.md) is the standalone product.
* If you want OSS and bring-your-own-model (including local), [Continue](continue.md) is the configurable equivalent.
* If you need on-prem or air-gap, [Tabnine](tabnine.md) is the privacy-first option.

## FAQ

### Is Codeium really free?

Yes for individuals, with telemetry on by default (you can opt out partially). Teams ($15/seat/mo) and Enterprise add team features and self-hosting. The free tier is the genuine value; very few competitors match it.

### Codeium vs GitHub Copilot - which is better?

Codeium is free, runs in more editors, and is good enough for most autocomplete. [GitHub Copilot](github_copilot.md) has tighter VS Code / JetBrains integration, better chat, and a bigger plugin ecosystem. If you live in a mainstream editor and don't mind $10/mo, Copilot. If you want it free or you live in Vim / Sublime / Eclipse, Codeium.

### Codeium vs Windsurf - what's the difference?

Same team, different products. Codeium is the lightweight extension that drops into any editor. [Windsurf](windsurf.md) is the standalone agentic IDE (a Cursor-style fork) with the heavier multi-file edit features. Use Codeium for autocomplete; use Windsurf when you want an AI-native editor.

### Does Codeium support JetBrains?

Yes - the JetBrains plugin is one of the better ones in the category. If you're a JetBrains shop and don't want Copilot, Codeium is the realistic alternative alongside [Tabnine](tabnine.md).

## Pointers

* [codeium.com](https://www.codeium.com)
* For the standalone agentic IDE: [windsurf.md](windsurf.md).
* For deeper repo context in an editor: [cursor.md](cursor.md).
* For OSS BYO model alternative: [Continue](https://continue.dev).
