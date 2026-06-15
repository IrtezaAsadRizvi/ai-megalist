# Respan: full-stack LLM engineering platform (tracing, evals, prompts, gateway)

Respan sits in the model APIs / dev platform category, next to [LiteLLM](litellm.md) and [OpenRouter](openrouter.md) on the gateway side and the observability tools on the other. It's the platform I reach for when I want one place to trace what an agent actually did, score the output, manage the prompt, and route the call - without stitching four separate tools together. Everything is built on one primitive: the **span**. Every LLM call, whether it comes from the tracing SDK, a framework integration, or the gateway, lands as a span with its input, output, model, cost, and metadata.

## What it actually is

A hosted platform (formerly Keywords AI) with four surfaces that share the same span data:
* **Tracing** - capture the execution tree of an agent: every step, tool call, and model request, with latency and cost per span. SDK decorators (`@workflow` / `@task`), framework integrations, or OTLP ingestion.
* **Evals** - grade outputs with LLM judges, code checks, or human review; run online on live traffic or offline against datasets.
* **Prompt management** - templates with `{{variables}}`, versioning, a playground, and deploy-without-code-changes.
* **AI gateway** - one OpenAI-compatible API across 250+ models with fallbacks, retries, load balancing, and caching.

## Setup

1. Create an account at [platform.respan.ai](https://platform.respan.ai) and grab an API key.
2. **Gateway:** point your OpenAI-compatible client at Respan's base URL and call any of 250+ models:
   ```bash
   curl https://api.respan.ai/v1/chat/completions \
     -H "Authorization: Bearer $RESPAN_API_KEY" \
     -H "content-type: application/json" \
     -d '{"model": "claude-sonnet-4-6", "messages": [{"role":"user","content":"hello"}]}'
   ```
3. **Tracing:** add the SDK and decorate your workflow, or send spans via OTLP - see the [tracing quickstart](https://www.respan.ai/docs/documentation/features/tracing/quickstart).

## How I use it day to day

* **Trace agent runs.** The parent/child span tree shows exactly where latency and cost go in a multi-step agent.
* **Eval before deploy.** Build a dataset from production spans, run prompt versions through it, compare grader scores side by side.
* **Online evals + alerts.** Score live traffic and get alerted when quality drops after a prompt change.
* **Prompt iteration without redeploys.** Edit and version prompts in the platform; reference them by ID in code.
* **Gateway for reliability.** Route across providers with fallbacks and caching; all gateway traffic is logged back into tracing.

## Gotchas

* The gateway adds ~50-150ms of latency. If latency is critical, instrument with tracing for observability instead of routing through the gateway.
* It's a hosted SaaS first; the free tier is generous but production volume is paid.
* Evals with LLM judges cost tokens - factor that in when scoring large datasets.
* As with any gateway, provider-specific features can lag a release behind the underlying API.

## Alternatives

* If you only want a provider-abstraction gateway with cost tracking, [LiteLLM](litellm.md) (OSS) or [OpenRouter](openrouter.md) cover that without the eval/tracing surface.
* If you want a full app framework rather than a platform, [LangChain](langchain.md) and [LlamaIndex](llamaindex.md) are the broader options.
* For TypeScript-first app building, the [Vercel AI SDK](vercel_ai_sdk.md) ships streaming and tool-calling primitives.
* Langfuse, Helicone, and LangSmith overlap on the tracing/eval side if you don't need the gateway.

## FAQ

### Is Respan free?

There's a free tier; higher volume, longer retention, and team features are paid. Create an account at [platform.respan.ai](https://platform.respan.ai) to start.

### Do I have to route traffic through the gateway to use tracing?

No. Tracing works via the SDK, framework integrations, or OTLP without the gateway. The gateway is optional and adds some latency; many teams trace first and adopt the gateway later.

### What models does the gateway support?

250+ across OpenAI, Anthropic, Google, Azure, and others, behind one OpenAI-compatible API. Switching models is a string change.

### Wasn't this called Keywords AI?

Yes - Respan is the rebrand of Keywords AI; the platform and docs now live under respan.ai.

## Pointers

* [respan.ai/ai-gateway](https://www.respan.ai/ai-gateway)
* Docs: [respan.ai/docs](https://respan.ai/docs)
* Tracing quickstart: [respan.ai/docs/.../tracing/quickstart](https://www.respan.ai/docs/documentation/features/tracing/quickstart)
* Repo: [github.com/respanai](https://github.com/respanai)
