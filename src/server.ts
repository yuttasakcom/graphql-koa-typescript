import koa from 'koa'

export class Server {
  private app: koa
  private port: number = 3000
  private host: string = '0.0.0.0'

  constructor() {
    this.app = new koa()
    this.start()
  }

  private start(): void {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server is running at http://${this.host}:${this.port}`)
    })
  }
}
