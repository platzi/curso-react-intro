import React, { useState } from 'react';
import "./Filtros.css";

function Filtros({
  filterTodosAll,
  filterTodoCompleted,
  filterTodoUncompleted,

}) {

  return (
    <section className="filter">
      <div className="container__filter">
        <span
          className={`filter__option`}

        >
          Total tareas
          ({filterTodosAll.length})
        </span>

        <span
          className={`filter__option filter__option--completed `}
          onClick={() => {
          }}
        >
          Completados ({filterTodoCompleted.length})
        </span>

        <span
         className={`filter__option filter__option--no-completed `}
          onClick={() => {
          }}
        >
          Incompletados ({filterTodoUncompleted.length})
        </span>
      </div>
    </section>
  );
}

export { Filtros };

