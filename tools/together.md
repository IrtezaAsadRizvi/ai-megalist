# Together AI: inference platform for open-weight models

Together AI sits in the model APIs category alongside [Groq](groq.md), [Fireworks](fireworks.md), and [Replicate](replicate.md), pitched as the broad-catalog host for Llama, Qwen, DeepSeek, Mistral, and friends. Together AI is the inference platform for open weight models with the broadest catalog and the friendliest pricing curve. They host hundreds of models (Llama, Qwen, DeepSeek, Mistral, Gemma, plus image and audio), expose OpenAI compatible endpoints, and include serverless + dedicated endpoint options. For developers building on open models in production, Together is one of the safer defaults.

## What it actually is

A managed inference platform plus fine tuning service. Endpoints are OpenAI compatible; pricing is per token; multiple deployment modes (serverless shared infrastructure, dedicated endpoints, on demand fine tuning runs). Together also publishes original research, contributing models like RedPajama and OpenChatKit.

## Setup

1. Sign up at [together.ai](https://www.together.ai). Free credits on signup.
2. Get an API key from the dashboard.
3. Quick test:
   ```bash
   curl https://api.together.xyz/v1/chat/completions \
     -H "Authorization: Bearer $TOGETHER_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model": "meta-llama/Llama-3.3-70B-Instruct-Turbo", "messages": [{"role":"user","content":"hello"}]}'
   ```
4. Or use the SDK: `pip install together`.
5. (Optional) Spin up a dedicated endpoint for sustained workloads with predictable pricing.

## How I use it day to day

* **Honest:** I've used Together for a few production workloads; not a daily personal tool.
* **Default for hosted Llama / Qwen.** When I want a frontier open model in production, Together is competitive on price and reliability.
* **Image generation API.** Together hosts FLUX, SDXL, and others; comparable to Replicate but often cheaper and faster for high volume.
* **Fine tuning.** LoRA fine tunes on open models; managed training, exportable weights. Cheaper than self hosting the training infra.
* **Embeddings.** Open embedding models (BGE, M2 Bert) hosted at Together prices; useful for RAG without OpenAI lock in.
* **Mix and match.** Together's catalog covers most open weight needs; same SDK across model families.

## Gotchas

* Serverless endpoints have cold starts on infrequently used models. For latency sensitive flows, use dedicated endpoints.
* Quality varies by model. Llama 3.3 70B Turbo is a good default; some smaller / niche models are slower or quality compromised.
* Pricing is competitive but compare with Groq (faster, narrower model selection) and Fireworks (similar shape).
* For fully OSS local: switch to vLLM or Ollama. Together is hosted; if data sensitivity matters, evaluate.
* Some advanced features (function calling on certain models) lag the OpenAI / Anthropic native parity.

## Alternatives

* If you need the fastest tokens/sec on supported models, [Groq](groq.md) wins on raw speed.
* If you want a similar shape with a different model mix, [Fireworks](fireworks.md) is the closest comparator.
* If you want to run any model (not just LLMs - image, audio, video too), [Replicate](replicate.md) has a broader catalog.
* If you want to self-host for data sensitivity, [vLLM](vllm.md) is the production engine.
* If you want a unified gateway across many providers, [LiteLLM](litellm.md) is the OSS abstraction.

## FAQ

### Is Together AI free?

Free credits on signup are enough to evaluate. After that, pricing is per token - typically a few cents per million tokens for most open models, cheaper than OpenAI or Anthropic for comparable capability tiers.

### Together AI vs Groq - which is faster?

[Groq](groq.md) wins on tokens/sec for the models it hosts (LPU hardware does very high TPS). Together's catalog is broader and pricing is competitive; pick Groq for latency-critical flows, Together for model selection.

### Does Together support fine-tuning?

Yes - LoRA fine-tunes on open models with managed training and exportable weights. Cheaper than standing up your own training infrastructure for most teams.

### Is Together AI OpenAI-compatible?

Yes - endpoints follow the OpenAI chat completions shape, so you can swap base URLs and use the OpenAI Python or TypeScript SDKs without rewriting.

## Pointers

* [together.ai](https://www.together.ai)
* Docs: [docs.together.ai](https://docs.together.ai)
* Compare: [groq.md](groq.md) (fastest), [Fireworks](https://fireworks.ai) (similar), [replicate.md](replicate.md) (broader catalog including non LLM).
* For unified gateway across multiple providers: [LiteLLM](https://github.com/BerriAI/litellm) or LangChain.
