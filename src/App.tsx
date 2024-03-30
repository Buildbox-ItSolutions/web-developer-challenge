import { ThemeProvider } from "styled-components"
import defaultTheme from './theme/defaultTheme'
import { Main } from "./components/Main"
import { GlobalStyles } from "./styles/globalStyles"
import { PostProvider } from "./contexts/PostsContext"

function App() {

  return (
    <PostProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Main />
      </ThemeProvider>
    </PostProvider>
  )
}

export default App
