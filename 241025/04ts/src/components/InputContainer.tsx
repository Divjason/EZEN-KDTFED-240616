import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import ShowInputButton from "./ShowInputButton";

const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
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
