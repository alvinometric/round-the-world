import { browser } from '$app/env'

// returns true _only_ if the user has ticked the box
const getReducedMotion = () => {
  if (!browser) return

  const QUERY = '(prefers-reduced-motion: no-preference)'
  const mediaQueryList = window.matchMedia(QUERY)
  return !mediaQueryList.matches
}

export default getReducedMotion
