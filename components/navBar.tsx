import Link from "next/link";
import { parse } from "node-html-parser";

export default function NavBar(active: String) {
  const match = (href: string): "active" | "" =>
    href && (active === href || (active.includes(href) && href.length >= 3))
      ? "active"
      : "";

  const navLinks = {
    "/": "Home",
    "/ta/": "Teaching Assistant",
    "/coding/": "Hobby Coder",
    "/astro/": "Hobby Astronomer",
  }

  return (
    <nav>
      <Link href="/" className={match("/")}>Home</Link>
      {/* <div class="dropdown">
        <button class="dropbtn">Teaching Assistant
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="/ta/linalg/">Lineare Algebra II</a>
          <a href="/ta/informatik/">Informatik</a>
          <a href="/ta/"><i>Overview</i></a>
        </div>
      </div> */}
      <Link href="/ta/" className={match("/ta/")}>Teaching Assistant</Link>
      <Link href="/coding/" className={match("/coding/")}>Hobby Coder</Link>
      <Link href="/astro/" className={match("/astro/")}>Hobby Astronomer</Link>
      <Link href="javascript:void(0);" className="icon" onClick={() => toggleNavBar()}>
        <i className="fa fa-bars"/>
      </Link>
    </nav>
  );
}

// Toggle responsive class for top navigation on click of hamburger menu
function toggleNavBar() {
  var nav = document.querySelector("nav");
  if (nav) nav.classList.toggle("responsive");
}
