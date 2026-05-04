# Mistral Le Chat: EU-hosted chat assistant on Mistral models

Le Chat is Mistral's consumer chat assistant, the EU-hosted alternative to [ChatGPT](chatgpt.md), [Claude](claude.md), and [Gemini](gemini.md) for users who care where the data lives. Le Chat is Mistral's consumer chat product and the EU's answer to "we'd prefer the data didn't leave the continent." Built on Mistral's own models (Large 2, Codestral, Pixtral for vision), hosted in France, with a fast and clean UI. For European companies and individual users who care about provenance, Le Chat is the natural default.

## What it actually is

A web and mobile app at [chat.mistral.ai](https://chat.mistral.ai). Powered by Mistral's frontier and specialised models. Free tier; Pro tier €14.99/mo for higher limits, agents, and image generation. Le Chat ships with web search, code generation, image generation (FLUX), document upload, and lately custom agents and a Canvas mode for writing.

## Setup

1. Go to [chat.mistral.ai](https://chat.mistral.ai) or download iOS / Android app.
2. Sign up. Free tier is genuinely usable.
3. Pro tier unlocks Mistral Large 2 (highest reasoning), unlimited document uploads, image gen, agents.
4. (Optional) For developers, Mistral La Plateforme at [console.mistral.ai](https://console.mistral.ai) is the API.

## How I use it day to day

* **Honest:** Not my daily driver; I've used Le Chat for testing across European geographies.
* **Fast responses.** Mistral has historically been one of the faster chat experiences; the latency on Le Chat is good.
* **Code generation.** Codestral is solid for routine tasks; for agentic code work, Claude / GPT still lead.
* **Vision.** Pixtral handles images and documents well; useful for "explain this chart" tasks.
* **Agents (Pro).** Build custom assistants with system prompts and tool access. Lighter weight than custom GPTs.
* **EU data residency.** When that's a constraint, Mistral's the obvious choice; everything is hosted in France with transparent governance.

## Gotchas

* Frontier benchmark performance is below GPT‑5.5 / Claude Opus on most general tasks. The gap is closing but real.
* Some features (Canvas, agents) are newer and less polished than ChatGPT's equivalents.
* The free tier is generous but limit hits feel sudden vs gradual on US hosted services.
* For non European use cases, Mistral's local advantages don't apply; you'd weigh purely on capability.
* Mistral's open weight models (Mixtral, Codestral) are useful via Ollama / vLLM; Le Chat itself is hosted only.

## Alternatives

* If you want frontier capability and don't care about data residency, [ChatGPT](chatgpt.md) and [Claude](claude.md) win on raw quality.
* If you want EU residency at the API level instead of consumer chat, jump to [Mistral La Plateforme](mistral_la_plateforme.md).
* If you want to run Mistral weights locally with no cloud at all, [Ollama](ollama.md) hosts Mixtral and Codestral.
* If you want a chat with strong Google Workspace ties (and Google's own EU options), [Gemini](gemini.md) is worth comparing.

## FAQ

### Is Mistral Le Chat free?

Yes, the free tier is genuinely usable for daily work. Pro is EUR 14.99/mo for higher limits, Mistral Large 2, image generation, and agents.

### Le Chat vs ChatGPT - which should I use?

Le Chat when EU data residency matters or when you're working in French / German / Spanish where Mistral has historically been strong. [ChatGPT](chatgpt.md) when you want the absolute frontier on reasoning and the broadest feature surface. The gap on raw capability is real but closing.

### Where is Le Chat hosted?

France. Everything runs on EU infrastructure with transparent governance docs. That's the differentiator vs the US incumbents.

### Can I run Mistral models locally?

Yes - Mistral publishes open-weight models (Mixtral, Codestral, smaller Mistral families) that run via [Ollama](ollama.md) or vLLM. Le Chat itself is hosted only, but the weights of cousin models are available.

## Pointers

* [chat.mistral.ai](https://chat.mistral.ai)
* Mistral La Plateforme: [console.mistral.ai](https://console.mistral.ai)
* Open weight models on HF: [huggingface.co/mistralai](https://huggingface.co/mistralai)
* For non EU users, [chatgpt.md](chatgpt.md), [claude.md](claude.md), [gemini.md](gemini.md) generally outperform on raw capability.
