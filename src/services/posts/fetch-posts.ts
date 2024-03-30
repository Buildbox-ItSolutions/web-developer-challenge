import { Post } from '../../@types/post'
import { api } from '../../lib/api'

export async function fetchPosts() {
  const res = await api.get<Post[]>('/posts')
  return res.data
}
