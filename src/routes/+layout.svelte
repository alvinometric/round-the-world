<script>
  import './global.css'
  import { MetaTags } from 'svelte-meta-tags'
  let url = 'https://rtw.voyage'
  let socialCard = 'https://rtw.voyage/social-card.jpg'
  let title = 'Round The World'
  let description =
    "An interactive diary based on Andrew Carnegie's book called Round The World, published in 1879."
</script>

<MetaTags
  {title}
  {description}
  canonical={url}
  openGraph={{
    url,
    title,
    description,
    images: [{ url: socialCard }],
    site_name: title,
  }}
  twitter={{
    handle: '@alvinometric',
    site: '@site',
    cardType: 'summary_large_image',
    title,
    image: socialCard,
  }}
/>

<main>
  <slot />
</main>

<style>
  main {
    width: 100%;
  }
</style>
