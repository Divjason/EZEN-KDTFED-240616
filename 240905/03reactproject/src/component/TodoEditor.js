import React, { useState, useRef, useContext } from "react";
import "./TodoEditor.css";
import { TodoContext } from "../App";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 🧾</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 ToDo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
