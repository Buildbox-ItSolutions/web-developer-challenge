import { DeletePostByIdService } from '@/services'
import { Request, Response } from 'express'

export class DeletePostByIdController {
  async handle(request: Request, response: Response) {
    try {
      const deletePostByIdService = new DeletePostByIdService()
      console.log('\x1b[32m%s\x1b[0m', request.params)
      await deletePostByIdService.perform(request.params.id)
      response.status(204).send('Post deleted successfully')
    } catch (error: unknown) {
      response.status(500).send(error)
    }
  }
}
