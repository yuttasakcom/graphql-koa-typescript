import { Server } from './server'

const bootstrap = () => {
  const server = new Server()
  server.start()
}

bootstrap()
