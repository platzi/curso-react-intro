import React from 'react';
import './Todosearch.css'

function TodoSearch({
  searchValue,
  setSearchValue,
}){  
  return(
    <input className="search-container" placeholder="Buscar Tareas"
      value={searchValue}
      onChange = {(event) => {
        setSearchValue(event.target.value );
        
      }}
    />
  );
}


export { TodoSearch };