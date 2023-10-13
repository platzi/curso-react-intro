import React from 'react';
import './TodoList.css'

function TodoList({children}){
    return(
        <ul>
            {children}
        </ul>
    );
}


export { TodoList };