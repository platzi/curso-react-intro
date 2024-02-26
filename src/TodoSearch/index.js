import React from "react";
import { TodoContext } from "../TodoContext";
function TodoSearch(){
  const  {
    searchValue,
    setSearchValue} = React.useContext(TodoContext)
   
  return(
      <input placeholder="Cortar Cebolla"
      className=" mx-2 px-3 py-2 border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-300"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
        
      }}
      />
    )
  }
export { TodoSearch }