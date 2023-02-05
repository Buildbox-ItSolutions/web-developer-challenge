import { ThemeProvider } from 'styled-components'
import { MessagesProvider } from './contexts/MessagesContext'
import { Home } from './pages/Home'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MessagesProvider>
        <Home />
      </MessagesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
