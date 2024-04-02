import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Form } from "./components/Form"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Form />

      <GlobalStyle />
    </ThemeProvider>
  )
}
