import React from 'react'
import './TodoSearchLoading.css';

function TodoSearchLoading() {
  return (
    <article className="SearchLoading-container" id='SearchLoading-containerID'>
        <p className="SearchLoadingTodo-text"></p>
        <span className="SearchLoadingTodo-searhIcon"></span>
    </article>
  );
}
 
export { TodoSearchLoading };