/** Turn tools + categories into the Markdown that replaces each placeholder. */
import type { Category, Listing, Tool } from './data.ts';

export interface RenderOptions {
  /** Split each table into top-tier rows and an "Also listed" table. */
  tiers: boolean;
}

interface Row { tool: Tool; listing: Listing; seq: number }

export function renderCategory(cat: Category, tools: Tool[], opts: RenderOptions): string {
  const out = [`### ${cat.title}`, ''];
  if (cat.intro) out.push(cat.intro, '');
  if (cat.subcategories?.length) {
    cat.subcategories.forEach((sub, i) => {
      if (i > 0) out.push('');
      out.push(`#### ${sub.title}`, ...tables(cat, sub.id, tools, opts));
    });
  } else {
    out.push(...tables(cat, undefined, tools, opts));
  }
  return out.join('\n');
}

function tables(cat: Category, sub: string | undefined, tools: Tool[], opts: RenderOptions): string[] {
  const rows = rowsFor(cat.id, sub, tools);
  const column = cat.column ?? 'Tool';
  if (!opts.tiers) return table(column, rows, tools);
  const top = rows.filter((r) => r.tool.tier === 'top');
  const listed = rows.filter((r) => r.tool.tier !== 'top');
  if (!top.length) return table('Also listed', listed, tools);
  if (!listed.length) return table(column, top, tools);
  return [...table(column, top, tools), '', ...table('Also listed', listed, tools)];
}

/** Every listing in this table, minus tools already shown inside another row. */
export function rowsFor(category: string, sub: string | undefined, tools: Tool[]): Row[] {
  const rows: Row[] = [];
  let seq = 0;
  for (const tool of tools) {
    for (const listing of [tool, ...(tool.also_listed ?? [])]) {
      if (listing.category === category && listing.subcategory === sub) rows.push({ tool, listing, seq: seq++ });
    }
  }
  const absorbed = new Set(rows.flatMap((r) => r.listing.row_with ?? []));
  return rows
    .filter((r) => !absorbed.has(r.tool.name))
    .sort((a, b) => (a.listing.order ?? Infinity) - (b.listing.order ?? Infinity) || a.seq - b.seq);
}

function table(column: string, rows: Row[], tools: Tool[]): string[] {
  return [`| ${column} | Best for |`, '| :-- | :-- |', ...rows.map((r) => `| ${label(r, tools)} | ${r.listing.best_for} |`)];
}

function label({ tool, listing }: Row, tools: Tool[]): string {
  const lead = link(listing.display_name ?? tool.name, tool);
  const others = (listing.row_with ?? []).map((name) => {
    const t = tools.find((x) => x.name === name);
    if (!t) throw new Error(`${tool.name}: row_with refers to unknown tool "${name}"`);
    return link(t.name, t);
  });
  return [lead, ...others].join(listing.row_separator ?? ' · ');
}

/** README rows link to the hands-on writeup when one exists, else the site. */
export function link(text: string, tool: Tool): string {
  return `[${text}](${tool.writeup ?? tool.url})`;
}
