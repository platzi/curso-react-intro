import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.
    useState('');

    console.log('los usuarios buscan TODOs de'
     + searchValue);

    return (
      <input 
        className='TodoSearch'
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        />
    )
  }
  
  export {TodoSearch}