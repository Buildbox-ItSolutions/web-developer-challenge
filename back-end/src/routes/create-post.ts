import { CreatePostController } from '@/controllers'
import { Router } from 'express'

export const createPost = Router()
const createPostController = new CreatePostController()
createPost.post('/', createPostController.handle)
