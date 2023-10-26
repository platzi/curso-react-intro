import React from 'react'
import { BsFillBugFill } from "react-icons/bs";

function TodosError() {
  return (
    <div className="error-container">
      <BsFillBugFill className='ErrorIcon'/>
    <p className='hubo-error'>Hubo un error en la matrix vuelve a cargar o intentarlo más tarde ¯\_(ツ)_/¯</p>
    </div>
  )
}

export { TodosError };