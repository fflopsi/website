<script lang="ts">
  let { data } = $props();
</script>

<h2>Updates</h2>

<ul>
  <li>
    <em>[31.12.2025]</em>
    <ul>
      <li>
        Uploaded my <a href="#other">summary</a>.
      </li>
      <li>
        Uploaded <a href="#quiz">quiz slides</a> from the last exercise session, thanks for participating!
      </li>
      <li>
        This was the last big update on here; thanks for coming to my exercise class, enjoy your
        break, have a happy new year, and good luck with your exams!
      </li>
    </ul>
  </li>
  <li>
    <em>[14.07.2025] Welcome!</em>
    <ul>
      <li>I was officially accepted as a Funktionentheorie TA!</li>
    </ul>
  </li>
</ul>

<h2 id="material">Exercise material</h2>

<ul>
  {#each data.pdfs as pdf, i}
    <li>
      [ES{String(i + 1).padStart(2, '0')}] <a href={pdf}>Handout</a>
    </li>
  {/each}
</ul>

<h2 id="quiz">Quiz from last exercise session</h2>

<ul>
  <li>
    <a
      target="_blank"
      href="https://www.mentimeter.com/app/presentation/alkchofjqmu31m56byw9y876kthczbqm"
    >
      Mentimeter quiz slides
    </a>
  </li>
</ul>

<h2 id="other">Other stuff</h2>

<ul>
  <li>
    [My summary] (English) <a href="summary.pdf">PDF</a> | <a href="summary.md">Markdown source</a>
  </li>
</ul>

<h2 id="links">Useful links</h2>

<ul>
  <li>
    <a target="_blank" href="https://metaphor.ethz.ch/x/2025/hs/401-2303-00L/">Course website</a> with
    all the material that you can't find on here
  </li>
</ul>

<h2>Contact</h2>

<ul>
  <li>
    <a href="mailto:ffrauenfelde@student.ethz.ch">ffrauenfelde@student.ethz.ch</a>
  </li>
</ul>

<!-- <h2 id="session">Exercise session</h2>

<ul>
  <li>Tuesday</li>
  <li>14:15 - 16:00</li>
  <li>
    <a
      target="_blank"
      href="https://ethz.ch/staffnet/en/utils/location.html?building=ETZ&floor=G&room=91"
    >
      ETZ G 91
    </a>
  </li>
</ul> -->
