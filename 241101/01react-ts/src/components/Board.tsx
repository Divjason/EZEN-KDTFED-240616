import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  background: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 10px;
`;

interface BoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
