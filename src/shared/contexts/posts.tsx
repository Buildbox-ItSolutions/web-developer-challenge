/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { ChildrenProps } from '../interfaces/childrenProps'
import { PostProps } from '../interfaces/post'

export type PostsType = PostProps[]

type PropsPostsContext = {
  posts: PostsType
  setPosts: React.Dispatch<React.SetStateAction<PostsType>>
}

const DEFAULT_VALUE = {
  posts: [],
  setPosts: () => {},
}

const PostsContext = createContext<PropsPostsContext>(DEFAULT_VALUE)

const PostsContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [posts, setPosts] = useLocalStorage<PostsType>('posts', [])

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
export { PostsContextProvider }
export default PostsContext
