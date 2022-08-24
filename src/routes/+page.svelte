<script>
  import Scroller from '@sveltejs/svelte-scroller'
  import Note from '$lib/Note.svelte'
  import Header from '../lib/Header.svelte'
  import Preface from '../lib/Preface.svelte'
  import BigQuote from '../lib/BigQuote.svelte'
  import Footer from '../lib/Footer.svelte'
  import Map from '../lib/Map.svelte'
  import { coords } from '../lib/stores'

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

<section class="masthead">
  <Header />

  <Preface />

  <BigQuote />
</section>

<!-- the Note component is wrapped in an article tag, which I need to specify in "query" -->
<Scroller top={0} query="article" bind:index bind:offset bind:progress>
  <Map slot="background" />

  <div class="notes" slot="foreground">
    {#each data.notes as note}
      <Note text={note.text} date={note.date} location={note.location} />
    {/each}
  </div>
</Scroller>

<Footer />

<style>
  .masthead {
    max-width: 600px;
    margin: 0 auto;
  }

  .notes {
    width: 60%;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 800px) {
    .notes {
      width: 100%;
    }
  }
</style>
