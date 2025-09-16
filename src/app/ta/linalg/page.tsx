import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Florian: Lineare Algebra II TA',
  description: "Florian's TA material for Lineare Algebra II",
  authors: [{ name: 'Florian Frauenfelder' }],
};

export default async function LinAlg() {
  return (
    <>
      <h2>Updates</h2>
      <ul>
        <li>
          <em>[04.06.2025]</em>
          <ul>
            <li>
              Uploaded my <Link href='#other'>summary</Link> for Lineare Algebra
              I/II.
            </li>
            <li>
              Uploaded <Link href='#quiz'>quiz slides</Link> from the last
              exercise session, thanks for participating!
            </li>
            <li>
              This was the last big update on here; thanks for coming to my
              exercise class, enjoy your break, and good luck with your exams!
            </li>
          </ul>
        </li>
        <li>
          <em>[15.04.2025]</em>
          <ul>
            <li>
              The next exercise session will only take place on 5.5.2025, as
              there is the Zürich holiday{' '}
              <Link target='_blank' href='https://www.sechselaeuten.ch/'>
                Sechseläuten
              </Link>{' '}
              on 28.4.2025. <em>Happy Easter, and enjoy your break!</em>
            </li>
          </ul>
        </li>
        <li>
          <em>[25.02.2025]</em>
          <ul>
            <li>
              Since my exercise session is held in German, all the handouts and
              material will also be in German.
            </li>
            <li>
              Added <Link href='#links'>links</Link>,{' '}
              <Link href='#session'>exercise session info</Link>, and{' '}
              <Link href='#material'>material</Link> for the first exercise
              session.
            </li>
          </ul>
        </li>
        <li>
          <em>[19.12.2024] Welcome!</em>
          <ul>
            <li>I was officially accepted as a LinAlg II TA!</li>
          </ul>
        </li>
      </ul>

      <h2 id='material'>Exercise material</h2>
      <ul>
        {Array.from(Array(13).keys()).map((i) => (
          <li key={i}>
            [ES{String(i + 1).padStart(2, '0')}]{' '}
            <Link href={`handout-${String(i + 1).padStart(2, '0')}.pdf`}>
              Handout
            </Link>
          </li>
        ))}
      </ul>

      <h2 id='quiz'>Quiz from last exercise session</h2>
      <ul>
        <li>
          <Link
            target='_blank'
            href='https://www.mentimeter.com/app/presentation/almmc5tcjmdqp77pwer6pyivt14gvwsf'
          >
            Mentimeter quiz slides
          </Link>
        </li>
      </ul>

      <h2 id='other'>Other stuff</h2>
      <ul>
        <li>
          [My summary] <Link href='summary.pdf'>PDF</Link> |{' '}
          <Link href='summary.md'>Markdown source</Link>
        </li>
      </ul>

      <h2 id='links'>Useful links</h2>
      <ul>
        <li>
          <Link
            target='_blank'
            href='https://metaphor.ethz.ch/x/2024/hs/401-1151-00L/'
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
        <li>Monday</li>
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
