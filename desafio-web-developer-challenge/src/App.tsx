import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Home } from "./pages/Home";
import { defaultTheme } from './styles/default'
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />

    <Header />
    <Home />
   </ThemeProvider>
  )
}


