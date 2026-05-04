# DeepSeek: cheap open-weight reasoning models

DeepSeek is the open-weight model family in the general-assistants category, the credible cheap alternative to closed models like [ChatGPT](chatgpt.md) and [Claude](claude.md), comparable in spirit to [Mistral](mistral_le_chat.md) and [Qwen](qwen.md). It's the open weight series that keeps embarrassing the closed model labs on price and reasoning. The R1 reasoning model and V3.2 base model run anywhere from 5x to 20x cheaper than their closed equivalents, and the weights are openly downloadable. For developers building cost sensitive products, DeepSeek changes the math.

## What it actually is

A family of open weight models from DeepSeek (Chinese AI lab). The headline models in 2026:
* **DeepSeek V3.2**: frontier general purpose chat model. Open weights.
* **DeepSeek R1**: reasoning model with visible chain of thought, comparable to OpenAI o4 on hard reasoning at a fraction of the price.
* **DeepSeek Coder V3**: code specialised, strong on real world repos.

Available via DeepSeek's own chat at [chat.deepseek.com](https://chat.deepseek.com) (free), the API at [platform.deepseek.com](https://platform.deepseek.com), or downloaded and self hosted.

## Setup

### Chat
1. Go to [chat.deepseek.com](https://chat.deepseek.com). Sign in.
2. Free, generous, no credit card.
3. Toggle "Deep Think" for R1 reasoning mode; useful for math, code, analysis.

### API
1. Sign up at [platform.deepseek.com](https://platform.deepseek.com).
2. Get an API key. OpenAI compatible endpoints.
3. Quick test:
   ```bash
   curl https://api.deepseek.com/v1/chat/completions \
     -H "Authorization: Bearer $DEEPSEEK_KEY" \
     -H "content-type: application/json" \
     -d '{"model":"deepseek-chat","messages":[{"role":"user","content":"hello"}]}'
   ```

### Local
1. Models on Hugging Face: [huggingface.co/deepseek-ai](https://huggingface.co/deepseek-ai).
2. Run via Ollama (`ollama pull deepseek-r1`), llama.cpp, vLLM.
3. Full DeepSeek V3.2 needs serious GPU; quantized variants run on consumer hardware.

## How I use it day to day

* **As the cheap reasoning model.** When I need o4 quality on hard problems but the volume / cost matters, DeepSeek R1 via API is the answer.
* **Bulk processing.** Summarisation, classification, simple Q&A at scale. Per token cost difference vs frontier closed models is dramatic.
* **For code generation in agent loops.** Pairs well with Aider or Continue (BYO model). Aider's leaderboard shows DeepSeek competitive with Claude on many coding tasks.
* **Free chat alternative.** When ChatGPT and Claude have hit their limits, DeepSeek's free tier picks up.
* **Self hosted for privacy.** Full open weights mean truly air gapped deployments are possible.

## Gotchas

* The chat product is hosted in China; some enterprises won't approve. The API is hosted on multiple regions; read the data residency notes.
* Some content policies differ from Western labs; certain topics are filtered. For sensitive use cases, evaluate.
* The models are smaller / different architecture than GPT or Claude; performance on agentic tool use can vary. Test on your actual workload.
* OSS license is permissive (MIT for code, custom for weights with use restrictions). Read before commercial deployment.
* Reasoning model output includes long chain of thought. Strip before showing to end users if not desired.

## Alternatives

* If you want a closed-model frontier with the most surface area, [ChatGPT](chatgpt.md) is the broad default.
* If you want long-context reasoning with a calmer voice, [Claude](claude.md) is the natural pair.
* If you want EU-hosted open weights with a similar permissive feel, [Mistral Le Chat](mistral_le_chat.md) is the closest analog.
* If you want pure inference speed on open weights without self-hosting, [Groq](groq.md) and [Cerebras](cerebras.md) host similar models at very high TPS.

## FAQ

### Is DeepSeek free?

The chat product at chat.deepseek.com is free with no credit card. The API is paid but ~5-20x cheaper than equivalent closed models. The weights are downloadable from Hugging Face for self-hosting at compute cost only.

### DeepSeek vs ChatGPT - which is better?

Different shapes. [ChatGPT](chatgpt.md) wins on product surface area (image gen, voice, Operator, video) and ecosystem. DeepSeek wins on raw reasoning per dollar - R1 is comparable to o4-class on hard problems at a fraction of the price. For chat, ChatGPT. For bulk reasoning at scale, DeepSeek.

### Is DeepSeek safe for enterprise data?

The chat product is hosted in China, which many enterprises won't approve. The API has multiple regions; read the data-residency notes. For full air-gap, the open weights mean you can self-host with [Ollama](ollama.md) or [vLLM](vllm.md) - that's the strong privacy story.

### How do I run DeepSeek locally?

`ollama pull deepseek-r1` for the reasoning model on [Ollama](ollama.md), or grab the weights from huggingface.co/deepseek-ai for [vLLM](vllm.md) / llama.cpp. Full V3.2 needs serious GPU; quantized variants run on consumer hardware (a 4090 handles the smaller distilled models).

### What's the difference between R1 and V3.2?

V3.2 is the general-purpose chat model. R1 is the reasoning model with visible chain-of-thought, comparable to o4 on math, code, and analysis. Use R1 for hard problems where you want the model to think; V3.2 for everything else.

## Pointers

* [chat.deepseek.com](https://chat.deepseek.com)
* API: [platform.deepseek.com](https://platform.deepseek.com)
* Hugging Face: [huggingface.co/deepseek-ai](https://huggingface.co/deepseek-ai)
* For self hosting: [ollama.md](ollama.md), [vllm.md] (when written), llama.cpp.
* Compare with [groq.md](groq.md) (also fast/cheap, hosted only) for pure inference economics.
