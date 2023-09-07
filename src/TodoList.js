import React from 'react';

function TodoList({children}){
    return(
        <ul>
            {children}
        </ul>
    );
}


export { TodoList };