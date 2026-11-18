# Contributing

Thanks for helping keep the list useful. One rule matters more than the rest:

> **Don't edit `README.md`.** It's generated from `data/tools.yaml`. A PR that only touches the README fails CI.

## Add a tool

1. Search the README and `data/tools.yaml` for the tool, including its URL. Duplicates get closed.
2. Add one record to `data/tools.yaml`, next to the other tools in the same category:

   ```yaml
   - name: Example AI
     url: https://example.ai
     cluster: create              # think | create | work | build | life
     category: image-generation   # an id from data/categories.yaml
     # subcategory: tts           # required only if the category has subcategories
     best_for: Text-to-image with layer-level edits; exports PSD
     tags: [freemium]             # free | freemium | paid, plus oss / local if true
     maker_submitted: true        # true if you make, work on or are paid by the tool
     added_via: pr
     tier: listed
     last_verified: 2026-11-18    # today, YYYY-MM-DD
   ```

   Leave out `order`. New rows go to the end of the category's "Also listed" table.
3. Run the checks and rebuild:

   ```sh
   npm ci
   npm run validate   # schema, duplicates, wording rules
   npm run build      # regenerates README.md
   ```

4. Commit `data/tools.yaml` **and** the regenerated `README.md`, then open the PR and fill in the checklist.

The full field list, with types, is in `scripts/validate.ts`. The wording rules (banned phrases, word limit) are in `scripts/validate.config.ts`.

## What gets accepted

- **A real AI feature at the core.** The AI does the main job. A regular app with a chatbot bolted on doesn't count.
- **Publicly usable.** Anyone can sign up or download it today, free or paid. No waitlists, no "contact sales" only.
- **Not a thin wrapper that's identical to an existing entry.** If it's the same model behind a different checkout page, say what it does differently or skip it.
- **A neutral `best_for` of 15 words or fewer.** Say what it does and for whom. The `OSS` / `Local` / `Free` markers don't count toward the limit.

Good: `Edit video by editing the transcript`
Bad: `The ultimate all-in-one AI video platform trusted by 10M+ creators!`

## What gets rejected

- **Ad copy.** "Best", "revolutionary", "#1", "ultimate", "game-changing", exclamation marks. CI blocks these.
- **Duplicates**, including the same tool under a different name or URL.
- **Agencies and services.** If a human team does the work, it isn't a tool.
- **Anything built to evade AI detection or plagiarism checks** ("humanizers", "undetectable" rewriters, essay spinners).
- **Affiliate, referral or tracking links.** Use the plain homepage URL. CI strips `utm_*` parameters for the duplicate check, and reviewers will ask you to remove them.

## Maker submissions

Makers are welcome to submit their own tools. Two conditions:

1. **Disclose it.** Set `maker_submitted: true` and tick "I am affiliated" in the PR template. If a submission doesn't disclose and turns out to be from the maker, it gets removed.
2. **It lands in "Also listed"** (`tier: listed`). The maintainer moves tools to the top table after using them.

## Other changes

- **Fix a broken or outdated entry:** edit the record and set `last_verified` to today. Or [open an issue](../../issues/new/choose).
- **Move a tool to another category:** [open a "category change" issue](../../issues/new/choose) first.
- **Text outside the tables** (intros, role stacks, Quick find): edit `templates/README.template.md`, then run `npm run build`. Role-stack opinions are the maintainer's call, so open an issue before sending a PR.

## Labels

| Label | Meaning |
| :-- | :-- |
| `maker-submitted` | PR adds a tool its submitter makes or works on |
| `needs-rewrite` | best_for is ad copy or too long |
| `broken-link` | A tool URL fails, from the weekly link check |
| `stale` | Not re-verified in 90 days, from the monthly check |
| `category-change` | Proposal to move a tool |

These are defined in `.github/labels.yml`.
