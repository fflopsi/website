import Link from "next/link";

interface DateFooterProps {
  date: string;
}

export default function DateFooter({ date }: DateFooterProps) {
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
