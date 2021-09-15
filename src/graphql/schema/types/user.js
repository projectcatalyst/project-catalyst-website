import { objectType } from 'nexus'

import prisma from '../../prisma-client'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('username')
    t.string('email')
    t.string('name')
    t.string('image')
    t.string('thumbnail')
    t.list.field('skills', {
      type: 'Skill',
      resolve: ({ id }) => prisma.skill.findMany({
        where: { users: { some: { userId: id } } }
      })
    })
    t.list.field('services', {
      type: 'Service',
      resolve: ({ id }) => prisma.service.findMany({
        where: { users: { some: { userId: id } } }
      })
    })
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