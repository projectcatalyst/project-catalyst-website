import { queryField, list } from 'nexus'

import prisma from '../../prisma-client'

export const categories = queryField('categories', {
  type: list('Category'),
  resolve: async () => prisma.category.findMany()
})
