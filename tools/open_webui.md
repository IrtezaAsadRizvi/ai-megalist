# Open WebUI: OSS ChatGPT-style UI for Ollama and OpenAI-compatible APIs

Open WebUI is the OSS chat UI that pairs with [Ollama](ollama.md) (and any OpenAI-compatible endpoint), the team-friendly counterpart to single-user GUIs like [LM Studio](lm_studio.md) and [Jan](jan.md). Open WebUI is the ChatGPT style UI for local models you can install in five minutes and run for free forever. It connects to Ollama (its original parent), any OpenAI compatible endpoint (vLLM, LM Studio, Together, Fireworks, etc.), and gives you the chat experience users expect - model picker, history, RAG over uploaded docs, voice input, image support - without sending anything to a SaaS.

## What it actually is

An open source web UI (BSD 3 Clause) for self hosted LLM inference. Runs as a Docker container or via pip. Connects to Ollama out of the box; configurable for any OpenAI compatible backend. Includes user accounts, conversation history, RAG, prompt library, function calling support, image generation (via ComfyUI / SD), voice (via Whisper).

## Setup

### Quick (Docker + Ollama)
1. Have Ollama running locally: `ollama serve`.
2. `docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main`
3. Open `localhost:3000`. First user is admin.
4. Models from Ollama appear in the picker automatically.

### pip install
1. `pip install open-webui` (Python 3.11+).
2. `open-webui serve`. Defaults to port 8080.

### Connect cloud providers
* Settings → Admin Settings → Connections → add OpenAI compatible endpoint URLs (e.g. Together, Groq).

## How I use it day to day

* **As the team chat UI for Ollama.** Multi user accounts, shared model picker, conversation history. Gives a small team a private ChatGPT.
* **RAG over uploaded docs.** Drop PDFs into a chat; Open WebUI embeds them and uses for grounded answers. Quality is decent for routine Q&A.
* **As a unified interface across providers.** Configure Anthropic, OpenAI, Groq, local Ollama - all in the same model picker. Switch per conversation.
* **Voice input + Whisper.** Speak; Whisper transcribes; the model responds. Local end to end if you wire local models.
* **Image generation** via ComfyUI integration. Generate an image inside a chat without leaving the UI.
* **Function calling and tools.** Enable per conversation; useful for agentic flows in a chat UI.

## Gotchas

* The UI is feature rich and somewhat busy. Plan an hour to learn the admin panel.
* RAG quality depends on the embedding model and chunking strategy. Defaults are fine for small docs; large libraries need tuning.
* User account management is included but minimal. For bigger orgs, you'll wrap it in your own auth.
* Updates are frequent; Docker image pin / pull strategy matters in production.
* For air gapped deployments, all the model + embedding + voice components need to be local. Doable; plan setup time.

## Alternatives

* If you want a single-user desktop GUI rather than a web UI, [LM Studio](lm_studio.md) or [Jan](jan.md) are simpler.
* If you want the underlying local model runtime that Open WebUI sits on top of, [Ollama](ollama.md) is the pair.
* If you want the cloud chat experience and don't need self-hosted, [ChatGPT](chatgpt.md) or [Claude](claude.md) are the obvious paths.
* If you need power-user OSS features (LoRAs, fine-tuning UIs), [text-generation-webui](text_generation_webui.md) goes deeper.

## FAQ

### Is Open WebUI free?

Yes, BSD 3-Clause OSS. You pay for the host (a small VM or local box) and any model API calls if you wire in cloud providers. Self-hosting on a Mac or a $10/mo VPS is the common pattern.

### Open WebUI vs LM Studio - which should I use?

Open WebUI when you want a multi-user team chat with shared history, RAG, and a unified model picker across providers. [LM Studio](lm_studio.md) when you're a single user on a desktop and want a friendlier GUI. Different shapes - Open WebUI is for teams; LM Studio is for individuals.

### Does Open WebUI support cloud APIs like OpenAI?

Yes - Settings -> Admin Settings -> Connections, paste any OpenAI-compatible endpoint (OpenAI, Together, Groq, Fireworks, Anthropic via proxy). All providers appear in the same model picker. Useful as a unified team frontend.

### Can Open WebUI do RAG?

Yes - upload PDFs into a chat and Open WebUI embeds them and uses them for grounded answers. Quality is decent for routine Q&A; large libraries need tuning of embedding model and chunking.

## Pointers

* [openwebui.com](https://openwebui.com)
* Repo: [github.com/open-webui/open-webui](https://github.com/open-webui/open-webui)
* Pair with [ollama.md](ollama.md) for the simplest local stack.
* For lighter weight desktop chat UI: [jan.md](jan.md), [lm_studio.md](lm_studio.md).
* For team scale managed alternatives: any of the cloud chat tools (Claude / ChatGPT / Gemini); the value of Open WebUI is local + multi user.
