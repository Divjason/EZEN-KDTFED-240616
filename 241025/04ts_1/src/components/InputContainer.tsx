import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import ShowInputButton from "./ShowInputButton";

interface Props {
  onAdd: (toDo: string) => void;
}

const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = (toDo: string) => {
    if (toDo === "") return;
    setShowToDoInput(false);
  };
  return (
    <>
      {showToDoInput && <ToDoInput onClose={onClose} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
};

export default InputContainer;
