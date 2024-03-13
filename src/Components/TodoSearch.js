import { useContext } from 'react';
import { TodoContext } from '../Components/Context';
import '../Styles/TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);
  
  return(
    <input 
      className="TodoSearch" 
      placeholder="Search..."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

export {TodoSearch};