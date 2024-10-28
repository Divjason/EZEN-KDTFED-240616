import React, { createContext, useState } from "react";

interface Context {
  toDoList: string[];
  onAdd: (toDo: string) => void;
  onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState([
    "리액트공부하기",
    "운동하기",
    "책 읽기",
  ]);

  const onAdd = (toDo: string) => {
    setToDoList([toDo, ...toDoList]);
  };

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <ToDoListContext.Provider value={{ toDoList, onAdd, onDelete }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListContextProvider };
