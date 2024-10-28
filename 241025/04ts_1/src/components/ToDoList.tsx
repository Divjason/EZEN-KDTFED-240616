import React, { useContext } from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { ToDoListContext } from "../contexts/ToDoList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface Props {
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const ToDoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);

  return (
    <Container>
      {toDoList.map((todo, index) => (
        <ToDoItem
          key={index}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default ToDoList;
