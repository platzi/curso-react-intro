import React from 'react';
import './TodoSearch.css';

function TodoSearch(){
    return(
        // <input placeholder='Cortar cebolla'/>
        <div className="container-sm mb-5 ">
            <form className="d-flex" role="search">
            <input 
            className="form-control me-2 small-input TodoSearch" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            onChange={(event)=>{
                console.log('Write in the TodoSearch');
                console.log(event);
                console.log(event.target);
                console.log(event.target.value);
            }}
            />
            <button type="button" className="btn btn-dark Btn-search">Search</button>
            </form>
        </div>
    );
}


export { TodoSearch };