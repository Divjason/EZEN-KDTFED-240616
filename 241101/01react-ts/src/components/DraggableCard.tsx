import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Card = styled.div`
  background: ${(props) => props.theme.cardColor};
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
`;

interface DraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: DraggableCardProps) => {
  console.log(toDo);
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
