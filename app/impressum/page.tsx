import DateFooter from "@/public/js/dateFooter";

export default function Home() {
  return (
    <div>
      <h1 id="title">Florian</h1>

      <nav data-active="/impressum/"><a>Home</a></nav>

      <div id="content">

      <h2>Contact</h2>
        <ul>
          <li><a href="mailto:ffrauenfelde@student.ethz.ch">ffrauenfelde@student.ethz.ch</a></li>
          <li>florian.l.frauenfelder(at)gmail.com</li>
        </ul>

      </div>

      {DateFooter("2024-12-18")}
    </div>
  )
}
