<script lang="ts">
  let { path = '', children } = $props();
</script>

<a target="_blank" href={'https://github.com/fflopsi/website' + path}>
  {@render children()}
</a>
