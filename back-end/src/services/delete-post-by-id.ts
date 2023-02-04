import { prisma } from '../../prisma/connect'

export class DeletePostByIdService {
  async perform(id: string) {
    await prisma.posts.delete({
      where: {
        id
      }
    })
  }
}
