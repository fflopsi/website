'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAttr } from './routing';

export default function Footer() {
  return (
    <>
      <div style={{ marginBottom: '8rem' }} />
      <hr />
      <div style={{ marginTop: '4rem' }} />
      <footer>
        &copy; 2025 Florian Frauenfelder // Updated:{' '}
        {getAttr(usePathname(), 'updated')} // <Link href='/'>Home</Link> //{' '}
        <Link href='/contact/'>Contact form</Link> //{' '}
        <Link href='/legal/'>
          Legal: Contact, Copyright, Disclaimer, Privacy policy
        </Link>
      </footer>
    </>
  );
}
