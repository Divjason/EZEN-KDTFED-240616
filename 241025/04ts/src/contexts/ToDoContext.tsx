import { createContext, useState } from "react";

// 보내줄 값에 대한 타입 정의
interface Context {
  toDoList: string[];
  onAdd: (toDo: string) => void;
  onDelete: (toDo: string) => void;
}

// 자식요소들에게 보내줄 값에 대한 정의 역할
const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
});

// 실제 자식요소들에게 값을 전달할 역할을 할 컴포넌트 함수 정의
interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState([
    "Typescript 복습하기",
    "Next.js 예습하기",
    "Node.js 공부하기",
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
