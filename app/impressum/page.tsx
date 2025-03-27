import Wrapper from '@/components/wrapper';
import Link from 'next/link';
import getMetadata from '../res/metadata';

const title = 'Florian: Copyright';

export const metadata = getMetadata(title);

export default function Impressum() {
  return (
    <Wrapper title={title} route='/impressum/' updated='2024-12-18'>
      <h2>Contact</h2>
      <ul>
        <li><Link href='mailto:ffrauenfelde@student.ethz.ch'>ffrauenfelde@student.ethz.ch</Link></li>
        <li>florian.l.frauenfelder(at)gmail.com</li>
      </ul>
    </Wrapper>
  );
}
