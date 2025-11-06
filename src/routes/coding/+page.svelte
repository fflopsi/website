<script lang="ts">
  let { data } = $props();
</script>

<h2>About my coding journey</h2>

<p>
  Since about 2016, I’ve been teaching myself how to code. The main languages I’ve been learning are
  <a target="_blank" href="https://www.python.org/">Python</a>,
  <a target="_blank" href="https://www.java.com/">Java</a> and
  <a target="_blank" href="https://kotlinlang.org/">Kotlin</a>. I’ve also looked into many other
  languages like
  <a target="_blank" href="https://en.wikipedia.org/wiki/Shell_script">Shell</a>,
  <a target="_blank" href="https://www.gnu.org/software/bash/">Bash</a>,
  <a target="_blank" href="https://www.latex-project.org/">LaTeX</a>,
  <a target="_blank" href="https://www.c-language.org/">C</a>,
  <a target="_blank" href="https://isocpp.org/">C++</a>,
  <a target="_blank" href="https://learn.microsoft.com/en-gb/dotnet/csharp/">C#</a>,
  <a target="_blank" href="https://en.wikipedia.org/wiki/SQL">SQL</a>,
  <a target="_blank" href="https://nixos.org/">Nix</a>,
  <a target="_blank" href="https://html.spec.whatwg.org/multipage/">HTML</a>,
  <a target="_blank" href="https://www.w3.org/TR/css/">CSS</a>,
  <a target="_blank" href="https://262.ecma-international.org/15.0/index.html">JavaScript</a>,
  <a target="_blank" href="https://www.typescriptlang.org/">TypeScript</a>,
  <a target="_blank" href="https://dart.dev/">Dart</a>,
  <a target="_blank" href="https://www.r-project.org/">R</a>, etc.
</p>
<p>
  Nearly everything bigger than some simple scripts is available on
  <a target="_blank" href="https://github.com/fflopsi">my GitHub</a>, a list of all my repositories
  can be found
  <a href="#repos">below</a>.
</p>

<h2>Some bigger projects</h2>

<p>
  <i>
    Note that most of these projects haven't been updated in quite some time, except
    <a href="#mensa">Mensa app</a>,
    <a href="#nixos">NixOS Config</a> and
    <a href="#snippets">Latex Suite Snippets</a>.
  </i>
</p>

<h3 id="mensa">Mensa app</h3>

<p>
  In 2025, I took over the development and maintenance of the
  <a target="_blank" href="https://play.google.com/store/apps/details?id=ch.famoser.mensa">
    Mensa app
  </a>
  for Android from
  <a target="_blank" href="https://famoser.ch/">Florian Moser</a>. The app lists all the mensas of
  ETHZ and UZH and displays their respective menus. I updated the app's UI and internals and added a
  few features, such as multi-day menu preview, highlighting vegetarian/vegan options, menu images,
  configuration options and more.
</p>

<p>
  Check out the
  <a target="_blank" href="https://github.com/fflopsi/mensa-zh">source code on GitHub</a>
  or
  <a target="_blank" href="https://play.google.com/store/apps/details?id=ch.famoser.mensa">
    download it from the Play Store
  </a>.
</p>

<h3 id="nixos">NixOS Configuration and Arch Customization</h3>

<p>
  I originally started my
  <a target="_blank" href="https://www.linux.org/">Linux</a> journey on
  <a target="_blank" href="https://ubuntu.com/">Ubuntu</a>, but then quickly switched over to
  <a target="_blank" href="https://manjaro.org/">Manjaro</a> and soon to
  <a target="_blank" href="https://endeavouros.com/">EndeavourOS</a>, where I stayed quite a while.
</p>
<p>
  I wanted to customize my
  <a target="_blank" href="https://archlinux.org/">Arch</a>/EndeavourOS installation, so I started
  writing a simple collection of some Bash scripts to customize it to my liking, e.g. installing
  some packages, theming and customizing
  <a target="_blank" href="https://www.gnome.org/">Gnome</a> and installing some extensions, some
  configuration, etc. All these scripts can be found
  <a target="_blank" href="https://github.com/fflopsi/arch-customization">here</a>.
</p>
<p>
  Upon starting my studies at ETH, I did not have much time to tinker with my system, so I switched
  from Arch/EndeavourOS to
  <a target="_blank" href="https://nixos.org/">NixOS</a> to better organize my system configuration.
  The flake and all the files necessary (system configuration and
  <a target="_blank" href="https://nix-community.github.io/home-manager/">Home Manager</a> files) to
  rebuild my systems are available
  <a target="_blank" href="https://github.com/fflopsi/nixos-config">here</a>.
</p>

<h3 id="snippets">Obsidian Latex Suite Snippets</h3>

<p>
  During lectures, I take notes using
  <a target="_blank" href="https://obsidian.md/">Obsidian</a> and the plugin
  <a target="_blank" href="https://github.com/artisticat1/obsidian-latex-suite">Latex Suite</a>.
  Using this, one can write snippets to speed up LaTeX input and streamline the notetaking
  experience.
</p>
<p>
  My collection of snippets is tailored to the courses I'm taking and contains text snippets for
  heavily used words and terms as well as Latex snippets for quick math inputs. All the snippets can
  be found
  <a target="_blank" href="https://github.com/fflopsi/obsidian-latex-suite-snippets">here</a>.
</p>

<h3>Tournaments</h3>

<p>
  Tournaments is an
  <a target="_blank" href="https://www.android.com/">Android</a> app built with
  <a target="_blank" href="https://developer.android.com/compose">Jetpack Compose</a> for managing
  croquet tournaments with multiple players and multiple games per tournament. I’m converting this
  to a
  <a target="_blank" href="https://www.jetbrains.com/compose-multiplatform/">
    Compose Multiplatform
  </a>
  project, more information about it can be found
  <a target="_blank" href="https://github.com/fflopsi/tournaments">here</a>.
</p>

<h3>Two Body Problem</h3>

<p>
  This was my matriculation project (project at the end of Swiss high school). It is a simulation of
  the gravitational
  <a target="_blank" href="https://en.wikipedia.org/wiki/Two-body_problem">two body problem</a>,
  written in Python with
  <a target="_blank" href="https://vpython.org/">VPython</a>. You can adjust options to define how
  the simulation looks/works and values to define the physical properties of the two bodies. The
  simulation itself can be found
  <a target="_blank" href="https://github.com/fflopsi/twobodyproblem">here</a>, a graphical utility
  for entering the options and values is available
  <a target="_blank" href="https://github.com/fflopsi/twobodyproblem-gui">here</a>.
</p>

<h3>WorldUtils</h3>

<p>
  WorldUtils is a
  <a target="_blank" href="https://www.minecraft.net">Minecraft</a>
  <a target="_blank" href="https://www.spigotmc.org/">Spigot</a> plugin containing some handy
  utilities for your Minecraft server, e.g. saving and viewing global and personal positions,
  sending your positions to other players, controlling a global and personal timer and resetting the
  whole world/server. The plugin can be found
  <a target="_blank" href="https://github.com/fflopsi/worldutils">here</a>.
</p>
<p>
  WorldUtils Projects is an extension to WorldUtils and contains some long-term Minecraft projects.
  At the moment, there is only one: AllItems, with the objective to collect all obtainable items in
  the game. This plugin is available
  <a target="_blank" href="https://github.com/fflopsi/worldutils-projects">here</a>.
</p>

<h2>My repositories</h2>

<ul>
  {#await data.repos}
    <li>Fetching repositories...</li>
  {:then repos}
    {#each repos as repo}
      <li>
        <a target="_blank" href={repo.html_url}>{repo.name}</a>{#if repo.owner.login !== 'fflopsi'}
          &nbsp;(<a target="_blank" href={repo.owner.html_url}>{repo.owner.login}</a>)
        {/if}{#if repo.archived}
          &nbsp;<i>(Archived)</i>
        {/if}:
        {#if !repo.description}
          <i>(No description)</i>
        {:else}
          {repo.description}
        {/if}
      </li>
    {/each}
  {:catch error}
    <li>Something went wrong: {error.message}</li>
  {/await}
</ul>
