import { configureStore } from '@reduxjs/toolkit'
import authorReducer from '@/features/author/authorSlice'
import postReducer from '@/features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    author: authorReducer,
    posts: postReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
