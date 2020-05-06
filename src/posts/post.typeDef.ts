import { gql } from 'apollo-server-koa'

export default gql`
  type Post {
    id: Int!
    title: String!
  }

  type Query {
    posts: [Post!]!
  }
`
