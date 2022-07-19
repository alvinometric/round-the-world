<script>
  import Card from '$lib/Card.svelte'
  export let repos
</script>

<main>
  <h1>Round the world</h1>
  <div class="cards">
    {#each repos as repo}
      <Card {...repo} />
    {/each}
  </div>
</main>

<style>
  .cards {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
</style>
