import { prisma } from '../../prisma/connect'
import { Posts } from '../interfaces'

export class CreatePostService {
  async perform(data: Posts) {
    await prisma.posts.create({ data })
  }
}
