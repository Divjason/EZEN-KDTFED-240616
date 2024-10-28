import React, { useContext } from "react";
import styled from "styled-components";
import Title from "./Title";
import ToDoList from "./ToDoList";
import { ToDoListContext } from "../contexts/ToDoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
`;

interface Props {
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const DataView = () => {
  return (
    <Container>
      <Title label={"할 일 목록"} />
      <ToDoList />
    </Container>
  );
};

export default DataView;
