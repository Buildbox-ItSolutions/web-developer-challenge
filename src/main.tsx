import { createStore, Provider } from "jotai"
import React from "react"
import ReactDOM from "react-dom/client"

import "./main.css"
import { Home } from "./pages/Home"

const store = createStore()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
)
