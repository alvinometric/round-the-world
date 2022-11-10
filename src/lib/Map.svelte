<script>
  import { onMount, onDestroy } from 'svelte'
  import maplibregl from 'maplibre-gl'
  import photo from '$lib/assets/carnegie-photo.jpg'
  import { coords } from './stores'

  const style = {
    version: 8,
    sources: {
      watercolor: {
        type: 'raster',
        tiles: [
          'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
        ],
        tileSize: 256,
        maxzoom: 10,
      },
      labels: {
        type: 'raster',
        tiles: [
          '    http://stamen-tiles-d.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png',
        ],
        tileSize: 256,
        maxzoom: 10,
      },
    },
    layers: [
      {
        id: 'background',
        type: 'background',
        paint: {
          'background-color': '#A0DBEE',
        },
      },
      {
        id: 'stamen-watercolor',
        type: 'raster',
        source: 'watercolor', // This must match the source key above
      },
      {
        id: 'stamen-label',
        type: 'raster',
        source: 'labels',
      },
    ],
  }

  let container
  let map
  let marker
  let customMarker
  let center = [-70.34106818527637, 41.865675358053686]

  onMount(() => {
    map = new maplibregl.Map({
      container,
      style,
      center,
      minZoom: 5,
      maxZoom: 8,
      zoom: 7,
    })

    map.on('load', function () {
      marker = new maplibregl.Marker(customMarker).setLngLat(center).addTo(map)
      map.scrollZoom.disable()
    })
  })

  const unsubscribe = coords.subscribe((c) => {
    if (map) {
      map.easeTo({ center: [c.lon, c.lat], duration: 4000 })
      setTimeout(() => {
        marker.setLngLat([c.lon, c.lat])
      }, 3000)
    }
  })

  onDestroy(() => {
    if (map) {
      map.remove()
    }

    unsubscribe()
  })
</script>

<section>
  <img
    class="marker"
    bind:this={customMarker}
    src={photo}
    aria-hidden="true"
    alt="Portrait of Andrew Carnegie"
  />
  <div class="container" bind:this={container}>
    {#if map}
      <slot />
    {/if}
  </div>
</section>

<style>
  .container {
    position: absolute;
    right: 0;
    width: 40%;
    height: 100vh;
  }

  @media (max-width: 800px) {
    .container {
      width: 100%;
      height: 50vh;
    }
  }

  .marker {
    width: 50px;
    height: 50px;
    border: 2px solid gold;
    border-radius: 100%;
  }

  section {
    position: relative;
  }
</style>
