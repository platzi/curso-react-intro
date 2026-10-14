import './TodoItem.css'
import React from 'react';

function TodoItem(props){
    return(
      <li className="item-container">
        <span
          className={`icon icon-active material-symbols-outlined ${props.completed && 'icon-check-active'}`}
          onClick={props.onComplete}
        >
          check
        </span>
        <p className={`text-item-p ${props.completed && 'item-p-complete'}`}>
          {props.text}
        </p>
        <span
          className="icon icon-delete material-symbols-outlined"
          onClick={props.onDelete}
        >
          close
        </span>
      </li>
    );
  }


  export { TodoItem };