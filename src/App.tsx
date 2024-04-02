import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <GlobalStyle />
    </ThemeProvider>
  )
}
