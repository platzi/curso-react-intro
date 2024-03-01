import React from "react"
import { TodoContext } from "../TodoContext"

function TodoCounter(){
  const  {
  CompletedTodos,
  totalTodos} = React.useContext(TodoContext)
    return(

      <>
      
      <h1 className=" text-2xl p-2 text-white text-center">
        You have completed {CompletedTodos} of {totalTodos} TODOS
      </h1>
      
      
      </>
    )
  }
export { TodoCounter }