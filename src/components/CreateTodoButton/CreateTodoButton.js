import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext/TodoContext";

function CreateTodoButton({ children }) {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  const modal = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="CreateTodoButton" onClick={modal}>
      {children}
    </button>
  );
}

export { CreateTodoButton };
