import React from "react"
import { TodoContext } from "../TodoContext"

function TodoCounter(){
  const  {
  CompletedTodos,
  totalTodos} = React.useContext(TodoContext)
    return(

      <>
      
      <h1 className=" text-2xl p-2 text-white text-center">
        Has completado {CompletedTodos} de {totalTodos} TODOS
      </h1>
      
      
      </>
    )
  }
export { TodoCounter }