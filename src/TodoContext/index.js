import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    showSearch,
    showCounter,
    showGraphic,
  } = useLocalStorage("TODOS_V1", []);

  //TodoSearch input
  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

//
  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  //TodoList
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  //TodoList delete & check
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  //TodoCounter P2 Frases random
  const frasesMotivacionales = [
    "Cree en ti, todo es posible.",
    "El éxito es la suma de esfuerzos.",
    "La perseverancia lleva a la victoria.",
    "Si puedes soñarlo, puedes lograrlo.",
    "El cambio comienza con una decisión.",
    "Crea, rompe, aprende, repite, evoluciona, persiste.",
    "Cada día es una nueva oportunidad.",
    "Persiste con fuerza, la meta te espera.",
    "Si puedes imaginarlo, puedes crearlo.",
    "Código limpio: como arte, simple y efectivo.",
    "Debuggear es el arte de ser paciente.",
    "La mejor documentación es un código claro.",
    "Programar es como resolver un rompecabezas.",
    "No reinventes la rueda, a menos que aprendas.",
    "Códigos buenos son poesía, no aburridos prosa.",
    "Siempre hay espacio para mejorar tu código.",
    "Piensa antes de programar, después hazlo simple.",
    "Escribe código que otros amen leer.",
  ];
  const [motivationalPhrase, setMotivationalPhrase] = React.useState("");

  const generateRandomMotivationalPhrase = () => {
    const randomPhrase =
      frasesMotivacionales[
        Math.floor(Math.random() * frasesMotivacionales.length)
      ];
    setMotivationalPhrase(randomPhrase);
  };
  useEffect(() => {
    generateRandomMotivationalPhrase();
  }, []);

  const addTodo = (text) =>{
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  // Filtros
  const filterTodosAll = todos;
  const filterTodoCompleted = todos.filter((todo) => !!todo.completed);
  const filterTodoUncompleted = todos.filter((todo) =>!todo.completed);

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        motivationalPhrase, 
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        showSearch,
        showCounter,
        showGraphic,
        openModal,
        setOpenModal,
        addTodo,
        filterTodosAll,
        filterTodoCompleted,
        filterTodoUncompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

//https://github.com/Misael-GC/curso-react-intro/commit/cdb14fac71c1ccb139528501ecc3147f14ba91d9
