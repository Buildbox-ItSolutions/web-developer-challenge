import React, { createContext, useState, useEffect } from 'react'

export type Post = {
  figureOfPost: string | null
  nameOfPost: string
  messageOfPost: string
}

type ContextType = {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

export const PostContext = createContext<ContextType>({
  posts: [],
  setPosts: () => null
})

type Props = { children: React.ReactNode }

export const PostProvider: React.FC<Props> = ({ children }) => {
  const localStatePost = JSON.parse(localStorage.getItem('posts') || '[]')

  const [posts, setPosts] = useState<Array<Post>>(localStatePost)

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  )
}
