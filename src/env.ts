import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  GITHUB_TOKEN: {},
  GOOGLE_API_KEY: {},
  RESEND_API_KEY: {},
  CF_PAGES_BRANCH: { schema: (value: string | undefined) => value },
  CF_PAGES_COMMIT_SHA: { schema: (value: string | undefined) => value },
});
