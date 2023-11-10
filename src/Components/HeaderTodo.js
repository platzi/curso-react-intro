import React from "react";
import { listToDo } from "./ItemTodo";
const HeaderTodo = ({searchValue, setSearchValue}) => {

 const countTask = () => {
  const completed = listToDo.filter((task) => task.completed);
  return completed.length
 }

  return (
    <>
      <div className="header">
        <h1 className="header-title">Completaste <span>{countTask()}</span> de <span>{listToDo.length}</span></h1>
        <form action="form_input">
          <input 
          className="header-input input" 
          type="search" 
          value={searchValue}
          onChange={(event)=>{
            setSearchValue(event.target.value);
          }}
          onClick={()=>{
            console.log('El usuario esta buscando: ' + searchValue);
            /* console.log('El usuario esta buscando: ' + setNumberCompleted); */
          }}
          placeholder="Terminar Curso" />
        </form>
      </div>
    </>
  );
}

export { HeaderTodo };
