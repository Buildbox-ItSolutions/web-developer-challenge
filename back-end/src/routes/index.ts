import { Router } from 'express'
import { createPost } from './create-post'
import { findAllPost } from './find-all-posts'
import { deletePostById } from './delete-post-by-id'
import { findOnePostById } from './find-one-post-by-id'

export const routes = Router()

routes.use('/create', createPost)
routes.use('/find', findAllPost)
routes.use('/find/', findOnePostById)
routes.use('/delete/', deletePostById)

// https://b8ad-200-124-166-224.ngrok.io/api
