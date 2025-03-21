import getMetadata from "./res/metadata";
import Wrapper from "@/components/wrapper";

const title = "Florian Frauenfelder";

export const metadata = getMetadata(title, "Florian Frauenfelder's personal website");

export default function Home() {
  return (
    <Wrapper title={title} route="/" updated="2025-03-11">
      <h2>About me</h2>
      <p>Hey there, lone traveler! How did you get here?</p>
      <p>Some things about me I think may be worth knowing (not in any particular order):</p>
      <ul>
        <li>I was born in 2002 and grew up in a small town called <a target="_blank" href="https://en.wikipedia.org/wiki/B%C3%BClach">Bülach</a> in northern Switzerland near Zürich.</li>
        <li>I have a motorcycle, a white <a target="_blank" href="https://en.wikipedia.org/wiki/KTM_390_series">KTM 390</a> Duke 2022, to be exact.</li>
        <li>I study physics at <a target="_blank" href="https://ethz.ch"><abbr title="Eidgenössische Technische Hochschule Zürich">ETHZ</abbr></a>, currently in the 4<sup>th</sup> semester BSc.</li>
        <li>I work as a <abbr title="Teaching Assistant">TA</abbr> at ETH, so far <a href="/ta/informatik/">for <q>Informatik</q> (for D-MATH, D-PHYS)</a> and <a href="/ta/linalg/"><q>Lineare Algebra II</q> (for D-MATH, D-PHYS)</a>. You can find all the material <a href="/ta/">here</a>.</li>
        <li>I am a member and <q><abbr title="tour guide">demonstrator</abbr></q> of the observatory in Bülach (<a target="_blank" href="https://sternwartebuelach.ch">Schul- und Volkssternwarte Bülach</a>) and I sometimes do tours (public and private). Some of the material I've created is available <a href="/astro/">here</a>.</li>
        <li>I have been teaching myself how to code since about 2016. If you are interested in what I have created so far, <a href="/coding/">have a look</a>.</li>
      </ul>
      <h2>Contact</h2>
      <ul>
        <li><a href="mailto:ffrauenfelde@student.ethz.ch">ffrauenfelde@student.ethz.ch</a></li>
      </ul>
    </Wrapper>
  );
}
