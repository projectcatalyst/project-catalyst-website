import { queryField, inputObjectType, nonNull } from 'nexus'

import prisma from '../../prisma-client'

const UserInput = inputObjectType({
  name: 'UserInput',
  definition(t) {
    t.nonNull.string('username')
  }
})

export const user = queryField('user', {
  type: 'User',
  args: {
    input: nonNull(UserInput)
  },
  resolve: async (parent, { input: { username } }) => 
    prisma.user.findUnique({ where: { username } })
})
