# Windsurf

Windsurf is the IDE I recommend when someone wants the Cursor experience for less money or with stronger agentic flow. The team (formerly Codeium) ships fast, the Cascade interaction model is genuinely different from Cursor's chat panel, and the price point is friendlier for individual developers.

## What it actually is

A standalone desktop editor (macOS, Windows, Linux) forked from VS Code. The defining feature is Cascade: a flow oriented agent that pairs with you, planning and editing across files in a way that feels closer to "running an assistant" than "chatting with a model." There's also an inline edit mode and standard autocomplete.

## Setup

1. Download from [windsurf.com](https://windsurf.com), drag to Applications.
2. On first launch, import VS Code settings + extensions if prompted.
3. Sign in. Free tier has generous Cascade and chat usage; Pro is $15/mo.
4. Open your repo. Wait for indexing.
5. Press `Cmd+L` for chat, `Cmd+I` for inline edit, `Cmd+Shift+I` for Cascade.

About 10 minutes if you already use VS Code.

## How I use it day to day

* **Cascade for multi step tasks.** "Add a new role with permissions across the auth, API, and admin UI." Cascade plans, edits, runs, asks for confirmation at each major step. The pacing feels closer to a junior collaborator than a model spitting out a diff.
* **Inline edit on small surface area changes.** Same as Cursor's Cmd+K — highlight a function, describe the change, accept the diff.
* **Codeium autocomplete** is quietly best in class for an IDE that isn't called Copilot. Especially good in Python and TypeScript.
* **Live indexed codebase.** The chat actually knows about the repo, and updates when you edit. Useful for "where is this called?" and "explain this module."

## Gotchas

* Windsurf has fewer integrations than Cursor (extensions, keyboard shortcuts, third party themes are catching up). Power users may notice the gap.
* The Cascade agent will run shell commands. Read each step, especially the first time on a new repo.
* Free tier is genuinely usable but the model picker is more limited; Pro unlocks frontier model access.
* "Codeium" branding still shows up in some menus and docs. The product was renamed Windsurf when the IDE shipped in 2024 and the migration isn't 100%.

## Pointers

* [windsurf.com/docs](https://docs.windsurf.com)
* For a side by side: try the same task in [cursor.md](cursor.md) and Windsurf and pick on feel. They diverge more than the marketing copy suggests.
* If you want only autocomplete and not the full IDE, the Codeium VS Code extension still exists for free.
