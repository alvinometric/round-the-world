<script>
  import { draw } from 'svelte/transition'
  import { onMount } from 'svelte'

  let isInView = false
  let container

  let options = { rootMargin: '-50px' }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      isInView = entries[0].isIntersecting
    }, options)

    observer.observe(container)
  })
</script>

<div bind:this={container}>
  <svg width="400" viewBox="0 0 466 91" xmlns="http://www.w3.org/2000/svg">
    {#if isInView}
      <path
        in:draw={{ duration: 500 }}
        d="M6.20398 53.8852c0-.9 1-4.1 0-4.5-1-.4-6.29999 1.2-4.999996 2.5 1.299996 1.3 4.599996 5.4 11.500016 4 6.9-1.4 10.1-2.1 23-11s39.4-34.90003 41.5-33.5c2.1 1.4-23.6 32-31 40.5-7.4 8.5-3.2 5.2-6 2s-12.7-16.2-8-18c4.7-1.8 22.8 7.7 31.5 9 8.7 1.3 11.4-3.9 12-2.5.6 1.4-11.6 8.5-9 9.5 2.6 1 16.3-4.5 22-4.5 5.7 0 5.2 3.6 6.5 4.5"
        fill="none"
        stroke-width="2"
        stroke-linejoin="round"
        stroke="#000"
      />
      <path
        in:draw={{ duration: 500, delay: 200 }}
        d="M121.704 46.8852c-2.2.2-8.2-.1-11 1-2.8 1.1-5.4 4.2-3 4.5 2.4.3 8 1 15-3s19.1-17 20-17c.9 0-14 13.7-15.5 17-1.5 3.3 3.3 1.5 8-.5s12.5-9.8 15.5-9.5c3 .3-1.5 8.6-.5 11 1 2.4.1 2.4 5.5 1s17.6-5.6 21.5-8c3.9-2.4-.1-4.6-2-4-1.9.6-6.5 5-7.5 7s-.5 2.7 2.5 3c3 .3 8.6-.3 12.5-1.5 3.9-1.2 5.6-4.8 7-4.5 1.4.3-3.1 5.6 0 6 3.1.4 11.9-3.7 15.5-4 3.6-.3.1 3.2 2.5 2.5 2.4-.7 7.6-4.8 9.5-6"
        fill="none"
        stroke-width="2"
        stroke-linejoin="round"
        stroke="#000"
      />
      <path
        in:draw={{ duration: 500, delay: 600 }}
        d="M246.204 55.8852c2-2.8333 7.9-9.3 15.5-12.5l21-13.5s22.9-16.3 24.5-17.5c2-1.50001 10-7.00001 11.5-9.00001 1.5-1.999998-.5-5-15 2-14.5 7.00001-38.5 36.50001-39.5 42.00001-.8 4.4 3 4.8333 5 4.5 3.5.5 12.2-.5 19-8.5 1.333-.5 3.6-2.7 2-7.5-1.667-1.1667-6.6-1.8-13 5-1.167 1.3333-3.5 4.5-3.5 6.5"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#000"
      />
      <path
        in:draw={{ duration: 500, delay: 800 }}
        d="M305.204 44.8852c2.5-3 6-8.7 0-7.5-7.5 1.5-8.5.5-11 6-1.667 1-4.5 3.7-2.5 6.5 2.5 3.5 9.5 1.5 13.5-2.5s3.5-7 6-8.5 1.5 2-3 7.5 0 3.5 3 3.5 10-2 12.5-6.5l4.5-4.5 2-3h5c.5.8333 1.2 3 0 5-1.5 2.5-7 7-5 9 1.6 1.6 5.667.6667 7.5 0 1.667-1.3333 6.2-4.5 11-6.5 6-2.5 9.5-1 12-6-3.333 3.5-9.9 10.9-9.5 12.5.4 1.6 2.833.6667 4 0l17.5-6.5c-2.167 1.5-6.1 4.9-4.5 6.5-1.333 3.1667-2 8.3 6 3.5 4.333-.3333 13.8-1.5 17-3.5 4-2.5 8.5-2 9-9s-19 5.5-5 11c1.833.6667 6.4 1.6 10 0"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#000"
      /><path
        in:draw={{ duration: 500, delay: 1000 }}
        d="M419.204 47.3852c1.167.1667 3.8-.4 5-4 1.5-4.5-8-2.5-11 3-1.5.6667-4.4 4.5-4 14.5.5 12.5-8.5 24.5-12 27s-17 6-12.5-9c.833-2.1667 3.3-6.7 6.5-7.5 1.333-2.6667 5-7.9 9-7.5 4 .4 12.333-4.1667 16-6.5 5.833-4.8333 18.5-14.7 22.5-15.5-1.667.3333-4.5 1.7-2.5 4.5 2.5 3.5 11.5 3 15 0s11.5-4.5 12-9-16.5 7.5-5.5 10c2 .3333 6.3.8 7.5 0"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#000"
      />

      <path
        in:draw={{ duration: 500, delay: 1200 }}
        d="M447.204 23.8852c.8.4-.333 1.8333-1 2.5-1.6.4-1.667-1.8333-1.5-3 .5 0 1.7.1 2.5.5Z"
        fill="#030303"
        stroke="#000"
      />
      <path
        in:draw={{ duration: 500, delay: 1600 }}
        d="M133.204 78.8852c-3.833-.8333-10.6-1.7-7 1.5 3.6 3.2 18.833 2.3333 26 1.5l51-6.5c24.167-3.1667 73.4-9.4 77-9 4.5.5 52.5-4.5 58-3s19 0 13.5 6c-.667 1-2.5 3.3-4.5 4.5"
        fill="none"
        stroke="#000"
      />
    {/if}
  </svg>
</div>
