import { HeaderTodo } from "./HeaderTodo";
import { TodoItem } from "./ItemTodo";
/* import { listToDo } from "./ItemTodo"; */
import { useState } from "react";
import { SectionAddTodo } from "./ButtonIcon";
import React from "react";
import "../App.css";

const App =() => {

  const[searchValue, setSearchValue] = useState("");

  return (
    <>
      <main className="App">
        <section className="todoApp">
          <HeaderTodo 
          searchValue={searchValue}
          setSearchValue={setSearchValue} />
          <div>
            <TodoItem />
          </div>
        </section>
        <section className="addTodo">
          <SectionAddTodo />
        </section>
      </main>
    </>
  );
}

export default App;
