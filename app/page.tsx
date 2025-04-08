import getMetadata from '@/components/metadata';
import Link from 'next/link';

const title = 'Florian Frauenfelder';

export const metadata = getMetadata(title, 'Florian Frauenfelder\'s personal website');

export default function Home() {
  return (
    <>
      <h2>About me</h2>
      <p>Hey there, lone traveler! How did you get here?</p>
      <p>Some things about me I think may be worth knowing (not in any particular order):</p>
      <ul>
        <li>I was born in 2002 and grew up in a small town called <Link target='_blank' href='https://en.wikipedia.org/wiki/B%C3%BClach'>Bülach</Link> in northern Switzerland near Zürich.</li>
        <li>I have a motorcycle, a white <Link target='_blank' href='https://en.wikipedia.org/wiki/KTM_390_series'>KTM 390</Link> Duke 2022, to be exact.</li>
        <li>I study physics at <Link target='_blank' href='https://ethz.ch'><abbr title='Eidgenössische Technische Hochschule Zürich'>ETHZ</abbr></Link>, currently in the 4<sup>th</sup> semester BSc.</li>
        <li>I work as a <abbr title='Teaching Assistant'>TA</abbr> at ETH, so far <Link href='/ta/informatik/'>for <q>Informatik</q> (for D-MATH, D-PHYS)</Link> and <Link href='/ta/linalg/'><q>Lineare Algebra II</q> (for D-MATH, D-PHYS)</Link>. You can find all the material <Link href='/ta/'>here</Link>.</li>
        <li>I am a member and <q><abbr title='tour guide'>demonstrator</abbr></q> of the observatory in Bülach (<Link target='_blank' href='https://sternwartebuelach.ch'>Schul- und Volkssternwarte Bülach</Link>) and I sometimes do tours (public and private). Some of the material I've created is available <Link href='/astro/'>here</Link>.</li>
        <li>I have been teaching myself how to code since about 2016. If you are interested in what I have created so far, <Link href='/coding/'>have a look</Link>.</li>
      </ul>
      <h2>About this website</h2>
      <p>I built this website using <Link target='_blank' href='https://nextjs.org'>Next.js</Link>, it is hosted by <Link target='_blank' href='https://vercel.com'>Vercel</Link> and the domain is registered by <Link target='_blank' href='https://infomaniak.com'>infomaniak</Link> in Switzerland.</p>
      <p>The source code for this website is available <Link target='_blank' href='https://github.com/fflopsi/website'>on GitHub</Link>.</p>
      <p>The development version of this website can be accessed <Link href='https://dev.florian-frauenfelder.ch'>here</Link>. It may contain new and potentially unstable features and/or lag behind in both content and features, so use it at your own risk.</p>
      <h2>Contact</h2>
      <ul>
        <li><Link href='mailto:ffrauenfelde@student.ethz.ch'>ffrauenfelde@student.ethz.ch</Link></li>
      </ul>
    </>
  );
}
