import { prisma } from '../../prisma/connect'

export class FindAllPostService {
  async perform() {
    const posts = await prisma.posts.findMany({
      select: {
        id: true,
        name: true,
        post: true,
        uri: true,
        created_at: true
      }
    })
    const treatedPosts = posts.map(post => {
      return {
        id: post.id,
        name: post.name,
        post: post.post,
        uri: post.uri,
        createdAt: new Date(post.created_at).toISOString()
      }
    })
    return treatedPosts
  }
}
