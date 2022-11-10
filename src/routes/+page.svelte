<script>
  import Scroller from '$lib/Scroller.svelte'
  import Note from '$lib/Note.svelte'
  import Header from '../lib/Header.svelte'
  import Preface from '../lib/Preface.svelte'
  import BigQuote from '../lib/BigQuote.svelte'
  import Footer from '../lib/Footer.svelte'
  import Map from '../lib/Map.svelte'
  import { coords } from '../lib/stores'
  import BigText from '../lib/BigText.svelte'

  export let data

  let { notes } = data

  let index = -1

  let offset, progress

  const updateMap = () => {
    let currentNote = notes[index % notes.length]
    if (currentNote) {
      let { lat, lon } = currentNote.coordinates
      coords.set({ lat, lon })
    }
  }

  $: index, updateMap()
</script>

<BigText />
<section class="masthead">
  <Header />

  <Preface />
</section>

<BigQuote />

<!-- the Note component is wrapped in an article tag, which I need to specify in "query" -->
<Scroller
  top={0}
  query="article"
  foregroundZIndex={0}
  bind:index
  bind:offset
  bind:progress
>
  <Map slot="background" />

  <div class="notes" slot="foreground">
    {#each data.notes as note}
      <Note text={note.text} date={note.date} location={note.location} />
    {/each}
  </div>
</Scroller>

<Footer />

<style>
  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .masthead {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.25rem;
    padding: 0 10px;
    opacity: 0;
    animation: 1.2s forwards fade calc(var(--delay) * 1.5);
  }

  .notes {
    width: 60%;
    box-sizing: border-box;
  }

  @media (max-width: 800px) {
    .notes {
      width: 100%;
      opacity: 0.99;
      z-index: unset;
    }
  }
</style>
