# Diamond by Graphite: AI code review for stacked PRs

Diamond is an AI code reviewer in the PR-review category, sitting alongside [CodeRabbit](coderabbit.md), [Greptile](greptile.md), and [Qodo](qodo.md), but uniquely shaped around Graphite's stacked-PR workflow. Where CodeRabbit and Greptile review one PR at a time, Diamond understands stacks: the sequence of dependent PRs that's a common pattern at companies that use Graphite for trunk based development. For teams already on Graphite, Diamond is the natural review layer; for teams not on Graphite, it's a reason to try.

## What it actually is

An AI code review tool by Graphite, built into the Graphite CLI and web app. Reviews PRs and stacks of PRs, posting comments and a summary back to GitHub. Supports inline suggestions, custom rules, and integration with Graphite's review and merge queue features. Subscription pricing.

## Setup

1. Sign up for Graphite at [graphite.dev](https://graphite.dev). Connect a GitHub repo.
2. Install the Graphite CLI (`brew install withgraphite/tap/graphite` or similar).
3. Enable Diamond in the Graphite web app for the repo.
4. Open or stack PRs as usual; Diamond comments arrive automatically.
5. (Optional) Configure custom review rules or skip rules at the repo or org level.

## How I use it day to day

I'm not on Graphite full time; the engineers I know who use Diamond report:

* **Better stack awareness.** Diamond understands the relationship between dependent PRs in a stack, which catches issues a single PR reviewer misses.
* **Tight integration with the Graphite workflow.** Comments and decisions flow through Graphite's UI, not just GitHub's.
* **Custom rules.** Teams encode their own conventions; Diamond enforces.

For teams not committed to Graphite, CodeRabbit and Greptile are easier to adopt. Diamond's value compounds when the workflow is already stack based.

## Gotchas

* The Graphite assumption is load bearing. If you're not on Graphite, Diamond is overkill.
* Like all AI reviewers, expect occasional false positives and confidently wrong suggestions. Treat as a junior reviewer, not the final word.
* Pricing tracks Graphite's broader tiers; for solo developers it's overkill.
* Stack workflows take a week or two to internalize. The investment pays off if you're on a team that ships fast.

## Alternatives

* If you're not on Graphite stacks, [CodeRabbit](coderabbit.md) is easier to adopt and gives you most of the AI review value.
* If you want repo-wide Q&A alongside review, [Greptile](greptile.md) is the closest competitor.
* If you want AI test generation built into review, [Qodo](qodo.md) is the dedicated path.
* For enterprise large-codebase review with code-graph awareness, [Cody](cody.md) is the Sourcegraph play.

## FAQ

### Do I need Graphite to use Diamond?

Yes. Diamond is built into the Graphite CLI and web app; the value compounds when your workflow is already stack-based. For non-Graphite teams, [CodeRabbit](coderabbit.md) or [Greptile](greptile.md) are the realistic picks.

### Diamond vs CodeRabbit - which is better?

Different teams. CodeRabbit is the broader product, easier to adopt, works on any GitHub repo. [Diamond](diamond.md) is sharper at understanding stacks - the sequence of dependent PRs - which catches issues a single-PR reviewer misses. Pick by whether you're on Graphite.

### What's a "stacked PR"?

A sequence of dependent PRs where each one builds on the previous - common at companies using trunk-based development with frequent small commits. Graphite is the dominant tool for this pattern; Diamond reviews the stack as a unit rather than each PR in isolation.

### Is Diamond worth it for solo developers?

No. The stacked-PR workflow is a team practice; for solo developers Diamond is overkill. Stick with CodeRabbit or just rely on a frontier chat model to review diffs manually.

## Pointers

* Web: [graphite.dev/diamond](https://graphite.dev/diamond)
* Graphite docs: [graphite.dev/docs](https://graphite.dev/docs)
* Pricing: tied to Graphite plans.
* Pairs and competes with [coderabbit.md](coderabbit.md), [greptile.md](greptile.md), [qodo.md](qodo.md), and [cody.md](cody.md). Diamond's stacked PR awareness is the differentiator; the rest of the AI review category overlaps significantly.
