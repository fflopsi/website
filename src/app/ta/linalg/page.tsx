import { getRouteMetadata } from '@/lib/routing';
import { list } from '@vercel/blob';
import { unstable_cache } from 'next/cache';
import Link from 'next/link';

export const metadata = getRouteMetadata('/ta/linalg/');

export default async function LinAlg() {
  const handouts = await unstable_cache(
    async () => await list({ prefix: 'ta/linalg/' }),
    [],
    { tags: ['blobs'], revalidate: 60 },
  )();
  return (
    <>
      <h2>Updates</h2>
      <ul>
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
        {handouts.blobs.map((blob) => {
          const match = blob.pathname.match(/ta\/linalg\/handout-(\d{2})\.pdf/);
          if (match)
            return (
              <li key={blob.pathname}>
                [ES{match[1]}] <Link href={blob.url}>Handout</Link>
              </li>
            );
        })}
      </ul>

      {/* <h2>Other stuff</h2>
      <ul>
        <li>
          [My cheatsheet] <Link href='CheatSheet.pdf'>PDF</Link> |{' '}
          <Link href='CheatSheet.tex'>LaTeX source</Link>
        </li>
      </ul> */}

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

      <h2 id='session'>Exercise session</h2>
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
      </ul>
    </>
  );
}
