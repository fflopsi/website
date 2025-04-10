import { getRouteMetadata } from '@/lib/routing';
import Link from 'next/link';

export const metadata = getRouteMetadata('/astro/');

export default function Astro() {
  return (
    <>
      <h2>My history with astronomy</h2>

      <p>
        Ever since I was a child, I have had a passion for astronomy. In 2014, I
        joined the{' '}
        <Link target='_blank' href='https://sternwartebuelach.ch'>
          observatory in Bülach
        </Link>{' '}
        as a junior member. Each Saturday, the teenagers and young adults meet
        and learn something about astronomy and its related fields in physics
        and sciences in general.
      </p>

      <p>
        In 2018, I decided to start leading tours at the observatory. Every
        Friday evening, there is a public tour open for everybody. If the
        weather plays along, we mainly show the visitors the various interesting
        objects in the night sky through our telescopes and answer questions. If
        we cannot use our instruments due to bad weather or other conditions,
        there will always be some kind of presentation to still try to excite
        the visitors for the wonders of the cosmos.
      </p>

      <p>
        Since 2024, I am also one of the leaders for the young members' saturday
        evenings and try to get across some of my (predominantly
        physics-related) knowledge connected to astronomy.
      </p>

      <h2>Some material</h2>

      <p>
        This is a really incomplete list of some material I've created, mostly
        (even exclusively until now) for Saturday evenings with the junior
        members (in German). Be inspired if you feel like it, but don't assume
        that everything is correct :)
      </p>

      <ul>
        <li>
          An introductory presentation on cosmology: the history of the
          universe, dark matter and dark energy (
          <Link href='1-cosmology-pres.pdf'>slides</Link>)
        </li>
        <li>
          A presentation on dark matter and dark energy: discovery, reasoning
          and alternative theories (
          <Link href='2-dark-matter-energy-pres.pdf'>slides</Link> and{' '}
          <Link href='2-dark-matter-energy-handout.pdf'>handout</Link>)
        </li>
        <li>
          A short presentation on dark energy, the geometry of the universe and
          the Hubble tension (
          <Link href='3-dark-energy-geometry-hubble-pres.pdf'>slides</Link> and{' '}
          <Link href='3-dark-energy-geometry-hubble-handout.pdf'>handout</Link>)
        </li>
        <li>
          A short presentation on gravitational waves: theory, origin and
          observation (<Link href='4-gravitational-waves-pres.pdf'>slides</Link>{' '}
          and <Link href='4-gravitational-waves-handout.pdf'>handout</Link>)
        </li>
      </ul>
    </>
  );
}
