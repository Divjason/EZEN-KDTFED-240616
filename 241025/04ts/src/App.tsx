import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const mockData = [
  "Typescript 복습하기",
  "Next.js 예습하기",
  "Node.js 공부하기",
];

const App = () => {
  const [toDoList, setToDoList] = useState(mockData);
  const [toDo, setToDo] = useState("");

  const onAdd = () => {
    if (toDo === "") return;

    setToDoList([toDo, ...toDoList]);
    setToDo("");
  };

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo} />
      <Button label={"추가"} color="#304ffe" onClick={onAdd} />
    </Container>
  );
};

export default App;
