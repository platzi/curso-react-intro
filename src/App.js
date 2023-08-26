import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import React from "react";
import "./css/body.css";

const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Website en React", completed: false },
  { text: "Website using node", completed: false },
  { text: "SISII", completed: false },
];

function App() {
  return (
    // <React.Fragment>
    <>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
    // </React.Fragment>
  );
}

export default App;
