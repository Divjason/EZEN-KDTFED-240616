import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const trueOk = useSelector((state) => state.auth.authenticate);

  useEffect(() => {
    setAuthenticate(trueOk);
  }, [trueOk]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: (
            <Login
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          ),
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
