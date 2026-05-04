# CodeRabbit: AI pull-request reviewer

CodeRabbit is an AI code reviewer in the PR-review category, the head-to-head with [Greptile](greptile.md), [Diamond](diamond.md), and [Qodo](qodo.md). It's the one that opens a PR and leaves the kind of comments a good senior engineer would - grounded in the specific change, with rationale, and willing to be wrong. Where most "AI PR review" tools dump generic style suggestions, CodeRabbit reads the diff in context and points at things that actually matter.

## What it actually is

A GitHub / GitLab / Bitbucket app that reviews PRs automatically. Posts inline comments, summary descriptions, and a chat where you can argue with the bot. Models are configurable (Claude, GPT, Gemini); supports custom rules per repo, learning from your team's prior reviews, security checks, AST level analysis.

## Setup

1. Go to [coderabbit.ai](https://www.coderabbit.ai). Sign in with GitHub.
2. Pricing: Free for OSS, Pro $24/dev/mo, Enterprise.
3. Authorize CodeRabbit on your repos.
4. (Optional) Create `.coderabbit.yaml` at repo root for custom rules, paths to ignore, model selection.
5. Open a PR. Within a couple of minutes, CodeRabbit posts a summary, a diagram of changes, and inline comments.

## How I use it day to day

* **Every PR gets a review.** Even when a human will also review, CodeRabbit catches small things (unused imports, suspicious null handling, edge cases) that humans skim past.
* **Conversation in PR comments.** "Why?" or "I disagree because..." - the bot responds. Sometimes it concedes; sometimes it reinforces with new arguments. Better than a one shot review.
* **Repo specific rules.** A `.coderabbit.yaml` with house conventions ("we use snake_case for filenames," "prefer explicit error returns over throws") shapes future reviews.
* **Security checks** for common patterns (hardcoded secrets, SQL injection candidates). Not a replacement for proper SAST but a free first pass.
* **PR summaries** for stakeholders. The auto generated description tells non engineers what changed.

## Gotchas

* CodeRabbit comments can be noisy on large PRs. Configure scope (path filters, severity thresholds) to keep the signal up.
* The chat history grows in big PRs; threads can get unwieldy. Resolve comments aggressively.
* Custom rules need maintenance. A `.coderabbit.yaml` that's three months old often produces stale reviews.
* For deep architectural review (cross file design feedback), CodeRabbit is weaker than a focused human pair. Use for line level, design for humans.
* Some patterns (test only PRs, generated code commits) trigger redundant reviews. Add path ignores.

## Alternatives

* If you want repo-wide Q&A alongside review, [Greptile](greptile.md) is the closest competitor.
* If you live on Graphite stacks, [Diamond](diamond.md) is the natural fit because it understands stack relationships.
* If you want test generation built into review, [Qodo](qodo.md) (formerly Codium) is the path.
* If you want enterprise-grade large-codebase awareness, [Cody](cody.md) is the Sourcegraph option.

## FAQ

### Is CodeRabbit free?

Free for OSS repos, paid for private. Pro is $24/dev/mo with Enterprise tiers above. The OSS tier is genuinely useful; for a private repo the cost is the going rate for the category.

### CodeRabbit vs Greptile - which should I use?

Close call. CodeRabbit feels stronger on inline review comments and the "argue with the bot" chat flow. [Greptile](greptile.md) feels stronger on repo-wide Q&A and onboarding. Try both for a sprint and pick the one whose voice annoys you less.

### Does CodeRabbit replace human review?

No, and the product doesn't claim it. CodeRabbit catches the things humans skim (unused imports, suspicious null handling, edge cases). Humans catch the things CodeRabbit doesn't see (architectural fit, business logic, "this whole feature is wrong"). Use both.

### What is .coderabbit.yaml?

A repo-root config file for custom rules, path filters, model selection, and severity thresholds. Treat it like a small CLAUDE.md - tight, specific, edited as the codebase evolves. Stale configs produce noisy reviews.

### Can CodeRabbit catch security bugs?

Some - hardcoded secrets, obvious SQL injection, common OWASP-style patterns. It's not a replacement for proper SAST (Snyk, Semgrep, etc.) but it's a useful free first pass on top of human review.

## Pointers

* [coderabbit.ai](https://www.coderabbit.ai)
* Docs: [docs.coderabbit.ai](https://docs.coderabbit.ai)
* Comparable: [Greptile](https://www.greptile.com), [Diamond by Graphite](https://graphite.dev/diamond), [Qodo](https://www.qodo.ai).
* Pair with a human reviewer; CodeRabbit catches the things humans skim, humans catch design decisions.
