import React from 'react'
import "../../styles/nameCounter.css"
import { TodoContext } from '../../Contexts/todoContext'

const NameCounter = ()=>{
  const {completedTodos, totalTodos} = React.useContext(TodoContext)

    return(
      <h1 className="TodoCounter">
        has completado  {completedTodos} de {totalTodos} ToDo's
      </h1>
    )    
  
  }

  export {NameCounter}