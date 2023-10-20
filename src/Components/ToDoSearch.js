import React from 'react';
import './ToDoSearch.css';

function ToDosearch({
    searchValue, 
    setSearchValue
}) {
    
    return (
        <input 
        placeholder="Cortar cebolla"
        className='ToDoSearch'
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        />
    );
};

export { ToDosearch };