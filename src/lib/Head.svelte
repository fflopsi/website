<script lang="ts">
  import { page } from '$app/state';
  import { findNavItem, navItems } from './navigation';

  let active = $derived(findNavItem(page.url.pathname) ?? navItems[0]);
</script>

<title>{active.title}</title>
<meta name="description" content={active.description} />
