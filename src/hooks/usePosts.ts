import { PostContext } from 'contexts'
import { useContext } from 'react'

export const usePost = () => {
  return useContext(PostContext)
}
