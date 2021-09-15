import { mutationField, stringArg, nonNull } from 'nexus'
import { UserInputError } from 'apollo-server-micro'

import prisma from '../../prisma-client'

export const checkUsername = mutationField('checkUsername', {
  type: 'Boolean',
  args: {
    username: nonNull(stringArg())
  },
  resolve: async (parent, { username }) => {
    if (username.length > 20) return new UserInputError(
      'Username too long', { type: 'username-too-long' }
    )

    if (!username.match(/^[0-9a-z-]+$/)) return new UserInputError(
      'Username can only use numbers, lower case letters and hyphens', { type: 'username-invalid' }
    )

    const findUsernmae = await prisma.user.findUnique({
      where: {
        username
      },
      select: {
        id: true
      }
    })

    if (findUsernmae) return new UserInputError(
      'Username is already taken', { type: 'username-taken' }
    )

    return true
  }
})