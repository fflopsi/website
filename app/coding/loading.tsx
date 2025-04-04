import Wrapper from "@/components/wrapper";
import getMetadata from "../res/metadata";

const title = 'Florian: Coding';
export const metadata = getMetadata(title, 'Florian\'s hobby coding journey');

export default function LoadingCoding() {
  return (
    <Wrapper title={title} route='/coding/' updated='2025-03-10'>
      <h2>Loading content...</h2>
    </Wrapper>
  );
}
