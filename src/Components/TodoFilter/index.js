import React from "react"
import "../../styles/todoFilter.css"
import { TodoContext } from "../../Contexts/todoContext"
const TodoFilter = ()=>{
    const {   searchValue,
        setSearchValue,} = React.useContext(TodoContext)
    return(
   <> <input className="TodoSearch" placeholder="escribe algo" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/></>
    )    
  
}

export {TodoFilter}
  