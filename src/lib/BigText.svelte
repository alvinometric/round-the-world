<script>
  import SlideUp from './SlideUp.svelte'
</script>

<div class="container">
  <SlideUp element="h1">Round The World</SlideUp>
  <p>A Contentful Project</p>
</div>

<style>
  .container {
    max-width: min(80vw, 1200px);
    margin: 5rem auto;
  }

  p {
    text-align: center;
    font-size: 3rem;
  }
</style>
