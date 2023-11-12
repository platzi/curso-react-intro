import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch(){
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

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
            <button type="button" className="btn btn-dark Btn-search px-3"> <AiOutlineSearch className='icono'/> </button>
            </form>
        </div>
    );
}


export { TodoSearch };