import { gql } from 'apollo-server-koa'

export default gql`
  type Post {
    id: Int!
    title: String!
    todo: [Todo!]!
  }

  type Query {
    posts: [Post!]!
  }
`
