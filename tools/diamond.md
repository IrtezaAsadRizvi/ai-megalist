# Diamond by Graphite

Diamond is the AI code reviewer integrated into Graphite's stacked PR workflow. Where CodeRabbit and Greptile review one PR at a time, Diamond understands stacks: the sequence of dependent PRs that's a common pattern at companies that use Graphite for trunk based development. For teams already on Graphite, Diamond is the natural review layer; for teams not on Graphite, it's a reason to try.

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

## Pointers

* Web: [graphite.dev/diamond](https://graphite.dev/diamond)
* Graphite docs: [graphite.dev/docs](https://graphite.dev/docs)
* Pricing: tied to Graphite plans.
* Pairs and competes with [coderabbit.md](coderabbit.md), [greptile.md](greptile.md), [qodo.md](qodo.md), and [cody.md](cody.md). Diamond's stacked PR awareness is the differentiator; the rest of the AI review category overlaps significantly.
