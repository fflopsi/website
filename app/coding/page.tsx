import Wrapper from '@/components/wrapper';
import Link from 'next/link';
import Script from 'next/script';
import getMetadata from '../res/metadata';

const title = 'Florian: Coding';

export const dynamic = 'force-dynamic';
export const metadata = getMetadata(title, 'Florian\'s hobby coding journey');

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

// Fetch and display GitHub repositories in a formatted list
async function fetchRepositories() {
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

export default async function Coding() {
  return (
    <Wrapper title={title} route='/coding/' updated='2025-03-10'>
      <h2>About my coding journey</h2>
      <p>Since about 2016, I’ve been teaching myself how to code. The main languages I’ve been learning are <Link target='_blank' href='https://www.python.org/'>Python</Link> and <Link target='_blank' href='https://www.java.com/'>Java</Link> and more recently, <Link target='_blank' href='https://kotlinlang.org/'>Kotlin</Link> and <Link target='_blank' href='https://www.r-project.org/'>R</Link>. I’ve also looked into many other languages like <Link target='_blank' href='https://en.wikipedia.org/wiki/Shell_script'>Shell</Link>/<Link target='_blank' href='https://www.gnu.org/software/bash/'>Bash</Link>, <Link target='_blank' href='https://www.latex-project.org/'>LaTeX</Link>, <Link target='_blank' href='https://www.c-language.org/'>C</Link>/<Link target='_blank' href='https://isocpp.org/'>C++</Link>, <Link target='_blank' href='https://learn.microsoft.com/en-gb/dotnet/csharp/'>C#</Link>, <Link target='_blank' href='https://en.wikipedia.org/wiki/SQL'>SQL</Link>, <Link target='_blank' href='https://nixos.org/'>Nix</Link>, <Link target='_blank' href='https://html.spec.whatwg.org/multipage/'>HTML</Link>/<Link target='_blank' href='https://www.w3.org/TR/css/'>CSS</Link>/<Link target='_blank' href='https://262.ecma-international.org/15.0/index.html'>JavaScript</Link>, <Link target='_blank' href='https://dart.dev/'>Dart</Link>, etc.</p>
      <p>Nearly everything bigger than some simple scripts is available on <Link target='_blank' href='https://github.com/fflopsi'>my GitHub</Link>, a list of all my repositories can be found <Link href='#repos'>below</Link>.</p>

      <h2>Some bigger projects</h2>
      <p><i>Note that most of these projects haven't been updated in some time, except <Link href='#nixos'>NixOS Config</Link> and <Link href='#snippets'>Latex Suite Snippets</Link>.</i></p>

      <h3 id='nixos'>NixOS Configuration and Arch Customization</h3>
      <p>I originally started my <Link target='_blank' href='https://www.linux.org/'>Linux</Link> journey on <Link target='_blank' href='https://ubuntu.com/'>Ubuntu</Link>, but then quickly switched over to <Link target='_blank' href='https://manjaro.org/'>Manjaro</Link> and soon to <Link target='_blank' href='https://endeavouros.com/'>EndeavourOS</Link>, where I stayed quite a while.</p>
      <p>I wanted to customize my <Link target='_blank' href='https://archlinux.org/'>Arch</Link>/EndeavourOS installation, so I started writing a simple collection of some Bash scripts to customize it to my liking, e.g. installing some packages, theming and customizing <Link target='_blank' href='https://www.gnome.org/'>Gnome</Link> and installing some extensions, some configuration, etc. All these scripts can be found <Link target='_blank' href='https://github.com/fflopsi/arch-customization'>here</Link>.</p>
      <p>Upon starting my studies at ETH, I did not have much time to fiddle with my system, so I switched from Arch/EndeavourOS to <Link target='_blank' href='https://nixos.org/'>NixOS</Link> to better organize my system configuration. The flake and all the files necessary (system configuration and <Link target='_blank' href='https://nix-community.github.io/home-manager/'>Home Manager</Link> files) to rebuild my systems are available <Link target='_blank' href='https://github.com/fflopsi/nixos-config'>here</Link>.</p>

      <h3 id='snippets'>Obsidian Latex Suite Snippets</h3>
      <p>During lectures, I take notes using <Link target='_blank' href='https://obsidian.md/'>Obsidian</Link> and the plugin <Link target='_blank' href='https://github.com/artisticat1/obsidian-latex-suite'>Latex Suite</Link>. Using this, one can write snippets to speed up LaTeX input and streamline the notetaking experience.</p>
      <p>My collection of snippets is tailored to the courses I'm taking (currently 3<sup>rd</sup> semester Physics BSc) and contains text snippets for heavily used words and terms as well as Latex snippets for quick math inputs. All the snippets can be found <Link target='_blank' href='https://github.com/fflopsi/obsidian-latex-suite-snippets'>here</Link>.</p>

      <h3>Tournaments</h3>
      <p>Tournaments is an <Link target='_blank' href='https://www.android.com/'>Android</Link> app built with <Link target='_blank' href='https://developer.android.com/compose'>Jetpack Compose</Link> for managing croquet tournaments with multiple players and multiple games per tournament. I’m converting this to a <Link target='_blank' href='https://www.jetbrains.com/compose-multiplatform/'>Compose Multiplatform</Link> project, more information about it can be found <Link target='_blank' href='https://github.com/fflopsi/tournaments'>here</Link>.</p>

      <h3>Two Body Problem</h3>
      <p>This was my matriculation project (project at the end of Swiss high school). It is a simulation of the gravitational <Link target='_blank' href='https://en.wikipedia.org/wiki/Two-body_problem'>two body problem</Link>, written in Python with <Link target='_blank' href='https://vpython.org/'>VPython</Link>. You can adjust options to define how the simulation looks/works and values to define the physical properties of the two bodies. The simulation itself can be found <Link target='_blank' href='https://github.com/fflopsi/twobodyproblem'>here</Link>, a graphical utility for entering the options and values is available <Link target='_blank' href='https://github.com/fflopsi/twobodyproblem-gui'>here</Link>.</p>

      <h3>WorldUtils</h3>
      <p>WorldUtils is a <Link target='_blank' href='https://www.minecraft.net'>Minecraft</Link> <Link target='_blank' href='https://www.spigotmc.org/'>Spigot</Link> plugin containing some handy utilities for your Minecraft server, e.g. saving and viewing global and personal positions, sending your positions to other players, controlling a global and personal timer and resetting the whole world/server. The plugin can be found <Link target='_blank' href='https://github.com/fflopsi/worldutils'>here</Link>.</p>
      <p>WorldUtils Projects is an extension to WorldUtils and contains some long-term Minecraft projects. At the moment, there is only one: AllItems, with the objective to collect all obtainable items in the game. This plugin is available <Link target='_blank' href='https://github.com/fflopsi/worldutils-projects'>here</Link>.</p>

      <h2>My repositories</h2>
      {await fetchRepositories()}
    </Wrapper>
  );
}
