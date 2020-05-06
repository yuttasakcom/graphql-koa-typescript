import * as koa from 'koa'
import { Container } from 'typedi'
import { ApolloServer, gql } from 'apollo-server-koa'
import {
  RoutingControllersOptions,
  useKoaServer,
  useContainer,
} from 'routing-controllers'

useContainer(Container)

export class Server {
  private app: koa
  private port: number = 4000
  private host: string = '0.0.0.0'

  constructor() {
    this.app = new koa()

    const typeDefs = gql`
      type Query {
        hello: String
      }
    `

    const resolvers = {
      Query: {
        hello: () => 'Hello world!',
      },
    }

    const server = new ApolloServer({ typeDefs, resolvers })
    server.applyMiddleware({ app: this.app })

    this.init()
  }

  private init(): void {
    const routingControllersOptions: RoutingControllersOptions = {
      defaultErrorHandler: false,
      controllers: [`${__dirname}/**/*.controller.ts`],
    }
    useKoaServer(this.app, routingControllersOptions)
  }

  public start(): void {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server is running at http://${this.host}:${this.port}`)
    })
  }
}
