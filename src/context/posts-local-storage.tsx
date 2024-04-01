import { createContext, ReactNode, useEffect, useState } from 'react'

interface PostProps {
  text: string
  author: string
  image: string
}

interface PostsLocalStorageContextType {
  publishNewPost: (text: string, author: string, image: string) => void
  deletePost: (postToBeDeleted: PostProps) => void
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
  const [newPostState, setNewPostState] = useState<PostProps>({
    text: '',
    author: '',
    image: '',
  })

  function publishNewPost(text: string, author: string, image: string) {
    const getLocalStorage = localStorage.getItem(
      '@buildboxwebchallenge-pedrodecf',
    )
    const postsLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : []

    const newPost = { text, author, image }

    postsLocalStorage.push(newPost)
    localStorage.setItem(
      '@buildboxwebchallenge-pedrodecf',
      JSON.stringify(postsLocalStorage),
    )

    setNewPostState(newPost)
  }

  function deletePost(postToBeDeleted: PostProps) {
    const postsWithoutDeletedPost = posts.filter((post) => {
      return post !== postToBeDeleted
    })

    localStorage.setItem(
      '@buildboxwebchallenge-pedrodecf',
      JSON.stringify(postsWithoutDeletedPost),
    )

    setPosts(postsWithoutDeletedPost)
  }

  useEffect(() => {
    const getLocalStorage = localStorage.getItem(
      '@buildboxwebchallenge-pedrodecf',
    )
    const postsLocalStorage = getLocalStorage ? JSON.parse(getLocalStorage) : []
    setPosts(postsLocalStorage)
  }, [newPostState])

  return (
    <PostsLocalStorageContext.Provider
      value={{ publishNewPost, deletePost, posts }}
    >
      {children}
    </PostsLocalStorageContext.Provider>
  )
}
