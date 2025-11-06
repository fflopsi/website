<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  const scriptId = 'recaptcha-script';
  const siteKey = '6LcGOYUrAAAAAPIVkoLzsJPbWlzt_QZoAQ0sWPzE';
  let { action } = $props();

  async function executeRecaptcha() {
    if (typeof grecaptcha === 'undefined') return;

    grecaptcha.enterprise.ready(async () => {
      try {
        const token = await grecaptcha.enterprise.execute(siteKey, { action });
        const tokenInput = document.getElementById('recaptcha-token') as HTMLInputElement;
        if (tokenInput) tokenInput.value = token;
      } catch (e) {
        console.error('Recaptcha error', e);
      }
    });
  }

  onMount(() => {
    const script = document.getElementById(scriptId);
    if (script) {
      script.addEventListener('load', executeRecaptcha, { once: true });
      if (typeof grecaptcha !== 'undefined') executeRecaptcha();
    }
  });

  onDestroy(() => {
    if (typeof document === 'undefined') return;
    try {
      // Remove script 1
      document.getElementById(scriptId)?.remove();
      // Remove grecaptcha
      try {
        delete (window as any).grecaptcha;
      } catch {
        (window as any).grecaptcha = undefined;
      }
      // Remove badge
      document.querySelector('body div div.grecaptcha-badge')?.parentElement?.remove();
      // Remove script 2
      document.querySelectorAll('head script').forEach((script) => {
        if (script.getAttribute('src')?.startsWith('https://www.gstatic.com/recaptcha/releases/')) {
          script.remove();
        }
      });
    } catch (err) {
      console.error('Recaptcha cleanup failed', err);
    }
  });
</script>

<svelte:head>
  <script
    src={`https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`}
    id={scriptId}
    async
    defer
  ></script>
</svelte:head>

<input type="hidden" name="g-recaptcha-response" id="recaptcha-token" />
