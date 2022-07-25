<script>
  import compass from '$lib/assets/compass.svg'

  let y
  let rotation = 0

  let updateRotation = () => {
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
    width: 80px;
    position: absolute;
    right: 0;
    bottom: -25%;
  }
</style>
