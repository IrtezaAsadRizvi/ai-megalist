# AWS Bedrock: managed LLM platform on AWS

AWS Bedrock is what you reach for when "we use AWS" is non-negotiable and you need Anthropic, Meta, Mistral, Cohere, Amazon Titan, and friends behind an IAM role rather than an API key in a `.env`. The product itself is a model marketplace + invocation API; the value is that everything lives inside your existing AWS account, gets billed to your existing AWS invoice, and inherits your existing AWS auth.

## What it actually is

Amazon's managed service for foundation models. You pick a model (Claude, Llama, Mistral, Cohere, Titan, Stability, etc.), accept the EULA, then invoke it via the AWS SDK using IAM credentials. Supports streaming, tool use, vision, batch inference, Knowledge Bases (managed RAG), Agents (managed orchestration), and Guardrails (input/output filtering). Cross-region inference and provisioned throughput are available for enterprise workloads.

## Setup

1. In the AWS console, open **Bedrock** in your region (us-east-1 and us-west-2 have the widest model coverage).
2. Go to **Model access**, request access to the models you need (Claude, Llama, etc.). Approval is usually instant; some models take a day.
3. Install the AWS SDK in your stack (boto3 for Python, AWS SDK for JS/Go/Java).
4. Use the `bedrock-runtime` client: `client.converse(modelId="anthropic.claude-opus-4-7-v1:0", messages=[...])`. The Converse API is the modern unified surface.
5. (Optional) Spin up a Knowledge Base for managed RAG over S3 documents; create an Agent for orchestrated tool use.

## How I use it day to day

* **Claude in an AWS-only stack** - IAM auth instead of an Anthropic API key.
* **Batch inference** for big offline jobs - cheaper per-token than on-demand.
* **Cross-region inference** to handle quota in one region by spilling to another.
* **Guardrails** as a managed input/output filter when shipping to enterprise customers.
* **Bedrock Agents** for "managed tool use" - if you'd rather not run [LangChain](langchain.md) yourself.

## Gotchas

* Pricing matches the model provider's list price - no AWS discount on the model itself. The convenience is the integration, not cost.
* Model availability lags the provider's own API by days to weeks - the latest Claude or Llama may not be on Bedrock on launch day.
* Region coverage matters. Some models are us-east-1 only; route accordingly.
* Quotas are per-account, per-region. You will hit them; request increases proactively.

## Alternatives

* [Anthropic API](anthropic_api.md) / [OpenAI Platform](openai_platform.md) - direct keys, latest features first, simpler auth.
* [Azure OpenAI](azure_openai.md) - the Microsoft-side equivalent if your stack is Azure.
* [Google AI Studio / Vertex](google_ai_studio.md) - the GCP equivalent.
* [OpenRouter](openrouter.md) - if you'd rather aggregate everything behind one key.
* [Together AI](together.md) / [Fireworks AI](fireworks.md) - for OSS models specifically.

## FAQ

### Is Bedrock free?

No - pay-per-token at the model provider's prices. Some free credits for new AWS accounts.

### Bedrock vs Anthropic API direct?

Same Claude model. Bedrock buys you IAM auth, AWS billing, VPC endpoints, and Bedrock Guardrails. Direct API buys you day-one access to new features and slightly lower latency.

### Does Bedrock support prompt caching?

Yes, for supported Claude models. Check the latest docs - feature parity with Anthropic's direct API has been catching up.

### What's the Converse API?

Bedrock's unified message API. Works across all chat models; replaces the older provider-specific InvokeModel pattern. Use this for new code.

### Can I fine-tune on Bedrock?

Yes - for select models (Cohere, Llama, Titan). Costs are nontrivial; check pricing first.

## Pointers

* Product: [aws.amazon.com/bedrock](https://aws.amazon.com/bedrock/)
* Docs: [docs.aws.amazon.com/bedrock](https://docs.aws.amazon.com/bedrock/)
* Pricing: [aws.amazon.com/bedrock/pricing](https://aws.amazon.com/bedrock/pricing/)
* If you're on Azure instead, jump to [azure_openai.md](azure_openai.md).
