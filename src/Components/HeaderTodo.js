import { TodoItem } from "./ItemTodo";

function HeaderTodo({total, completed}) {
  return (
    <>
      <div className="header">
        <h1 className="header-title">Completaste <span>{completed}</span> de <span>{total}</span> ToDo</h1>
        <input className="header-input input" type="search" placeholder="Terminar Curso" />
      </div>
    </>
  );
}

export { HeaderTodo };
