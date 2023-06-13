import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
  return (
    <h1 className='TodoCounter'>
      You have completed <span>{completedTodos}</span> out of <span>{totalTodos}</span> TODOs
    </h1>
    )
}

export { TodoCounter }