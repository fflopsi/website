import StickyNavBar from "@/components/stickyNavBar";
import DateFooter from "@/components/dateFooter";

export default function Impressum() {
  return (
    <div>
      <h1>Florian: Copyright</h1>

      <StickyNavBar active="/impressum/" />

      <div id="content">

      <h2>Contact</h2>
        <ul>
          <li><a href="mailto:ffrauenfelde@student.ethz.ch">ffrauenfelde@student.ethz.ch</a></li>
          <li>florian.l.frauenfelder(at)gmail.com</li>
        </ul>

      </div>

      <DateFooter date="2024-12-18" />
    </div>
  )
}
