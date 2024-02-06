import React from "react";
function TodoSearch({
  searchValue,
  setSearchValue
}){

   
  return(
      <input placeholder="Cortar Cebolla"
      className=""
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
        
      }}
      />
    )
  }
export { TodoSearch }