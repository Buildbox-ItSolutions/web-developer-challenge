import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { theme } from './theme'
import { ResetCss } from './theme/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme()}>
      <ResetCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
