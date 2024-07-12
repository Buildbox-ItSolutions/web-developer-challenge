import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react'

interface PostStatusContextType {
  postAdded: boolean
  setPostAdded: (status: boolean) => void
}

const PostStatusContext = createContext<PostStatusContextType | undefined>(
  undefined,
)

export const PostStatusProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [postAdded, setPostAdded] = useState(false)

  const setPostAddedCallback = useCallback((status: boolean) => {
    setPostAdded(status)
  }, [])

  return (
    <PostStatusContext.Provider
      value={{ postAdded, setPostAdded: setPostAddedCallback }}
    >
      {children}
    </PostStatusContext.Provider>
  )
}

export const usePostStatus = (): PostStatusContextType => {
  const context = useContext(PostStatusContext)
  if (!context) {
    throw new Error('usePostStatus must be used within a PostStatusProvider')
  }
  return context
}
