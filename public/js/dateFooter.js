export default function DateFooter(date) {
  return (
    <div>
      <hr />
      <footer>
        Last updated: {date} // <a href="/">Home</a> //{" "}
        <a href="/impressum">Copyright</a>
      </footer>
    </div>
  );
}
