import { parse } from 'node-html-parser';

export default function NavBar(active: String) {
  const raw = `
    <a href="/">Home</a>
    <!-- <div class="dropdown">
      <button class="dropbtn">Teaching Assistant
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="/ta/linalg/">Lineare Algebra II</a>
        <a href="/ta/informatik/">Informatik</a>
        <a href="/ta/"><i>Overview</i></a>
      </div>
    </div> -->
    <a href="/ta/">Teaching Assistant</a>
    <a href="/coding/">Hobby Coder</a>
    <a href="/astro/">Hobby Astronomer</a>
    <a href="javascript:void(0);" class="icon" onclick="navBar()"><i class="fa fa-bars"></i></a>
    `
  const doc = parse(raw);
  const links = doc.querySelectorAll("a"); // Select all the links in the navBar

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href &&
      (active == href || (active.includes(href) && href.length >= 3))
    ) {
      link.classList.add("active");
    }
  });

  return (
    <nav dangerouslySetInnerHTML={{ __html: doc.innerHTML }}></nav>
  )
}
