<script>
  import compass from '$lib/assets/compass.svg'
  import getReducedMotion from '$lib/reduced-motion'

  let y
  let rotation = 0

  let updateRotation = () => {
    const isReducedMotion = getReducedMotion()

    if (isReducedMotion) return

    // TODO wrap value?
    rotation = (y / innerHeight) * 360
  }

  $: innerHeight = 0

  $: y, updateRotation()
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<img
  class="compass"
  alt="The project compass"
  src={compass}
  style="transform: rotate({rotation}deg)"
/>

<style>
  .compass {
    width: 110px;
    margin: 2rem auto;
    display: block;
  }
</style>
