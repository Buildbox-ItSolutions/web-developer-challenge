import { useContext } from 'react'
import { MyPostContext } from './context'

export const UseMyPostContext = () => {
  const myContext = useContext(MyPostContext)
  return [...myContext]
}
