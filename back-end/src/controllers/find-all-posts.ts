import { FindAllPostService } from '@/services'
import { Request, Response } from 'express'

export class FindAllPostController {
  async handle(request: Request, response: Response) {
    try {
      const findAllPostService = new FindAllPostService()
      const posts = await findAllPostService.perform()
      response.status(200).json(posts)
    } catch (error: unknown) {
      response.status(500).json(error)
    }
  }
}
