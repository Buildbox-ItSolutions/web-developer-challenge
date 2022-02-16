import { createContext } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TypeContext = null | any

export const MyPostContext = createContext<TypeContext>(null)
