import "./App.css";
import styled from "styled-components";

const baseShadow = `box-shadow: 0 10px 6px #777`;

const Container = styled.div`
  font-size: 2rem;
  width: 50%;
  background: #ccc;
  margin: 0 auto;
  padding: 10px 20px;
  ${baseShadow}
`;

function App() {
  return (
    <div className="App">
      <Container>Styled Components</Container>
    </div>
  );
}

export default App;
