// Fetch and display GitHub repositories in a formatted list
async function fetchRepositories() {
  try {
    const token = "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";
    const headers = { Authorization: `token ${token}` };
    const user = "fflopsi";
    // Fetch repositories from the GitHub API
    const reposFetch = await fetch(`https://api.github.com/users/${user}/repos`, { headers: headers });
    if (!reposFetch.ok) {
      throw new Error(`GitHub API responded with status: ${reposFetch.status}`);
    }
    const repos = await reposFetch.json();
    // Fetch organizations from the GitHub API
    const orgsFetch = await fetch(`https://api.github.com/users/${user}/orgs`, { headers: headers });
    if (!orgsFetch.ok) {
      throw new Error(`GitHub API responded with status: ${orgsFetch.status}`);
    }
    const orgs = await orgsFetch.json();
    // Add organization repositories
    for (const org of orgs) {
      const orgFetch = await fetch(`https://api.github.com/orgs/${org.login}/repos`, { headers: headers });
      if (!orgFetch.ok) {
        throw new Error(`GitHub API responded with status: ${orgFetch.status}`);
      }
      const orgRepos = await orgFetch.json()
      repos.push(...orgRepos);
    }

    // Separate active and archived repositories
    const activeRepos = repos.filter(repo => !repo.archived);
    const archivedRepos = repos.filter(repo => repo.archived);
    // Sort each list by recent activity (pushed_at) in descending order
    activeRepos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
    archivedRepos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
    // Combine lists with active repositories first
    const sortedRepos = [...activeRepos, ...archivedRepos];

    // Generate HTML content
    const container = document.getElementById("repos");
    sortedRepos.forEach(repo => {
      const archived = repo.archived ? " <i>(Archived)</i>" : "";
      const owner = repo.owner.login != user ? ` (<a target="_blank" href="${repo.owner.html_url}">${repo.owner.login}</a>)` : "";
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <a target="_blank" href="${repo.html_url}">${repo.name}</a>${owner}${archived}: ${repo.description || "<i>(No description provided)</i>"}
      `;
      container.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching repositories: ", error);
  }
}

// Run the script on page load
window.onload = fetchRepositories;
