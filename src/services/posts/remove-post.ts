import { isAxiosError } from 'axios'
import { Post } from '../../@types/post'
import { api } from '../../lib/api'

type RemovePostParams = {
  postId: string
}

export async function removePost({ postId }: RemovePostParams) {
  try {
    const res = await api.delete<Post>(`/posts/${postId}`)
    return res.data
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message)
      throw new Error(
        'Something went wrong while deleting a post :(, please try again later',
      )
    } else {
      console.error(error)
    }
  }
}
