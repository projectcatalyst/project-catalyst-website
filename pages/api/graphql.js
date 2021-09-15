import { ApolloServer } from 'apollo-server-micro'
import { getSession } from 'next-auth/client'

import schema from '../../src/graphql/schema'

const apolloServer = new ApolloServer({
  schema,
  cors: true,
  context: async ({ req }) => {
    // NOTE - Add back when next-auth upgraded
      // const session = await getSession({ req })
      // return { user: session?.user, req }
    return { req }
  },
  playground: {
    settings: {
      'editor.theme': 'light',
      'request.credentials': 'include'
    }
  },
  introspection: process.env.NODE_ENV === 'development'
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })