import getMetadata from "../res/metadata";
import Wrapper from "@/components/wrapper";

const title = "Florian: Copyright";

export const metadata = getMetadata(title);

export default function Impressum() {
  return (
    <Wrapper title={title} route="/impressum/" updated="2024-12-18">
      <h2>Contact</h2>
      <ul>
        <li><a href="mailto:ffrauenfelde@student.ethz.ch">ffrauenfelde@student.ethz.ch</a></li>
        <li>florian.l.frauenfelder(at)gmail.com</li>
      </ul>
    </Wrapper>
  );
}
