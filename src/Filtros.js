import React from 'react';
import './Filtros.css';

function Filtros({ onTodos, onCompletados, onNoCompletados }) {
  return (
    <section className='filter'>
        <div className='container__filter'>
            <spa className="filter__option"
                   onClick={onTodos}
            >Todos</spa>


            <span className="filter__option filter__option--completed"
                  onClick={onCompletados}
            >
            Completados</span>


            <span className="filter__option filter__option--no-completed"
              onClick={onNoCompletados}
            >No completados</span>
        </div>
    </section>
  )
}

export { Filtros };
