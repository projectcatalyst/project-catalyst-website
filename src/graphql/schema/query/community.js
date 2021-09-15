import { queryField, list, inputObjectType, nonNull, intArg } from 'nexus'

import prisma from '../../prisma-client'

const CommunityFilter = inputObjectType({
  name: 'CommunityFilter',
  definition(t) {
    t.string('service')
    t.string('skill')
    t.boolean('roleStakePoolOperator')
    t.boolean('roleCommunityAdvisor')
    t.boolean('availableForCollaboration')
  }
})

export const community = queryField('community', {
  type: list('User'),
  args: {
    filter: CommunityFilter,
    cursor: intArg(),
    take: intArg()
  },
  resolve: async (parent, { filter, cursor = null, take = 12 }) => {
    const {
      service,
      skill,
      roleStakePoolOperator,
      roleCommunityAdvisor,
      availableForCollaboration  
    } = filter || {}

    const restrictTake = take > 24 ? 24 : take

    return prisma.user.findMany({
      ... !!cursor && {
        cursor: {
          id: cursor
        },
        skip: 1
      },
      take: restrictTake,
      where: {
        username: { not: null },
        blocked: { equals: false },
        ... !!service && { services: { some: { serviceId: service } } },
        ... !!skill && { skills: { some: { skillId: skill } } },
        ... roleStakePoolOperator && { roleStakePoolOperator: true },
        ... roleCommunityAdvisor && { roleCommunityAdvisor: true },
        ... availableForCollaboration && { availableForCollaboration: true },
        OR: [
          {
            services: { some: {} }
          },
          {
            skills: { some: { } }
          },
          {
            availableForCollaboration: true
          },
          {
            roleCommunityAdvisor: true
          },
          {
            roleStakePoolOperator: true
          }
        ]
      },
      orderBy: {
        updatedAt: 'desc'
      }
    })
  }
})
