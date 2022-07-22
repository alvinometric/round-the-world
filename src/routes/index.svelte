<script>
  import Scroller from '@sveltejs/svelte-scroller'
  import Note from '$lib/Note.svelte'
  import Header from '../lib/Header.svelte'
  import Preface from '../lib/Preface.svelte'

  let index, offset, progress
  export let notes
</script>

<Header />

<Preface />

<!-- the Note component is wrapped in an article tag, which I need to specify in "query" -->
<Scroller
  top={0.3}
  bottom={0.8}
  query="article"
  bind:index
  bind:offset
  bind:progress
>
  <div slot="background">
    <p>
      Background. Stays fixed in place while the foreground scrolls over the
      top.
    </p>

    <p>Section {index + 1} is currently active.</p>
  </div>

  <div class="notes" slot="foreground">
    {#each notes as note}
      <Note {...note} />
    {/each}
  </div>
</Scroller>

<style>
  .notes {
    width: 40%;
  }

  [slot='background'] {
    text-align: right;
  }

  @media only screen and (max-width: 800px) {
    .notes {
      width: 100%;
    }
  }
</style>
