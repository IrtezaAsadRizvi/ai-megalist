/**
 * One-time migration: parse the hand-written README tables into
 * data/tools.yaml and data/categories.yaml.
 *
 * It also reads git history (git log -S) and PR bodies (gh CLI) to fill
 * added_via / pr / maker_submitted. Needs `gh` logged in for that part.
 *
 *   node scripts/extract.ts            # writes both YAML files
 *   node scripts/extract.ts --no-gh    # skip GitHub lookups (offline)
 *
 * Kept in the repo as a record of how the data was seeded. After the
 * README becomes generated (phase 3), do not run this again: it would
 * overwrite hand edits in data/*.yaml.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import YAML from 'yaml';

const REPO = 'IrtezaAsadRizvi/ai-megalist';
const OWNER_EMAILS = ['irteza.asad.cse@ulab.edu.bd'];
const TODAY = new Date().toISOString().slice(0, 10);
const USE_GH = !process.argv.includes('--no-gh');
const CACHE_FILE = 'node_modules/.cache/extract-gh.json';
const ghCache: Record<string, string> = existsSync(CACHE_FILE) ? JSON.parse(readFileSync(CACHE_FILE, 'utf8')) : {};
const KEY_ORDER = ['id', 'name', 'title', 'url', 'cluster', 'category', 'subcategory', 'display_name', 'best_for', 'tags', 'writeup',
  'maker_submitted', 'added_via', 'pr', 'tier', 'last_verified', 'order', 'row_with', 'row_separator', 'also_listed',
  'intro', 'column', 'subcategories'];

// README headings -> short, stable ids. Titles stay exactly as written.
const CATEGORY_IDS: Record<string, string> = {
  'General-purpose assistants': 'assistants',
  'Research & deep research': 'research',
  'AI search engines': 'ai-search',
  'AI browsers & sidebars': 'ai-browsers',
  'Writing & content': 'writing',
  'Image generation': 'image-generation',
  'Image editing & object work': 'image-editing',
  'Video generation': 'video-generation',
  'Video editing & repurposing': 'video-editing',
  'Voice & speech': 'voice',
  'Music generation': 'music',
  'Stem separation & practice': 'stem-separation',
  'Productivity (notes, meetings, email, scheduling)': 'productivity',
  'Agents & browser automation': 'agents',
  'Workflow automation': 'workflow-automation',
  'Design (UI/UX, graphics, presentations)': 'design',
  'Data, analysis & spreadsheets': 'data',
  'Coding': 'coding',
  'App & web builders (vibe coding / no-code)': 'app-builders',
  'Local & open-source model runners': 'local-models',
  'Model APIs & dev platforms': 'model-apis',
  'Personal companions': 'companions',
  'Education & learning': 'education',
};
const SUBCATEGORY_IDS: Record<string, string> = {
  'General / long-form': 'long-form',
  'Marketing / brand voice / SEO': 'marketing-seo',
  'Fiction & creative': 'fiction',
  'TTS / voice cloning': 'tts',
  'Transcription & speech-to-text': 'transcription',
  'Real-time conversation & voice agents': 'voice-agents',
  'Meeting notes': 'meeting-notes',
  'Notes & second-brain': 'notes',
  'Email': 'email',
  'Scheduling & tasks': 'scheduling',
  'Terminal / agentic coding': 'terminal-agents',
  'AI-native IDEs & editors': 'ides',
  'Inline completion / copilots': 'completion',
  'Code review & quality': 'code-review',
  'Cloud / remote SWE agents': 'cloud-agents',
};

// Hand fixes where the writeup heuristic picks a docs page or nothing.
const URL_OVERRIDES: Record<string, string> = {
  'Claude': 'https://claude.ai',
  'Claude Code': 'https://www.anthropic.com/claude-code',
  'Claude Computer Use': 'https://docs.anthropic.com/en/docs/agents-and-tools/computer-use',
  'ChatGPT Operator / Agent': 'https://openai.com/index/introducing-operator',
  'v0 by Vercel': 'https://v0.dev',
  'Talkie': 'https://www.talkie-ai.com',
};

type Link = { label: string; href: string };
type Row = { category: string; subcategory?: string; links: Link[]; separator: string; bestFor: string; position: number };
type Category = {
  id: string; title: string; cluster: string; intro?: string; order: number;
  column?: string; subcategories?: { id: string; title: string }[];
};

// ---------- 1. parse README ----------
const lines = readFileSync('README.md', 'utf8').split('\n');
const categories: Category[] = [];
const rows: Row[] = [];
let cluster: string | undefined;
let cat: Category | undefined;
let sub: string | undefined;
let position = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const h1 = line.match(/^# \S+ (Think|Create|Work|Build|Life)$/);
  if (h1) { cluster = h1[1].toLowerCase(); cat = undefined; continue; }
  if (/^## /.test(line)) { cluster = undefined; cat = undefined; continue; } // Sources etc.
  if (!cluster) continue;

  const h3 = line.match(/^### (.+)$/);
  if (h3) {
    const id = CATEGORY_IDS[h3[1]];
    if (!id) throw new Error(`No id mapped for category "${h3[1]}"`);
    cat = { id, title: h3[1], cluster, order: (categories.length + 1) * 10 };
    // intro = first plain paragraph between heading and first table/h4
    for (let j = i + 1; j < lines.length && !/^(\||#)/.test(lines[j]); j++) {
      if (lines[j].trim()) { cat.intro = lines[j].trim(); break; }
    }
    categories.push(cat);
    sub = undefined;
    continue;
  }
  const h4 = line.match(/^#### (.+)$/);
  if (h4 && cat) {
    const id = SUBCATEGORY_IDS[h4[1]];
    if (!id) throw new Error(`No id mapped for subcategory "${h4[1]}"`);
    (cat.subcategories ??= []).push({ id, title: h4[1] });
    sub = id;
    continue;
  }
  if (!cat || !line.startsWith('|')) continue;

  const cells = line.slice(1, -1).split('|').map((c) => c.trim());
  if (cells[1] === 'Best for') { // header row
    if (cells[0] !== 'Tool') cat.column = cells[0];
    position = 0;
    continue;
  }
  if (/^:?-+/.test(cells[0])) continue; // separator row
  if (cells.length !== 2) throw new Error(`Line ${i + 1}: expected 2 cells`);

  const links = [...cells[0].matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map((m) => ({ label: m[1], href: m[2] }));
  const leftover = cells[0].replace(/\[[^\]]+\]\([^)]+\)/g, '').trim();
  const separator = leftover.startsWith('/') ? ' / ' : ' · ';
  if (!links.length || leftover.replace(/[/·\s]/g, '')) throw new Error(`Line ${i + 1}: unexpected first cell "${cells[0]}"`);
  position += 10;
  rows.push({ category: cat.id, subcategory: sub, links, separator, bestFor: cells[1], position });
}

// ---------- 2. group rows into tools ----------
// Identity: writeup path when a row links to tools/*.md, otherwise its URL.
// The first row (README order) for a tool is its primary listing; later
// rows become also_listed entries. Extra links in a row become row_with.
type Listing = { category: string; subcategory?: string; display_name?: string; best_for: string; order: number; row_with?: string[]; row_separator?: string };
type Tool = {
  name: string; url: string; cluster: string; category: string; subcategory?: string; display_name?: string;
  best_for: string; order: number; row_with?: string[]; row_separator?: string;
  tags: string[]; writeup?: string; maker_submitted: boolean; added_via: 'owner' | 'pr'; pr?: number;
  tier: 'top' | 'listed'; last_verified: string; also_listed?: Listing[];
};
const tools = new Map<string, Tool>();
const nameOf = new Map<string, string>(); // key -> tool name
const keyOf = (l: Link) => l.href.startsWith('tools/') ? l.href : normalizeUrl(l.href);
const report: string[] = [];
const urlLog: string[] = ['| Tool | Writeup | url | Picked from |', '| :-- | :-- | :-- | :-- |'];

for (const r of rows) {
  const [lead, ...rest] = r.links;
  const key = keyOf(lead);
  // make sure every linked tool exists (row_with members included)
  for (const l of r.links) {
    const k = keyOf(l);
    if (!tools.has(k)) {
      const tool: Tool = {
        name: l.label, url: '', cluster: categories.find((c) => c.id === r.category)!.cluster,
        category: r.category, subcategory: r.subcategory, best_for: r.bestFor, order: r.position,
        tags: deriveTags(r.bestFor), maker_submitted: false, added_via: 'owner', tier: 'top', last_verified: TODAY,
      };
      if (l.href.startsWith('tools/')) tool.writeup = l.href;
      tools.set(k, tool);
      nameOf.set(k, l.label);
      continue;
    }
    if (l !== lead) continue;
    // already known tool, new placement -> also_listed
    const tool = tools.get(k)!;
    const listing: Listing = { category: r.category, subcategory: r.subcategory, best_for: r.bestFor, order: r.position };
    if (l.label !== tool.name) listing.display_name = l.label;
    if (rest.length) { listing.row_with = rest.map((x) => x.label); listing.row_separator = r.separator; }
    (tool.also_listed ??= []).push(listing);
  }
  // first time we see the lead: attach row_with on the primary listing
  const leadTool = tools.get(key)!;
  if (rest.length && !leadTool.also_listed?.some((x) => x.order === r.position && x.category === r.category)) {
    leadTool.row_with = rest.map((x) => x.label);
    leadTool.row_separator = r.separator;
  }
}
// row_with should point at canonical tool names, not row labels
for (const t of tools.values()) {
  for (const l of [t, ...(t.also_listed ?? [])]) {
    if (!l.row_with) continue;
    l.row_with = l.row_with.map((label) => {
      const r = rows.find((x) => x.links.some((y) => y.label === label))!;
      return nameOf.get(keyOf(r.links.find((y) => y.label === label)!))!;
    });
    if (l.row_separator === ' · ') delete l.row_separator; // default
  }
}

// ---------- 3. URLs ----------
for (const [key, t] of tools) {
  if (!t.writeup) { t.url = rows.flatMap((r) => r.links).find((l) => keyOf(l) === key)!.href; continue; }
  if (!existsSync(t.writeup)) { report.push(`- ${t.name}: writeup ${t.writeup} missing`); continue; }
  const { url, how } = homepageFromWriteup(readFileSync(t.writeup, 'utf8'), t.name);
  t.url = URL_OVERRIDES[t.name] ?? url ?? '';
  urlLog.push(`| ${t.name} | ${t.writeup} | ${t.url} | ${URL_OVERRIDES[t.name] ? 'hand override' : how} |`);
  if (URL_OVERRIDES[t.name]) continue;
  if (how === 'first link in body' || !url) report.push(`- ${t.name}: url taken from ${how} of ${t.writeup} -> ${url ?? 'NONE'}`);
}

// ---------- 4. git history + PRs ----------
// Explicit relationship statements only. Anything else -> review list.
const DISCLOSURE = /\b(I am|I'm|we are|we're) (the |a |one of the )?(maker|founder|co-?founder|creator|developer|author|builder|team behind)|\bI (work on|work at|built|made|created|develop|maintain)\b|\b(we|our team) (built|made|created|develop|maintain)\b|\bdisclos(ure|ing)\b|\baffiliat(ed|ion)\b/i;
const prCache = new Map<number, { body: string; title: string; author: string }>();
const makerReview: string[] = [];
const makerYes: string[] = [];
for (const t of tools.values()) {
  const allLabels = new Set([t.name, ...(t.also_listed ?? []).map((l) => l.display_name ?? t.name)]);
  const needles = [...allLabels].map((n) => `[${n}](`);
  // earliest commit that introduced any of the tool's row labels
  let first: { sha: string; email: string; subject: string; time: number } | undefined;
  for (const needle of needles) {
    const out = git(['log', '--reverse', '--format=%H%x09%ae%x09%at%x09%s', '-S', needle, '--', 'README.md']).split('\n')[0];
    if (!out) continue;
    const [sha, email, at, subject] = out.split('\t');
    if (!first || +at < first.time) first = { sha, email, subject, time: +at };
  }
  if (!first) { report.push(`- ${t.name}: no introducing commit found`); continue; }
  if (OWNER_EMAILS.includes(first.email)) continue; // owner + top (defaults)
  t.added_via = 'pr';
  t.tier = 'listed';
  const pr = Number(first.subject.match(/\(#(\d+)\)$/)?.[1]) || (USE_GH ? prForCommit(first.sha) : undefined);
  if (pr) t.pr = pr;
  const info = pr && USE_GH ? prInfo(pr) : undefined;
  const text = `${info?.title ?? ''}\n${info?.body ?? ''}`;
  const m = text.match(DISCLOSURE);
  // skip negated statements like "I am not affiliated"
  const before = m ? text.slice(Math.max(0, m.index! - 12), m.index!) : '';
  if (m && !/\bnot\s*$|\bno\s*$|n't\s*$/i.test(before)) {
    t.maker_submitted = true;
    makerYes.push(`- ${t.name} (#${pr}): "…${text.slice(Math.max(0, m.index! - 30), m.index! + 60).replace(/\s+/g, ' ')}…"`);
    continue;
  }
  const emailHint = emailMatchesTool(first.email, t.url) ? ` (committer email ${first.email.split('@')[1]} matches tool domain)` : '';
  makerReview.push(`- ${t.name}${pr ? ` (#${pr})` : ` (commit ${first.sha.slice(0, 7)})`}${emailHint}`);
}

// ---------- 5. write ----------
const ordered = [...tools.values()].sort((a, b) => catOrder(a.category) - catOrder(b.category) || a.order - b.order);
const header = `# One record per tool. The README tables are generated from this file.
# Field reference: CONTRIBUTING.md. Seeded by scripts/extract.ts on ${TODAY}.
`;
writeFileSync('data/tools.yaml', header + YAML.stringify(ordered.map(clean), { lineWidth: 0 }));
writeFileSync('data/categories.yaml', `# Categories, in display order. ids are referenced by data/tools.yaml.\n` + YAML.stringify(categories.map(clean), { lineWidth: 0 }));
writeFileSync('extract-report.md', [
  `# extract.ts report (${TODAY})`, '', `${tools.size} tools, ${rows.length} rows, ${categories.length} categories.`, '',
  '## Needs attention', ...report, '', '## maker_submitted=true (disclosure found)', ...makerYes, '', '## maker_submitted=false without disclosure (review)', ...makerReview, '', '## Homepage URLs pulled from writeups', ...urlLog,
].join('\n') + '\n');
console.log(`${tools.size} tools, ${rows.length} rows, ${categories.length} categories. See extract-report.md`);

// ---------- helpers ----------
function catOrder(id: string) { return categories.find((c) => c.id === id)!.order; }

function clean<T extends object>(o: T): T {
  // fixed key order, undefined dropped, so diffs stay readable
  const entries = Object.entries(o).filter(([, v]) => v !== undefined);
  entries.sort(([a], [b]) => KEY_ORDER.indexOf(a) - KEY_ORDER.indexOf(b));
  return Object.fromEntries(entries.map(([k, v]) => [k, k === 'also_listed' ? (v as object[]).map(clean) : v])) as T;
}

function normalizeUrl(u: string) {
  const url = new URL(u);
  url.hostname = url.hostname.toLowerCase();
  for (const k of [...url.searchParams.keys()]) if (k.startsWith('utm_')) url.searchParams.delete(k);
  return url.toString().replace(/\/$/, '');
}

function deriveTags(bestFor: string) {
  const tags = new Set<string>();
  if (bestFor.includes('`OSS`')) tags.add('oss');
  if (bestFor.includes('`Local`')) tags.add('local');
  const freeTier = /`Free` tier|free tier|free plan|free daily|free account|free \d|freemium|free for students|no card/i.test(bestFor);
  if (bestFor.includes('`Free`') && !freeTier) tags.add('free');
  if (freeTier || (/\bpaid\b/i.test(bestFor) && /\bfree\b/i.test(bestFor))) tags.add('freemium');
  else if (/\bpaid\b|pay per|pay-as-you-go|credit packs/i.test(bestFor)) tags.add('paid');
  return [...tags];
}

function homepageFromWriteup(md: string, name: string): { url?: string; how: string } {
  // Prefer a Pointers link whose host shares a word with the tool name
  // (claude.ai for "Claude"), else the first Pointers link, else the first
  // link anywhere. Results are listed in the PR for a human check.
  const links = (s: string) => [...s.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]).filter((u) => !/\.(svg|png|jpe?g|gif)$/i.test(u));
  const words = name.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length >= 3);
  const byName = (us: string[]) => us.find((u) => words.some((w) => new URL(u).hostname.replace(/[^a-z0-9]/g, '').includes(w)));
  const pointers = links(md.split(/^## Pointers\s*$/m)[1] ?? '');
  const body = links(md);
  const hit = byName(pointers);
  if (hit) return { url: hit, how: 'pointers' };
  if (pointers[0]) return { url: pointers[0], how: 'pointers (first link; name not in host)' };
  const bodyHit = byName(body) ?? body[0];
  return { url: bodyHit, how: 'first link in body' };
}

function git(args: string[]) { return execFileSync('git', args, { encoding: 'utf8' }).trim(); }
function gh(args: string[]) {
  const k = args.join(' ');
  if (!(k in ghCache)) {
    ghCache[k] = execFileSync('gh', args, { encoding: 'utf8' }).trim();
    mkdirSync('node_modules/.cache', { recursive: true });
    writeFileSync(CACHE_FILE, JSON.stringify(ghCache));
  }
  return ghCache[k];
}

function prForCommit(sha: string): number | undefined {
  const n = gh(['api', `repos/${REPO}/commits/${sha}/pulls`, '--jq', '.[0].number // empty']);
  return n ? Number(n) : undefined;
}

function prInfo(n: number) {
  if (!prCache.has(n)) {
    const j = JSON.parse(gh(['pr', 'view', String(n), '--repo', REPO, '--json', 'title,body,author']));
    prCache.set(n, { title: j.title, body: j.body ?? '', author: j.author?.login ?? '' });
  }
  return prCache.get(n)!;
}

function emailMatchesTool(email: string, url: string) {
  try {
    const domain = email.split('@')[1].toLowerCase();
    if (/gmail|qq\.com|163\.com|users\.noreply|outlook|hotmail|mail\.ru|proton/.test(domain)) return false;
    return new URL(url).hostname.replace(/^www\./, '').endsWith(domain.replace(/^[^.]+\.(?=[^.]+\.[^.]+$)/, ''));
  } catch { return false; }
}
