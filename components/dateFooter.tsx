import Link from 'next/link';

export default function DateFooter({ date }: { date: string }) {
  return (
    <>
      <hr />
      <footer>
        Last updated: {date} // <Link href='/'>Home</Link> //{' '}
        <Link href='/legal/'>Legal: Contact, Copyright, Disclaimer, Privacy policy</Link>
      </footer>
    </>
  );
}
