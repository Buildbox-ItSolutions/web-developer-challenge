import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './theme/defaultTheme'
import { GlobalStyles } from './styles/globalStyle'
import Main from './components/Main'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  )
}

export default App
