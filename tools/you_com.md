# You.com

You.com is the AI search engine for people who want to choose the model. Where Perplexity routes you to one synthesis, You.com lets you pick — Smart, Genius, or specific frontier models (Claude, GPT, Gemini) — and shows the answer in their voice. For users who prefer agency over defaults, that's the differentiator.

## What it actually is

A web based AI search engine and a search API for developers. The consumer product mixes search modes (Smart, Genius, Research, Create) and direct chats with named models. The API exposes search results, page content extraction, and a Research mode for agents.

## Setup

### Consumer
1. Go to [you.com](https://you.com), sign up.
2. Free tier with limited Pro mode usage.
3. Pricing: You Pro $20/mo (unlimited Smart Mode, Genius access, Research Agent).
4. Pick a mode in the chat: Smart (default), Genius (deeper synthesis), or pick a specific model (Claude Opus, GPT, etc.).

### Developer
1. Sign up at [api.you.com](https://api.you.com).
2. Get an API key.
3. Endpoints: `/search`, `/news`, `/research`, `/smart`. Pay per call.

## How I use it day to day

* **Honest:** I default to Perplexity for personal search; You.com gets evaluated when I'm comparing tools.
* **Genius Mode for deeper questions.** Multi step reasoning, better than Smart's single shot answer for ambiguous prompts.
* **Direct model chat.** Pick "Claude Opus" mode; chat as if you're on Claude.ai but with web search built in. Useful when I want a specific model's voice on a search task.
* **Research Mode** for landscape scans. Comparable to ChatGPT Deep Research; produces a structured report.
* **API for RAG.** When I need a search API for an agent, You.com is a solid alternative to Tavily and Exa.
* **Multimodal.** You.com supports images and file upload in chat; useful for "explain this chart" tasks alongside web search.

## Gotchas

* The model picker is the unique value, but the underlying provider keys are You.com's — your usage doesn't draw against your own OpenAI / Anthropic accounts.
* Citation quality varies by mode. Smart cites less rigorously than Perplexity Pro; Genius is closer to parity.
* Some modes burn credits faster than others. Watch usage on Pro.
* The UI has accumulated features; navigation isn't as clean as Perplexity's.
* For pure search API usage in code: Tavily and Exa are also worth comparing.

## Pointers

* [you.com](https://you.com)
* API: [api.you.com](https://api.you.com)
* For citation focused consumer search: [perplexity.md](perplexity.md).
* For developer search APIs specifically: [exa.md](exa.md), [Tavily](https://tavily.com).
