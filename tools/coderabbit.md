# CodeRabbit

CodeRabbit is the AI code reviewer that opens a PR and leaves the kind of comments a good senior engineer would — grounded in the specific change, with rationale, and willing to be wrong. Where most "AI PR review" tools dump generic style suggestions, CodeRabbit reads the diff in context and points at things that actually matter.

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
* **Conversation in PR comments.** "Why?" or "I disagree because..." — the bot responds. Sometimes it concedes; sometimes it reinforces with new arguments. Better than a one shot review.
* **Repo specific rules.** A `.coderabbit.yaml` with house conventions ("we use snake_case for filenames," "prefer explicit error returns over throws") shapes future reviews.
* **Security checks** for common patterns (hardcoded secrets, SQL injection candidates). Not a replacement for proper SAST but a free first pass.
* **PR summaries** for stakeholders. The auto generated description tells non engineers what changed.

## Gotchas

* CodeRabbit comments can be noisy on large PRs. Configure scope (path filters, severity thresholds) to keep the signal up.
* The chat history grows in big PRs; threads can get unwieldy. Resolve comments aggressively.
* Custom rules need maintenance. A `.coderabbit.yaml` that's three months old often produces stale reviews.
* For deep architectural review (cross file design feedback), CodeRabbit is weaker than a focused human pair. Use for line level, design for humans.
* Some patterns (test only PRs, generated code commits) trigger redundant reviews. Add path ignores.

## Pointers

* [coderabbit.ai](https://www.coderabbit.ai)
* Docs: [docs.coderabbit.ai](https://docs.coderabbit.ai)
* Comparable: [Greptile](https://www.greptile.com), [Diamond by Graphite](https://graphite.dev/diamond), [Qodo](https://www.qodo.ai).
* Pair with a human reviewer; CodeRabbit catches the things humans skim, humans catch design decisions.
