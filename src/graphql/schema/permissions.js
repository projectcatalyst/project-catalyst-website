import { rule, shield, allow } from 'graphql-shield'
import { getSession } from 'next-auth/client'

const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx) => Boolean(ctx.user)
)

const isSameUser = rule({ cache: 'strict' })(
  async ({ email }, args, { req, user: ctxUser }) => {
    // NOTE - Remove when next-auth upgraded
    let session
    if (!ctxUser) session = await getSession({ req })
    const user = ctxUser || session?.user
    return !!user && user.email === email
  }
)

const permissions = shield(
  {
    Query: {
      //me: isAuthenticated
    },
    Mutation: {
      //onboardUser: isAuthenticated,
      //updateUser: isAuthenticated,
      //checkUsername: isAuthenticated
    },
    User: {
      email: isSameUser
    },
  },
  {
    fallbackRule: allow,
    allowExternalErrors: true
  }
)

export default permissions