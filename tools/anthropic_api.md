# Anthropic API: Claude's developer API and model platform

The Anthropic API sits in the model APIs cluster alongside [OpenAI Platform](openai_platform.md), [Google AI Studio](google_ai_studio.md), and [Groq](groq.md) - the substrate developers build on. The Anthropic API is the substrate behind Claude.ai, Claude Code, Cursor's "Claude" model picker, and a meaningful share of the AI features in shipped products. If you're building anything that talks to a model, the API is where you eventually live. The developer experience is among the cleaner ones - straightforward auth, well documented tool use, MCP and computer use as first class features.

## What it actually is

An HTTP API for the Claude family of models (Opus 4, Sonnet 4, Haiku 4 as of April 2026). Endpoints for chat completions, tool use, computer use (mouse/keyboard/screen control), prompt caching, batch processing, files, and the Claude Code SDK. Pricing is per million input + output tokens; varies by model.

## Setup

1. Sign up at [console.anthropic.com](https://console.anthropic.com).
2. Add a payment method (or get $5 free credit on signup).
3. Create an API key under Settings → API Keys.
4. Quick test:
   ```bash
   curl https://api.anthropic.com/v1/messages \
     -H "x-api-key: $ANTHROPIC_API_KEY" \
     -H "anthropic-version: 2023-06-01" \
     -H "content-type: application/json" \
     -d '{"model": "claude-sonnet-4-6", "max_tokens": 100, "messages": [{"role":"user","content":"hello"}]}'
   ```
5. Or use the SDK: `pip install anthropic` / `npm i @anthropic-ai/sdk`.

## How I use it day to day

* **The SDK over the raw HTTP.** Less boilerplate, automatic retries, streaming helpers. The Python and TypeScript SDKs are both well maintained.
* **Tool use** with structured outputs. Define tools as JSON schema; Claude calls them; you respond. The pattern that makes agents work.
* **Prompt caching.** For long system prompts that don't change between turns, mark them as `cache_control`. Saves significant cost on repeated calls.
* **Batch API** for non interactive workloads at half price. 50% off if you can wait up to 24 hours for results.
* **MCP servers.** The Anthropic API is the canonical place to configure MCP integrations for Claude. Define once, available across Claude products.
* **Computer use** for screen control workflows. The model sees screenshots and emits actions. Powerful, expensive, requires a sandbox.

## Gotchas

* Rate limits scale with usage tier. New accounts start low; hitting tier 1 / 2 / 3 / 4 happens automatically with usage and time.
* Opus is roughly 5x more expensive than Sonnet. For most tasks Sonnet is the right default. Reserve Opus for genuinely hard reasoning.
* Token counting: Anthropic counts a bit differently than OpenAI. Use the provided tokenizer for accurate budgeting.
* Long context (200K+) costs add up. With prompt caching it's livable; without it, watch the bill.
* Some features are tier gated (e.g. computer use, vision capacity). Check docs before assuming availability.

## Alternatives

* If you need GPT-5.5, the Realtime API, or the Agents SDK, [OpenAI Platform](openai_platform.md) is the equivalent shop.
* If you want Gemini's 1M context with multimodal at scale, [Google AI Studio / Vertex](google_ai_studio.md) is the path.
* If raw inference latency dominates UX, [Groq](groq.md) and [Cerebras Inference](cerebras.md) host open models at much higher tokens/second.
* If you want a unified gateway across providers, [LiteLLM](litellm.md) sits in front of all of them with one OpenAI-compatible interface.

## FAQ

### How much does the Anthropic API cost?

Per million input + output tokens, varies by model. Sonnet is roughly 5x cheaper than Opus; Haiku is the floor. Prompt caching (cache_control on stable system prompts) materially cuts cost on repeated calls - usually the first thing I'd add to any production setup.

### Anthropic API vs OpenAI API - which one?

Different shapes. Anthropic leads on long context (1M on Opus), prompt caching as a first-class feature, and computer use. [OpenAI Platform](openai_platform.md) ships features faster, has the Realtime voice API, and broader model picker. Most production apps use both via [LiteLLM](litellm.md).

### What's prompt caching?

Mark long system prompts as `cache_control` and Anthropic charges a fraction for repeated reads. Changes economics on repeated context. Documented at docs.anthropic.com.

### Does the API support tool use?

Yes - define tools as JSON schema, Claude emits tool_use blocks, you respond with tool_result. The pattern that makes [Claude Code](claude_code.md) and most production agents work.

### What's MCP?

Model Context Protocol - Anthropic's open spec for connecting models to tools and data sources. Define an MCP server once, available across Claude products. Worth reading the spec if you're building agents.

## Pointers

* Docs: [docs.anthropic.com](https://docs.anthropic.com)
* Pricing: [anthropic.com/pricing](https://www.anthropic.com/pricing)
* SDKs: [github.com/anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python), [github.com/anthropics/anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript)
* For agentic apps: see Claude Agent SDK docs and [claude_code.md](claude_code.md) as a reference implementation.
