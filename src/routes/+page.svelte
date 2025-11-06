<script>
  import RepoLink from '$lib/RepoLink.svelte';
  import { GithubSolid } from 'flowbite-svelte-icons';
  // import GithubSolid from 'flowbite-svelte-icons/GithubSolid.svelte';
  import LinkedinSolid from 'flowbite-svelte-icons/LinkedinSolid.svelte';
  import RedditSolid from 'flowbite-svelte-icons/RedditSolid.svelte';
</script>

<h2>About me</h2>

<p>Hey there, lone traveler! How did you get here?</p>
<p>Some things about me I think may be worth knowing (not in any particular order):</p>
<ul>
  <li>
    I was born in 2002 and grew up in a small town called
    <a target="_blank" href="https://en.wikipedia.org/wiki/B%C3%BClach">Bülach</a> in northern Switzerland
    near Zürich.
  </li>
  <li>I have a motorcycle, a red 2025 BMW F 900 XR, to be exact.</li>
  <li>
    I study physics at
    <a target="_blank" href="https://ethz.ch">
      <abbr title="Eidgenössische Technische Hochschule Zürich">ETHZ</abbr>
    </a>, currently in the 5<sup>th</sup> semester BSc.
  </li>
  <li>
    I work as a <abbr title="Teaching Assistant">TA</abbr> at ETH, so far
    <a href="/ta/computer-science/">for <q>Informatik</q></a>,
    <a href="/ta/linear-algebra-ii/"><q>Lineare Algebra II</q></a> and
    <a href="/ta/complex-analysis/"><q>Funktionentheorie</q></a>. You can find all the material
    <a href="/ta/">here</a>.
  </li>
  <li>
    I am a member and
    <q><abbr title="tour guide">demonstrator</abbr></q> of the observatory in Bülach (<a
      target="_blank"
      href="https://sternwartebuelach.ch"
    >
      Schul- und Volkssternwarte Bülach
    </a>) and I sometimes do tours (public and private). Some of the material I've created is
    available
    <a href="/astro/">here</a>.
  </li>
  <li>
    I have been teaching myself how to code since about 2016. If you are interested in what I have
    created so far,
    <a href="/coding/">have a look</a>.
  </li>
</ul>

<h2>About this website</h2>

<p>
  I built this website using
  <a target="_blank" href="https://svelte.dev">SvelteKit</a>, it is hosted by
  <a target="_blank" href="https://cloudflare.com">Cloudflare</a> and the domain is registered by
  <a target="_blank" href="https://infomaniak.com">infomaniak</a> in Switzerland.
</p>
<p>
  The source code for this website is available
  <RepoLink>on GitHub</RepoLink>.
</p>
<p>
  The development version of this website can be accessed
  <a href="https://dev.florian-frauenfelder.ch">here</a>. It may contain new and potentially
  unstable features and/or lag behind in both content and features, so use it at your own risk.
</p>

<h2>Contact</h2>

<ul>
  <li>
    <a href="mailto:ffrauenfelde@student.ethz.ch">ffrauenfelde@student.ethz.ch</a>
  </li>
  <li>
    <a href="https://github.com/fflopsi">
      <GithubSolid style="width: 2rem; display: inline-block;" />
    </a>
    <a href="https://www.linkedin.com/in/florian-frauenfelder/">
      <LinkedinSolid style="width: 2rem; display: inline-block;" />
    </a>
    <a href="https://www.reddit.com/user/flopsi_/">
      <RedditSolid style="width: 2rem; display: inline-block;" />
    </a>
  </li>
</ul>
