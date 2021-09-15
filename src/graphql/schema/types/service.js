import { objectType } from 'nexus'

import prisma from '../../prisma-client'

export const Service = objectType({
  name: 'Service',
  definition(t) {
    t.string('id')
    t.string('name')
    t.list.field('categories', {
      type: 'Category',
      resolve: async ({ id }) => prisma.category.findMany({
        where: {
          services: {
            some: {
              serviceId: id
            }
          }
        }
      })
    })
  }
})