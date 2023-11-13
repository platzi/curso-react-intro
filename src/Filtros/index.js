import React, { useState } from 'react';
import "./Filtros.css";

function Filtros({
  filterTodosAll,
  filterTodoCompleted,
  filterTodoUncompleted,
}) {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("todos");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const updateFilter = (filterFunction) => {
    setFiltroSeleccionado(filterFunction);
    const result = filterFunction();
    setFilteredTodos(result);
  };

  return (
    <section className="filter">
      <div className="container__filter">
        <span
          className={`filter__option ${
            filtroSeleccionado === "todos" && "filter__option--active"
          }`}
          // onClick={() => {
          //   setFiltroSeleccionado("todos");
          //   filterTodosAll();
          // }}
          onClick={() => updateFilter(filterTodosAll)}
        >
          Todos 
          {/* ({filterTodosAll.length}) */}
        </span>

        <span
          className={`filter__option filter__option--completed ${filtroSeleccionado === 'completados' && 'filter__option--active'}`}
          // onClick={() => {
          //   setFiltroSeleccionado('completados');
          //   filterTodoCompleted();
          // }}
          onClick={() => updateFilter(filterTodoCompleted)}
        >
          Completados 
          {/* ({filterTodoCompleted.length}) */}
        </span>

        <span
         className={`filter__option filter__option--no-completed ${filtroSeleccionado === 'pendientes' && 'filter__option--active'}`}
          // onClick={() => {
          //   setFiltroSeleccionado('pendientes');
          //   filterTodoUncompleted();
          // }}
          onClick={() => updateFilter(filterTodoUncompleted)}
        >
          No completados
           {/* ({filterTodoUncompleted.length}) */}
        </span>
      </div>
    </section>
  );
}

export { Filtros };

//https://github.com/Misael-GC/curso-react-intro/commit/cdb14fac71c1ccb139528501ecc3147f14ba91d9
