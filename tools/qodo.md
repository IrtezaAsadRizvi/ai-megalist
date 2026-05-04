# Qodo: AI test generation and PR review

Qodo sits in the code review and quality category alongside [CodeRabbit](coderabbit.md), [Greptile](greptile.md), and [Diamond](diamond.md), specialised for tests. Qodo (formerly Codium) is the AI testing and review tool that takes test generation seriously. Where most AI coding tools treat tests as an afterthought ("oh, generate a test for this function"), Qodo's pitch is "we'll generate the right tests" - boundary cases, error paths, mocks for dependencies. For teams trying to lift test coverage without manually writing every spec, Qodo shows up.

## What it actually is

An AI platform with three main products:
* **Qodo Gen**: IDE extension for VS Code, JetBrains, generates tests, refactors, edits.
* **Qodo Cover**: automated test coverage improvement; runs in CI, adds tests for uncovered paths.
* **Qodo Merge** (formerly PR Agent) - AI PR review focused on test quality and behaviour preservation.

## Setup

### IDE
1. Install Qodo Gen from the VS Code Marketplace or JetBrains Plugin Marketplace.
2. Sign up at [qodo.ai](https://www.qodo.ai). Free tier exists; Teams $19/dev/mo.
3. Sign in via the IDE.
4. Right click a function → "Generate Tests" → review and accept.

### Qodo Cover (CI)
1. Add the Qodo Cover GitHub action to your workflow file.
2. Configure target coverage uplift per PR.
3. The action runs on PRs, suggests new tests, opens commits.

### Qodo Merge
1. Install the GitHub app.
2. Configure in the repo settings or `.qodo-merge.yaml`.
3. The bot reviews new PRs.

## How I use it day to day

* **Honest:** I've used Qodo Gen in IDE for test generation; not in production CI.
* **Test generation for legacy code.** Function with no tests; right click → generate. Qodo produces a test file with multiple cases, often catches edge conditions I'd miss writing manually.
* **Boundary case suggestions.** Even when I write tests myself, Qodo suggests cases I forgot - empty input, max int, locale specific behaviour.
* **For uncovered paths.** Qodo Cover analyses coverage reports; targets specific uncovered lines / branches; writes tests aimed at them. Useful for legacy lift.
* **PR review focused on tests.** Qodo Merge flags PRs where production code changed without test updates. Decent culture nudge for teams trying to keep coverage honest.

## Gotchas

* Generated tests are starting points. Always read; the model occasionally generates tests that pass for the wrong reason.
* Mock generation can be aggressive - Qodo will mock everything in sight. Sometimes you want integration tests; configure scope.
* Language coverage varies. Python, TypeScript, Java, Go: strong. Niche languages: spottier.
* Qodo Cover changes the contents of your repo; review every commit before merging.
* For full PR review (not just tests): pair with [coderabbit.md](coderabbit.md) or use Qodo Merge alongside.

## Alternatives

* If you want broad PR review beyond tests, [CodeRabbit](coderabbit.md) is the category default.
* If you want codebase Q&A and review with deep repo context, [Greptile](greptile.md) is the alternative.
* If your team uses stacked PRs via Graphite, [Diamond](diamond.md) is tightly integrated.
* For agentic test writing as part of broader code generation, [Cursor](cursor.md) or [Claude Code](claude_code.md) handle tests inline.

## FAQ

### Is Qodo free?

Yes, Qodo Gen has a free tier in the IDE. Teams plan is $19/dev/mo and unlocks Qodo Cover (CI test generation) and Qodo Merge (PR review). The free tier is enough to evaluate the test generation quality.

### Qodo vs CodeRabbit - which one?

Different focuses. Qodo specialises in test quality - generating tests, flagging untested changes, lifting coverage. [CodeRabbit](coderabbit.md) is broader PR review (style, bugs, security). They're complementary; some teams run both.

### What languages does Qodo support?

Strong on Python, TypeScript, Java, Go. Spottier on niche languages (Elixir, Clojure, Haskell). Check coverage for your stack before standardising.

### Does Qodo modify my code?

Qodo Gen suggests in-IDE - you accept or reject. Qodo Cover commits new tests directly via a GitHub action; review every commit before merging. Qodo Merge only comments on PRs unless you configure auto-fixes.

## Pointers

* [qodo.ai](https://www.qodo.ai)
* For PR review more broadly: [coderabbit.md](coderabbit.md), [Greptile](https://www.greptile.com).
* For agentic code generation in general: [cursor.md](cursor.md), [claude_code.md](claude_code.md).
* The Qodo Gen IDE extension is the lowest cost way to evaluate; install and try it on a function before committing.
