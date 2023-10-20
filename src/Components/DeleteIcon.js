import React from "react";
import {ToDoIcon} from './ToDoIcon';

function DeleteIcon({ onDelete }) {
    return(
        <ToDoIcon 
        type="delete" 
        color="rgb(154, 123, 154)"
        onClick={onDelete} />
    );
}

export { DeleteIcon };

// "rgb(172, 99, 121)"