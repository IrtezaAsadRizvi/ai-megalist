# Exa

Exa is the search API I reach for when I'm building agents that need actual primary sources. Where Google ranks pages by SEO and link graph, Exa uses neural retrieval to find pages by *content similarity*. The result is fewer SEO farms and more original content — academic papers, GitHub repos, niche blogs, documentation.

## What it actually is

A neural search API and small consumer search frontend at [exa.ai](https://exa.ai). The core product is the API: send a query (or even a sample passage of text), get back URLs ranked by semantic similarity, optionally with extracted page content. There's also a Find Similar endpoint, which is the killer feature.

## Setup

1. Go to [exa.ai](https://exa.ai), sign up.
2. Free tier: 1000 searches/month.
3. Get an API key at [dashboard.exa.ai](https://dashboard.exa.ai).
4. Quick test:
   ```bash
   curl -X POST https://api.exa.ai/search \
     -H "x-api-key: $EXA_KEY" \
     -H "content-type: application/json" \
     -d '{"query": "papers on long context retrieval, 2024 onwards", "numResults": 10}'
   ```

## How I use it day to day

* **In RAG pipelines.** When I want my agent to fetch high quality sources rather than the top SEO results, Exa is the substrate. Pair with `contents=true` to get extracted page text inline.
* **Find Similar.** Give Exa a URL, get URLs of pages that are *content similar*. Useful for landscape mapping ("find me ten papers like this one"), competitor research, expanding a reading list.
* **Filtered search.** Domain whitelist (`includeDomains: ["arxiv.org", "github.com"]`), date range, content type. Cuts the noise dramatically.
* **In agent loops.** I have a Claude agent that uses Exa as its search tool. The cited results are noticeably more substantive than Google's.

## Gotchas

* The pricing is per search and per content extraction. Heavy use can run up; budget caps exist on the dashboard.
* For mainstream factual lookups ("what's the capital of Belize"), Google or a regular search engine is faster. Exa shines on *finding source material*.
* The free tier is generous but rate limits hit fast in agent loops. Use with caching.
* The web frontend at exa.ai is fine but secondary. Most users hit Exa via the API.
* "Neural" is the marketing word, but the actual ranking quality varies by domain. Always evaluate on your queries.

## Pointers

* Docs: [docs.exa.ai](https://docs.exa.ai)
* Blog: [exa.ai/blog](https://exa.ai/blog) has good agent recipes.
* Compare with [tavily.com](https://tavily.com) (also a search API tuned for LLMs) and [you.com](https://you.com) (more consumer leaning).
* Pairs naturally with [perplexity.md](perplexity.md) for human reading and Exa for programmatic use.
