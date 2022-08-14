import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProvider } from 'contexts'
import { GlobalStyles } from 'styles'
import { Home } from 'pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Home />
      <GlobalStyles />
    </AppProvider>
  </React.StrictMode>
)
