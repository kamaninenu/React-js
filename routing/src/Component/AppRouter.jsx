import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import UserProfile from "./UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user/123",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
