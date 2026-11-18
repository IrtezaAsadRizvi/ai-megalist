# Firecrawl: web search, scrape and crawl API for AI agents

Firecrawl is the API I reach for when an agent needs to read the pages it finds. One call can search the web and return each result as clean Markdown, so the agent gets the source text in the same step as the links. Next to [Exa](exa.md) and [Tavily](tavily.md), it's the pick when the next step after search is reading, crawling a docs site, or pulling structured fields out of a page.

## What it actually is

A web data API at [firecrawl.dev](https://www.firecrawl.dev/?utm_source=ai-megalist&utm_medium=integration). `/search` returns web, news and image results, with the full page content of each result if you ask for it. `/scrape` turns one URL into Markdown, HTML, a screenshot or JSON that matches your schema, and `/parse` does the same for PDFs and office files. `/crawl` follows links across a site, `/map` lists a site's URLs without fetching them, and Interact keeps a real browser open after a scrape for clicks and forms.

The core is open source (AGPL-3.0). There are SDKs for Python, Node and other languages, a CLI, and an official MCP server. Firecrawl Alexandria adds structured data from data providers and specialized indexes (company records, finance, research papers, podcasts, sports and more) through the same API.

## Setup

1. Sign up at [firecrawl.dev](https://www.firecrawl.dev/?utm_source=ai-megalist&utm_medium=integration). The free plan is 1,000 Firecrawl credits a month with no credit card.
2. Copy an API key from the [dashboard](https://www.firecrawl.dev/app/api-keys?utm_source=ai-megalist&utm_medium=integration).
3. Quick test, a search that also returns the Markdown of each result:
   ```bash
   curl -X POST https://api.firecrawl.dev/v2/search \
     -H "Authorization: Bearer $FIRECRAWL_API_KEY" \
     -H "content-type: application/json" \
     -d '{"query": "AI agent frameworks 2026", "limit": 3, "scrapeOptions": {"formats": ["markdown"]}, "origin": "ai-megalist"}'
   ```
4. Clients: `pip install firecrawl`, `npm install firecrawl`, or the CLI (`npm install -g firecrawl-cli`, then `firecrawl login`). For Claude Code, Cursor, Codex and other MCP clients, follow the [MCP setup guide](https://docs.firecrawl.dev/mcp-server?utm_source=ai-megalist&utm_medium=integration).

## How I use it day to day

* **As the search tool in agent loops.** One `/search` call with `scrapeOptions` gives the agent the results and the page text together, so it can cite sources without a second round of fetches.
* **`/scrape` for a URL the agent already picked.** Markdown by default. When I want fields (price, author, date), I pass `formats: ["json"]` with a schema and skip the parsing code.
* **`/map` then `/crawl` for docs sites.** Map lists the site's URLs for 1 credit, I pick the paths I care about, and the crawl pulls them into Markdown for a RAG index.
* **Through the MCP server in Claude Code and Cursor.** The coding agent reads current library docs and changelogs instead of guessing from its training data.
* **Firecrawl Alexandria for structured records.** Company filings, market data or research papers come back as JSON from the provider.

## Gotchas

* `/search` bills 2 Firecrawl credits per 10 results, and every result you also scrape adds the per-page cost. Set `limit` to what the agent will actually read.
* On `/scrape` and `/crawl`, the JSON and question formats add 4 credits per page. Stay on plain Markdown unless you need the structure.
* A crawl follows every link it's allowed to. Set `limit` and include or exclude paths (or run `/map` first) so a docs crawl stays out of the blog.
* Crawl, Map and batch scrape need an API key. Without one you get a small daily per-IP allowance for Search, Scrape and a few other endpoints.
* Firecrawl Alexandria discovery is free. Running a tool bills its listed price, and some providers ask an org admin to accept their terms first.

## Alternatives

* For neural-similarity ranking and a Find Similar endpoint, [Exa](exa.md) is the search API built around that.
* For a search API that returns snippets tuned for LLM context, [Tavily](tavily.md) is the closest option.
* For cited answers you read yourself, [Perplexity](perplexity.md).
* For an agent that drives a whole browser session end to end, [Browser Use](browser_use.md).

## FAQ

### Is Firecrawl free?

The free plan gives 1,000 Firecrawl credits a month with no credit card, which is about 500 searches or 1,000 scraped pages. Paid plans start at Hobby, $19 a month billed monthly or $16 a month billed annually, for 5,000 credits.

### What does Firecrawl do beyond search?

It scrapes single pages, crawls and maps whole sites, parses PDFs and office files, and runs browser sessions with Interact, all under the same API key.

### Does Firecrawl work with MCP clients?

Yes. The official MCP server works in Claude Code, Cursor, Codex and other MCP clients, with a browser sign-in or an API key. ChatGPT and Claude also have native Firecrawl connectors.

## Pointers

* [firecrawl.dev](https://www.firecrawl.dev/?utm_source=ai-megalist&utm_medium=integration)
* Docs: [docs.firecrawl.dev](https://docs.firecrawl.dev/?utm_source=ai-megalist&utm_medium=integration)
* MCP server: [docs](https://docs.firecrawl.dev/mcp-server?utm_source=ai-megalist&utm_medium=integration) and [source](https://github.com/firecrawl/firecrawl-mcp-server)
* Source code: [github.com/firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)
* Firecrawl Alexandria: [alexandria.firecrawl.dev](https://alexandria.firecrawl.dev/?utm_source=ai-megalist&utm_medium=integration)
