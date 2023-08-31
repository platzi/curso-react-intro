import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h1 className="TodoCounter">
      {totalTodos == 0
        ? `Congratulations, you have no left TODOs :D`
        : ` You have completed ${completedTodos} of ${totalTodos} total TODOs`}
    </h1>
  );
}

export { TodoCounter };
