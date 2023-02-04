import { FindOnePostByIdController } from '@/controllers'
import { Router } from 'express'

export const findOnePostById = Router()
const findOnePostByIdController = new FindOnePostByIdController()
findOnePostById.get('/:id', findOnePostByIdController.handle)
