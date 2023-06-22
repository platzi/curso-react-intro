import React from "react"
import "./todoFilter.css"
const TodoFilter = ({setState})=>{

    return(
   <> <input className="TodoSearch" placeholder="escribe algo" onChange={(e)=>setState(e.target.value)}/></>
    )    
  
}

export {TodoFilter}
  