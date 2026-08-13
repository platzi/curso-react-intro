import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue}) {

  return (
    <div className="search-container">
      <input 
        className="TodoSearch" 
        type="search" 
        placeholder="Buscar tarea..." 
        aria-label="Buscar tarea"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <AiOutlineSearch className="search-icon" />
    </div>
  );
}

export { TodoSearch };