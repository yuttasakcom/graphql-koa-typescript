import * as koa from 'koa'
import { Container } from 'typedi'
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
    const routingControllersOptions: RoutingControllersOptions = {
      defaultErrorHandler: false,
      controllers: [`${__dirname}/**/*.controller.ts`],
    }

    useKoaServer(this.app, routingControllersOptions)
    this.init()
  }

  private init(): void {}

  public start(): void {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server is running at http://${this.host}:${this.port}`)
    })
  }
}
