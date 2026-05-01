# Continue

Continue is the open source AI coding assistant for "I'd like Cursor's experience but I want to choose the model and own the data." Bring your own provider (OpenAI, Anthropic, Gemini, Ollama, anything OpenAI compatible); Continue is the IDE side that uses it. Apache 2.0 licensed, configurable to a fault.

## What it actually is

An open source IDE extension for VS Code and JetBrains. Provides autocomplete, chat, edit (highlight code, describe change), and agent (multi step file edits) — all driven by whichever model you configure. The extension is the product; you supply the model.

## Setup

1. Install: VS Code Marketplace ("Continue") or JetBrains Plugin Marketplace.
2. First launch opens the config wizard. Pick your provider:
   * OpenAI / Anthropic / Gemini (provide API key)
   * Ollama (local; auto detected)
   * Together / Fireworks / Replicate / etc.
3. Config lives at `~/.continue/config.json`. Edit to swap models per role (autocomplete, chat, edit, embed).
4. Optional: connect docs (point at any URL); Continue indexes for context.

About 5 minutes if you already have a model API key.

## How I use it day to day

* **Local Ollama as the autocomplete model.** Free, fast, private. Quality is below frontier completion, fine for most uses.
* **Claude / GPT for chat.** When I want a frontier model in chat / edit, I switch the chat model. Same UI.
* **Per role model selection.** A small fast model for inline completion; a frontier model for edit; a reasoning model for "agent" mode. Continue's config supports all three at once.
* **Indexing custom docs.** Point Continue at your team's internal docs URL; chat answers respect them.
* **Slash commands.** `/edit` for file changes, `/comment` for inline comments, `/test` for test generation. Custom slash commands are configurable.

## Gotchas

* Config file based setup is more friction than Cursor's GUI. Power user friendly; non technical users may struggle.
* Quality is downstream of the model you bring. A weak model = weak suggestions; not Continue's fault.
* Some agentic flows (Cursor's Composer, Claude Code's tool loop) are smoother in dedicated tools. Continue is catching up; not the leader.
* Embedding model and vector store choices matter for codebase search. Defaults are sensible; non default setups need attention.
* The roadmap moves fast; pin a version in production environments.

## Pointers

* [continue.dev](https://continue.dev)
* Repo: [github.com/continuedev/continue](https://github.com/continuedev/continue)
* Pair with [ollama.md](ollama.md) for fully local coding.
* For more polished managed alternatives: [cursor.md](cursor.md), [windsurf.md](windsurf.md), [github_copilot.md](github_copilot.md).
* For terminal coding instead: [aider.md](aider.md).
