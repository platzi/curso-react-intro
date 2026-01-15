import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="todo-search-container">
      <div className="search-input-wrapper">
        <svg
          className="search-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          className="todo-search"
          placeholder="Buscar tarea..."
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </div>
    </div>
  );
}

export { TodoSearch };
