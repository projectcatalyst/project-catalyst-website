import { queryField, list } from 'nexus'

import prisma from '../../prisma-client'

export const services = queryField('services', {
  type: list('Service'),
  resolve: async () => prisma.service.findMany({
    orderBy: {
      name: 'asc'
    }
  })
})
