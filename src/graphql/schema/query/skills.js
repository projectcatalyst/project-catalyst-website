import { queryField, list } from 'nexus'

import prisma from '../../prisma-client'

export const skills = queryField('skills', {
  type: list('Skill'),
  resolve: async () => prisma.skill.findMany({
    orderBy: {
      name: 'asc'
    }
  })
})
