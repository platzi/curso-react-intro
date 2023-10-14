import React from 'react';
import "./TodoCounter.css"

function TodoCounter({ total, completed, motivationalPhrase }){

    return(
        <h1 className="TodoCounter">
            Has completado <span>{completed} </span> 
            de <span>{total}</span> TODOs
        <p>{motivationalPhrase}</p>
        </h1>
    );
}


export { TodoCounter };