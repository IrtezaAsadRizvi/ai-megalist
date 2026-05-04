# Greptile: codebase-graph AI for search and PR review

Greptile is in the code review and codebase intelligence cluster alongside [CodeRabbit](coderabbit.md) and [Cody](cody.md). Where CodeRabbit reviews PRs, Greptile sits one layer up - it indexes your entire codebase as a graph and answers questions across it. The AI reviewer is one product on top of the index. The "ask anything about your codebase" capability is the broader value.

## What it actually is

A platform that indexes your code (GitHub / GitLab / Bitbucket) into a graph of files, functions, dependencies, and call paths. On top of that:
* **Greptile Chat**: ask questions about your codebase, get cited answers.
* **PR Review**: bot reviews pull requests with whole codebase context.
* **API**: for embedding Greptile into your own tools.

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

## Alternatives

* If you only need PR review (no codebase chat), [CodeRabbit](coderabbit.md) is cheaper and more focused.
* For enterprise-scale code search and intelligence with on-prem deployment, [Cody](cody.md) (Sourcegraph) is the broader platform.
* If you want test generation plus review, [Qodo](qodo.md) (formerly Codium) is shaped for that.
* For solo-dev codebase chat without a separate platform, [Cursor](cursor.md)'s `@workspace` covers most of this in your editor.

## FAQ

### Is Greptile free?

No - Pro is $30/dev/mo, Enterprise on top. There's a trial; for genuinely free codebase Q&A on solo projects, [Cursor](cursor.md) covers most of the same value. Greptile's edge is org-wide indexing across many repos.

### Greptile vs CodeRabbit - which should I use?

Different scopes. [CodeRabbit](coderabbit.md) is PR review with chat in the diff. Greptile reviews PRs with whole-codebase context plus a separate codebase Q&A surface. If you only need review, CodeRabbit. If you want "ask anything about the org's code," Greptile.

### Does Greptile support GitLab and Bitbucket?

Yes - GitHub, GitLab, and Bitbucket. The PR review bot installs as a native app on each platform. Initial indexing time scales with repo size; expect minutes for small repos and hours for large monorepos.

### Is Greptile safe for proprietary code?

Greptile sees your code by default (cloud-hosted). For regulated industries, on-prem deployments are available on Enterprise. Read the data-handling docs and pick the deployment shape that matches your compliance posture.

## Pointers

* [greptile.com](https://www.greptile.com)
* For PR review only without codebase chat: [coderabbit.md](coderabbit.md).
* For deep code search at scale: [cody.md](cody.md) (Sourcegraph).
* For repo specific in editor chat: [cursor.md](cursor.md) covers most of this for solo dev work.
