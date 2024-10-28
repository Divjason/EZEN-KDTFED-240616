import React, { useState, useContext } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import Title from "./Title";
import { ToDoListContext } from "../contexts/ToDoList";

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

const Background = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Contents = styled.div`
  z-index: 1;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

interface Props {
  onClose: (toDo: string) => void;
}

const ToDoInput = ({ onClose }: Props) => {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setToDo] = useState("");

  const onAddTodo = () => {
    if (toDo === "") return;

    onAdd(toDo);
    setToDo("");
    onClose(toDo);
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title label={"할 일 추가"} />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label={"추가"} color="#304ffe" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default ToDoInput;
