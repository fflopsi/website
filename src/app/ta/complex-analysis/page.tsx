import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Florian: Complex Analysis TA',
  description: "Florian's TA material for Complex Analysis",
  authors: [{ name: 'Florian Frauenfelder' }],
};

export default async function ComplexAnalysis() {
  return (
    <>
      <h2>Updates</h2>
      <ul>
        <li>
          <em>[14.07.2025] Welcome!</em>
          <ul>
            <li>I was officially accepted as a Complex Analysis TA!</li>
          </ul>
        </li>
      </ul>

      {/* <h2 id='material'>Exercise material</h2>
      <ul>
        {Array.from(Array(13).keys()).map((i) => (
          <li key={i}>
            [ES{String(i + 1).padStart(2, '0')}]{' '}
            <Link href={`handout-${String(i + 1).padStart(2, '0')}.pdf`}>
              Handout
            </Link>
          </li>
        ))}
      </ul> */}

      {/* <h2 id='other'>Other stuff</h2>
      <ul>
        <li>
          [My summary] <Link href='summary.pdf'>PDF</Link> |{' '}
          <Link href='summary.md'>Markdown source</Link>
        </li>
      </ul> */}

      <h2 id='links'>Useful links</h2>
      <ul>
        <li>
          <Link
            target='_blank'
            href='https://metaphor.ethz.ch/x/2025/hs/401-2303-00L/'
          >
            Course website
          </Link>{' '}
          with all the material that you can't find on here
        </li>
      </ul>

      <h2>Contact</h2>
      <ul>
        <li>
          <Link href='mailto:ffrauenfelde@student.ethz.ch'>
            ffrauenfelde@student.ethz.ch
          </Link>
        </li>
      </ul>

      {/* <h2 id='session'>Exercise session</h2>
      <ul>
        <li>Tuesday</li>
        <li>14:15 - 16:00</li>
        <li>
          <Link
            target='_blank'
            href='https://ethz.ch/staffnet/en/utils/location.html?building=CHN&floor=D&room=46'
          >
            CHN D 46
          </Link>
        </li>
      </ul> */}
    </>
  );
}
