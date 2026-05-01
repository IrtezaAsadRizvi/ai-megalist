# Obsidian

Obsidian is the second brain you own. Local Markdown files in a folder, a powerful editor on top, and a plugin ecosystem that includes most of the AI features you'd want — without sending your notes to anyone's cloud unless you choose to. For privacy minded knowledge work, Obsidian + a few AI plugins is the most flexible setup that exists.

## What it actually is

A free desktop and mobile app for Markdown notes (macOS, Windows, Linux, iOS, Android). The local first vault is a folder of `.md` files you can sync however you like (Git, iCloud, Dropbox, or Obsidian's own paid Sync). The AI layer comes from community plugins: Smart Connections (semantic search), Copilot for Obsidian (LLM chat), Text Generator, AI Image Analysis, and many more.

## Setup

1. Download from [obsidian.md](https://obsidian.md).
2. Create a vault — point Obsidian at any folder.
3. Settings → Community plugins → Browse. Install at minimum:
   * **Smart Connections** for semantic search.
   * **Copilot** (by Logan Yang) for in editor LLM chat.
4. Plugins ask for an OpenAI / Anthropic / Ollama key. Local Ollama is the no cloud path.
5. (Optional) Pay $5/mo for Obsidian Sync, or use Git / iCloud yourself.

About 30 minutes to a working AI augmented vault.

## How I use it day to day

* **Daily notes.** A Markdown file per day, linked into a folder. Plain text is the substrate; everything else is plumbing.
* **Smart Connections** for surfacing related notes I'd forgotten. The plugin embeds my whole vault locally and returns semantic neighbors.
* **Copilot for chat with my vault.** Ask questions; the plugin retrieves relevant notes and grounds answers in them. Local Ollama means no data leaves.
* **Templates** for repeatable note structures (project, person, meeting). Templater plugin handles the dynamic bits.
* **Canvas** for spatial thinking. A whiteboard backed by your notes; nodes are real Markdown files.
* **Periodic reviews.** Weekly / monthly notes that link to recent daily notes; reviewing them is one of the high leverage habits I've built around the tool.

## Gotchas

* Plugin sprawl is real. Pick five plugins that solve real problems; don't install thirty because they look interesting.
* Mobile editing is good but mobile plugin support is patchier; some plugins are desktop only.
* Sync isn't built in. Obsidian Sync is the easiest paid option; Git works for power users; iCloud works on Apple but is fiddly.
* Local first is the philosophy. AI plugins that call cloud APIs do send your text — read what each plugin actually does.
* Learning curve is medium. Plain Markdown is easy; the link / graph / plugin layer takes a few weeks to internalise.

## Pointers

* [obsidian.md](https://obsidian.md)
* Smart Connections: [github.com/brianpetro/obsidian-smart-connections](https://github.com/brianpetro/obsidian-smart-connections)
* Copilot for Obsidian: [github.com/logancyang/obsidian-copilot](https://github.com/logancyang/obsidian-copilot)
* Pair with [ollama.md](ollama.md) for fully local AI in your vault.
* For a more managed alternative with built in AI: [notion_ai.md](notion_ai.md), [mem.md](mem.md).
