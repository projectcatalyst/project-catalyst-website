import { objectType } from 'nexus'

import prisma from '../../prisma-client'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.string('id')
    t.string('name')
    t.list.field('skills', {
      type: 'Skill',
      resolve: async ({ id }) => prisma.skill.findMany({
        where: {
          categories: {
            some: {
              categoryId: id
            }
          }
        }
      })
    })
    t.list.field('services', {
      type: 'Service',
      resolve: async ({ id }) => prisma.service.findMany({
        where: {
          categories: {
            some: {
              categoryId: id
            }
          }
        }
      })
    })
  }
})
