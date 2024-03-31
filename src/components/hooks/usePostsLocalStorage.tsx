import { useContext } from 'react'
import { PostsLocalStorageContext } from '../../context/posts-local-storage'

export const usePostsLocalStorageContext = () => {
  const context = useContext(PostsLocalStorageContext)
  return context
}
