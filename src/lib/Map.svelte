<script>
  import { onMount, onDestroy } from 'svelte'
  import maplibregl from 'maplibre-gl'
  import { coords } from './stores'

  const style = {
    version: 8,
    sources: {
      stamen: {
        type: 'raster',
        // List of other good-looking carto basemaps https://carto.com/help/building-maps/basemap-list/
        tiles: [
          'https://stamen-tiles.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png',
        ],
        tileSize: 256,
        maxzoom: 19,
      },
    },
    layers: [
      {
        id: 'stamen',
        type: 'raster',
        source: 'stamen', // This must match the source key above
      },
    ],
  }

  let container
  let map
  let marker
  let customMarker

  onMount(() => {
    map = new maplibregl.Map({
      container,
      style,
      center: [-70.34106818527637, 41.865675358053686],
      minZoom: 5,
      maxZoom: 8,
      zoom: 7,
    })

    map.on('load', function () {
      marker = new maplibregl.Marker(customMarker)
      map.scrollZoom.disable()
    })
  })

  const unsubscribe = coords.subscribe((c) => {
    if (map) {
      map.easeTo({ center: [c.lon, c.lat], duration: 4000 })
      setTimeout(() => {
        marker.setLngLat([c.lon, c.lat]).addTo(map)
      }, 2300)
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
    src="https://placekitten.com/g/50/50/"
    alt=""
  />
  <div bind:this={container}>
    {#if map}
      <slot />
    {/if}
  </div>
</section>

<style>
  div {
    position: absolute;
    right: 0;
    width: 40%;
    height: 100vh;
  }

  .marker {
    width: 50px;
    height: 50px;
  }

  section {
    position: relative;
  }
</style>
