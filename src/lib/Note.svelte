<script>
  export let date
  export let text
  export let location
</script>

<article class="card">
  <h3>{date}</h3>
  <small>{location}</small>
  <p>{@html text}</p>
</article>

<style>
  .card {
    border-top: 1px dotted black;
  }

  small {
    text-transform: uppercase;
  }

  p {
    max-width: 60ch;
  }
</style>
