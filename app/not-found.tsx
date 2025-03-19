import Script from "next/script";

export default function Custom404() {
  return (
    <div>
      <Script src="/js/navBar.js"/>

      <h1>This didn't work.</h1>

      <nav><a>Home</a></nav>

      <div id="content">

      Did you check what you typed? If you got here after you clicked a link on this website, please <a href="mailto:ffrauenfelde@student.ethz.ch?subject=Website: Broken link&body=Hi,%0A%0AI found a broken link on your website: <describe what you did>%0A%0ABest regards,%0AA user of your website">report this error</a>.

      </div>

      {/* <date-footer date="2024-12-19"></date-footer>   */}
    </div>
  )
}
