import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import App from "./Pages/App";
import Blog from "./Pages/Blog";
import Error from "./Pages/Error";
import AddBlogs from "./Pages/AddBlogs";
import "./index.css";

// creating the route
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <App /> },
      { path: "blog/:id", element: <Blog /> },
      { path: "/add", element: <AddBlogs /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
