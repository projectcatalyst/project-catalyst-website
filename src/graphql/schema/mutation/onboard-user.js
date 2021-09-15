import { inputObjectType, mutationField, nonNull } from 'nexus'
import { ApolloError, UserInputError } from 'apollo-server-micro'
import { getSession } from 'next-auth/client'

import prisma from '../../prisma-client'
import formatImageUrl from '../../../shared/functions/format-image-url'

const OnboardUserInput = inputObjectType({
  name: 'OnboardUserInput',
  definition(t) {
    t.nonNull.string('username')
    t.list.nonNull.string('services')
    t.list.nonNull.string('skills')
    t.boolean('roleStakePoolOperator')
    t.boolean('roleCommunityAdvisor')
    t.boolean('availableForCollaboration')
    t.string('accountLinkedIn')
    t.string('accountGithub')
    t.string('accountTwitter')
    t.string('accountDiscord')
    t.string('accountTelegram')
  }
})

export const onboardUser = mutationField('onboardUser', {
  type: 'User',
  args: {
    input: nonNull(OnboardUserInput)
  },
  resolve: async (parent, { input }, { req, user: ctxUser }) => {
    // NOTE - Remove when next-auth upgraded
    let session
    if (!ctxUser) session = await getSession({ req })
    const user = ctxUser || session?.user
    if (!user) return new ApolloError(
      'Not authenticated', { type: 'auth-error' }
    )

    const {
      username,
      services,
      skills,
      roleStakePoolOperator,
      roleCommunityAdvisor,
      availableForCollaboration,
      accountLinkedIn,
      accountGithub,
      accountTwitter,
      accountDiscord,
      accountTelegram
    } = input

    if (username.length > 20) return new UserInputError(
      'Username too long', { type: 'username-too-long' }
    )

    if (!username.match(/^[0-9a-z-]+$/)) return new UserInputError(
      'Username can only use numbers, lower case letters and hyphens', { type: 'username-invalid' }
    )

    if (skills.length > 30) return new UserInputError(
      'Too many skills, pick at most 30 skills', { type: 'skills-too-long' }
    )

    if (services.length > 30) return new UserInputError(
      'Too many services, pick at most 30 services', { type: 'services-too-long' }
    )

    if (!accountLinkedIn && !accountDiscord && !accountTelegram) return new UserInputError(
      'Must have one of LinkedIn, Discord or Telegram added', { type: 'accounts-invalid' }
    )

    const currentUser = await prisma.user.findUnique({
      where: {
        id: user.id
      },
      select: {
        id: true,
        email: true, 
        username: true,
        image: true,
        thumbnail: true
      }
    })

    if (currentUser.username) return new ApolloError(
      'You have already been onboarded', { type: 'user-onboarded' }
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

    if (skills) {
      const findSkills = await prisma.skill.findMany({
        where: {
          id: {
            in: skills
          }
        },
        select: {
          id: true,
          name: true
        }
      })
    
      if (skills.length !== findSkills.length) return new UserInputError(
        'A skill provided is not valid', { type: 'skill-invalid' }
      )
    }
  
    if (services) {
      const findServices = await prisma.service.findMany({
        where: {
          id: {
            in: services
          }
        },
        select: {
          id: true,
          name: true
        }
      })

      if (services.length !== findServices.length) return new UserInputError(
        'A service provided is not valid', { type: 'service-invalid' }
      )
    }
  
    const { image, thumbnail } = formatImageUrl(user.image)

    return prisma.user.update({
      where: {
        id: currentUser.id
      },
      data: {
        username,
        image,
        thumbnail,
        skills: {
          create: skills.map(id => ({ skillId: id }))
        },
        services: {
          create: services.map(id => ({ serviceId: id }))
        },
        roleStakePoolOperator,
        roleCommunityAdvisor,
        availableForCollaboration,
        ... !!accountLinkedIn && { accountLinkedIn },
        ... !!accountGithub && { accountGithub },
        ... !!accountTwitter && { accountTwitter },
        ... !!accountDiscord && { accountDiscord },
        ... !!accountTelegram && { accountTelegram }
      }
    })
  }
})