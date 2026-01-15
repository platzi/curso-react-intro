import './TodoList.css'
import React from 'react';
function TodoList(props) {
  return (
    <div>
      <ul className="todo-list">
        {props.children}
      </ul>
    </div>
  );
}
export { TodoList };
