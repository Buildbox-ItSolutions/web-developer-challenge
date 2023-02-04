import { FindOnePostByIdService } from '@/services'
import { Request, Response } from 'express'

export class FindOnePostByIdController {
  async handle(request: Request, response: Response) {
    try {
      const findOnePostByIdService = new FindOnePostByIdService()
      const post = await findOnePostByIdService.perform(request.params.id)
      console.log('\x1b[32m%s\x1b[0m', post)
      response.status(200).json(post)
    } catch (error: unknown) {
      response.status(500).send(error)
    }
  }
}
