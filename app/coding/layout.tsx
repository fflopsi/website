import Wrapper from '@/components/wrapper';
import React from 'react';
import getMetadata from '../res/metadata';

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
    <Wrapper title={title} route='/coding/' updated='2025-03-10'>
      {children}
      <h2>My repositories</h2>
      {repos}
    </Wrapper>
  );
}
