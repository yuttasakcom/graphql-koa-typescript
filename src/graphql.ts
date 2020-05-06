import { resolve } from 'path'

import { ApolloServer } from 'apollo-server-koa'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

const typeDefs = mergeTypes(fileLoader(resolve(__dirname, '**/*.typeDef.ts')))
const resolvers = mergeResolvers(
  fileLoader(resolve(__dirname, '**/*.resolver.ts'))
)

export default new ApolloServer({ typeDefs, resolvers })
