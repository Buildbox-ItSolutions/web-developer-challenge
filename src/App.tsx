import { ThemeProvider } from "styled-components"
import defaultTheme from './theme/defaultTheme'
import { Main } from "./components/Main"
import { GlobalStyles } from "./styles/globalStyles"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  )
}

export default App
