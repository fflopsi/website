import { getRouteMetadata } from '@/components/routing';
import React from 'react';

export const metadata = getRouteMetadata('/coding/');

export default function CodingLayout({
  children,
  repos,
}: {
  children: React.ReactNode;
  repos: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>My repositories</h2>
      {repos}
    </>
  );
}
