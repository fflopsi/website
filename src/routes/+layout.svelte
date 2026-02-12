<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import DevWarning from '$lib/DevWarning.svelte';
  import Footer from '$lib/Footer.svelte';
  import Head from '$lib/Head.svelte';
  import NavBar from '$lib/NavBar.svelte';
  import Title from '$lib/Title.svelte';
  import type { Snippet } from 'svelte';
  import '../style/app.scss';
  import '../style/navBar.scss';

  let {
    data,
    children,
  }: { data: { isPreview: boolean; branch: string; commit: string }; children: Snippet } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <meta name="author" content="Florian Frauenfelder" />
  <Head />
</svelte:head>

{#if data.isPreview}
  <DevWarning branch={data.branch} commit={data.commit} />
{/if}

<Title />

<NavBar />

<div id="content">
  {@render children?.()}
</div>

<Footer />
