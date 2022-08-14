import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components'
import { PostProvider } from '.'
import { theme } from 'styles'

type Props = {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <PostProvider>
        <>{children}</>
      </PostProvider>
    </ThemeProvider>
  )
}
