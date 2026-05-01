# Greptile

Greptile is the AI codebase search and review tool. Where CodeRabbit reviews PRs, Greptile sits one layer up — it indexes your entire codebase as a graph and answers questions across it. The AI reviewer is one product on top of the index. The "ask anything about your codebase" capability is the broader value.

## What it actually is

A platform that indexes your code (GitHub / GitLab / Bitbucket) into a graph of files, functions, dependencies, and call paths. On top of that:
* **Greptile Chat** — ask questions about your codebase, get cited answers.
* **PR Review** — bot reviews pull requests with whole codebase context.
* **API** — for embedding Greptile into your own tools.

## Setup

1. Go to [greptile.com](https://www.greptile.com), sign in with GitHub.
2. Pricing: Pro $30/dev/mo, Enterprise.
3. Authorize repos. Initial indexing takes minutes (small repos) to hours (huge ones).
4. (Web app) Chat at [app.greptile.com](https://app.greptile.com).
5. (PR Review) Install the GitHub app; Greptile reviews new PRs automatically.
6. (API) Get a key from settings; same indexing, called from your own apps.

## How I use it day to day

* **Honest:** I've evaluated Greptile on a few engagements; not my daily tool.
* **Onboarding to a new codebase.** "How does authentication work in this repo?" Greptile cites the exact files and functions. Faster than reading documentation that doesn't exist.
* **Cross repo questions.** Multiple repos indexed; "where else is this pattern used in the org?" works.
* **PR review with whole codebase context.** Where CodeRabbit sees the diff plus a few related files, Greptile sees the whole codebase. Catches subtle inconsistencies others miss.
* **Searching for non obvious things.** "Find all places we handle Stripe webhooks but don't validate signatures." Greptile understands the intent, not just the literal text.
* **Embedding in custom tools.** The API lets you put codebase Q&A into Slack, internal portals, dev tooling.

## Gotchas

* Indexing is the gating step. Big repos take real time and storage; expect costs to scale with codebase size.
* Greptile sees your code. For regulated industries, evaluate; on prem deployments are available on Enterprise.
* The chat quality is downstream of the index quality. Stale indexes give stale answers; configure auto reindex on push.
* Pricing per developer ramps fast for large teams. Compare with Sourcegraph + Cody if you have complex code intelligence needs already.
* Some advanced features (custom rules, severity tuning) require Pro+.

## Pointers

* [greptile.com](https://www.greptile.com)
* For PR review only without codebase chat: [coderabbit.md](coderabbit.md).
* For deep code search at scale: [cody.md](cody.md) (Sourcegraph).
* For repo specific in editor chat: [cursor.md](cursor.md) covers most of this for solo dev work.
