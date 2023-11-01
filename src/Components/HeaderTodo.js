import { TodoItem } from "./ItemTodo";

function HeaderTodo({total, completed}) {
  return (
    <>
      <h1>Completaste {completed} de {total} ToDo</h1>
      <input type="search" placeholder="Terminar Curso" />
    </>
  );
}

export { HeaderTodo };
