import React from 'react'
import './TodoSearchLoading.css';

function TodoSearchLoading() {
  return (
    <article className="SearchLoading-container ">
        <p className="SearchLoadingTodo-text"></p>
        <span className="SearchLoadingTodo-searhIcon"></span>
    </article>
  );
}

export { TodoSearchLoading };