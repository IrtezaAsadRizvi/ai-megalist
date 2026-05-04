# Mistral La Plateforme: EU-hosted model API platform

La Plateforme is Mistral's developer API platform, the EU-hosted alternative to [OpenAI Platform](openai_platform.md), [Anthropic API](anthropic_api.md), and [Google AI Studio](google_ai_studio.md). La Plateforme is Mistral's API gateway, the European frontier API platform. Same model family that powers Le Chat (the consumer product), exposed for developers with European data residency and a pricing structure that's friendlier than the US incumbents on a $/token basis. For EU teams who care about where inference happens, this is the obvious default.

## What it actually is

Mistral's hosted API platform. Access to Mistral's full model lineup: Mistral Large, Medium, Small, plus Codestral for code, Pixtral for vision, and embedding models. EU hosted by default. OpenAI compatible endpoints. Pay per token pricing.

## Setup

1. Sign up at [console.mistral.ai](https://console.mistral.ai).
2. Generate an API key.
3. Install the SDK: `pip install mistralai`. Or use the OpenAI compatible endpoint at `https://api.mistral.ai/v1`.
4. Call models: `mistral-large-latest`, `codestral-latest`, etc.
5. (Optional) Use the Le Plateforme batch API for high volume async work; pricing is reduced.

## How I use it day to day

* **EU compliance work.** When the customer's contract requires EU data residency, La Plateforme is the obvious choice over US APIs.
* **Codestral for code completion at the API level.** Costs less per token than the GPT 5 / Sonnet equivalents for similar coding tasks; quality is competitive on common languages.
* **Mistral Large for general work.** Strong on European languages (French, German, Spanish) versus the US models, in my experience.

For peak frontier capability I still reach for Sonnet or GPT 5.5. Mistral's value is competitive performance with EU residency and lower per token pricing.

## Gotchas

* The model lineup changes; benchmark current models against your task before betting on a specific one.
* Some advanced features (long context handling, function calling sophistication) lag the US incumbents; verify what you need is supported at the quality you need.
* OpenAI compatibility is mostly there but not perfect; some edge cases require Mistral's native SDK.
* Pricing is competitive but the calculus shifts often. Re run cost comparisons periodically.

## Alternatives

* If you want frontier reasoning at any cost, [Anthropic API](anthropic_api.md) (Claude) or [OpenAI Platform](openai_platform.md) (GPT) lead.
* If you want Gemini's long context and multimodal at scale, [Google AI Studio](google_ai_studio.md) is the API path.
* If you want cheap frontier reasoning and don't mind US / Chinese hosting, [DeepSeek](deepseek.md) is the value pick.
* If you want OSS model hosting without picking one provider, [Together AI](together.md) or [Fireworks](fireworks.md) host Mistral weights too.

## FAQ

### Is Mistral La Plateforme free?

There's a small free tier for evaluation, then per-token pricing across the model lineup. Pricing is generally competitive vs the US incumbents but compare on your actual workload before betting.

### Mistral vs OpenAI - which should I use?

Mistral when EU data residency is a contract requirement or per-token cost matters more than peak capability. [OpenAI Platform](openai_platform.md) when you want the broadest feature surface (Realtime, Agents SDK, Vector Stores) and frontier capability. Different bets.

### Does Mistral La Plateforme support OpenAI-compatible endpoints?

Mostly yes - `https://api.mistral.ai/v1` works as an OpenAI-compatible endpoint for routine cases. Some edge cases (advanced function calling, specific streaming behaviors) require the native Mistral SDK.

### Where is Mistral hosted?

EU by default - that's the differentiator. For European customers with data residency contracts, this is the obvious pick over US-hosted alternatives.

## Pointers

* Web: [mistral.ai](https://mistral.ai)
* Console: [console.mistral.ai](https://console.mistral.ai)
* Docs: [docs.mistral.ai](https://docs.mistral.ai)
* Pairs with [mistral_le_chat.md](mistral_le_chat.md) (consumer chat on the same models), and competes with [anthropic_api.md](anthropic_api.md), [openai_platform.md](openai_platform.md), and [google_ai_studio.md](google_ai_studio.md) as a model API. EU residency is the differentiator.
