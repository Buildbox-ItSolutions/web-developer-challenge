import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { PostContextProvider } from './context/PostDataContext'

ReactDOM.render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
