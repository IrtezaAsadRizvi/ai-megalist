# TokenMost: the free-token deals tracker you check before paying for tokens

TokenMost (tokenmost.com) is a Chinese-language intelligence site that tracks **free AI token and credit offers** from official channels: LLM vendors (Zhipu/Z.ai, DeepSeek, Kimi, MiniMax, iFlytek), agent platforms, MaaS clouds, telecom clouds, and international providers. Think of it as the missing layer between "every provider has a free tier" and "which free tier is actually worth claiming this week".

## What it actually is

A daily-verified deals feed with 260+ entries, each carrying a verification date and a source link. Offers auto-expire when the underlying deal ends, so you are not chasing dead promotions from 2024 blog posts. It also layers the data: one-time signup bonuses, daily/weekly recurring credits, student-only programs, and a separate free-cloud-server section (Oracle, AWS, InstaBox, Modal, e2b...). A price-comparison calculator converts every offer into a unified DeepSeek-equivalent unit, and coding-plan entries use official conversion formulas instead of made-up token estimates.

## Setup

1. Open [tokenmost.com](https://tokenmost.com) - no account needed to read.
2. For programmatic use: `https://tokenmost.com/deals.json` (the whole dataset), `llms.txt` / `llms-full.txt` (AI-engine friendly summaries), `rss.xml` for new offers.
3. English entry page: `tokenmost.com/en.html`.

## How I use it day to day

* **Before topping up any API**, check the free zone first - recurring credits like Zhipu's daily 300M GLM-Flash or weekly AutoClaw drops quietly cover a lot of hobby usage.
* **Student programs** - GitHub Student Pack, Google AI Pro 12 months, Azure for Students, Perplexity education discount are aggregated in one student section.
* **Claiming guides** - step-by-step walkthroughs for the fiddlier ones (iFlytek's checkbox traps, Volcano's data-authorization red lines).
* **Warn-off list** - expired deals stay listed with expiry notes, which is just as useful: you learn which "free 10 billion" headlines are registration-gated marketing.

## Gotchas

* Chinese-first content; the English page is an entry point, deeper data fields remain Chinese.
* Offers are official-channel only - relay/reseller stations are deliberately excluded, so it complements rather than duplicates relay aggregators.
* Verification dates are per-offer; still sanity-check anything time-sensitive on the provider's own page.

## Alternatives

* [free-ai-tokens](https://github.com/KJAI123/free-ai-tokens) - TokenMost's own open dataset repo, same data without the site.
* [FreeToken](https://github.com/AIPMAndy/FreeToken) / awesome-free-llm-apis lists - static lists of free API tiers, less freshness-focused.
* Relay-station directories (ai-coding-welfare etc.) - for Claude Code/Codex relay credits, a different category.
