<script>
  import HeaderElements from '../lib/HeaderElements.svelte'
</script>

<header>
  <HeaderElements />
  <h1>Round The World</h1>

  <p>
    In 1878, Andrew Carnegie (of Carnegie Hall and Carnegie Mellon University)
    decided to go on a world tour.
  </p>

  <p>
    During that journey, he kept a diary, which he then published as a book. I
    re-created an interactive version of selected entries from October 1878 to
    January 1879 for my first project at <a href="#">Contentful</a>.
  </p>
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
