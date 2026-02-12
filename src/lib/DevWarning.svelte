<script lang="ts">
  let { branch, commit }: { branch: string; commit: string } = $props();
  import RepoLink from './RepoLink.svelte';
</script>

<h2 style="color: red; fontSize: 2rem;">THIS IS A PREVIEW/DEVELOPMENT VERSION OF THIS WEBSITE!</h2>
<p style="fontSize: 1.5rem; fontStyle: italic;">
  I do not guarantee that anything on this version works as expected. If you want to see the normal,
  functional version,
  <a style="color: red;" href="https://florian-frauenfelder.ch">click here</a>.
</p>
<p>
  The present version of this website is based on commit
  <RepoLink path={`/commit/${commit}`}>
    {commit}
  </RepoLink> from branch <RepoLink path={`/tree/${branch}`}>
    {branch}
  </RepoLink>.
</p>
<hr />
