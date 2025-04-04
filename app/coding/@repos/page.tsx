import Link from "next/link";

export const dynamic = 'force-dynamic';

// Fetch and display GitHub repositories in a formatted list
async function fetchRepositories() {
  type Repo = {
    id: number,
    name: string,
    description: string,
    archived: boolean,
    pushed_at: string,
    owner: {
      login: string,
      html_url: string,
    },
    html_url: string,
  }

  try {
    const headers = { Authorization: `token ${process.env.GITHUB_TOKEN}` };
    const user = 'fflopsi';
    // Fetch repositories from the GitHub API
    const reposFetch = await fetch(
      `https://api.github.com/users/${user}/repos`,
      {
        headers: headers,
        next: { revalidate: 60 },
      },
    );
    if (!reposFetch.ok) {
      throw new Error(`GitHub API responded with status: ${reposFetch.status}`);
    }
    const repos: Repo[] = await reposFetch.json();
    // Fetch organizations from the GitHub API
    const orgsFetch = await fetch(
      `https://api.github.com/users/${user}/orgs`,
      {
        headers: headers,
        next: { revalidate: 60 },
      },
    );
    if (!orgsFetch.ok) {
      throw new Error(`GitHub API responded with status: ${orgsFetch.status}`);
    }
    const orgs = await orgsFetch.json();
    // Add organization repositories
    for (const org of orgs) {
      const orgFetch = await fetch(
        `https://api.github.com/orgs/${org.login}/repos`,
        {
          headers: headers,
          next: { revalidate: 60 },
        },
      );
      if (!orgFetch.ok) {
        throw new Error(`GitHub API responded with status: ${orgFetch.status}`);
      }
      const orgRepos: Repo[] = await orgFetch.json()
      repos.push(...orgRepos);
    }

    // Separate active and archived repositories
    const activeRepos = repos.filter(repo => !repo.archived);
    const archivedRepos = repos.filter(repo => repo.archived);
    // Sort each list by recent activity (pushed_at) in descending order
    activeRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
    archivedRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
    // Combine lists with active repositories first
    const sortedRepos: Repo[] = [...activeRepos, ...archivedRepos];

    return (
      <ul>
        {sortedRepos.map((repo) => (
          <li key={repo.id}>
            <Link target='_blank' href={repo.html_url}>
              {repo.name}
            </Link>
            {repo.owner.login !== user && (
              <> (<Link target='_blank' href={repo.owner.html_url}>{repo.owner.login}</Link>)</>
            )}
            {repo.archived && <i> (Archived)</i>}: {repo.description || <i>(No description provided)</i>}
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    console.error('Error fetching repositories: ', error);
    return (
      <ul><li>Something went wrong.</li></ul>
    );
  }
}

export default async function Repositories() {
  return fetchRepositories();
}
