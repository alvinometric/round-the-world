<script>
  export let date
  export let text
  export let location
</script>

<article class="card">
  <h3>{date}</h3>
  {#if location}
    <small>{location}</small>
  {/if}

  <section>{@html text}</section>
</article>

<style>
  h3 {
    margin-bottom: 0;
  }

  .card {
    border-top: 1px dotted black;
    padding: 0 1rem;
  }

  small {
    text-transform: uppercase;
    text-align: right;
    display: block;
  }

  .card :global(blockquote) {
    font-style: italic;
    font-weight: 600;
    position: relative;
    margin: 2rem auto;
    max-width: 350px;
    font-size: 1.5rem;
  }

  .card :global(blockquote:before) {
    content: '“';
    position: absolute;
    left: 0;
    font-size: 3rem;
    transform: translate(-100%, -1.5rem);
  }

  .card :global(blockquote p) {
    margin: 0;
  }

  section {
    max-width: 60ch;
    font-weight: 350;
  }

  section > :global(p:first-child:first-letter) {
    font-size: 3rem;
    float: left;
    margin-right: 0.1em;
    font-weight: 500;
    line-height: 1.2;
  }
</style>
