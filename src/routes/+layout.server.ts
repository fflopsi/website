import { CF_PAGES_BRANCH, CF_PAGES_COMMIT_SHA } from '$app/env/private';

export function load() {
  const branch = CF_PAGES_BRANCH ?? 'local';
  const commit = CF_PAGES_COMMIT_SHA ?? 'null';

  return {
    isPreview: branch !== 'main',
    branch,
    commit,
  };
}
