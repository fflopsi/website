<script lang="ts">
  import { page } from '$app/state';
  import { findNavItem, navItems } from './navigation';

  let active = $derived(findNavItem(page.url.pathname) ?? navItems[0]);
  let titles = $derived(active.title.match(/^Florian(\b.*)/));
</script>

<h1>
  {#if titles}
    <a href="/" class="normal">Florian</a>{titles[1]}
  {:else}
    {active.title}
  {/if}
</h1>
