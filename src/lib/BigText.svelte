<script>
  import SlideUp from './SlideUp.svelte'
  import contentful from '$lib/assets/contentful.svg'
</script>

<div class="container">
  <SlideUp element="h1">Round The World</SlideUp>
  <p>A Contentful Project <img src={contentful} alt="contentful logo" /></p>
</div>

<style>
  .container {
    max-width: min(80vw, 1200px);
    margin: 5rem auto;
    text-align: center;
  }

  @keyframes slide {
    0% {
      right: 90%;
    }

    100% {
      right: -12%;
    }
  }

  img {
    max-height: 2.5rem;
    position: absolute;
    top: 22.5%;
    animation: 1s forwards slide ease-out var(--delay);
    z-index: 10;
  }

  @keyframes shrink {
    0% {
      width: 100%;
    }

    100% {
      width: 0%;
      visibility: hidden;
    }
  }

  p {
    font-size: 3rem;
    position: relative;
    display: inline-block;
  }

  p:after {
    width: 100%;
    height: 4.5rem;
    content: '';
    position: absolute;
    right: 0;
    z-index: 5;
    background-color: var(--bkg);
    animation: 1s forwards shrink ease-out var(--delay);
  }

  @media (max-width: 800px) {
    p {
      font-size: 2rem;
    }
  }
</style>
