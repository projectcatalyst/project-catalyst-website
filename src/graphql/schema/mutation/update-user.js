import { inputObjectType, mutationField, nonNull } from 'nexus'
import { UserInputError } from 'apollo-server-micro'
import { getSession } from 'next-auth/client'

import prisma from '../../prisma-client'

const UpdateUserInput = inputObjectType({
  name: 'UpdateUserInput',
  definition(t) {
    t.string('username')
    t.list.string('services')
    t.list.string('skills')
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

export const updateUser = mutationField('updateUser', {
  type: 'User',
  args: {
    input: nonNull(UpdateUserInput)
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

    if (username && username.length > 20) return new UserInputError(
      'Username too long', { type: 'username-too-long' }
    )

    if (username && !username.match(/^[0-9a-z-]+$/)) return new UserInputError(
      'Username can only use numbers, lower case letters and hyphens', { type: 'username-invalid' }
    )

    if (skills && skills.length > 30) return new UserInputError(
      'Too many skills, pick at most 30 skills', { type: 'skills-too-long' }
    )

    if (services && services.length > 30) return new UserInputError(
      'Too many services, pick at most 30 services', { type: 'services-too-long' }
    )

    if (username) {
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
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        ... !!user.email && { email: user.email },
        ... !!user.username && !user.email && { username: user.username }
      },
      select: {
        id: true,
        email: true, 
        username: true,
        skills: {
          select: {
            skillId: true
          }
        },
        services: {
          select: {
            serviceId: true
          }
        },
        accountGithub: true,
        accountLinkedIn: true,
        accountTwitter: true,
        accountDiscord: true,
        accountTelegram: true
      }
    })

    const linkedIn = accountLinkedIn || currentUser.accountLinkedIn
    const discord = accountDiscord || currentUser.accountDiscord
    const telegram = accountTelegram || currentUser.accountTelegram

    if (!linkedIn && !discord && !telegram) return new UserInputError(
      'Must have one of LinkedIn, Discord or Telegram added', { type: 'accounts-invalid' }
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

    const currentSkills = currentUser.skills.map(userSkill => userSkill.skillId)
    const addSkills = []
    const removeSkills = []

    currentSkills.forEach(skill => {
      if (!skills.includes(skill)) removeSkills.push(skill)
    })

    skills.forEach(skill => {
      if (!currentSkills.includes(skill)) addSkills.push(skill)
    })

    const currentServices = currentUser.services.map(userService => userService.serviceId)
    const addServices = []
    const removeServices = []

    currentServices.forEach(service => {
      if (!services.includes(service)) removeServices.push(service)
    })

    services.forEach(service => {
      if (!currentServices.includes(service)) addServices.push(service)
    })

    return prisma.user.update({
      where: {
        email: currentUser.email
      },
      data: {
        ... !!username && { username },
        ... (addSkills.length > 0 || removeSkills.length > 0) && {
          skills: {
            create: addSkills.map(skillId => ({ skillId })),
            delete: removeSkills.map(skillId => ({ userId_skillId: { userId: currentUser.id, skillId } }))
          }
        },
        ... (addServices.length > 0 || removeServices.length > 0) && {
          services: {
            create: addServices.map(serviceId => ({ serviceId })),
            delete: removeServices.map(serviceId => ({ userId_serviceId: { userId: currentUser.id, serviceId } }))
          }
        },
        ... typeof roleStakePoolOperator === 'boolean' && { roleStakePoolOperator },
        ... typeof roleCommunityAdvisor === 'boolean' && { roleCommunityAdvisor },
        ... typeof availableForCollaboration === 'boolean' && { availableForCollaboration },
        ... accountLinkedIn !== undefined && { accountLinkedIn },
        ... accountGithub !== undefined && { accountGithub },
        ... accountTwitter !== undefined && { accountTwitter },
        ... accountDiscord !== undefined && { accountDiscord },
        ... accountTelegram !== undefined && { accountTelegram }
      }
    })
  }
})