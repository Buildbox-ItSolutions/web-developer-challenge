import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { initialPosts } from '../utils/initialPosts'

export interface Post {
  profileImage: string
  name: string
  message: string
}

const initialState: Post[] = initialPosts

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    publishPost: (state, { payload }: PayloadAction<Post>) => {
      state.unshift(payload)
    },
    deletePost: (state, { payload }: PayloadAction<number>) => {
      state.splice(payload, 1)
    },
    clearAll: () => {
      return []
    },
  },
})

export const { publishPost, deletePost, clearAll } = postsSlice.actions

export default postsSlice.reducer
