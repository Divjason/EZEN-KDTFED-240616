import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Root from "./Root";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import Followers from "./components/Followers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
