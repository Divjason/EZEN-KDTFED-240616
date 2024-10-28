import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import { ToDoListContextProvider } from "./contexts/ToDoList";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <InputContainer />
      </ToDoListContextProvider>
    </Container>
  );
};

export default App;
