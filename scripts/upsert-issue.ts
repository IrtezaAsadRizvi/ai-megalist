/**
 * Keep exactly one open issue per title (no duplicates).
 *
 *   node scripts/upsert-issue.ts --title "Broken links" --label broken-link --body-file report.md
 *
 * - body file has content -> update the open issue with that title, or open one
 * - body file is empty    -> close the open issue (if any) with an "all clear" note
 *
 * Needs GITHUB_TOKEN and GITHUB_REPOSITORY (both set in Actions).
 */
import { readFileSync } from 'node:fs';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: { title: { type: 'string' }, label: { type: 'string' }, 'body-file': { type: 'string' } },
});
const title = values.title!;
const body = readFileSync(values['body-file']!, 'utf8').trim();
const repo = process.env.GITHUB_REPOSITORY;
const token = process.env.GITHUB_TOKEN;
if (!title || !repo || !token) throw new Error('need --title, GITHUB_REPOSITORY and GITHUB_TOKEN');

async function api(path: string, init: { method?: string; body?: unknown } = {}) {
  const res = await fetch(`https://api.github.com/repos/${repo}${path}`, {
    method: init.method ?? 'GET',
    headers: { authorization: `Bearer ${token}`, accept: 'application/vnd.github+json', 'content-type': 'application/json' },
    body: init.body ? JSON.stringify(init.body) : undefined,
  });
  if (!res.ok) throw new Error(`${init.method ?? 'GET'} ${path}: ${res.status} ${await res.text()}`);
  return res.json();
}

// Exact title match among open issues (the search API is fuzzy, so filter here).
// Match on title only, so a missing or renamed label can never cause a duplicate.
const open = (await api('/issues?state=open&per_page=100')) as { number: number; title: string; pull_request?: unknown }[];
const existing = open.find((i) => i.title === title && !i.pull_request);

if (!body) {
  if (existing) {
    await api(`/issues/${existing.number}/comments`, { method: 'POST', body: { body: 'All clear on the latest run. Closing.' } });
    await api(`/issues/${existing.number}`, { method: 'PATCH', body: { state: 'closed' } });
    console.log(`Closed #${existing.number}`);
  } else console.log('Nothing to report.');
} else if (existing) {
  await api(`/issues/${existing.number}`, { method: 'PATCH', body: { body } });
  console.log(`Updated #${existing.number}`);
} else {
  const made = (await api('/issues', { method: 'POST', body: { title, body, labels: values.label ? [values.label] : [] } })) as { number: number };
  console.log(`Opened #${made.number}`);
}
