import React from "react";
import "./ToDoItem.css"
import { CompleteIcon } from "../Icons/completeIcon";
import { DeleteIcon } from "../Icons/deleteIcon";

function ToDoItem ({text, onComplete, onDelete, completed}) {

    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && "Icon--check--active"}`} onClick={onComplete}><CompleteIcon/></span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
            <span className="Icon Icon-delete" onClick={onDelete}><DeleteIcon/></span>
        </li>

        
    )
}

export {ToDoItem}; 