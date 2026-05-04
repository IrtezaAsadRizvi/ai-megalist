# Void: OSS Cursor alternative with bring-your-own-model

Void sits in the AI-native IDE category alongside [Cursor](cursor.md), [Windsurf](windsurf.md), and [Zed](zed.md), pitched as the open source path with full control over which model and where the data goes. Void is the open source Cursor alternative that puts you in control of which model you're calling and on what terms. The pitch is simple: take the Cursor like editor experience (chat sidebar, inline edits, codebase context) and let you bring your own API key, your own model, or your own local Ollama instance. For users who want the IDE workflow without the Cursor subscription or the data routing through Cursor's servers, Void is the credible answer.

## What it actually is

An open source AI code editor forked from VS Code. Includes chat, inline edits, and codebase aware features. Bring your own model: OpenAI, Anthropic, Google, Ollama, or any OpenAI compatible endpoint. Apache 2.0 licensed.

## Setup

1. Download from [voideditor.com](https://voideditor.com). Builds for macOS, Windows, Linux.
2. On first launch, configure a model provider: paste an API key or point at a local endpoint.
3. (Optional) Import VS Code settings and extensions.
4. Open a project; the chat sidebar and inline edit features work like Cursor's.
5. (Optional) Configure local model use via Ollama for offline work.

## How I use it day to day

I've test driven Void; I haven't switched my daily editor to it. The cases where Void is compelling:

* **Privacy sensitive code.** When the codebase shouldn't leave your machine and you want a Cursor like experience, Void with a local model is the answer.
* **Bring your own API.** If you already pay for Anthropic or OpenAI directly, Void avoids the Cursor subscription markup.
* **OSS curiosity.** Reading how the editor implements its features is educational.

The trade is polish. Cursor and Windsurf have polished UX, well integrated reasoning, and reliable codebase indexing. Void is closer to "Cursor minus the magic;" the magic is what you're paying for at Cursor.

## Gotchas

* Codebase indexing is improving but lags Cursor's. For very large repos, expect more fiddling.
* Bring your own model means you also bring your own bill. Heavy use can be expensive direct against frontier APIs.
* Extension compatibility is good but not perfect. Some VS Code extensions don't play nicely with the AI sidebar.
* The product is younger; expect occasional bugs and rapid version churn.

## Alternatives

* If you want the polished commercial leader and don't mind subscriptions, [Cursor](cursor.md) is the default.
* If you want an alternative with strong agent flow at a lower price, [Windsurf](windsurf.md) is the closest comparator.
* If you want a Rust-based fast editor with AI baked in, [Zed](zed.md) is OSS and feels different.
* If you want to stay in vanilla VS Code with an OSS BYO-model plugin, [Continue](continue.md) is the lower-friction path.

## FAQ

### Is Void free?

Yes - Apache 2.0 licensed and free to download. You bring your own API key (OpenAI, Anthropic, Google) or point at a local Ollama instance, so you pay providers directly rather than a subscription.

### Void vs Cursor - which should I use?

[Cursor](cursor.md) is more polished with reliable codebase indexing and the magic of Composer. Void is OSS, BYO-model, and avoids the subscription markup. Pick Void if data routing or cost matters; pick Cursor if "it just works" matters.

### Can I run Void with a local model?

Yes - point it at a local Ollama instance for fully offline coding. Quality depends on which local model you run; for serious work you'll still want a frontier API for harder reasoning steps.

### Does Void support VS Code extensions?

Mostly. It's a VS Code fork so most extensions port over, but compatibility with the AI sidebar isn't perfect. Check the specific extensions you depend on before switching.

## Pointers

* Web: [voideditor.com](https://voideditor.com)
* Repo: [github.com/voideditor/void](https://github.com/voideditor/void)
* Apache 2.0.
* Pairs and competes with [cursor.md](cursor.md) (the polished commercial leader), [windsurf.md](windsurf.md), [zed.md](zed.md) (Rust based), and [continue.md](continue.md) (the OSS plugin you can graft into vanilla VS Code instead of switching editors).
