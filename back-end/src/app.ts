import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import { corsOptions } from './middleware'
import { routes } from './routes'
class App {
  public server
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
  }
  middlewares() {
    this.server.use(morgan('dev'))
    this.server.use(express.json())
    this.server.use(corsOptions)
    this.server.use(
      express.urlencoded({
        extended: true
      })
    )
    this.server.use(
      (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        return response.json({
          status: 'Error',
          message: error.message
        })
      }
    )
  }
  routes() {
    this.server.use('/api', routes)
  }
}
export default new App().server
