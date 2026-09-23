# XiuRouter: Claude, GPT, Gemini, and more through one API

XiuRouter is a hosted multi-model API gateway for applications and agents that need access to Claude, GPT, Gemini, Grok, and other model families without integrating every provider separately. It supports OpenAI Chat Completions, OpenAI Responses, Anthropic Messages, and Gemini GenerateContent request formats.

## What it actually is

A managed routing and billing layer with two service tiers:

* **Value** prioritizes lower prices for everyday use; model availability and response consistency can vary.
* **Managed** prioritizes more consistent availability and responses.

The public pricing page compares each tier with the same model's reference input price and separately lists input, output, cache-read, and cache-write prices. Some current model and tier combinations are more than 90% below their reference price, but the percentage varies by model, tier, and price type.

## Setup

1. Create an account, add funds, and convert wallet balance to router credit.
2. Create an API key with the service tier and model access you need.
3. Choose the request format that matches your client or SDK.
4. For the OpenAI Responses format, send a small verification request:

   ```bash
   curl https://router-api.xiu.ai/v1/responses \
     -H "Authorization: Bearer $XIUROUTER_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model":"YOUR_MODEL_ID","input":"Hello"}'
   ```

5. Confirm the model, token usage, cost, status, and latency in the usage console before moving production traffic.

## Where it fits

* **Existing OpenAI-compatible applications.** Point the client at the matching XiuRouter base URL and keep the request format your application already uses.
* **Coding agents and developer tools.** The integration catalog includes setup paths for tools such as Codex and Claude Code.
* **Multi-model applications.** Use one account and billing surface while selecting models from multiple provider families.
* **Price-sensitive workloads.** Compare the same model across Value and Managed tiers before creating a key.
* **Usage reconciliation.** Review request status, tokens, cost, service tier, and latency in one console.

## Gotchas

* Model availability and prices change. Check the live pricing page instead of hard-coding a model count or savings percentage.
* Savings are comparisons with published reference prices, not a guarantee about a complete monthly bill. Output tokens and cache usage also affect actual cost.
* Value and Managed have different tradeoffs. Do not assume a model available in one tier is available in the other.
* Use the base URL and request path for the protocol your client sends. Chat Completions, Responses, Messages, and Gemini are separate compatibility surfaces.
* Test the exact model and client behavior you need before production use; provider-specific features can differ across gateways.

## Alternatives

* [OpenRouter](openrouter.md) is another hosted multi-model gateway with one account and an OpenAI-compatible API.
* [LiteLLM](litellm.md) is the open-source option when you want to run the gateway yourself with your own provider keys.
* Direct provider APIs such as [Anthropic](anthropic_api.md), [OpenAI](openai_platform.md), and [Google AI Studio](google_ai_studio.md) reduce the abstraction layer when you only need one provider.

## Pointers

* Site: [router.xiu.ai](https://router.xiu.ai/)
* Live models and pricing: [router.xiu.ai/pricing](https://router.xiu.ai/en/pricing)
* Agent integrations: [router.xiu.ai/console/integrations](https://router.xiu.ai/en/console/integrations)
* Documentation: [docs.xiu.ai](https://docs.xiu.ai/)
* Operator and contact: [XiuRouter About](https://router.xiu.ai/en/about)
