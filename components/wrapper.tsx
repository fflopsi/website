import Link from 'next/link';
import { ReactNode } from 'react';
import DateFooter from './dateFooter';
import StickyNavBar from './stickyNavBar';

export default function Wrapper({
  children,
  title,
  route,
  updated,
}: {
  children: ReactNode;
  title: string;
  route: string;
  updated: string;
}) {
  const titles = title.match(/^Florian(\b.*)/);
  return (
    <>
      <header>
        <h1>{titles ? <><Link href='/' className='normal'>Florian</Link>{titles[1]}</> : title}</h1>
        <StickyNavBar active={route} />
      </header>
      <div id='content'>{children}</div>
      <DateFooter date={updated} />
    </>
  );
}
