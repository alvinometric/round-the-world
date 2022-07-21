<script>
  import Note from '$lib/Note.svelte'
  export let notes
</script>

<h1>Round the world</h1>
<div class="cards">
  {#each notes as note}
    <Note {...note} />
  {/each}
</div>

<style>
  .cards {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
</style>
