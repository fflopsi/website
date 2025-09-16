import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Florian: Coding',
  description: "Florian's hobby coding journey",
  authors: [{ name: 'Florian Frauenfelder' }],
};

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
