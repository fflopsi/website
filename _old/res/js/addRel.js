// Add rel="noopener noreferrer" to every link opening in a new tab
window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    if (link.getAttribute("target") === "_blank") {
      var existingRel = link.getAttribute("rel") || "";
      if (!existingRel.includes("noopener")) existingRel += " noopener";
      if (!existingRel.includes("noreferrer")) existingRel += " noreferrer";
      link.setAttribute("rel", existingRel.trim());
    }
  });
});
