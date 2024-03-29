import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'message',
  initialState: {
    loading: false,
    all: [],
    error: ''
  },
  reducers: {
    createMessage(state, { payload }) {
      return {
        ...state,
        all: payload
      }
    }
  },
  
})

export default slice.reducer
