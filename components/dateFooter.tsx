import Link from 'next/link';

export default function DateFooter({ date }: { date: string }) {
  return (
    <>
      <div style={{ marginBottom: '8rem' }} />
      <hr />
      <div style={{ marginTop: '4rem' }} />
      <footer>
        Last updated: {date} // <Link href='/'>Home</Link> //{' '}
        <Link href='/legal/'>Legal: Contact, Copyright, Disclaimer, Privacy policy</Link>
      </footer>
    </>
  );
}
