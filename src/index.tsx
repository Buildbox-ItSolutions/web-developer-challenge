import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/style.css'
import MainRoutes from './routers'
import store from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <MainRoutes />
    </React.StrictMode>
  </Provider>
)
