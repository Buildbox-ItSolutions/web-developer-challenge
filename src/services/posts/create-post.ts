import { isAxiosError } from 'axios'
import { Post } from '../../@types/post'
import { api } from '../../lib/api'

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
  try {
    const res = await api.post<Post>('/posts', {
      author,
      content,
      thumbnail,
    })
    return res.data
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message)
      throw new Error(
        'Something went wrong while creating a post :(, please try again later',
      )
    } else {
      console.error(error)
    }
  }
}
