import React from 'react';
import './TodoSearch.css';

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState(''); //estado inicia en '' y se va actualizar
    console.log(searchValue);

    return(
        <div className="container-sm mb-5 ">
            <form className="d-flex" role="search">
            <input 
            className="form-control me-2 small-input TodoSearch" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            value={searchValue} // el valor inicia con un string vacío y se va a ir actualizando
            onChange={(event)=>{
                setSearchValue(event.target.value); //al escribir se tomará el valor y es el responsable del cambio
            }}
            />
            <button type="button" className="btn btn-dark Btn-search">Search</button>
            </form>
        </div>
    );
}


export { TodoSearch };