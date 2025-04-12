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
    <Link target='_blank' href={`https://github.com/fflopsi/website${path}`}>
      {children}
    </Link>
  );
}
