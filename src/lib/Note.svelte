<script>
  export let date
  export let text
</script>

<article class="card">
  <h2>{date}</h2>
  <p>{@html text}</p>
</article>

<style>
  .card {
    border-top: 1px dotted black;
  }
</style>
