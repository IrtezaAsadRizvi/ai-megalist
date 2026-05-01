# Mistral La Plateforme

La Plateforme is Mistral's API gateway, the European frontier API platform. Same model family that powers Le Chat (the consumer product), exposed for developers with European data residency and a pricing structure that's friendlier than the US incumbents on a $/token basis. For EU teams who care about where inference happens, this is the obvious default.

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

## Pointers

* Web: [mistral.ai](https://mistral.ai)
* Console: [console.mistral.ai](https://console.mistral.ai)
* Docs: [docs.mistral.ai](https://docs.mistral.ai)
* Pairs with [mistral_le_chat.md](mistral_le_chat.md) (consumer chat on the same models), and competes with [anthropic_api.md](anthropic_api.md), [openai_platform.md](openai_platform.md), and [google_ai_studio.md](google_ai_studio.md) as a model API. EU residency is the differentiator.
