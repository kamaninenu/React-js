import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Layout } from "./Layout";
import { AllToDo } from "./AllToDo";
import { Register } from "./Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "alltodo",
        element: <AllToDo />,
      },
    ],
  },
  { path: "Register", element: <Register /> },

  // {
  //   path: "*",
  //   element: <Navigate to="/" replace />,
  // },
]);
