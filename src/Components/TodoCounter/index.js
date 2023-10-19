import React from 'react'
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h1 
    className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      You have completed <span>{completedTodos}</span> out of <span>{totalTodos}</span> TODOs
    </h1>
    )
}

export { TodoCounter }