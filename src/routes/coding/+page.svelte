<script lang="ts">
  let { data } = $props();

  const stores = [
    {
      href: 'https://play.google.com/store/apps/details?id=ch.famoser.mensa',
      badge: {
        src: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
        alt: 'Get it on Google Play',
      },
      shields: [
        'https://img.shields.io/endpoint?color=green&logo=google-play&logoColor=green&url=https%3A%2F%2Fplay.cuzi.workers.dev%2Fplay%3Fi%3Dch.famoser.mensa%26gl%3DCH%26hl%3Den%26l%3DPlay%2520Store%26m%3Dv%24version',
        'https://img.shields.io/endpoint?color=green&logo=google-play&logoColor=green&url=https%3A%2F%2Fplay.cuzi.workers.dev%2Fplay%3Fi%3Dch.famoser.mensa%26gl%3DCH%26hl%3Den%26l%3DPlay%2520Store%26m%3D%24shortinstalls%2520installs',
        'https://img.shields.io/endpoint?color=green&logo=google-play&logoColor=green&url=https%3A%2F%2Fplay.cuzi.workers.dev%2Fplay%3Fi%3Dch.famoser.mensa%26gl%3DCH%26hl%3Den%26l%3DPlay%2520Store%26m%3D%24rating%2520%25E2%2598%2585',
      ],
    },
    {
      href: 'https://f-droid.org/packages/ch.famoser.mensa/',
      badge: {
        src: 'https://fdroid.gitlab.io/artwork/badge/get-it-on.png',
        alt: 'Get it on F-Droid',
      },
      shields: ['https://img.shields.io/f-droid/v/ch.famoser.mensa?logo=fdroid&label=F-Droid'],
    },
    {
      href: 'https://apt.izzysoft.de/packages/ch.famoser.mensa',
      badge: {
        src: 'https://gitlab.com/IzzyOnDroid/repo/-/raw/master/assets/IzzyOnDroid.png',
        alt: 'Get it on IzzyOnDroid',
      },
      shields: [
        'https://img.shields.io/endpoint?url=https://apt.izzysoft.de/fdroid/api/v1/shield/ch.famoser.mensa&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAADAFBMVEUA0////wAA0v8A0v8A0////wD//wAFz/QA0/8A0/8A0/8A0/8A0v///wAA0/8A0/8A0/8A0/8A0//8/gEA0/8A0/8B0/4A0/8A0/8A0/+j5QGAwwIA0//C9yEA0/8A0/8A0/8A0/8A0/8A0/+n4SAA0/8A0/8A0/+o6gCw3lKt7QCv5SC+422b3wC19AC36zAA0/+d1yMA0/8A0/+W2gEA0/+w8ACz8gCKzgG7+QC+9CFLfwkA0/8A0////wAA0/8A0/8A0/8A0/+f2xym3iuHxCGq5BoA1P+m2joI0vONyiCz3mLO7oYA0/8M1Piq3Ei78CbB8EPe8LLj9Ly751G77zWQ1AC96UYC0fi37CL//wAA0/8A0////wD//wCp3jcA0/+j3SGj2i/I72Sx4zHE8FLB8zak1kYeycDI6nRl3qEA0/7V7psA0v6WzTa95mGi2RvB5XkPy9zH5YJ3uwGV1yxVihRLiwdxtQ1ZkAf//wD//wD//wD//wD//wCn5gf//wD//wD//wD//wD//wAA0/+h4A3R6p8A0/+X1w565OD6/ARg237n9csz2vPz+gNt37V/vifO8HW68B/L6ZOCwxXY8KRQsWRzhExAtG/E612a1Rd/pTBpmR9qjysduKVhmxF9mTY51aUozK+CsDSA52T//wD//wAA0////wD//wBJ1JRRxFWjzlxDyXRc0pGT1wCG0CWB3VGUzSTh8h6c0TSr5CCJ5FFxvl6s4H3m8xML0/DA5CvK51EX1N+Y2gSt4Dag3ChE3fax2ki68yO57NF10FRZnUPl88eJxhuCxgCz5EOLwEGf1DFutmahzGW98x0W1PGk3R154MHE6bOn69qv3gy92oG90o+Hn07B7rhCmiyMwECv1nO+0pQfwrCo57xF2daXsVhKrEdenQAduaee1Bsjr42z5D9RoCXy+QNovXpy2Z5MtWDO/TiSukaF3UtE1K6j3B4YwLc5wXlzpyIK0u5zy3uJqg4pu5RTpkZmpVKyAP8A0wBHcExHcEyBUSeEAAABAHRSTlP///9F9wjAAxD7FCEGzBjd08QyEL39abMd6///8P/ZWAnipIv/cC6B//7////////L/1Dz/0D///////86/vYnquY3/v///5T//v///17///////////////84S3QNB/8L/////////////7r/////NP////9l/////wPD4yis/x7Ym2lWSP+em////0n////////v///////////////////7//7pdGN3Urr6/+v/6aT////+//H/o2P/1v+7r7jp4PM/3p4g////g///K///481LxO///v////9w////8v/////9/p3J///a+P9v/5KR/+n///+p/xf//8P//wAAe7FyaAAABCZJREFUSMdj+E8iYKBUgwIHnwQ3N7cEHxcH+///VayoAE0Dh41qR7aBnCIQ8MsJKHH9/99czYYMWlA0cIkJGjMgAKfq//9RNYzIgLcBWYOTiCgDMhDn+B9bh6LebiWyH6L5UZQzONoAHWSHoqEpDkkDsyKqelv1//9rG1HUN9YihZK9AKp6BkG+/6xNqA5ajhSsCkrIipmYGGRa//9vQXVQXSySBnkWJOUMfn5Myuz/G3hR1NdEIUUchwiy+bkTsg4dbW/fu6W/e1c3XMMy5JiOZkFxUFZo74mgKTqaKXu0+2HqVwkja3BH9kFu361JwcHTfPJD4mdfe8ULAdVRyGlJAcVFfg+CQOozZ4XrJ85+JgwBsVXIGriQw5Tp4ZScezd8JiWnBupru30qwJZa+ZAjmWlC8fUZM4qB6kPnLNSPLMWqQQ5ZQ5aOzs1HmamBaQHzFs6y+qAmJCTE8f9/QgKSBg4DJPWc6zVDQkIC09JkZSPD38kukpExFpT4z67uYI/QwCOOCCK/izvu5CWl6AcEWMnKWml7LWbKZfH9/99UkknQHhGsynDz+65eWXv3/JmJrq5eXienVlRUfH/z8VvCf45soKQIH1yDEQsszrp6gwq9C73T87xcXadKl5TkFev4A/2tygmSBqYXqAYJmK+ZuoJydDR1vP09DA0NOy2kpdML81+U/heCpH1JU3jig7lJ5nKOT4i/t6ZHkqGzs4lJmIVHfrj+JR4HqLQSD0yDkCNEpGNn5ix9D03/eJdElTZdKV2TpNOhkwt8YUlNUgimgV0dLMBvf1gz1MolPd5FRcVNSkpDQ8owJeBCDyIhrIDnOD5QcuIU+3/2QKSs9laQ+noNLS0zLWdtqyP7mBAFAw88TwsJgMuJYweBGjYngtWbmeuZOW+bvNQToUFOAlFqOBk4Ov3/L7Z60/aN0p1tUhpa5nqWlub7C3p2I9QzyAghlUvczOz/1fhzPT3XSIfpSmmYAdVbmm1gV0dSz8DSilpUQsqCddIWIA3meuZaJqdMJZEzl6gRqgZIWZAxUdoizERXN8yi5MltcZTChzMaRQM3JNUWHS8rL/+yaPGvMmvr5ywoGoxtkDWwQ+Pb89ycBeWfGSJeL/la+RS1eOPnRtbQKgMRjZg+t8x6PkP273nWQAoFOPAgaeAThKXAmXMrK39Kmr5fsuBlBqoXfJGLe3VbmHjG9Mczi9T//3h7vygXtcDlQtJg44iQiIjIBRbGPO7gghPJy0ZIxT2HOLIUgwxQzsgYrUR350HSIMaJLidhgKY+mw+pflBDrX8E7OGBjPCAPc76gQFSTqAIiYrb/8dRP4CyosJ/rmwU5XIxHMilt4QBJwsSkBMClxOQULBlkRRwEONmR2kJcDGjADX2/+xO8r5iqjExqmLyrWpcPFRta1BfAwCtyN3XpuJ4RgAAAABJRU5ErkJggg==',
        "https://img.shields.io/badge/dynamic/json?url=https://dlstats.izzyondroid.org/iod-stats-collector/stats/basic/yearly/rolling.json&query=$.['ch.famoser.mensa']&label=IzzyOnDroid%20yearly%20downloads&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAADAFBMVEUA0////wAA0v8A0v8A0////wD//wAFz/QA0/8A0/8A0/8A0/8A0v///wAA0/8A0/8A0/8A0/8A0//8/gEA0/8A0/8B0/4A0/8A0/8A0/+j5QGAwwIA0//C9yEA0/8A0/8A0/8A0/8A0/8A0/+n4SAA0/8A0/8A0/+o6gCw3lKt7QCv5SC+422b3wC19AC36zAA0/+d1yMA0/8A0/+W2gEA0/+w8ACz8gCKzgG7+QC+9CFLfwkA0/8A0////wAA0/8A0/8A0/8A0/+f2xym3iuHxCGq5BoA1P+m2joI0vONyiCz3mLO7oYA0/8M1Piq3Ei78CbB8EPe8LLj9Ly751G77zWQ1AC96UYC0fi37CL//wAA0/8A0////wD//wCp3jcA0/+j3SGj2i/I72Sx4zHE8FLB8zak1kYeycDI6nRl3qEA0/7V7psA0v6WzTa95mGi2RvB5XkPy9zH5YJ3uwGV1yxVihRLiwdxtQ1ZkAf//wD//wD//wD//wD//wCn5gf//wD//wD//wD//wD//wAA0/+h4A3R6p8A0/+X1w565OD6/ARg237n9csz2vPz+gNt37V/vifO8HW68B/L6ZOCwxXY8KRQsWRzhExAtG/E612a1Rd/pTBpmR9qjysduKVhmxF9mTY51aUozK+CsDSA52T//wD//wAA0////wD//wBJ1JRRxFWjzlxDyXRc0pGT1wCG0CWB3VGUzSTh8h6c0TSr5CCJ5FFxvl6s4H3m8xML0/DA5CvK51EX1N+Y2gSt4Dag3ChE3fax2ki68yO57NF10FRZnUPl88eJxhuCxgCz5EOLwEGf1DFutmahzGW98x0W1PGk3R154MHE6bOn69qv3gy92oG90o+Hn07B7rhCmiyMwECv1nO+0pQfwrCo57xF2daXsVhKrEdenQAduaee1Bsjr42z5D9RoCXy+QNovXpy2Z5MtWDO/TiSukaF3UtE1K6j3B4YwLc5wXlzpyIK0u5zy3uJqg4pu5RTpkZmpVKyAP8A0wBHcExHcEyBUSeEAAABAHRSTlP///9F9wjAAxD7FCEGzBjd08QyEL39abMd6///8P/ZWAnipIv/cC6B//7////////L/1Dz/0D///////86/vYnquY3/v///5T//v///17///////////////84S3QNB/8L/////////////7r/////NP////9l/////wPD4yis/x7Ym2lWSP+em////0n////////v///////////////////7//7pdGN3Urr6/+v/6aT////+//H/o2P/1v+7r7jp4PM/3p4g////g///K///481LxO///v////9w////8v/////9/p3J///a+P9v/5KR/+n///+p/xf//8P//wAAe7FyaAAABCZJREFUSMdj+E8iYKBUgwIHnwQ3N7cEHxcH+///VayoAE0Dh41qR7aBnCIQ8MsJKHH9/99czYYMWlA0cIkJGjMgAKfq//9RNYzIgLcBWYOTiCgDMhDn+B9bh6LebiWyH6L5UZQzONoAHWSHoqEpDkkDsyKqelv1//9rG1HUN9YihZK9AKp6BkG+/6xNqA5ajhSsCkrIipmYGGRa//9vQXVQXSySBnkWJOUMfn5Myuz/G3hR1NdEIUUchwiy+bkTsg4dbW/fu6W/e1c3XMMy5JiOZkFxUFZo74mgKTqaKXu0+2HqVwkja3BH9kFu361JwcHTfPJD4mdfe8ULAdVRyGlJAcVFfg+CQOozZ4XrJ85+JgwBsVXIGriQw5Tp4ZScezd8JiWnBupru30qwJZa+ZAjmWlC8fUZM4qB6kPnLNSPLMWqQQ5ZQ5aOzs1HmamBaQHzFs6y+qAmJCTE8f9/QgKSBg4DJPWc6zVDQkIC09JkZSPD38kukpExFpT4z67uYI/QwCOOCCK/izvu5CWl6AcEWMnKWml7LWbKZfH9/99UkknQHhGsynDz+65eWXv3/JmJrq5eXienVlRUfH/z8VvCf45soKQIH1yDEQsszrp6gwq9C73T87xcXadKl5TkFev4A/2tygmSBqYXqAYJmK+ZuoJydDR1vP09DA0NOy2kpdML81+U/heCpH1JU3jig7lJ5nKOT4i/t6ZHkqGzs4lJmIVHfrj+JR4HqLQSD0yDkCNEpGNn5ix9D03/eJdElTZdKV2TpNOhkwt8YUlNUgimgV0dLMBvf1gz1MolPd5FRcVNSkpDQ8owJeBCDyIhrIDnOD5QcuIU+3/2QKSs9laQ+noNLS0zLWdtqyP7mBAFAw88TwsJgMuJYweBGjYngtWbmeuZOW+bvNQToUFOAlFqOBk4Ov3/L7Z60/aN0p1tUhpa5nqWlub7C3p2I9QzyAghlUvczOz/1fhzPT3XSIfpSmmYAdVbmm1gV0dSz8DSilpUQsqCddIWIA3meuZaJqdMJZEzl6gRqgZIWZAxUdoizERXN8yi5MltcZTChzMaRQM3JNUWHS8rL/+yaPGvMmvr5ywoGoxtkDWwQ+Pb89ycBeWfGSJeL/la+RS1eOPnRtbQKgMRjZg+t8x6PkP273nWQAoFOPAgaeAThKXAmXMrK39Kmr5fsuBlBqoXfJGLe3VbmHjG9Mczi9T//3h7vygXtcDlQtJg44iQiIjIBRbGPO7gghPJy0ZIxT2HOLIUgwxQzsgYrUR350HSIMaJLidhgKY+mw+pflBDrX8E7OGBjPCAPc76gQFSTqAIiYrb/8dRP4CyosJ/rmwU5XIxHMilt4QBJwsSkBMClxOQULBlkRRwEONmR2kJcDGjADX2/+xO8r5iqjExqmLyrWpcPFRta1BfAwCtyN3XpuJ4RgAAAABJRU5ErkJggg==",
        'https://shields.rbtlog.dev/simple/ch.famoser.mensa',
      ],
    },
  ];
</script>

<h2>About my coding journey</h2>

<p>
  Since about 2016, I’ve been teaching myself how to code. The main languages I’ve been learning are
  <a target="_blank" href="https://www.python.org/">Python</a>,
  <a target="_blank" href="https://www.java.com/">Java</a> and
  <a target="_blank" href="https://kotlinlang.org/">Kotlin</a>. I’ve also looked into many other
  languages like
  <a target="_blank" href="https://en.wikipedia.org/wiki/Shell_script">Shell</a>,
  <a target="_blank" href="https://www.gnu.org/software/bash/">Bash</a>,
  <a target="_blank" href="https://www.latex-project.org/">LaTeX</a>,
  <a target="_blank" href="https://www.c-language.org/">C</a>,
  <a target="_blank" href="https://isocpp.org/">C++</a>,
  <a target="_blank" href="https://learn.microsoft.com/en-gb/dotnet/csharp/">C#</a>,
  <a target="_blank" href="https://en.wikipedia.org/wiki/SQL">SQL</a>,
  <a target="_blank" href="https://nixos.org/">Nix</a>,
  <a target="_blank" href="https://html.spec.whatwg.org/multipage/">HTML</a>,
  <a target="_blank" href="https://www.w3.org/TR/css/">CSS</a>,
  <a target="_blank" href="https://262.ecma-international.org/15.0/index.html">JavaScript</a>,
  <a target="_blank" href="https://www.typescriptlang.org/">TypeScript</a>,
  <a target="_blank" href="https://dart.dev/">Dart</a>,
  <a target="_blank" href="https://www.r-project.org/">R</a>, etc.
</p>
<p>
  Nearly everything bigger than some simple scripts is available on
  <a target="_blank" href="https://github.com/fflopsi">my GitHub</a>, a list of all my repositories
  can be found
  <a href="#repos">below</a>.
</p>

<div class="card-container">
  <img
    src="https://raw.githubusercontent.com/fflopsi/fflopsi/main/profile/top-active-langs-dark.svg"
    alt="GitHub top active languages"
    width="350"
    loading="lazy"
  />
  <img
    src="https://raw.githubusercontent.com/fflopsi/fflopsi/main/profile/stats-dark.svg"
    alt="GitHub stats"
    width="350"
    loading="lazy"
  />
  <img
    src="https://raw.githubusercontent.com/fflopsi/fflopsi/main/profile/top-langs-dark.svg"
    alt="GitHub top languages"
    width="350"
    loading="lazy"
  />
</div>

<h2>Some bigger projects</h2>

<p>
  <i>
    Note that most of these projects haven't been updated in quite some time, except
    <a href="#mensa">Mensa app</a>,
    <a href="#nixos">Fedora dots</a> and
    <a href="#snippets">Latex Suite Snippets</a>.
  </i>
</p>

<h3 id="mensa">Mensa app</h3>

<div class="card-container">
  {#each stores as store}
    <a target="_blank" href={store.href}>
      <img class="badge" src={store.badge.src} alt={store.badge.alt} />
      <span class="shields">
        {#each store.shields as src}
          <img {src} alt="" />
        {/each}
      </span>
    </a>
  {/each}
</div>

<p>
  In the summer of 2025, I took over the development and maintenance of the
  <a target="_blank" href="https://play.google.com/store/apps/details?id=ch.famoser.mensa">
    Mensa app
  </a>
  for Android from
  <a target="_blank" href="https://famoser.ch/">Florian Moser</a>. The app lists all the mensas of
  ETHZ and UZH and displays their respective menus. I updated the app's UI and internals and added a
  few features, such as multi-day menu preview, highlighting vegetarian/vegan options, displaying
  menu images, allergens, nutrients, configuration options and more.
</p>

<p>
  Check out the
  <a target="_blank" href="https://github.com/fflopsi/mensa-zh">source code on GitHub</a> or download
  the app from one of the stores.
</p>

<h3 id="nixos">Fedora Dots, NixOS Configuration and Arch Customization</h3>

<p>
  I originally started my
  <a target="_blank" href="https://www.linux.org/">Linux</a> journey on
  <a target="_blank" href="https://ubuntu.com/">Ubuntu</a>, but then quickly switched over to
  <a target="_blank" href="https://manjaro.org/">Manjaro</a> and soon to
  <a target="_blank" href="https://endeavouros.com/">EndeavourOS</a>, where I stayed quite a while.
</p>
<p>
  I wanted to customize my
  <a target="_blank" href="https://archlinux.org/">Arch</a>/EndeavourOS installation, so I started
  writing a simple collection of some Bash scripts to customize it to my liking, e.g. installing
  some packages, theming and customizing
  <a target="_blank" href="https://www.gnome.org/">Gnome</a> and installing some extensions, some
  configuration, etc. All these scripts can be found
  <a target="_blank" href="https://github.com/fflopsi/arch-customization">here</a>.
</p>
<p>
  Upon starting my studies at ETH, I did not have much time to tinker with my system, so I switched
  from Arch/EndeavourOS to
  <a target="_blank" href="https://nixos.org/">NixOS</a> to better organize my system configuration.
  The flake and all the files necessary (system configuration and
  <a target="_blank" href="https://nix-community.github.io/home-manager/">Home Manager</a> files) to
  rebuild my systems are available
  <a target="_blank" href="https://github.com/fflopsi/nixos-config">here</a>.
</p>
<p>
  I could not resist the urges of distro-hopping once more, so I switched to
  <a target="_blank" href="https://fedoraproject.org/">Fedora</a>. I reused much of my configuration
  from EndeavourOS and NixOS, and everything is available
  <a target="_blank" href="https://github.com/fflopsi/fedora-dots/">here</a>.
</p>

<h3 id="snippets">Obsidian Latex Suite Snippets</h3>

<p>
  During lectures, I take notes using
  <a target="_blank" href="https://obsidian.md/">Obsidian</a> and the plugin
  <a target="_blank" href="https://github.com/artisticat1/obsidian-latex-suite">Latex Suite</a>.
  Using this, one can write snippets to speed up LaTeX input and streamline the notetaking
  experience.
</p>
<p>
  My collection of snippets is tailored to the courses I'm taking and contains text snippets for
  heavily used words and terms as well as Latex snippets for quick math inputs. All the snippets can
  be found
  <a target="_blank" href="https://github.com/fflopsi/obsidian-latex-suite-snippets">here</a>.
</p>

<h3>Tournaments</h3>

<p>
  Tournaments is an
  <a target="_blank" href="https://www.android.com/">Android</a> app built with
  <a target="_blank" href="https://developer.android.com/compose">Jetpack Compose</a> for managing
  croquet tournaments with multiple players and multiple games per tournament. I’m converting this
  to a
  <a target="_blank" href="https://www.jetbrains.com/compose-multiplatform/">
    Compose Multiplatform
  </a>
  project, more information about it can be found
  <a target="_blank" href="https://github.com/fflopsi/tournaments">here</a>.
</p>

<h3>Two Body Problem</h3>

<p>
  This was my matriculation project (project at the end of Swiss high school). It is a simulation of
  the gravitational
  <a target="_blank" href="https://en.wikipedia.org/wiki/Two-body_problem">two body problem</a>,
  written in Python with
  <a target="_blank" href="https://vpython.org/">VPython</a>. You can adjust options to define how
  the simulation looks/works and values to define the physical properties of the two bodies. The
  simulation itself can be found
  <a target="_blank" href="https://github.com/fflopsi/twobodyproblem">here</a>, a graphical utility
  for entering the options and values is available
  <a target="_blank" href="https://github.com/fflopsi/twobodyproblem-gui">here</a>.
</p>

<h3>WorldUtils</h3>

<p>
  WorldUtils is a
  <a target="_blank" href="https://www.minecraft.net">Minecraft</a>
  <a target="_blank" href="https://www.spigotmc.org/">Spigot</a> plugin containing some handy
  utilities for your Minecraft server, e.g. saving and viewing global and personal positions,
  sending your positions to other players, controlling a global and personal timer and resetting the
  whole world/server. The plugin can be found
  <a target="_blank" href="https://github.com/fflopsi/worldutils">here</a>.
</p>
<p>
  WorldUtils Projects is an extension to WorldUtils and contains some long-term Minecraft projects.
  At the moment, there is only one: AllItems, with the objective to collect all obtainable items in
  the game. This plugin is available
  <a target="_blank" href="https://github.com/fflopsi/worldutils-projects">here</a>.
</p>

<h2 id="repos">My repositories</h2>

<ul>
  {#await data.repos}
    <li>Fetching repositories...</li>
  {:then repos}
    {#each repos as repo}
      <li>
        <a target="_blank" href={repo.html_url}>{repo.name}</a>{#if repo.owner.login !== 'fflopsi'}
          &nbsp;(<a target="_blank" href={repo.owner.html_url}>{repo.owner.login}</a>)
        {/if}{#if repo.archived}
          &nbsp;<i>(Archived)</i>
        {/if}:
        {#if !repo.description}
          <i>(No description)</i>
        {:else}
          {repo.description}
        {/if}
      </li>
    {/each}
  {:catch error}
    <li>Something went wrong: {error.message}</li>
  {/await}
</ul>
