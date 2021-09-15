import { useMemo } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import merge from 'deepmerge'

import { isServer } from '../shared/constants'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient

function createIsomorphLink() {
  if (isServer) {
    const { SchemaLink } = require('@apollo/client/link/schema')
    const schema = require('./schema').default
    const schemaLink = new SchemaLink({
      schema,
      rootValue: { rootTest: 'massiveRootshere' },
      context: operation => { 
        const context = operation.getContext()
        return { user: context?.user } 
      }
    })
    return schemaLink
  } else {
    const { HttpLink } = require('@apollo/client/link/http')
    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    })
  }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: isServer,
    link: createIsomorphLink(),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            community: {
              merge(existing, incoming) {
                return incoming
              }
            }
          }
        },
        User: {
          fields: {
            services: {
              merge(existing, incoming) {
                return incoming
              }
            },
            skills: {
              merge(existing, incoming) {
                return incoming
              }
            }
          }
        } 
      }
    })
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache)

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (isServer) return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}