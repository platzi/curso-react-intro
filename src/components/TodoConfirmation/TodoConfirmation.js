import React from "react";
import "./TodoConfirmation.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoConfirmation() {
  const { openModal, setOpenModal, newTodoValue, setNewTodoValue, addTodo } =
    React.useContext(TodoContext);

  const modal = () => {
    setOpenModal(!openModal);
  };

  const clearNewTodoValue = () => {
    setNewTodoValue("");
  };

  const submitNewTodoValue = () => {
    if (newTodoValue === "") {
      alert("You cannot save an empty TODO");
    } else {
      addTodo(newTodoValue);
      clearNewTodoValue();
    }
  };

  return (
    <div className="TodoConfirmation--container">
      <p className="TodoConfirmation--Text">Save TODO?</p>
      <div className="TodoConfirmation--button-container">
        <button
          onClick={(event) => {
            modal(event);
            clearNewTodoValue();
          }}
          className="TodoConfirmation--button--no"
        >
          Nope
        </button>
        <button
          onClick={(event) => {
            modal(event);
            submitNewTodoValue();
          }}
          className="TodoConfirmation--button--yes"
        >
          Of Course!
        </button>
      </div>
    </div>
  );
}

export { TodoConfirmation };
