import React, { useReducer, useContext, createContext } from 'react'
import { PostData } from '../@types'

const PostsStateContext = createContext([])
const PostsDispatchContext = createContext({} as any)

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case 'CREATE_POST':
			return [...state, action.payload]
		case 'DELETE_POST':
			return state.filter(
				(post: PostData) => state.indexOf(post) !== action.index
			)
		default:
			throw new Error(`Unknown action: ${action.type}`)
	}
}

export const PostsProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(reducer, [])
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
