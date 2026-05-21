# Azure OpenAI: OpenAI models with enterprise plumbing

Azure OpenAI is the answer to "we love GPT but our compliance team needs an Azure subscription ID." Same models as the OpenAI API (GPT-5.5, GPT-image, Whisper, embeddings, etc.), wrapped in Microsoft's enterprise plumbing: private endpoints, VNet integration, RBAC, data residency, and a Microsoft contract. If your company sources LLMs through Microsoft procurement, this is the path of least resistance.

## What it actually is

A Microsoft Azure service that hosts OpenAI's models behind Azure's identity, networking, and billing surfaces. Each model is deployed to a named "deployment" in a region. You hit `https://<your-resource>.openai.azure.com` with an API key or Entra ID auth. Most OpenAI features have an Azure equivalent, usually within days or weeks of OpenAI's direct launch.

## Setup

1. In the Azure portal, create an **Azure OpenAI** resource (you need an approved Azure subscription - apply if first-time).
2. Pick a region (East US, Sweden Central, and a few others have the broadest model coverage).
3. Go to **Azure OpenAI Studio**, deploy a model (e.g. `gpt-5.5`, `gpt-image-1`, `whisper`). Give it a deployment name.
4. Grab the endpoint URL and key from the resource's **Keys and Endpoint** pane.
5. Use the OpenAI SDK with the Azure-specific base URL pattern, or the official `azure-ai-openai` package.

## How I use it day to day

* **GPT inside an enterprise contract** - same APIs as the OpenAI Platform, but the bill goes to Azure.
* **Private networking** - VNet + Private Endpoint to keep traffic off the public internet.
* **Entra ID auth** - service principals instead of API keys baked into env vars.
* **Content filtering** as a managed input/output filter, on by default.
* **Provisioned Throughput Units (PTU)** for predictable latency on production workloads.

## Gotchas

* Feature parity with the OpenAI API lags by days to weeks. New models land on OpenAI first.
* You manage deployments per model per region. Easy to end up with quota fragmented across regions.
* Some API surfaces differ slightly (Realtime API, Responses API) - the docs are the source of truth.
* Content filtering is opt-out, not opt-in. If you need it off (e.g. for security research), file a request.

## Alternatives

* [OpenAI Platform](openai_platform.md) - direct keys, latest features first, simpler.
* [AWS Bedrock](aws_bedrock.md) - the AWS equivalent if your stack is on AWS (no GPT, but Claude/Llama/Mistral).
* [Google Vertex AI](google_ai_studio.md) - the GCP equivalent for Gemini and partner models.
* [OpenRouter](openrouter.md) - aggregator if you don't need single-cloud sourcing.

## FAQ

### Is Azure OpenAI free?

No - pay-per-token, similar pricing to OpenAI direct. Some Azure free credits for new accounts.

### Azure OpenAI vs OpenAI direct?

Same models, different plumbing. Azure buys you enterprise auth, networking, residency, and a Microsoft contract. OpenAI direct buys you day-one feature access and simpler setup.

### Does it have the latest GPT?

Usually within a few weeks of OpenAI's direct release. Check the model availability table per region.

### What's a "deployment"?

A named instance of a model in a region - you call it by deployment name, not model name. This lets you swap models behind a stable name.

### Can I use Entra ID instead of API keys?

Yes - role-based access via managed identities is the recommended enterprise path.

## Pointers

* Product: [azure.microsoft.com/products/ai-services/openai-service](https://azure.microsoft.com/products/ai-services/openai-service)
* Docs: [learn.microsoft.com/azure/ai-services/openai](https://learn.microsoft.com/azure/ai-services/openai/)
* Studio: [oai.azure.com](https://oai.azure.com)
* If you're on AWS instead, jump to [aws_bedrock.md](aws_bedrock.md).
