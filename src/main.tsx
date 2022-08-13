import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProvider } from '@/contexts'
import { GlobalStyles } from '@/styles'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
      <GlobalStyles />
    </AppProvider>
  </React.StrictMode>
)
