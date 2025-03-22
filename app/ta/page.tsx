import Wrapper from "@/components/wrapper";
import Link from "next/link";
import getMetadata from "../res/metadata";

const title = "Florian: Teaching Assistant";

export const metadata = getMetadata(title, "Florian's TA jobs at ETHZ");

export default function TA() {
  return (
    <Wrapper title={title} route="/ta/" updated="2024-12-19">
      <h2>Teaching Assistant positions</h2>
      <ul>
        <li><em>[1/2025]</em> In spring 2025, I am a teaching assistant for Lineare Algebra II for BSc D-MATH, D-PHYS, course <Link target="_blank" href="https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=188649&semkez=2025S">401-1152-02L</Link>. All the material is available <Link href="/ta/linalg/">here</Link>.</li>
        <li><em>[2/2024]</em> In autumn 2024, I was a teaching assistant for Informatik for IFMP (BSc D-MATH, D-PHYS), course <Link target="_blank" href="https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2024W&lerneinheitId=182354">252-0847-00L</Link>. All the material is available <Link href="/ta/informatik/">here</Link>.</li>
      </ul>
    </Wrapper>
  );
}
