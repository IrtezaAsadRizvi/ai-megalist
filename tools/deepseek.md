# DeepSeek

DeepSeek is the open weight model series that keeps embarrassing the closed model labs on price and reasoning. The R1 reasoning model and V3.2 base model run anywhere from 5x to 20x cheaper than their closed equivalents, and the weights are openly downloadable. For developers building cost sensitive products, DeepSeek changes the math.

## What it actually is

A family of open weight models from DeepSeek (Chinese AI lab). The headline models in 2026:
* **DeepSeek V3.2** — frontier general purpose chat model. Open weights.
* **DeepSeek R1** — reasoning model with visible chain of thought, comparable to OpenAI o4 on hard reasoning at a fraction of the price.
* **DeepSeek Coder V3** — code specialised, strong on real world repos.

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

## Pointers

* [chat.deepseek.com](https://chat.deepseek.com)
* API: [platform.deepseek.com](https://platform.deepseek.com)
* Hugging Face: [huggingface.co/deepseek-ai](https://huggingface.co/deepseek-ai)
* For self hosting: [ollama.md](ollama.md), [vllm.md] (when written), llama.cpp.
* Compare with [groq.md](groq.md) (also fast/cheap, hosted only) for pure inference economics.
