import { CreatePostService } from '@/services'
import { Request, Response } from 'express'

export class CreatePostController {
  async handle(request: Request, response: Response) {
    try {
      const createPostService = new CreatePostService()
      await createPostService.perform(request.body)
      response.status(201).send('Post created successfully')
    } catch (error: unknown) {
      response.status(500).json(error)
    }
  }
}
