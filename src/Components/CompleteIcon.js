import React from "react";
import { ToDoIcon } from "./ToDoIcon";

function CompleteIcon ({ completed, onComplete }) {
    return (
        <ToDoIcon 
        type="check"
        color={completed ? "rgb(84, 194, 84)" : "rgb(154, 123, 154)"}
        onClick={onComplete}
        />
        );
}

export {CompleteIcon};