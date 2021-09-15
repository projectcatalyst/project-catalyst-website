import { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'next-auth/client'
import { useRouter } from 'next/router'

import ThemeManager from '../src/shared/styles/themes'
import HTMLHeadDefault from '../src/shared/components/html-head-default'
import { useApollo } from '../src/graphql/apollo-client'

import { GA_TRACKING_ID } from '../src/lib/gtag'

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps?.__APOLLO_STATE__)
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
    <Provider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <ThemeManager>
          <HTMLHeadDefault />
          <Component {...pageProps} />
        </ThemeManager>
      </ApolloProvider>
    </Provider>
  )
}

export default App
