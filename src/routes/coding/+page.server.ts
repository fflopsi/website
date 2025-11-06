import type { Repo } from './repos/+server.js';

export function load({ fetch }) {
  const reposPromise: Promise<Repo[]> = fetch('/coding/repos').then(async (r) => {
    if (!r.ok) {
      const body = await r.json().catch(() => ({}));
      throw new Error(body.error ?? `Request failed: ${r.status}`);
    }
    return r.json();
  });
  return { repos: reposPromise };
}
