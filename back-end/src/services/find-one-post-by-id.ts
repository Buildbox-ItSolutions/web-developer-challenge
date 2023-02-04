import { prisma } from '../../prisma/connect'

export class FindOnePostByIdService {
  async perform(id: string) {
    const post = await prisma.posts.findFirst({
      where: {
        id
      },
      select: {
        name: true,
        post: true,
        uri: true,
        created_at: true
      }
    })
    if (!post) throw new Error('Post not found!')
    return {
      id,
      name: post.name,
      post: post.post,
      uri: post.uri,
      createdAt: new Date(post.created_at).toISOString()
    }
  }
}
