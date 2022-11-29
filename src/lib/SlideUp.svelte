<script>
  import { onMount } from 'svelte'

  export let element = 'h2'

  let isInView
  let container

  onMount(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      isInView = entries[0].isIntersecting

      if (isInView) {
        // only letting it run once as I don't want to impair performance
        // There will be multiple components, so ideally I'll only create one observer
        // and coordinate everything, but this is a demo.
        observer.disconnect()
      }
    })

    observer.observe(container)
  })
</script>

<svelte:element this={element} class="container" bind:this={container}>
  <div class="animated" class:visible={isInView}>
    <slot />
  </div>
</svelte:element>

<style>
  .animated {
    transform: translateY(100%);
    opacity: 0.6;
    transition: transform 0.7s ease-out, opacity 0.4s linear;
  }

  .visible {
    transform: translateY(0%);
    opacity: 1;
  }

  .container {
    overflow: hidden;
  }
</style>
