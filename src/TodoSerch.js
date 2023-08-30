import React from 'react';
import './TodoSerch.css';

function TodoSerch({serchValue,setSerchValue}) {
  return (
    /*<input placeholder='Buscar lista'/>*/
    <form>
	    <label htmlFor="search">Search</label>
	    <input id="search" 
             type="search" 
            pattern=".*\S.*" 
            required 
            value={serchValue}
            onChange={(event) => {
              setSerchValue(event.target.value);
      }}/>
	    <span className="caret"></span>
    </form>
  )
}

export {TodoSerch};