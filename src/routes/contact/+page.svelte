<script lang="ts">
  import { enhance } from '$app/forms';
  import RecaptchaHidden from '$lib/RecaptchaHidden.svelte';
  import RepoLink from '$lib/RepoLink.svelte';
  import type { FormState } from './+page.server';

  let { form }: { form: FormState } = $props();
  let name = $derived(form?.success ? '' : (form?.name ?? ''));
  let email = $derived(form?.success ? '' : (form?.email ?? ''));
  let subject = $derived(form?.success ? 'Question' : (form?.subject ?? 'Question'));
  let message = $derived(form?.success ? '' : (form?.message ?? ''));
  let isEmailValid = $derived(false);
  let sendCopy = $state(false);
  let isLoading = $state(false);
</script>

<h2>Contact me</h2>

<p>
  If you have any questions, remarks, suggestions or spotted a bug on my website, you can use this
  contact form to send me a message (*: required fields):
</p>

<form
  method="POST"
  use:enhance={() => {
    isLoading = true;
    return async ({ update }) => {
      isLoading = false;
      isEmailValid = false;
      update();
    };
  }}
>
  <div class="form-grid">
    <label for="name">Name *: </label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder={form ? form.name : 'Robin Miller'}
      bind:value={name}
      minLength={2}
      maxLength={32}
      required
    />
    <label for="email">Email address: </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder={form ? form.email : 'robin.miller@gmail.com'}
      bind:value={email}
      oninput={(e) => {
        const input = e.target as HTMLInputElement;
        const valid = input.validity.valid && input.value !== '';
        isEmailValid = valid;
        if (!valid) sendCopy = false;
      }}
      maxLength={64}
    />
    <label for="subject">Subject: </label>
    <select id="subject" name="subject" bind:value={subject}>
      <option value="TA">Concerning TA</option>
      <option value="Question">Question</option>
      <option value="Suggestion">Suggestion</option>
      <option value="Bug">Bug</option>
      <option value="Other">Other</option>
    </select>
    {#if subject === 'Bug'}
      <i style="grid-column: 1 / -1">
        If you know how, <RepoLink path="/issues/new">create an issue on GitHub</RepoLink> instead.
      </i>
    {/if}
  </div>
  <label for="message">Your message *:</label>
  <br />
  <textarea
    id="message"
    name="message"
    placeholder={form
      ? form.message
      : "Your message to me...\nDon't share any sensitive info like passwords and such."}
    bind:value={message}
    rows={4}
    cols={64}
    required
  ></textarea>
  <br />
  <input
    type="checkbox"
    id="copy"
    name="copy"
    value="true"
    bind:checked={sendCopy}
    disabled={!isEmailValid}
    style="min-width: 0;"
  />
  <label for="copy">Receive a copy of your message by email</label>
  <br />
  <RecaptchaHidden action="contact_form" />
  <button disabled={false} type="submit">
    {isLoading ? 'Sending...' : 'Submit message'}
  </button>
  {#if form}
    <span style="color: {form.success ? '' : 'orange'}">
      {form.successMsg}
    </span>
  {/if}
</form>
