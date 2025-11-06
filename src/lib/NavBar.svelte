<script lang="ts">
  import { page } from '$app/state';
  import { navItems } from './navigation';

  let nav: HTMLElement;
  let isOpen = $state(false);

  function onscroll() {
    if (!nav) return;
    if (nav.getBoundingClientRect().top <= 0) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  }

  $effect(() => {
    if (nav) onscroll();
  });
</script>

<svelte:window {onscroll} />

<nav bind:this={nav}>
  {#each navItems.slice(1) as { href, name, id }}
    <a
      {id}
      {href}
      class={page.url.pathname === href || (page.url.pathname.startsWith(href) && href.length >= 3)
        ? 'active'
        : ''}
      onclick={() => {
        isOpen = false;
        nav.classList.remove('responsive');
      }}
    >
      {name}
    </a>
  {/each}
  <button
    class="icon"
    onclick={() => {
      isOpen = !isOpen;
      nav.classList.toggle('responsive');
    }}
  >
    {isOpen ? '\u25b2' : '\u25bc'}
  </button>
</nav>
