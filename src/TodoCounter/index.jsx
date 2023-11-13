import React from 'react';
import "./TodoCounter.css"
import { TodoContext } from '../TodoContext';

function TodoCounter(){

    const { totalTodos, completedTodos, motivationalPhrase } = React.useContext(TodoContext);

    return(
        <h1 className="TodoCounter">
            Has completado <span>{completedTodos} </span> 
            de <span>{totalTodos}</span> Tareas
        <p>{motivationalPhrase}</p>
        </h1>
    );
}


export { TodoCounter };