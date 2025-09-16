import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Florian: Teaching Assistant',
  description: "Florian's TA jobs at ETHZ",
  authors: [{ name: 'Florian Frauenfelder' }],
};

export default function TA() {
  return (
    <>
      <h2>Teaching Assistant positions</h2>
      <ul>
        <li>
          <em>[2/2025]</em> In autumn 2025, I am a teaching assistant for
          Funktionentheorie for BSc D-MATH, D-PHYS, course{' '}
          <Link
            target='_blank'
            href='https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025W&lerneinheitId=193482'
          >
            401-2303-00L
          </Link>
          . All the material is available{' '}
          <Link href='complex-analysis/'>here</Link>.
        </li>
        <li>
          <em>[1/2025]</em> In spring 2025, I was a teaching assistant for
          Lineare Algebra II for BSc D-MATH, D-PHYS, course{' '}
          <Link
            target='_blank'
            href='https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&lerneinheitId=188649'
          >
            401-1152-02L
          </Link>
          . All the material is available <Link href='linear-algebra-ii/'>here</Link>.
        </li>
        <li>
          <em>[2/2024]</em> In autumn 2024, I was a teaching assistant for
          Informatik for IFMP (BSc D-MATH, D-PHYS), course{' '}
          <Link
            target='_blank'
            href='https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2024W&lerneinheitId=182354'
          >
            252-0847-00L
          </Link>
          . All the material is available <Link href='computer-science/'>here</Link>.
        </li>
      </ul>
    </>
  );
}
