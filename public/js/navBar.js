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
