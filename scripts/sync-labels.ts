/**
 * Create or update the repo labels listed in .github/labels.yml.
 *
 *   GITHUB_TOKEN=$(gh auth token) GITHUB_REPOSITORY=owner/repo node scripts/sync-labels.ts
 */
import { readFileSync } from 'node:fs';
import YAML from 'yaml';

const labels = YAML.parse(readFileSync('.github/labels.yml', 'utf8')) as { name: string; color: string; description: string }[];
const { GITHUB_TOKEN: token, GITHUB_REPOSITORY: repo } = process.env;
if (!token || !repo) throw new Error('set GITHUB_TOKEN and GITHUB_REPOSITORY');
const headers = { authorization: `Bearer ${token}`, accept: 'application/vnd.github+json', 'content-type': 'application/json' };

for (const l of labels) {
  // PATCH if it exists, otherwise POST
  const url = `https://api.github.com/repos/${repo}/labels`;
  const existing = await fetch(`${url}/${encodeURIComponent(l.name)}`, { headers });
  const res = existing.ok
    ? await fetch(`${url}/${encodeURIComponent(l.name)}`, { method: 'PATCH', headers, body: JSON.stringify({ color: l.color, description: l.description }) })
    : await fetch(url, { method: 'POST', headers, body: JSON.stringify(l) });
  console.log(`${res.ok ? 'ok ' : 'ERR'} ${l.name}${res.ok ? '' : ` ${res.status}`}`);
}
