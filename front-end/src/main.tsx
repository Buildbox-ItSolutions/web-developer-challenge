import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { theme } from './theme'
import { ResetCss } from './theme/globalStyles'
import 'react-toastify/dist/ReactToastify.css';
import { PostProvider } from './context/PostContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PostProvider>
      <ThemeProvider theme={theme()}>
        <ResetCss />
        <ToastContainer />
        <App />
      </ThemeProvider>
    </PostProvider>
  </React.StrictMode>,
)
