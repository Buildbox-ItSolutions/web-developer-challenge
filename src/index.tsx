import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/app/services/mirage/server";
import reportWebVitals from "./reportWebVitals";

if (window.performance) {
  if (performance.navigation.type == 1) {
    localStorage.clear();
  }
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
