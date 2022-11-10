<script>
  import HeaderElements from '../lib/HeaderElements.svelte'
  import HeaderText from '../lib/HeaderText.svx'
</script>

<header>
  <HeaderText />
</header>

<HeaderElements />

<style>
  header {
    position: relative;
    margin: 5rem 0 1rem;
  }

  @media (max-width: 800px) {
    header {
      margin: 2rem 0 0.5rem;
    }
  }
</style>
