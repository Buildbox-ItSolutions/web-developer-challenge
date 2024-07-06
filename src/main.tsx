import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { PostFeedProvider } from "./context/feedContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PostFeedProvider>
            <App />
        </PostFeedProvider>
    </React.StrictMode>
);
