import { useState } from "react";
import { ThemeProvider, styled, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Home from "./Home";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => {
    setIsDark((current) => !current);
  };
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Button onClick={toggleDark}>
          {isDark ? "라이트모드" : "다크모드"}
        </Button>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
