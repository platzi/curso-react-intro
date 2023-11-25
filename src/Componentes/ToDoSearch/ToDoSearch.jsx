import React from "react";
import "./ToDoSearch.css"

function ToDoSearch ({searchValue, setSearchValue}) {

    return (
        <input 
        className="searchBar" 
        type="search" 
        placeholder="Buscar ToDo" 
        onChange={(event)=>{setSearchValue(event.target.value)}} 
        value={searchValue}
        />
    )
}

export {ToDoSearch}; 