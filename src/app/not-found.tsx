import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "404: This didn't work.",
  authors: [{ name: 'Florian Frauenfelder' }],
};

export default function Custom404() {
  return (
    <>
      Did you check what you typed? If you got here after you clicked a link on
      this website, please{' '}
      <Link href='mailto:ffrauenfelde@student.ethz.ch?subject=Website: Broken link&body=Hi,%0A%0AI found a broken link on your website: <describe what you did>%0A%0ABest regards,%0AA user of your website'>
        report this error
      </Link>
      .
    </>
  );
}
