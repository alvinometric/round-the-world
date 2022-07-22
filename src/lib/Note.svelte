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

  <p>{@html text}</p>
</article>

<style>
  .card {
    border-top: 1px dotted black;
  }

  small {
    text-transform: uppercase;
    text-align: right;
    display: block;
  }

  p {
    max-width: 60ch;
  }
</style>
