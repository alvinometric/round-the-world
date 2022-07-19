<script>
  export let name
  export let description
  export let url
  export let stars
</script>

<article class="card">
  <h2>{name}</h2>
  <p>{description}</p>
  <a href={url}>Github</a>
</article>

<style>
  .card {
    border-radius: 10px;
    border: 1px solid gray;
  }
</style>
