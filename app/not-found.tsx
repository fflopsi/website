import getMetadata from "./res/metadata";
import Wrapper from "@/components/wrapper";

const title = "404: This didn't work.";

export const metadata = getMetadata(title);

export default function Custom404() {
  return (
    <Wrapper title="This didn't work." route="/404/" updated="2024-12-19">
      Did you check what you typed? If you got here after you clicked a link on this website, please <a href="mailto:ffrauenfelde@student.ethz.ch?subject=Website: Broken link&body=Hi,%0A%0AI found a broken link on your website: <describe what you did>%0A%0ABest regards,%0AA user of your website">report this error</a>.
    </Wrapper>
  );
}
