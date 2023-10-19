import React from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
return (
    <input
      className='TodoSearch'
      placeholder='Search your To Do' 
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)  
      }}
      disable="true"
    />
  )
}

export { TodoSearch } 
