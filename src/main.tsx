import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { PostsLocalStorageProvider } from './context/posts-local-storage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <PostsLocalStorageProvider>
        <App />
        <GlobalStyle />
      </PostsLocalStorageProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
