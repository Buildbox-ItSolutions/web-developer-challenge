import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Feed } from "./modules/Feed";
import "./styles/reset.css";
import { Layout } from "./modules/Layout";
import { PostsProvider } from "./providers/PostsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/feed",
        element: <Feed />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  </React.StrictMode>
);
