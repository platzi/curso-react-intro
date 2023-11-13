import React, { useState } from 'react';
import "./Filtros.css";

function Filtros({
  filterTodosAll,
  filterTodoCompleted,
  filterTodoUncompleted,
}) {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("todos");

  return (
    <section className="filter">
      <div className="container__filter">
        <span
          className={`filter__option ${
            filtroSeleccionado === "todos" && "filter__option--active"
          }`}
          onClick={() => {
            setFiltroSeleccionado("todos");
          }}
        >
          Total tareas
          ({filterTodosAll.length})
        </span>

        <span
          className={`filter__option filter__option--completed ${filtroSeleccionado === 'completados' && 'filter__option--active'}`}
          onClick={() => {
            setFiltroSeleccionado('completados');
          }}
        >
          Completados ({filterTodoCompleted.length})
        </span>

        <span
         className={`filter__option filter__option--no-completed ${filtroSeleccionado === 'pendientes' && 'filter__option--active'}`}
          onClick={() => {
            setFiltroSeleccionado('pendientes');
          }}
        >
          Incompletados ({filterTodoUncompleted.length})
        </span>
      </div>
    </section>
  );
}

export { Filtros };

//https://github.com/Misael-GC/curso-react-intro/commit/cdb14fac71c1ccb139528501ecc3147f14ba91d9
