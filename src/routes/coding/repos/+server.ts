import { GITHUB_TOKEN } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export type Repo = {
  id: number;
  name: string;
  description: string;
  archived: boolean;
  pushed_at: string;
  owner: {
    login: string;
    html_url: string;
  };
  html_url: string;
};

let cache: { timestamp: number; data: Repo[] } | null = null;

export async function GET() {
  const now = Date.now();

  // Return cached data
  if (cache && now - cache.timestamp < 300_000) {
    return json(cache.data, {
      headers: {
        'Cache-Control': 'public, max-age=300',
      },
    });
  }

  const user = 'fflopsi';
  const headers = { Authorization: `token ${GITHUB_TOKEN}`, 'User-Agent': 'sveltekit-app/1.0' };
  const repos: Repo[] = [];

  try {
    // Fetch repositories from the GitHub API
    const userRes = await fetch(`https://api.github.com/users/${user}/repos`, { headers });
    repos.push(...(await userRes.json()));
    // Fetch organisations from the GitHub API
    const orgRes = await fetch(`https://api.github.com/users/${user}/orgs`, { headers });
    // Add organisation repositories
    for (const org of await orgRes.json()) {
      const orgReposRes = await fetch(`https://api.github.com/orgs/${org.login}/repos`, {
        headers,
      });
      repos.push(...(await orgReposRes.json()));
    }
  } catch (error) {
    console.error('Error fetching repositories: ', error);
    return json({ error: 'Failed to load repos' }, { status: 500 });
  }
  // Separate active and archived repositories
  const activeRepos = repos.filter((repo) => !repo.archived);
  const archivedRepos = repos.filter((repo) => repo.archived);
  // Sort each list by recent activity (pushed_at) in descending order
  activeRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
  archivedRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
  // Combine lists with active repositories first
  const sortedRepos = [...activeRepos, ...archivedRepos];

  // Cache results
  cache = { timestamp: now, data: sortedRepos };

  return json(sortedRepos, {
    headers: {
      'Cache-Control': 'public, max-age=300',
    },
  });
}
