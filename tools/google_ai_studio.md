# Google AI Studio / Vertex

Google AI Studio is the consumer style playground for Gemini and adjacent Google models; Vertex AI is the enterprise grade deployment platform for the same models inside Google Cloud. Same model family, two front doors. AI Studio is where I test prompts; Vertex is where they ship to production with the rest of GCP's compliance and tooling story attached.

## What it actually is

Two products in one ecosystem.
* **AI Studio**: a free web playground at [aistudio.google.com](https://aistudio.google.com) for trying Gemini models, building prompts, and getting an API key for casual use.
* **Vertex AI**: the enterprise platform on Google Cloud. Same Gemini models, plus model garden access to OSS and partner models (Llama, Claude on GCP, etc.), MLOps tooling, and tight integration with the rest of GCP.

## Setup

### AI Studio

1. Sign in at [aistudio.google.com](https://aistudio.google.com) with a Google account.
2. Pick a model from the dropdown.
3. Iterate on prompts in the playground.
4. Click "Get API key" for casual API access; quota is generous on the free tier.

### Vertex AI

1. Open Google Cloud Console; enable the Vertex AI API.
2. Authenticate with `gcloud auth application-default login` (or service account credentials).
3. Use the Vertex SDK in Python or Node, or call the REST API.
4. (Optional) Set up Model Garden for accessing Llama, Claude, Mistral, and other partner models within Vertex.
5. Configure VPC, IAM, and audit logs as your org requires.

## How I use it day to day

* **AI Studio for prompt iteration.** Faster than building a script just to test a prompt. The free quota is enough for serious experimentation.
* **Vertex for production.** When the same prompt needs to ship inside an existing GCP org, the IAM and billing alignment is the deciding factor.
* **Model Garden as a unified portal.** Calling Claude or Llama through Vertex when the rest of the stack is GCP keeps procurement and audit simpler.

For pure capability or developer ergonomics, the Anthropic and OpenAI consoles are slightly nicer. Google's edge is the Gemini long context (1M+ tokens) and the GCP integration story.

## Gotchas

* AI Studio quotas are friendly for development; production use requires moving to Vertex (paid).
* Vertex pricing is metered and can surprise you; set quotas and budgets early.
* Model availability differs between AI Studio and Vertex; some experimental models are AI Studio only.
* Region selection matters for compliance and latency; Vertex respects this, AI Studio doesn't really expose it.

## Pointers

* AI Studio: [aistudio.google.com](https://aistudio.google.com)
* Vertex AI: [cloud.google.com/vertex-ai](https://cloud.google.com/vertex-ai)
* Pricing: AI Studio free tier; Vertex pay per use.
* Pairs with [gemini.md](gemini.md) (the consumer chat product, same models), [anthropic_api.md](anthropic_api.md), and [openai_platform.md](openai_platform.md) as the other major model API ecosystems.
