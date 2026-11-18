/**
 * Validate data/tools.yaml and data/categories.yaml.
 *
 *   node scripts/validate.ts
 *
 * Exits 1 on any error. Warnings are printed but don't fail.
 * Rule settings (phrase list, word limit, tags) live in validate.config.ts.
 */
import { existsSync } from 'node:fs';
import { z } from 'zod';
import { CATEGORIES_PATH, loadRaw, TOOLS_PATH } from './lib/data.ts';
import {
  ALLOWED_TAGS, CLUSTERS, LEGACY_STYLE_EXCEPTIONS, MARKETING_PHRASES,
  MAX_BEST_FOR_WORDS, MAX_WORDS_IS_ERROR, TRACKING_PARAM_PREFIXES,
} from './validate.config.ts';

// ---------- schemas ----------
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'must be YYYY-MM-DD').refine(
  (s) => !Number.isNaN(Date.parse(`${s}T00:00:00Z`)) && new Date(`${s}T00:00:00Z`).toISOString().startsWith(s),
  'is not a real calendar date',
);
const httpsUrl = z.url({ protocol: /^https$/, error: 'must be an https:// URL' });

const listing = z.strictObject({
  category: z.string().min(1),
  subcategory: z.string().optional(),
  display_name: z.string().min(1).optional(),
  best_for: z.string().min(1),
  order: z.number().int().optional(),
  row_with: z.array(z.string()).optional(),
  row_separator: z.string().optional(),
});

const tool = listing.extend({
  name: z.string().min(1),
  url: httpsUrl,
  cluster: z.enum(CLUSTERS),
  tags: z.array(z.enum(ALLOWED_TAGS, { error: `tag must be one of: ${ALLOWED_TAGS.join(', ')}` })),
  writeup: z.string().regex(/^tools\/[a-z0-9_]+\.md$/, 'must look like tools/<name>.md').optional(),
  maker_submitted: z.boolean(),
  added_via: z.enum(['owner', 'pr']),
  pr: z.number().int().positive().optional(),
  tier: z.enum(['top', 'listed']),
  last_verified: isoDate,
  also_listed: z.array(listing).optional(),
});

const category = z.strictObject({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  cluster: z.enum(CLUSTERS),
  order: z.number().int(),
  intro: z.string().optional(),
  column: z.string().optional(),
  subcategories: z.array(z.strictObject({ id: z.string().regex(/^[a-z0-9-]+$/), title: z.string().min(1) })).optional(),
});

type Tool = z.infer<typeof tool>;
type Listing = z.infer<typeof listing>;

// ---------- helpers (exported for tests / other scripts) ----------
export function normalizeUrl(u: string): string {
  const url = new URL(u);
  url.hostname = url.hostname.toLowerCase();
  for (const key of [...url.searchParams.keys()]) {
    if (TRACKING_PARAM_PREFIXES.some((p) => key.toLowerCase().startsWith(p))) url.searchParams.delete(key);
  }
  return url.toString().replace(/\/+$/, '').replace(/\/\?/, '?');
}

/** Words in best_for, ignoring `Tag` markers. */
export function wordCount(text: string): number {
  return text.replace(/`[^`]*`/g, ' ').split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

export function marketingHits(text: string): string[] {
  const lower = text.toLowerCase();
  return MARKETING_PHRASES.filter((p) => {
    const q = p.toLowerCase();
    // plain words: whole-word match; anything with symbols: substring
    return /^[a-z -]+$/.test(q) ? new RegExp(`\\b${q}\\b`).test(lower) : lower.includes(q);
  });
}

// ---------- run ----------
export function validate(): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];

  const cats = z.array(category).safeParse(loadRaw(CATEGORIES_PATH));
  if (!cats.success) return { errors: zodIssues(CATEGORIES_PATH, cats.error, []), warnings };
  const raw = loadRaw(TOOLS_PATH);
  const tools = z.array(tool).safeParse(raw);
  if (!tools.success) return { errors: zodIssues(TOOLS_PATH, tools.error, raw), warnings };

  const catById = new Map(cats.data.map((c) => [c.id, c]));
  dupes(cats.data.map((c) => c.id), (id) => errors.push(`categories.yaml: duplicate id "${id}"`));

  const names = new Set(tools.data.map((t) => t.name));
  dupes(tools.data.map((t) => t.name.toLowerCase()), (n) => errors.push(`duplicate tool name "${n}"`));
  dupes(tools.data.map((t) => normalizeUrl(t.url)), (u) => errors.push(`duplicate url ${u} (${tools.data.filter((t) => normalizeUrl(t.url) === u).map((t) => t.name).join(', ')})`));

  for (const t of tools.data) {
    if (t.added_via === 'owner' && t.pr) warnings.push(`${t.name}: has pr but added_via is owner`);
    if (t.writeup && !existsSync(t.writeup)) errors.push(`${t.name}: writeup ${t.writeup} does not exist`);
    const cat = catById.get(t.category);
    if (cat && cat.cluster !== t.cluster) errors.push(`${t.name}: cluster "${t.cluster}" but category "${t.category}" is in "${cat.cluster}"`);
    for (const l of [t, ...(t.also_listed ?? [])]) checkListing(t, l);
  }

  function checkListing(t: Tool, l: Listing) {
    const where = l === t ? t.name : `${t.name} > ${l.display_name ?? l.category}`;
    const cat = catById.get(l.category);
    if (!cat) {
      errors.push(`${where}: category "${l.category}" is not in categories.yaml (ids: ${[...catById.keys()].join(', ')})`);
      return;
    }
    const subs = cat.subcategories?.map((s) => s.id) ?? [];
    if (subs.length && !l.subcategory) errors.push(`${where}: category "${cat.id}" needs a subcategory (${subs.join(', ')})`);
    if (l.subcategory && !subs.includes(l.subcategory)) errors.push(`${where}: subcategory "${l.subcategory}" not in "${cat.id}" (${subs.join(', ') || 'none'})`);
    for (const n of l.row_with ?? []) if (!names.has(n)) errors.push(`${where}: row_with names unknown tool "${n}"`);

    const legacy = LEGACY_STYLE_EXCEPTIONS[where];
    const style = (msg: string, isError: boolean) => (isError && !legacy ? errors : warnings).push(`${where}: ${msg}${legacy ? ' (legacy exception)' : ''}`);
    const words = wordCount(l.best_for);
    if (words > MAX_BEST_FOR_WORDS) style(`best_for has ${words} words (max ${MAX_BEST_FOR_WORDS})`, MAX_WORDS_IS_ERROR);
    const hits = marketingHits(l.best_for);
    if (hits.length) style(`best_for uses marketing language: ${hits.map((h) => `"${h}"`).join(', ')}`, true);
  }

  return { errors, warnings };
}

function dupes(values: string[], report: (v: string) => void) {
  const seen = new Set<string>();
  for (const v of new Set(values.filter((v) => (seen.has(v) ? true : (seen.add(v), false))))) report(v);
}

function zodIssues(file: string, err: z.ZodError, raw: unknown): string[] {
  return err.issues.map((i) => {
    const [idx, ...rest] = i.path;
    const name = Array.isArray(raw) ? (raw[Number(idx)] as { name?: string })?.name : undefined;
    const field = rest.length ? ` field "${rest.join('.')}"` : '';
    return `${file}: ${name ? `"${name}"` : `entry ${String(idx)}`}${field}: ${i.message}`;
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { errors, warnings } = validate();
  for (const w of warnings) console.warn(`warning: ${w}`);
  for (const e of errors) console.error(`error: ${e}`);
  console.log(`\n${errors.length} error(s), ${warnings.length} warning(s).`);
  if (errors.length) {
    console.error('Fix the errors above in data/tools.yaml. Rules: CONTRIBUTING.md and scripts/validate.config.ts.');
    process.exit(1);
  }
}
