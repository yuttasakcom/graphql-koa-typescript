import { gql } from 'apollo-server-koa'

export default gql`
  type Todo {
    id: Int!
    name: String!
  }

  type Query {
    todo: [Todo]
  }
`
