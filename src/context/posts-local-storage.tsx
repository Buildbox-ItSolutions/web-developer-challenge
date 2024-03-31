import { createContext, ReactNode, useEffect, useState } from 'react'

interface PostProps {
  text: string
  author: string
}

interface PostsLocalStorageContextType {
  publishNewPost: (text: string, author: string) => void
  posts: PostProps[]
}

export const PostsLocalStorageContext = createContext(
  {} as PostsLocalStorageContextType,
)

interface PostsLocalStorageProviderProps {
  children: ReactNode
}
export function PostsLocalStorageProvider({
  children,
}: PostsLocalStorageProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [newPostState, setNewPostState] = useState({
    text: String(),
    author: String(),
  })

  function publishNewPost(text: string, author: string) {
    const getLocalStorage = localStorage.getItem(
      '@buildboxwebchallenge-pedrodecf',
    )
    const postsLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : []

    const newPost = { text, author }

    postsLocalStorage.push(newPost)
    localStorage.setItem(
      '@buildboxwebchallenge-pedrodecf',
      JSON.stringify(postsLocalStorage),
    )

    setNewPostState(newPost)
  }

  useEffect(() => {
    const getLocalStorage = localStorage.getItem(
      '@buildboxwebchallenge-pedrodecf',
    )
    const postsLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : []
    setPosts(postsLocalStorage)
  }, [newPostState])

  return (
    <PostsLocalStorageContext.Provider value={{ publishNewPost, posts }}>
      {children}
    </PostsLocalStorageContext.Provider>
  )
}
