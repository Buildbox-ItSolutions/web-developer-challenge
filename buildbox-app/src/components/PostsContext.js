import { useReducer, useContext, createContext } from 'react'
import photo from '../../public/me.jpeg'

const PostsStateContext = createContext()
const PostsDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return [...state, action.payload]
    case 'DELETE_POST':
      return state.filter((post) => state.indexOf(post) !== action.index)
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [
    { photo: photo, message: 'Hello world!', author: 'Pedro Gabriel' },
  ])
  return (
    <PostsDispatchContext.Provider value={dispatch}>
      <PostsStateContext.Provider value={state}>
        {children}
      </PostsStateContext.Provider>
    </PostsDispatchContext.Provider>
  )
}

export const usePosts = () => useContext(PostsStateContext)
export const useDispatchPosts = () => useContext(PostsDispatchContext)
