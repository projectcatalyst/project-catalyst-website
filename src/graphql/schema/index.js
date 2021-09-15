import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { applyMiddleware } from 'graphql-middleware'

import permissions from './permissions'

import * as Query from './query'
import * as Mutation from './mutation'
import * as Types from './types'

const schema = makeSchema({
  types: [
    Types,
    Query,
    Mutation
  ],
  plugins: [nexusPrisma()]
})

export default applyMiddleware(schema, permissions)