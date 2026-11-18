# Maintaining

Notes for the owner. Contributors want [CONTRIBUTING.md](CONTRIBUTING.md).

## Run the scripts locally

```sh
npm ci                  # once
npm run validate        # schema, duplicates, wording rules (scripts/validate.config.ts)
npm run build           # rewrite README.md and the nav footer in each tools/*.md
npm run check           # fail if README.md or a footer is out of date (what CI runs)
npm run typecheck       # tsc over scripts/

node scripts/stale.ts --days 90           # tools due for re-verification
node scripts/changelog.ts data-2026-11-23 # tool changes since a release tag
```

Node 22.18 or later runs the `.ts` files directly. There's no build step.

## Review a tool PR in under two minutes

CI has already checked the schema, duplicates, word count, banned phrases, https and that README.md matches. Your job is the judgement calls:

1. **Diff is only `data/tools.yaml` + `README.md`** (and maybe a new `tools/*.md`). If it's anything else, ask why.
2. **Open the URL.** Is it real, live, and an AI tool at its core? Does it have a public sign-up or download? No referral or `utm_` parameters?
3. **Affiliation.** If the PR author's name, email or GitHub org matches the tool, then `maker_submitted: true` must be set and the "I am affiliated" box ticked. If they didn't disclose, ask once, then close.
4. **Category.** Would a reader look for it there? If not, suggest the right id.
5. **best_for.** Neutral and specific. It should say what it does, not how great it is. If it reads like ad copy, add `needs-rewrite`.
6. **tier is `listed`** for anything you haven't used yourself.
7. Squash-merge. Add the `maker-submitted` label if it applies.

Close without much discussion: agencies or services, AI-detection evaders ("humanizers"), white-label resellers of an existing entry, and anything that needs a sales call to try.

## Promote a tool to the main table

In `data/tools.yaml`, set `tier: top` on the tool's record. Optionally set `order` to place it (rows sort by `order` within a table, spaced by 10, so `order: 15` lands between the 1st and 2nd rows). Then `npm run build` and commit. To demote, set `tier: listed`.

Writing a writeup for a tool: add `tools/<name>.md` (see the root CLAUDE.md for the voice), set `writeup: tools/<name>.md` on the record, then run `npm run build`. The README row then links to the writeup instead of the site, and the writeup gets its nav footer.

## Scheduled jobs

| Workflow | When | What to do |
| :-- | :-- | :-- |
| `links.yml` | Mondays | Work through the **Broken links** issue: fix `url`, or remove the tool in a PR. The issue closes itself when the next run is clean. |
| `stale.yml` | 1st of the month | **Needs re-verification**: check each tool, then bump `last_verified`. |
| `release.yml` | Mondays | Publishes "Index update" release notes from `scripts/changelog.ts`. Nothing to do unless it fails. |

All three can also be started from the Actions tab (Run workflow).

## Labels

Defined in `.github/labels.yml`. Create or update them with:

```sh
GITHUB_TOKEN=$(gh auth token) GITHUB_REPOSITORY=IrtezaAsadRizvi/ai-megalist node scripts/sync-labels.ts
```

## Recommended repo settings (not automated)

- Branch protection on `main`: require the "PR checks / check" status.
- Settings → General → Social preview: upload a 1280×640 image with the title and tool count.
