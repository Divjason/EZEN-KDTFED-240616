import { useForm } from "react-hook-form";
import styled from "styled-components";
import { atom } from "recoil";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  toDo: string;
}

const toDoState = atom({
  key: "toDo",
  default: [],
});

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<Form>();

  const handleValid = () => {
    setValue("toDo", "");
  };

  return (
    <Container>
      <Title>ToDo List</Title>
      <Form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please Write a ToDo...",
          })}
          type="text"
          placeholder="Write a ToDo..."
        />
        <input type="submit" value={"ADD"} />
      </Form>
      <ul>
        <li>리액트 복습하기</li>
        <li>스타벅스 가서 커피한잔</li>
      </ul>
    </Container>
  );
};

export default ToDoList;
