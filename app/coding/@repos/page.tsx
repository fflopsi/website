import Link from 'next/link';

type Repo = {
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

// Fetch and display GitHub repositories in a formatted list
export default async function Repositories() {
  const data = {
    headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` },
    next: { revalidate: 60 },
  };
  const user = 'fflopsi';
  const repos: Repo[] = [];
  try {
    // Fetch repositories from the GitHub API
    const reposFetch = await fetch(
      `https://api.github.com/users/${user}/repos`,
      data,
    );
    if (!reposFetch.ok) {
      throw new Error(`GitHub API responded with status: ${reposFetch.status}`);
    }
    repos.push(...(await reposFetch.json()));
    // Fetch organisations from the GitHub API
    const orgsFetch = await fetch(
      `https://api.github.com/users/${user}/orgs`,
      data,
    );
    if (!orgsFetch.ok) {
      throw new Error(`GitHub API responded with status: ${orgsFetch.status}`);
    }
    // Add organisation repositories
    for (const org of await orgsFetch.json()) {
      const orgFetch = await fetch(
        `https://api.github.com/orgs/${org.login}/repos`,
        data,
      );
      if (!orgFetch.ok) {
        throw new Error(`GitHub API responded with status: ${orgFetch.status}`);
      }
      repos.push(...(await orgFetch.json()));
    }
  } catch (error) {
    console.error('Error fetching repositories: ', error);
    return (
      <ul>
        <li>Something went wrong.</li>
      </ul>
    );
  }

  // Separate active and archived repositories
  const activeRepos = repos.filter((repo) => !repo.archived);
  const archivedRepos = repos.filter((repo) => repo.archived);
  // Sort each list by recent activity (pushed_at) in descending order
  activeRepos.sort(
    (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
  );
  archivedRepos.sort(
    (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
  );
  // Combine lists with active repositories first
  const sortedRepos = [...activeRepos, ...archivedRepos];

  return (
    <ul>
      {sortedRepos.map((repo) => (
        <li key={repo.id}>
          <Link target='_blank' href={repo.html_url}>
            {repo.name}
          </Link>
          {repo.owner.login !== user && (
            <>
              {' '}
              (
              <Link target='_blank' href={repo.owner.html_url}>
                {repo.owner.login}
              </Link>
              )
            </>
          )}
          {repo.archived && <i> (Archived)</i>}:{' '}
          {repo.description || <i>(No description)</i>}
        </li>
      ))}
    </ul>
  );
}
