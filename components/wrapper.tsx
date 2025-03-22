import { ReactNode } from "react";
import DateFooter from "./dateFooter";
import StickyNavBar from "./stickyNavBar";

export default function Wrapper({
  children,
  title,
  route,
  updated,
}: {
  children: ReactNode;
  title: string;
  route: string;
  updated: string;
}) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <StickyNavBar active={route} />
      <div id="content">{children}</div>
      <DateFooter date={updated} />
    </>
  );
}
