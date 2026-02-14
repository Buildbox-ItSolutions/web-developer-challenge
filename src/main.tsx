import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { globalStyles } from './style/global.ts'

globalStyles()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
