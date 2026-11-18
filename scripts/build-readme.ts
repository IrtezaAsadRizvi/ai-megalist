/**
 * Build README.md from templates/README.template.md + data/*.yaml, and
 * refresh the generated nav footer at the end of each tools/*.md writeup.
 *
 *   node scripts/build-readme.ts           # write README.md + writeup footers
 *   node scripts/build-readme.ts --check   # exit 1 if any of them is stale
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
import { navBlock, withNav } from './lib/writeup-nav.ts';

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

/** Every generated file: path -> expected content. */
export function buildAll(opts = { tiers: true }): Map<string, string> {
  const out = new Map([[README_PATH, buildReadme(opts)]]);
  const { tools, categories } = loadData();
  for (const t of tools) {
    if (!t.writeup) continue;
    out.set(t.writeup, withNav(readFileSync(t.writeup, 'utf8'), navBlock(t, tools, categories)));
  }
  return out;
}

// CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  const files = buildAll({ tiers: !process.argv.includes('--flat') });
  if (process.argv.includes('--check')) {
    const stale = [...files].filter(([path, want]) => readFileSync(path, 'utf8') !== want);
    if (stale.length) {
      console.error(`${stale.map(([p]) => p).join(', ')} out of date with data/tools.yaml.

README.md is generated - edits to it are overwritten. To add or change a tool:
  1. Edit data/tools.yaml (categories: data/categories.yaml,
     surrounding text: templates/README.template.md).
  2. Run: npm run validate && npm run build
  3. Commit data/tools.yaml and the rebuilt files together.
Full guide: CONTRIBUTING.md`);
      const [path, want] = stale[0];
      printFirstDiff(path, readFileSync(path, 'utf8'), want);
      // Inline annotation on the PR when running in Actions.
      if (process.env.GITHUB_ACTIONS) {
        console.log(`::error file=${path},title=${path} is generated::Do not edit generated content directly. Add or change tools in data/tools.yaml, run npm run build, and commit the result. See CONTRIBUTING.md.`);
      }
      process.exit(1);
    }
    console.log(`README.md and ${files.size - 1} writeup footers are up to date.`);
  } else {
    for (const [path, content] of files) if (readFileSync(path, 'utf8') !== content) writeFileSync(path, content);
    console.log(`Wrote README.md and refreshed ${files.size - 1} writeup footers.`);
  }
}

function printFirstDiff(path: string, a: string, b: string) {
  const x = a.split('\n');
  const y = b.split('\n');
  const i = x.findIndex((line, n) => line !== y[n]);
  const at = i === -1 ? Math.min(x.length, y.length) : i;
  console.error(`\nFirst difference at ${path} line ${at + 1}:\n  committed: ${x[at] ?? '(end of file)'}\n  generated: ${y[at] ?? '(end of file)'}`);
}
