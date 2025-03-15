// Get the page title and use it for the h1 tag called title
window.addEventListener("DOMContentLoaded", () => {
  const title = document.title;
  document.getElementById("title").innerHTML = title;
});
