import axios from 'axios'

import { Post } from '@/types'
import { envs } from '@/utils'

export const createPost = async (data: Omit<Post, 'id'>) => {
  return await axios.post(`${envs().baseUrl}/posts`, data)
}
