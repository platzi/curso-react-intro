import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./CreateTodoInput.css";

function CreateTodoInput() {
  const { newTodoValue, setNewTodoValue } = React.useContext(TodoContext);

  return (
    <input
      value={newTodoValue}
      onChange={(event) => {
        setNewTodoValue(event.target.value);
      }}
      className="CreateTodoInput"
      placeholder=""
    />
  );
}

export { CreateTodoInput };
