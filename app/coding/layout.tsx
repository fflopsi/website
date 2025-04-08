import getMetadata from '@/components/metadata';
import React from 'react';

const title = 'Florian: Coding';

export const metadata = getMetadata(title, "Florian's hobby coding journey");

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
