# Roo Code: configurable Cline fork for VS Code

Roo Code is a community fork of [Cline](cline.md) that took the same "agent-in-a-sidebar" loop and turned the configuration knobs to eleven. Custom modes, per-mode model selection, prompt caching toggles, sticky model preferences - the things power users wanted but Cline kept conservative. If you already like Cline's shape but find yourself wanting more control over which model handles which sub-task, this is the upgrade path.

## What it actually is

An Apache-2.0 licensed VS Code extension (originally "Roo Cline") maintained by RooCodeInc on GitHub. Same plan-then-execute agent loop as [Cline](cline.md), same BYO-key model story, but more configurable: define your own modes (Architect, Code, Debug, Ask, Test, etc.), pin different models to different modes, run multiple agents in parallel via boomerang tasks. Active fork - releases land weekly.

## Setup

1. Install the **Roo Code** extension from the VS Code marketplace.
2. Open the Roo sidebar. Add provider keys (Anthropic, OpenAI, [OpenRouter](openrouter.md), [AWS Bedrock](aws_bedrock.md), [Ollama](ollama.md), etc.).
3. Pick a default mode and model. Try **Architect** (planning) → **Code** (execution) for non-trivial tasks.
4. (Optional) Define a custom mode in `.roomodes` to bake project-specific instructions into the prompt.

## How I use it day to day

* **Architect-then-Code workflow.** Use a reasoning model in Architect mode to plan, then a cheaper model in Code mode to execute. Saves real money on long sessions.
* **Custom modes per project.** A "Migration" mode that always loads the schema files and a specific system prompt is faster than re-priming the model every time.
* **Boomerang tasks** for fan-out work - kick off a parallel sub-task and merge the result.
* **Diff editing** by default - smaller payloads, fewer token costs vs whole-file edits.

## Gotchas

* Feature surface is wider than Cline; more knobs means more ways to misconfigure. The defaults are sensible; resist the urge to twiddle on day one.
* Token use can be high if you leave full-file mode on. Switch to diff edits in settings.
* Custom modes are a `.roomodes` file in the project root - check into git so the team gets the same config.
* The fork moves fast. Pin an extension version if you need stability.

## Alternatives

* [Cline](cline.md) - the upstream project. More conservative releases, slightly simpler UX.
* [Cursor](cursor.md) - if you'd rather have a fork-of-VS-Code with codebase indexing instead of an extension.
* [Continue](continue.md) - if you want a hackable OSS extension that's lighter-weight than an agent loop.
* [Aider](aider.md) - terminal, Git-native, no IDE required.

## FAQ

### Is Roo Code free?

Yes - Apache 2.0 OSS extension. You pay for whatever model API you connect.

### Roo Code vs Cline?

Same DNA, different release cadence. Roo Code ships configuration features faster (custom modes, per-mode models, boomerang tasks). [Cline](cline.md) is more conservative and has the bigger MCP marketplace.

### Does Roo Code support MCP?

Yes - same MCP client model as Cline; configure servers in `mcp_settings.json`.

### What's a "boomerang task"?

A sub-task spawned from the current one that returns its result to the parent agent. Useful for fan-out work like "for each file in this list, run the migration sub-task."

### Can I use it with local models?

Yes - point it at [Ollama](ollama.md) or any OpenAI-compatible endpoint.

## Pointers

* Docs: [docs.roocode.com](https://docs.roocode.com)
* GitHub: [github.com/RooCodeInc/Roo-Code](https://github.com/RooCodeInc/Roo-Code)
* Marketplace: search "Roo Code" in VS Code extensions.
* See also: [cline.md](cline.md) (the upstream) and [openrouter.md](openrouter.md) for cheap model routing.
