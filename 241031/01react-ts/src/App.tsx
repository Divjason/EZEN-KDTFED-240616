import React from "react";
import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
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
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
};

export default App;
