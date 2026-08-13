import React from 'react';
import './TodoList.css'

function TodoList({children, error, loading, searchedTodos, onError, onLoading, onEmpty, render}) {
    return(
        <section className='TodoList__container'>
            {error && onError()}
            {loading && onLoading()}
            {(!loading && !searchedTodos.length) && onEmpty()}
            {searchedTodos.map(render)}
            <ul className='TodoList'>
                {children}
            </ul>
        </section>
    );
}


export { TodoList };