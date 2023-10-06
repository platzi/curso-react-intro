import React from 'react';
import './Filtros.css';

function Filtros() {
  return (
    <section className='filter'>
        <li className='container__filter'>
            <spa className="filter__option">Todos</spa>
            <span className="filter__option filter__option--completed">Completados</span>
            <span className="filter__option filter__option--no-completed">No completados</span>
        </li>
    </section>
  )
}

export { Filtros };