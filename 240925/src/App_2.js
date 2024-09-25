import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 12px 30px;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colorTheme.fontSecondary};
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colorTheme.fontPrimary};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <SearchButton>Button</SearchButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
