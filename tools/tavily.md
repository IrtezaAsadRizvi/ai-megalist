# Tavily

Tavily is a search API designed specifically for AI agents and RAG pipelines. The endpoints, the response format, and the "search depth" options are all shaped by what an LLM consumer wants — clean text, deduplicated, reasonably ranked, with optional content extraction. For agentic apps that need a search tool, Tavily is one of the simplest paths.

## What it actually is

A search API at [tavily.com](https://tavily.com). Two main endpoints: `/search` (web search with optional content extraction) and `/extract` (URL → clean Markdown). Pricing is per request. Free tier: 1000 calls/month. There's a small consumer search frontend but the API is the product.

## Setup

1. Sign up at [tavily.com](https://tavily.com).
2. API key from the dashboard.
3. Quick test:
   ```bash
   curl -X POST https://api.tavily.com/search \
     -H "content-type: application/json" \
     -d '{"api_key": "tvly-...", "query": "AI image generation 2026", "max_results": 5}'
   ```
4. Python SDK: `pip install tavily-python`.
5. LangChain integration is built in: `from langchain_community.tools.tavily_search import TavilySearchResults`.

## How I use it day to day

* **In agent loops.** When my agent needs a search tool, Tavily is the default. Returns clean snippets ready to feed back to the LLM.
* **`include_raw_content=true`** for full page text instead of snippets. Useful when the LLM needs more than 200 characters of context.
* **`search_depth="advanced"`** for harder queries. Tavily does more crawling and aggregation; slower, better grounded.
* **`/extract`** endpoint for URLs the agent decides are important. Get clean Markdown, not raw HTML. Cheaper than running Browser Use just to read a page.
* **Domain filtering.** `include_domains` and `exclude_domains` work well. I usually exclude the SEO content farms.

## Gotchas

* Free tier (1000 calls/mo) goes fast in agent loops. Production apps will hit paid tiers quickly.
* Tavily is not a Google killer for human use; it's tuned for LLMs. The consumer search frontend is small.
* Result quality varies by query type. Mainstream factual queries: great. Bleeding edge or niche queries: spottier.
* Caching is your friend. If the same query repeats, cache it client side; Tavily doesn't dedupe across calls.
* Latency is fine but not ultra fast (~1 to 3 seconds typical). Plan accordingly for real time agents.

## Pointers

* [tavily.com](https://tavily.com)
* Docs: [docs.tavily.com](https://docs.tavily.com)
* Compare with [exa.md](exa.md) (different ranking philosophy: neural similarity vs traditional ranking), [you.com](https://you.com)'s API.
* The LangChain integration is the most polished SDK; works out of the box with agents.
