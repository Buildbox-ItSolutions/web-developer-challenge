import { Post } from '../redux/postsSlice'

export const chunkPosts = (posts: Post[], counter: number) => {
  return [...posts].slice(0, counter)
}
