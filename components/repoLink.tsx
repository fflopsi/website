import Link from 'next/link';
import React from 'react';

export default function RepoLink({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      target='_blank'
      href={`https://${process.env.VERCEL_GIT_PROVIDER}.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}${path}`}
    >
      {children}
    </Link>
  );
}
