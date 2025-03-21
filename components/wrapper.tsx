import React from "react";
import StickyNavBar from "./stickyNavBar";
import DateFooter from "./dateFooter";

export default function Wrapper({
  children,
  title,
  route,
  updated,
}: {
  children: React.ReactNode;
  title: string;
  route: string;
  updated: string;
}) {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <StickyNavBar active={route} />
      <div id="content">{children}</div>
      <DateFooter date={updated} />
    </div>
  );
}
