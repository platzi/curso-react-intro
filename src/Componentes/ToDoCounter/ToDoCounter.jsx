import React from "react";
import "./ToDoCounter.css"

function ToDoCounter ({completed, total}) {
    return (
        <p className="title">Haz Completado <span>{completed}</span> de <span>{total}</span> ToDo's</p>
    )
}

export {ToDoCounter}; 