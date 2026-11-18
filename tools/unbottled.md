# unbottled.ai: mainstream, open and uncensored models on one credit balance

unbottled.ai sits with the multi-model hubs like [Poe](poe.md) and [ZeroTwo](zerotwo.md). One account reaches 126 chat models from 17 labs (63 mainstream, 49 open, 14 uncensored) plus 93 image, video, music, speech and transcription models, all billed from one credit balance. There are two separate things here: the chat app at unbottled.ai, which works without an account, and an OpenAI and Anthropic compatible API, which needs a paid account. The code is open source and the platform can be self-hosted.

## What it actually is

A browser chat app with a per-chat model picker and a filter level you choose yourself: mainstream models keep their usual filters, open models run as published, and the uncensored tier comes in two kinds. Abliterated models (for example GLM 5.3 Flash Uncensored and DeepSeek V4.1 Flash Uncensored) are mainstream models changed so they stop dodging questions. UncensoredLM v1.2 (from uncensored.ai) is trained on different material and answers from its own worldview. The same models are reachable through an API that speaks three wire formats on one base URL: OpenAI chat completions, the OpenAI Responses API and the Anthropic Messages API. That means OpenAI and Anthropic SDKs, Codex CLI and Claude Code can point at it directly. Billing is credits: 1 credit = $0.01, and every model page lists the price per message. The code is open source under MIT + GPL v3 (next-vibe framework).

## Setup

1. Open [unbottled.ai](https://unbottled.ai/en-GLOBAL?utm_source=ai-megalist&utm_medium=directory&utm_campaign=listings-2026-11) and start chatting. No account needed for the first 20 credits a month. A [free account](https://unbottled.ai/en-GLOBAL/user/signup?utm_source=ai-megalist&utm_medium=directory&utm_campaign=listings-2026-11) raises that to 40 a month, 90 with a confirmed newsletter subscription. No card.
2. For the API, the account needs a paid plan ($8 a month or $88 a year, 800 credits a month) or one credit pack ($5 for 500 credits, pack credits never expire). Free and bonus credits do not unlock it.
3. Create a key under [Settings > API keys](https://unbottled.ai/en-GLOBAL/tools/api-keys?utm_source=ai-megalist&utm_medium=directory&utm_campaign=listings-2026-11). It starts with `sk-unb-` and is shown once.
4. Quick test:
   ```bash
   curl https://unbottled.ai/api/en-GLOBAL/v1/chat/completions \
     -H "Authorization: Bearer $UNBOTTLED_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model": "glm-5.3", "messages": [{"role": "user", "content": "Hello world"}]}'
   ```
   The response carries `usage.credits_charged`, the cost of that call.
5. List the model ids your key can call, with context size, tool support and credit prices:
   ```bash
   curl https://unbottled.ai/api/en-GLOBAL/v1/models \
     -H "Authorization: Bearer $UNBOTTLED_API_KEY"
   ```
6. In an OpenAI SDK, set `base_url` to `https://unbottled.ai/api/en-GLOBAL/v1`. Anthropic SDKs and Claude Code take the same URL without `/v1` (`https://unbottled.ai/api/en-GLOBAL`), because they append `/v1/messages` themselves.

## Where it fits

* **Comparing models in one place.** Claude, GPT, Gemini, Grok, DeepSeek, GLM, Qwen and the uncensored models sit in the same picker, so the same prompt can go to several labs without separate accounts.
* **Topics mainstream assistants refuse.** Fiction with dark themes, security research, red team prompts, frank medical or political questions. The uncensored tier is there for this, behind a one-time 18+ confirmation.
* **Coding agents on non-default models.** Codex CLI, Claude Code, OpenCode, Continue, Aider and Cline work with the base URL, a key and a model id. A cheap model such as `glm-5.3-flash` for background calls keeps large agent prompts affordable.
* **Image, video and music on the same balance.** No second subscription for media models.
* **Self-hosting.** The source is on GitHub, so you can run your own instance with your own provider keys.

## Gotchas

* The API is paid-only. A free account can create keys, but every call answers HTTP 402 `paid_plan_required` until the first purchase (any plan or the $5 pack).
* Uncensored models need a one-time 18+ confirmation per account. In the chat it is a dialog; for the API, tick the uncensored-models box on the API keys page once. Until then, API calls to those models return HTTP 403 `uncensored_consent_required`.
* Copy the base URL exactly, `/api/en-GLOBAL/v1` included. Without the locale segment you get a redirect that some clients drop; without `/api` you get an HTML page instead of JSON.
* Free credits are monthly and modest. A GLM-5.3 Flash message costs about 0.1 credits, a Claude Opus 5.5 message about 12, so how far 20 or 40 credits go depends heavily on the model.
* Model ids change as models get replaced. `GET /v1/models` is the source of truth; an id that is not listed for your key returns 404 `model_not_found`.
* Each key allows 60 requests per minute by default (HTTP 429 with `Retry-After` over the limit). Give busy agents their own key.
* Models routed through OpenRouter bill at the provider's real cost for the call plus a markup, so their listed price is an estimate.

## Alternatives

* If you want one subscription across the big chat models and a bot marketplace, [Poe](poe.md).
* If you want chat, research, image and video in one subscription app, [ZeroTwo](zerotwo.md).
* If you only need an API router with the widest model catalog, [OpenRouter](openrouter.md).
* If you want your own front end over your own keys or local models, [Open WebUI](open_webui.md) or [LM Studio](lm_studio.md).
* If a looser content policy on one frontier model is enough, [Grok](grok.md).

## FAQ

### Is unbottled.ai free?

The chat app has free credits every month: 20 without an account, 40 with a free account, 90 with a free account and a confirmed newsletter subscription. Beyond that it is a $8 monthly plan (800 credits a month, $88 a year) or $5 credit packs (500 credits, no expiry). See [pricing](https://unbottled.ai/en-GLOBAL/subscription/overview?utm_source=ai-megalist&utm_medium=directory&utm_campaign=listings-2026-11).

### Is the API free?

No. It needs a paid account: any plan or one credit purchase, for example the $5 pack. After that, calls draw from the same credit balance as the chat app.

### What does "uncensored" mean here?

Two kinds of models. Abliterated ones are mainstream models with the refusal behaviour removed, so they answer what they would otherwise dodge. UncensoredLM is trained on different material and can give contrary takes. Both need the one-time 18+ confirmation, and nothing filters their output.

### Which API formats does it support?

OpenAI chat completions (`/v1/chat/completions`), the OpenAI Responses API (`/v1/responses`) and the Anthropic Messages API (`/v1/messages`), with streaming and tool calling, on the same key and the same models.

### Is it open source?

Yes, MIT + GPL v3. Source: [github.com/techfreaque/next-vibe](https://github.com/techfreaque/next-vibe).

## Pointers

* [unbottled.ai](https://unbottled.ai/en-GLOBAL?utm_source=ai-megalist&utm_medium=directory&utm_campaign=listings-2026-11)
* Models and prices per message: [unbottled.ai/en-GLOBAL/models](https://unbottled.ai/en-GLOBAL/models?utm_source=ai-megalist&utm_medium=directory&utm_campaign=listings-2026-11)
* Pricing: [unbottled.ai/en-GLOBAL/subscription/overview](https://unbottled.ai/en-GLOBAL/subscription/overview?utm_source=ai-megalist&utm_medium=directory&utm_campaign=listings-2026-11)
* API docs: [unbottled.ai/en-GLOBAL/docs/api](https://unbottled.ai/en-GLOBAL/docs/api?utm_source=ai-megalist&utm_medium=directory&utm_campaign=listings-2026-11)
* Coding agent setup (Codex CLI, Claude Code, OpenCode, Continue, Aider, Cline): [blog post](https://unbottled.ai/en-GLOBAL/story/blog/unbottled-api-in-coding-tools?utm_source=ai-megalist&utm_medium=directory&utm_campaign=listings-2026-11)
* Source code: [github.com/techfreaque/next-vibe](https://github.com/techfreaque/next-vibe)
* For a pure API router: [openrouter.md](openrouter.md).

<!-- megalist:nav - generated by `npm run build`, do not edit -->

---

**[AI Megalist](../README.md)** › [General-purpose assistants](../README.md#general-purpose-assistants)

More in General-purpose assistants: [ChatGPT](chatgpt.md) · [Claude](claude.md) · [Gemini](gemini.md) · [Microsoft Copilot](microsoft_copilot.md) · [Apple Intelligence](apple_intelligence.md) · [Grok](grok.md)
<!-- /megalist:nav -->
