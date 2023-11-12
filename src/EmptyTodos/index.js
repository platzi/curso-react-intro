import React from 'react'
import { GoCopilot } from "react-icons/go";
import './EmptyTodos.css'

function EmptyTodos() {
  return (
    <div className="EmptyContainer">
      <h2>¡No hay tareas por hacer!</h2>
      <GoCopilot className='copilot'/>
      <p className="first-Todo">¡Crea tu primer TODO!</p>
    </div>
  )
}

export { EmptyTodos };