// Add an html tag <date-footer> with attribute date to create a footer
class DateFooter extends HTMLElement {
  connectedCallback() {
    // const container = document.createElement("div");
    // container.setAttribute("class", "date-footer");
    const date = this.getAttribute("date") || "Some time ago";
    fetch("/res/html/footer.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html.replace("{{date}}", date);
      })
      .catch((error) => {
        console.error("Error loading footer template: ", error);
      });
    // this.appendChild(container);
  }
}

window.addEventListener("DOMContentLoaded", customElements.define("date-footer", DateFooter));
