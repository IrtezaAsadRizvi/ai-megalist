# STORM: Stanford's open-source Wikipedia-style research pipeline

STORM is the open-source multi-agent research pipeline from Stanford OVAL, the inspectable alternative to closed deep-research products like [ChatGPT Deep Research](chatgpt.md) and [Gemini Deep Research](gemini.md). STORM is the most academically grounded "write me a Wikipedia style article" pipeline I know of, and it's open source. Stanford OVAL built it; the codebase is public, the prompts are inspectable, and the full multi agent flow (perspective generation, conversation, outline, write) is documented in the paper. It's the closest thing to a glass box deep research tool.

## What it actually is

An open source research and writing system from Stanford OVAL. Given a topic, STORM simulates a panel of experts asking each other questions, uses those conversations to plan an outline, retrieves sources from the web, and drafts a long form article in a Wikipedia like format with citations. Available as a hosted demo at [storm.genie.stanford.edu](https://storm.genie.stanford.edu) and as a Python package on GitHub.

## Setup

### Hosted demo

1. Go to [storm.genie.stanford.edu](https://storm.genie.stanford.edu).
2. Sign in with email.
3. Type a topic; the system runs (a few minutes), then renders an article with inline citations.

### Local / self hosted

1. `pip install knowledge-storm`.
2. Bring API keys for an LLM provider (OpenAI, Anthropic) and a search backend (You.com, Bing, Tavily, or Serper).
3. Run the example script in the repo, or import the runner directly: `from knowledge_storm import STORMWikiRunner`.
4. (Optional) Swap the underlying retriever or model by editing the config; the architecture is modular.

## How I use it day to day

* **First draft for unfamiliar topics.** If I'm writing an explainer about something I'm only loosely familiar with, STORM gives me a structured starting point with sources I can verify. I rewrite from there; the output is rarely publishable as is, but it saves a lot of scaffolding.
* **As a teaching example.** The multi agent loop (perspectives, conversations, outline, draft) is a clean reference for how to architect a research agent. I've pointed several people at the repo for that reason alone.
* **Source surfacing.** Even when I don't use the prose, the citation list is a useful retrieval shortcut.

## Gotchas

* Output quality tracks the underlying model. With cheap models you get articles that read like 2023 era content farms; with frontier models the result is genuinely useful.
* The hosted demo has rate limits and may queue your job. For sustained use, self host.
* Citations are pulled from web search; quality of sources varies. Treat the output as a starting point, not a finished reference.
* Long topics burn tokens fast. A single STORM run can be tens of thousands of input tokens against the LLM provider.

## Alternatives

* If you want a polished closed product with no setup, [ChatGPT Deep Research](chatgpt.md) is the easiest path.
* If you want Google's flavour with annotated reports, [Gemini Deep Research](gemini.md) is the closest analogue.
* If you want cited answers without the long-form pipeline, [Perplexity](perplexity.md) is the lighter tool.
* If you want a multi-agent research mode tuned for synthesis, [Claude](claude.md) Research mode is the same shape.

## FAQ

### Is STORM free?

The hosted demo is free with rate limits. Self-hosted is free to run (Apache 2.0 / MIT in the repo) - you pay only for the underlying LLM and search API calls. A single STORM run on a frontier model can run tens of thousands of tokens.

### STORM vs ChatGPT Deep Research - which is better?

Different bets. [ChatGPT Deep Research](chatgpt.md) is polished, closed, and behind a Plus subscription. STORM is open-source, inspectable, and self-hostable - and tracks the underlying model. With a frontier backbone, output quality is comparable; with cheaper models, STORM degrades visibly.

### Can I swap STORM's search backend?

Yes - the architecture is modular. The default works with [Tavily](tavily.md), [Exa](exa.md), Bing, You.com, and Serper. You can also point it at a private corpus via [LlamaIndex](llamaindex.md).

### Is STORM output publishable?

Rarely as-is. Treat it as a structured first draft with sources. The citation list is useful as a retrieval shortcut even when you rewrite the prose entirely.

## Pointers

* Hosted: [storm.genie.stanford.edu](https://storm.genie.stanford.edu)
* Repo: [github.com/stanford-oval/storm](https://github.com/stanford-oval/storm)
* Paper: "Assisting in Writing Wikipedia like Articles From Scratch with Large Language Models" (Shao et al., 2024).
* Pairs with [tavily.md](tavily.md) or [exa.md](exa.md) as retrieval backends; with [llamaindex.md](llamaindex.md) if you want to swap in your own corpus rather than the open web.
