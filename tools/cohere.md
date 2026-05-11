# Cohere: enterprise-focused LLMs (Command family + Coral)

Cohere is the model lab that decided "we'll let OpenAI and Anthropic chase the consumer benchmark; we'll build for enterprise RAG and agents." The Command family (Command R+, Command A, etc.) is tuned for retrieval-grounded chat, tool use, and long-context document Q&A - the things companies actually want when they say "we want LLMs in our product." The Aya family extends to multilingual. Less flashy than the frontier labs, more boring-in-a-good-way for B2B.

## What it actually is

A Canadian model lab founded by ex-Google Brain researchers (Aidan Gomez et al.). Ships proprietary models (Command R, Command A) and open-weight families (Aya, Embed). Offers a hosted API, a chat product (Coral), an Enterprise platform (North), and on-prem / VPC deployment options. The differentiator vs OpenAI/Anthropic is positioning: enterprise-first, multilingual-capable, deployable to your own cloud.

## Setup

1. Sign up at dashboard.cohere.com; get a free trial API key.
2. Pick a model: `command-a-03-2025` for top-tier reasoning, `command-r-plus-08-2024` for proven RAG, `embed-v4.0` for embeddings.
3. Use the Python SDK: `cohere.ClientV2(api_key=...)`, then `client.chat(model="command-a-03-2025", messages=[...])`. Tool use and citations are first-class fields.
4. (Optional) For enterprise / on-prem, talk to sales about North.

## How I use it day to day

* **RAG with citations.** Cohere's chat API natively returns which retrieved chunks support each part of the answer - useful when you need to show provenance.
* **Multilingual content** - the Aya family is genuinely good outside English.
* **Embeddings** with Embed v4 - solid multilingual retrieval, supports late-interaction style queries.
* **Rerank** API for two-stage retrieval - cheaper than re-running an LLM to score chunks.

## Gotchas

* On general-purpose chat benchmarks, Cohere lags the frontier (Claude / GPT / Gemini). It's not trying to win those.
* The model naming is messier than competitors (Command R, R+, A, with version dates). Pin to a specific version in production.
* Coral chat is fine but you wouldn't pick it over [ChatGPT](chatgpt.md) for daily-driver use.
* North (the enterprise platform) is sales-led; not a self-serve SaaS.

## Alternatives

* [Anthropic API](anthropic_api.md) / [OpenAI Platform](openai_platform.md) - if you want the strongest frontier model.
* [Mistral La Plateforme](mistral_la_plateforme.md) - the EU-hosted enterprise competitor.
* [AWS Bedrock](aws_bedrock.md) - Cohere is also available through Bedrock if you want IAM auth.
* [Voyage AI](https://www.voyageai.com) - if you specifically want embeddings/reranking, also worth a look.

## FAQ

### Is Cohere free?

Trial credits on signup. Production use is pay-per-token, similar pricing to other API providers.

### Cohere vs OpenAI / Anthropic?

Different positioning. Cohere optimizes for enterprise RAG, citations, multilingual, and deployability. OpenAI/Anthropic optimize for general capability. Many enterprises use Cohere for embedding + retrieval and a frontier model for generation.

### What's Command A?

The current flagship Command model - tuned for agentic tool use and long-context reasoning. Replaces the Command R+ generation.

### Can I run Cohere models locally?

The Aya open-weight models, yes (Hugging Face). Command is proprietary - API only, or VPC deployment via the enterprise tier.

### What's Coral?

Cohere's chat product. Think of it as a frontend for the Command models.

## Pointers

* Site: [cohere.com](https://cohere.com)
* Docs: [docs.cohere.com](https://docs.cohere.com)
* Dashboard / API: [dashboard.cohere.com](https://dashboard.cohere.com)
* For the EU-hosted alternative, see [mistral_la_plateforme.md](mistral_la_plateforme.md).
