<script>
  import HeaderElements from '../lib/HeaderElements.svelte'
  import HeaderText from '../lib/HeaderText.svx'
</script>

<header>
  <h1>Round The World</h1>

  <HeaderText />
</header>

<HeaderElements />

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
