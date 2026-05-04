# Exa: neural search API for agents and RAG

Exa is the search API alternative to [Tavily](tavily.md) and the programmatic counterpart to [Perplexity](perplexity.md) - aimed at agents and RAG pipelines, not human readers. It's the search API I reach for when I'm building agents that need actual primary sources. Where Google ranks pages by SEO and link graph, Exa uses neural retrieval to find pages by *content similarity*. The result is fewer SEO farms and more original content - academic papers, GitHub repos, niche blogs, documentation.

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

## Alternatives

* If you want a search API tuned specifically for LLM agents with chunked content out of the box, [Tavily](tavily.md) is the closest competitor.
* For human-readable cited answers rather than raw URLs, [Perplexity](perplexity.md) is the consumer-facing pick.
* If you're searching code, docs, and GitHub specifically, [Phind](phind.md) is sharper than Exa for that slice.
* For privacy-first general search with AI summaries, [Brave Search + Leo](brave_search.md) is an option.

## FAQ

### Is Exa free?

There's a free tier with 1000 searches/month, which is enough to prototype but burns fast in any real agent loop. Paid tiers are pay-per-search plus pay-per-content-extraction; budget caps live on the dashboard.

### Exa vs Tavily - which is better for agents?

Different strengths. Exa's neural retrieval and Find Similar endpoint surface more original content (papers, repos, niche blogs). [Tavily](tavily.md) is more focused on clean, chunked extraction tuned for direct LLM ingestion. I've used both in production; pick by what your agent actually needs.

### What is the Find Similar endpoint?

Give Exa a URL, get back URLs of pages that are content-similar. It's the killer feature for landscape mapping ("find me ten papers like this one"), competitor research, and expanding a reading list programmatically.

### Does Exa replace Google?

No. For mainstream factual lookups ("what's the capital of Belize") Google or any regular search engine is faster. Exa is for finding *source material* - the kind of stuff Google buries under SEO pages.

## Pointers

* Docs: [docs.exa.ai](https://docs.exa.ai)
* Blog: [exa.ai/blog](https://exa.ai/blog) has good agent recipes.
* Compare with [tavily.com](https://tavily.com) (also a search API tuned for LLMs) and [you.com](https://you.com) (more consumer leaning).
* Pairs naturally with [perplexity.md](perplexity.md) for human reading and Exa for programmatic use.
