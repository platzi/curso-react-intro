import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { CreateTodoInput } from "../components/CreateTodoInput/CreateTodoInput";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { SimpleText } from "../components/SimpleText/SimpleText";
import { ImgItem } from "../components/ImgItem/ImgItem";
import { useLocalStorage } from "./customHooks/useLocalStorage";
import React from "react";
import { AppUI } from "./AppUI";
import programmer from "./img/programmer.svg";
import sendImg from "./img/send.svg";
import "./css/body.css";
import "./css/button-input.css";
import { TodoInputSearch } from "../components/TodoInputSearch/TodoInputSearch";

// const defaultTodos = [
//   { text: "Cortar Cebolla", completed: true },
//   { text: "Website en React", completed: true },
//   { text: "Website using node", completed: true },
//   { text: "SISII", completed: false },
// ];

// localStorage.setItem("TODOS_V1", defaultTodos);
// localStorage.removeItem("TODOS_V1")

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
