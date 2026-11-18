/** Load data/*.yaml. Types here mirror the zod schema in validate.ts. */
import { readFileSync } from 'node:fs';
import YAML from 'yaml';

export type Tag = 'free' | 'oss' | 'local' | 'paid' | 'freemium';

/** One row in a category table. A tool's top-level fields are its main row. */
export interface Listing {
  category: string;
  subcategory?: string;
  /** Row label when it differs from `name`, e.g. "ChatGPT Deep Research". */
  display_name?: string;
  best_for: string;
  /** Sort key inside the table. Lower comes first. Omit to go last. */
  order?: number;
  /** Other tools (by name) shown in the same row, e.g. "Vapi · Retell · Bland". */
  row_with?: string[];
  /** Joiner for row_with links. Default " · ". */
  row_separator?: string;
}

export interface Tool extends Listing {
  name: string;
  url: string;
  cluster: string;
  tags: Tag[];
  writeup?: string;
  maker_submitted: boolean;
  added_via: 'owner' | 'pr';
  pr?: number;
  tier: 'top' | 'listed';
  last_verified: string;
  /** Extra rows in other tables (same tool, different job). */
  also_listed?: Listing[];
}

export interface Category {
  id: string;
  title: string;
  cluster: string;
  order: number;
  intro?: string;
  /** First column header. Default "Tool". */
  column?: string;
  subcategories?: { id: string; title: string }[];
}

export const TOOLS_PATH = 'data/tools.yaml';
export const CATEGORIES_PATH = 'data/categories.yaml';

export function loadRaw(path: string): unknown {
  return YAML.parse(readFileSync(path, 'utf8'));
}

export function loadData() {
  return {
    tools: loadRaw(TOOLS_PATH) as Tool[],
    categories: loadRaw(CATEGORIES_PATH) as Category[],
  };
}
