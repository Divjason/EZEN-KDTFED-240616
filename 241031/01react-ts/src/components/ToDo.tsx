import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atoms";

const Container = styled.li`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`;

// [
//   {
//     id: 1730427233086,
//     text: "짱구이모",
//     category: "TODO",
//   },
//   {
//     id: 1730427229148,
//     text: "짱구아빠",
//     category: "TODO",
//   },
//   {
//     id: 1730427180172,
//     text: "짱구엄마",
//     category: "TODO",
//   },
//   {
//     id: 1730427159438,
//     text: "짱구",
//     category: "TODO",
//   },
// ];

// mango의 값을 gam으로 교체하고 싶다면?!
const food = ["pizza", "mango", "kimchi", "kimbab"];
// const front = ["pizza"];
// const back = ["kimchi", "kimbab"];
// const final = [...front, "gam", ...back];

const target = 1;
// const front = food.slice(0, 1);
// const back = food.slice(target + 1);
// const final = [...food.slice(0, target), "gam", ...food.slice(target + 1)];

const ToDo = ({ id, text, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // const oldToDo = oldToDos[targetIndex];
      const newToDo = { id, text, category: name as any };
      // console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <Container>
      <span>{text}</span>
      <ButtonGroup>
        {category !== Categories.TODO && (
          <Button name={Categories.TODO} onClick={onClick}>
            ToDo
          </Button>
        )}
        {category !== Categories.DOING && (
          <Button name={Categories.DOING} onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name={Categories.DONE} onClick={onClick}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default ToDo;
