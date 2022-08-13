import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components'

import { theme } from '@/styles'

type Props = {
  children: ReactNode
}

export const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  )
}
