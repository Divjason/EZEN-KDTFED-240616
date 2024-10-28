import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  background: "#000",
  color: "#fff",
};

const lightTheme = {
  background: "#fff",
  color: "#ccc",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
