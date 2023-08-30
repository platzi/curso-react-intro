import React from 'react';
import './TodoItem.css';


function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={() => props.todoCompleted(props.text)}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed ? "TodoItem-p--complete" : ""}`}>{props.text}</p>
      <span
        className={`Icon Icon-delete`}
        onClick={() => props.deleteTodo(props.text)} // Llamar a la función deleteTodo aquí
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };