import { env } from '$env/dynamic/private';

export function load() {
  const branch = env.CF_PAGES_BRANCH ?? 'local';
  const commit = env.CF_PAGES_COMMIT_SHA ?? 'null';

  return {
    isPreview: branch !== 'main',
    branch,
    commit,
  };
}
