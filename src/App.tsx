import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Post } from "./components/Post"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Form />

      <Post />

      <GlobalStyle />
    </ThemeProvider>
  )
}
