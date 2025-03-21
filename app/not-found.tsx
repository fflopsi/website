import StickyNavBar from "@/components/stickyNavBar";
import DateFooter from "@/components/dateFooter";

export default function Custom404() {
  return (
    <div>
      <h1>This didn't work.</h1>

      <StickyNavBar active="/404/" />

      <div id="content">

      Did you check what you typed? If you got here after you clicked a link on this website, please <a href="mailto:ffrauenfelde@student.ethz.ch?subject=Website: Broken link&body=Hi,%0A%0AI found a broken link on your website: <describe what you did>%0A%0ABest regards,%0AA user of your website">report this error</a>.

      </div>

      <DateFooter date="2024-12-19" />
    </div>
  )
}
