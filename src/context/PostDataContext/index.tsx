import React, { useState } from 'react'
import { MyPostContext } from './context'

export const PostContextProvider: React.FC = ({ children }) => {
  const [postState, setPostState] = useState([])
  return (
    <MyPostContext.Provider value={[postState, setPostState]}>
      {children}
    </MyPostContext.Provider>
  )
}
