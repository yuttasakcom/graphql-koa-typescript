import koa from 'koa'
import { RoutingControllersOptions, useKoaServer } from 'routing-controllers'

export class Server {
  private app: koa
  private port: number = 4000
  private host: string = '0.0.0.0'

  constructor() {
    this.app = new koa()
    this.init()
  }

  private init(): void {
    const routingControllersOptions: RoutingControllersOptions = {
      defaultErrorHandler: false,
      controllers: [`${__dirname}/controllers/**`],
    }

    useKoaServer(this.app, routingControllersOptions)
  }

  public start(): void {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server is running at http://${this.host}:${this.port}`)
    })
  }
}
