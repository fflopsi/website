import { redirects } from '$lib/redirects';
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
  const path = event.url.pathname;
  for (const { from, to, permanent = true } of redirects) {
    if (from.test(path)) {
      redirect(permanent ? 308 : 307, to);
    }
  }
  return resolve(event);
}
