import { objectType } from 'nexus'

import prisma from '../../prisma-client'

export const Skill = objectType({
  name: 'Skill',
  definition(t) {
    t.string('id')
    t.string('name')
    t.list.field('categories', {
      type: 'Category',
      resolve: async ({ id }) => prisma.category.findMany({
        where: {
          skills: {
            some: {
              skillId: id
            }
          }
        }
      })
    })
  }
})