<script>
  import HeaderElements from '../lib/HeaderElements.svelte'
  import HeaderText from '../lib/HeaderText.svx'
</script>

<header>
  <HeaderElements />
  <h1>Round The World</h1>

  <HeaderText />
</header>

<p class="separator">⁂</p>

<style>
  h1 {
    font-weight: 800;
    text-align: center;
    font-size: 4rem;
    text-transform: uppercase;
  }

  header {
    position: relative;
    margin: 5rem 0 1rem;
  }
</style>
