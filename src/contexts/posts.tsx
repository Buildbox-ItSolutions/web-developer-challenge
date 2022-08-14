import { useState, createContext, ReactNode } from 'react'

import { Post } from 'types'

type Props = {
  children: ReactNode
}

export type PostContextData = {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
  deletePost: (id: number) => void
}

export const PostContext = createContext<PostContextData>({} as PostContextData)

export const PostProvider = ({ children }: Props) => {
  const [posts, setPosts] = useState<Post[]>([])

  const deletePost = (id: number) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== id))
  }

  return (
    <PostContext.Provider value={{ posts, setPosts, deletePost }}>{children}</PostContext.Provider>
  )
}
