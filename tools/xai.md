# xAI

xAI is Elon Musk's AI company and the maker of the Grok model family. The API is the developer entry point for using Grok in your own applications, separate from the consumer Grok chat product. The differentiators (real time access to X, looser content policies, distinct training data mix) carry through to the API; whether they're worth the switch depends on what you're building.

## What it actually is

xAI's API platform for the Grok model family. Available at [x.ai/api](https://x.ai/api). OpenAI compatible endpoints (you can use the OpenAI Python SDK with an xAI base URL). Pay per token pricing. Includes function calling, vision (on appropriate Grok variants), and access to xAI's real time data integrations on some endpoints.

## Setup

1. Sign up at [console.x.ai](https://console.x.ai).
2. Create an API key.
3. Install: `pip install openai`. Use it with the xAI base URL.
   ```python
   from openai import OpenAI
   client = OpenAI(base_url="https://api.x.ai/v1", api_key="your-xai-key")
   ```
4. Call models: `grok-3`, `grok-4`, etc.; check the docs for the current lineup.
5. (Optional) Use xAI specific endpoints for live data search.

## How I use it day to day

I don't use Grok day to day. The reasons I'd reach for the xAI API:

* **Real time information from X.** When the application needs current events or social signal, Grok's training and data integrations are differentiated.
* **Content policy headroom.** Grok will engage with material that Claude and ChatGPT decline. For specific use cases (some kinds of fiction, satire, edgy marketing) this matters.
* **Cost or latency wins on specific tasks.** xAI pricing has been competitive at points; benchmark before betting.

For most coding, reasoning, and writing tasks, Anthropic and OpenAI remain my defaults. xAI is a specialist tool.

## Gotchas

* API stability has been less consistent than the more established providers; expect occasional changes.
* The "real time X data" feature is differentiated but bounded; it isn't full social listening.
* Privacy and data use policies have shifted over time; read the current terms before sending sensitive data.
* Benchmarks vary widely by task; don't assume cross task generalization from a single comparison.

## Pointers

* Web: [x.ai](https://x.ai), API console at [console.x.ai](https://console.x.ai)
* Docs: [docs.x.ai](https://docs.x.ai)
* Pairs with [grok.md](grok.md) (the consumer chat product), and competes with [anthropic_api.md](anthropic_api.md), [openai_platform.md](openai_platform.md), [google_ai_studio.md](google_ai_studio.md), and [deepseek.md](deepseek.md) as a model API choice.
