
import './TodoItem.css'
import React from 'react';
function TodoItem(props) {
    return (
        <li className="todo-item">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>✔</span>
            <p className={`todo-text ${props.completed && "todo-text--complete"}`}>{props.text}</p>
            <span className="todo-delete" onClick={props.onDelete}>❌</span>
        </li>
    );
}
export { TodoItem };
