# Augment Code: context-engine assistant for very large codebases

Augment Code is the tool that picks up where most coding assistants tap out: enterprise monorepos. The pitch isn't "we have a better model" - it's "we have a better context engine," and that's the right framing. If your codebase is 5M lines and the model has to know which 50 lines actually matter for a given change, the retrieval layer matters more than the model behind it.

## What it actually is

An AI coding platform built around proprietary code retrieval and indexing. Available as a VS Code/JetBrains plugin, a Slack bot, and a remote agent that opens PRs. Founded by ex-Google/Microsoft engineers; series-D funded; aimed at large engineering orgs with millions of LOC. SOC2 / single-tenant deployment options are part of the pitch.

## Setup

1. Sign up at augmentcode.com; for personal use, the free tier gets you started.
2. Install the plugin (**Augment** in VS Code / JetBrains marketplace).
3. Sign in. For enterprise installs, your admin will have a workspace URL.
4. Wait for the indexer to chew through your repo. This takes a while on big codebases - it's the whole point.
5. Use the chat panel or inline completion. The agent has the indexed context by default.

## How I use it day to day

* **"Where does X get called?"** answered without grep-stumbling through five layers of indirection.
* **"Add field Y to model Z and update every caller."** This is the use case - cross-cutting changes in a big repo.
* **Code review** on PRs - the bot has full repo context, not just the diff.
* **Remote agent** (cloud) for asynchronous tasks that take longer than a chat round-trip.

## Gotchas

* The free tier is real but limited; serious use is a paid seat.
* On small repos the context-engine advantage is wasted - [Cursor](cursor.md) or [Cline](cline.md) get you 90% there.
* Indexing takes time. Plan for it on first install; expect re-index on big branch switches.
* Closed-source. If you want OSS, this isn't the path.

## Alternatives

* [Cursor](cursor.md) - has its own indexing, good enough for most repos, broader feature set.
* [Cody (Sourcegraph)](cody.md) - the other "enterprise codebase Q&A" play, with deeper code-search heritage.
* [Greptile](greptile.md) - codebase Q&A focused on PR review.
* [GitHub Copilot](github_copilot.md) - with the workspace feature for repo-aware completion.

## FAQ

### Is Augment Code free?

There's a free Community plan with monthly limits. Team and Enterprise plans are paid - pricing is per-seat.

### Augment vs Cursor?

[Cursor](cursor.md) is a fork-of-VS-Code with its own indexer; Augment is a plugin layer focused on retrieval for very large codebases. On small/medium repos they overlap; on million-line monorepos Augment's retrieval advantage shows.

### Augment vs Cody?

Both target enterprise codebases. [Cody](cody.md) has Sourcegraph's deep code-search heritage; Augment leans harder on agent workflows and IDE integration. Try both if you're at that scale.

### Does it have an agent?

Yes - a remote agent that runs in the cloud and can open PRs. Different shape than the in-IDE agent, intended for longer async tasks.

### Can it stay on-prem?

Enterprise tier supports single-tenant deployments and SOC2 controls. Talk to sales.

## Pointers

* Product: [augmentcode.com](https://www.augmentcode.com)
* Docs: [docs.augmentcode.com](https://docs.augmentcode.com)
* Pricing: [augmentcode.com/pricing](https://www.augmentcode.com/pricing)
* Compare with [cody.md](cody.md) if you're evaluating enterprise options.
