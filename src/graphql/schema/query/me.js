import { queryField } from 'nexus'
import { getSession } from 'next-auth/client'

import prisma from '../../prisma-client'

export const me = queryField('me', {
  type: 'User',
  resolve: async (parent, args, { user: ctxUser, req }) => {
    // NOTE - Remove when next-auth upgraded
    let session
    if (!ctxUser) session = await getSession({ req })
    const user = ctxUser || session?.user
    if (!user) return null

    return prisma.user.findUnique({
      where: {
        ... !!user.email && { email: user.email },
        ... !!user.username && !user.email && { username: user.username }
      }
    }) 
  }
})
