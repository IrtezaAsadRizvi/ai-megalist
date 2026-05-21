# Msty: friendly desktop chat for local + cloud models

Msty is the desktop chat app for the person who wants [LM Studio](lm_studio.md)'s "click to download a model" simplicity, [Open WebUI](open_webui.md)'s clean chat surface, and ChatGPT-style features (folders, split chats, regenerate-and-branch) - all without running Docker or fighting with a Python venv. Closed-source, free for personal use, paid Pro for teams. The fastest path I've found to "I just want a nice local-chat app on my Mac."

## What it actually is

A native desktop app (Mac, Windows, Linux) from a small indie team. Supports local models (via Ollama under the hood, or its own bundled runtime) and cloud providers (OpenAI, Anthropic, Gemini, [OpenRouter](openrouter.md), and many more). Features: parallel split chats (talk to two models side-by-side), folders, prompt library, knowledge stacks (RAG over local files), and a clean settings UI for model parameters.

## Setup

1. Download from msty.app for your OS. Open it.
2. Pick how to source models. Cloud: paste API keys for providers. Local: pick a model from the in-app catalog; Msty downloads and runs it.
3. Start chatting. Try **split chat** to compare two models on the same prompt.
4. (Optional) Create a **knowledge stack** - point at a folder of docs and chat with them (RAG, local-only).
5. (Optional) Upgrade to Pro for sync across devices, team features, and advanced agent flows.

## How I use it day to day

* **Side-by-side model comparison** - one prompt, two replies, instant verdict. The killer feature.
* **Local-only chats** when on the move and I don't want to burn API credits.
* **Knowledge stacks** as a lightweight personal RAG without spinning up [AnythingLLM](anythingllm.md).
* **Polished UX** when I just want a clean chat app and not a tinkering project.

## Gotchas

* Closed-source. If OSS matters to you, [Jan](jan.md), [Open WebUI](open_webui.md), or [AnythingLLM](anythingllm.md) are the options.
* Bundled local runtime is convenient but you may prefer to manage [Ollama](ollama.md) yourself; Msty supports that.
* Pro tier exists for sync / teams; free tier is generous but watch for feature gates.
* Newer than the OSS giants - less ecosystem, fewer plugins.

## Alternatives

* [LM Studio](lm_studio.md) - similar polished desktop app, more model-runner-focused.
* [Jan](jan.md) - OSS desktop ChatGPT replacement.
* [Open WebUI](open_webui.md) - OSS web UI, self-hosted.
* [AnythingLLM](anythingllm.md) - if RAG is the main use case.
* [GPT4All](gpt4all.md) - OSS, lighter weight.

## FAQ

### Is Msty free?

Yes for personal use. Pro tier adds sync, team features, and advanced workflows.

### Msty vs LM Studio?

Both are polished desktop apps. [LM Studio](lm_studio.md) is more "model-runner with a chat UI on top"; Msty is more "chat UI that happens to run local models." If your workflow is chat-first, Msty. If you want to load any HuggingFace GGUF and tinker with quantizations, LM Studio.

### Is it open-source?

No. If OSS matters, see [Jan](jan.md) or [Open WebUI](open_webui.md).

### Does it support MCP / tool use?

Yes - tool use and function calling are supported for models that support it. MCP integration has landed; check docs.

### Can I use it with my own Ollama?

Yes - point Msty at an existing Ollama server in settings.

## Pointers

* Site: [msty.app](https://msty.app)
* Docs: [docs.msty.app](https://docs.msty.app)
* Compare with [lm_studio.md](lm_studio.md), [jan.md](jan.md), and [anythingllm.md](anythingllm.md) for the broader local-chat landscape.
