<script lang="ts">
  import '../style/app.scss';
  import '../style/navBar.scss';
  import favicon from '$lib/assets/favicon.svg';
  import NavBar from '$lib/NavBar.svelte';
  import Title from '$lib/Title.svelte';
  import Head from '$lib/Head.svelte';
  import Footer from '$lib/Footer.svelte';

  let { children } = $props();
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

<Title />

<NavBar />

<div id="content">
  {@render children?.()}
</div>

<Footer />
