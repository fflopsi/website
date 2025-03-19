// Fill the nav tag with navigation links
const nav = document.querySelector("nav");
const active = nav.getAttribute("data-active") || "";
fetch("/html/navBar.html")
  .then((response) => response.text())
  .then((html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
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
    nav.innerHTML = doc.body.innerHTML;
  })
  .catch((error) => {
    console.error("Error loading navigation bar: ", error);
  });

// Add sticky class to navigation bar when on top of screen
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (nav.getBoundingClientRect().top <= 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// Toggle responsive class for top navigation on click of hamburger menu
function navBar() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("responsive");
}
