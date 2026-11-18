/**
 * Markdown changelog of data/tools.yaml between two git refs.
 *
 *   node scripts/changelog.ts <from-ref> [to-ref=HEAD] [--out notes.md]
 *
 * Lists tools added, removed, moved (category/subcategory), with changed
 * pricing or tags, and promoted/demoted between tiers. Prints nothing
 * (and writes an empty file) when no tool changed, so the release
 * workflow can skip.
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { parseArgs } from 'node:util';
import YAML from 'yaml';
import type { Category, Tool } from './lib/data.ts';

const { values, positionals } = parseArgs({ allowPositionals: true, options: { out: { type: 'string' } } });
const [from, to = 'HEAD'] = positionals;
if (!from) throw new Error('usage: node scripts/changelog.ts <from-ref> [to-ref] [--out file]');

/** File content at a ref, or undefined if it didn't exist there. */
function show(ref: string, path: string): string | undefined {
  try {
    return execFileSync('git', ['show', `${ref}:${path}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return undefined;
  }
}
const load = <T>(ref: string, path: string): T[] => (YAML.parse(show(ref, path) ?? '[]') ?? []) as T[];

const before = new Map(load<Tool>(from, 'data/tools.yaml').map((t) => [t.name, t]));
const after = new Map(load<Tool>(to, 'data/tools.yaml').map((t) => [t.name, t]));
const cats = new Map([...load<Category>(from, 'data/categories.yaml'), ...load<Category>(to, 'data/categories.yaml')].map((c) => [c.id, c.title]));
const where = (t: Tool) => cats.get(t.category) ?? t.category;
const link = (t: Tool) => `[${t.name}](${t.url})`;

const added = [...after.values()].filter((t) => !before.has(t.name));
const removed = [...before.values()].filter((t) => !after.has(t.name));
const moved: string[] = [];
const tagged: string[] = [];
const tiered: string[] = [];
for (const [name, b] of after) {
  const a = before.get(name);
  if (!a) continue;
  if (a.category !== b.category || a.subcategory !== b.subcategory) {
    moved.push(`- ${link(b)}: ${where(a)}${a.subcategory ? ` / ${a.subcategory}` : ''} → ${where(b)}${b.subcategory ? ` / ${b.subcategory}` : ''}`);
  }
  const ta = [...a.tags].sort().join(', ');
  const tb = [...b.tags].sort().join(', ');
  if (ta !== tb) tagged.push(`- ${link(b)}: ${ta || 'none'} → ${tb || 'none'}`);
  if (a.tier !== b.tier) tiered.push(`- ${link(b)}: ${b.tier === 'top' ? 'promoted to the main table' : 'moved to Also listed'}`);
}

const sections: [string, string[]][] = [
  ['Added', added.map((t) => `- ${link(t)} (${where(t)}): ${t.best_for}`)],
  ['Removed', removed.map((t) => `- ${t.name} (${where(t)})`)],
  ['Moved', moved],
  ['Pricing or tags changed', tagged],
  ['Tier changes', tiered],
];
const body = sections
  .filter(([, lines]) => lines.length)
  .map(([title, lines]) => `### ${title}\n\n${lines.join('\n')}`)
  .join('\n\n');
const notes = body ? `${body}\n\n<sub>${after.size} tools in the index. Compared ${from}…${to}.</sub>\n` : '';

if (values.out) writeFileSync(values.out, notes);
else process.stdout.write(notes || 'No tool changes.\n');
