import { FindAllPostController } from '@/controllers'
import { Router } from 'express'

export const findAllPost = Router()
const findAllPostController = new FindAllPostController()
findAllPost.get('/', findAllPostController.handle)
