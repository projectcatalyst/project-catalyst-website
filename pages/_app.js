import { useEffect } from 'react'
import { useRouter } from 'next/router'

import ThemeManager from '../src/shared/styles/themes'
import HTMLHeadDefault from '../src/shared/components/html-head-default'

import { GA_TRACKING_ID } from '../src/lib/gtag'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  const handleRouteChange = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeManager>
      <HTMLHeadDefault />
      <Component {...pageProps} />
    </ThemeManager>
  )
}

export default App
