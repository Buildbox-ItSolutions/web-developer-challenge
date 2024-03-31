import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './message/message.reducer'

const store = configureStore({
  reducer: {
    message: messageReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
