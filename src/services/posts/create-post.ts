import { db } from '../../infra/db'

type CreatePostBody = {
  author: string
  content: string
  thumbnail: string
}

export async function createPost({
  author,
  content,
  thumbnail,
}: CreatePostBody) {
  const newPost = {
    id: crypto.randomUUID(),
    author,
    content,
    thumbnail,
  }
  db.addPost(newPost)
  return newPost
}
