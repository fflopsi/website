import Link from "next/link";

export default function DateFooter(date: string) {
  return (
    <div>
      <hr />
      <footer>
        Last updated: {date} // <Link href="/">Home</Link> //{" "}
        <Link href="/impressum">Copyright</Link>
      </footer>
    </div>
  );
}
