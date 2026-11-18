/**
 * Build README.md from templates/README.template.md + data/*.yaml.
 *
 *   node scripts/build-readme.ts           # write README.md
 *   node scripts/build-readme.ts --check   # exit 1 if README.md is stale
 *   node scripts/build-readme.ts --flat    # no "Also listed" split (debug)
 *
 * Placeholders in the template:
 *   <!-- tools:<category-id> -->   heading, intro and table(s) for a category
 *   {{tool_count}}                 number of tools in data/tools.yaml
 *   {{category_count}}             number of categories
 *   {{updated_month}}              newest last_verified, e.g. "November 2026"
 *   {{updated_badge}}              same, URL-encoded for a shields.io badge
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { loadData } from './lib/data.ts';
import { renderCategory } from './lib/render.ts';

export const TEMPLATE_PATH = 'templates/README.template.md';
export const README_PATH = 'README.md';

const HEADER = `<!--
  GENERATED FILE - DO NOT EDIT README.md BY HAND.
  Tools live in data/tools.yaml, categories in data/categories.yaml and
  the hand-written text in templates/README.template.md.
  Rebuild with: npm run build. See CONTRIBUTING.md.
-->
`;

export function buildReadme(opts = { tiers: true }): string {
  const { tools, categories } = loadData();
  const template = readFileSync(TEMPLATE_PATH, 'utf8');

  const newest = tools.map((t) => t.last_verified).sort().at(-1) ?? '';
  const month = new Date(`${newest}T00:00:00Z`).toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

  const seen = new Set<string>();
  const body = template
    .replace(/<!-- tools:([a-z0-9-]+) -->/g, (_, id: string) => {
      const cat = categories.find((c) => c.id === id);
      if (!cat) throw new Error(`Template placeholder for unknown category "${id}"`);
      seen.add(id);
      return renderCategory(cat, tools, opts);
    })
    .replaceAll('{{tool_count}}', String(tools.length))
    .replaceAll('{{category_count}}', String(categories.length))
    .replaceAll('{{updated_month}}', month)
    .replaceAll('{{updated_badge}}', encodeURIComponent(month));

  const missing = categories.filter((c) => !seen.has(c.id)).map((c) => c.id);
  if (missing.length) throw new Error(`No template placeholder for: ${missing.join(', ')}`);
  return HEADER + body;
}

// CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  const flat = process.argv.includes('--flat');
  const built = buildReadme({ tiers: !flat });
  if (process.argv.includes('--check')) {
    const current = readFileSync(README_PATH, 'utf8');
    if (current !== built) {
      console.error(`README.md is out of date with data/tools.yaml.

README.md is generated - edits to it are overwritten. To add or change a tool:
  1. Edit data/tools.yaml (categories: data/categories.yaml,
     surrounding text: templates/README.template.md).
  2. Run: npm run validate && npm run build
  3. Commit data/tools.yaml and the rebuilt README.md together.
Full guide: CONTRIBUTING.md`);
      printFirstDiff(current, built);
      // Inline annotation on the PR's README.md when running in Actions.
      if (process.env.GITHUB_ACTIONS) {
        console.log('::error file=README.md,title=README.md is generated::Do not edit README.md directly. Add or change tools in data/tools.yaml, run npm run build, and commit both files. See CONTRIBUTING.md.');
      }
      process.exit(1);
    }
    console.log('README.md is up to date.');
  } else {
    writeFileSync(README_PATH, built);
    console.log('Wrote README.md');
  }
}

function printFirstDiff(a: string, b: string) {
  const x = a.split('\n');
  const y = b.split('\n');
  const i = x.findIndex((line, n) => line !== y[n]);
  const at = i === -1 ? Math.min(x.length, y.length) : i;
  console.error(`\nFirst difference at README.md line ${at + 1}:\n  committed: ${x[at] ?? '(end of file)'}\n  generated: ${y[at] ?? '(end of file)'}`);
}
