import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

// const TodoContext = React.createContext();

function useTodos() {
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

  //open Modal
  const [openModal, setOpenModal] = React.useState(false);

  //Filter state: 'all' | 'completed' | 'pending'
  const [filter, setFilter] = React.useState("all");

  //Theme state: 'dark' | 'light'
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("THEME") || "dark";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("THEME", newTheme);
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }
  }, [theme]);

  // Request browser notification permissions
  React.useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  const sendBrowserNotification = (title, body) => {
    if (!("Notification" in window)) {
      return;
    }
    if (Notification.permission === "granted") {
      new Notification(title, {
        body,
        icon: "/favicon.ico",
      });
    }
  };

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  //TodoList filtered by search value and status filter
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    const matchesSearch = todoText.includes(searchText);
    
    if (filter === "completed") {
      return matchesSearch && todo.completed;
    }
    if (filter === "pending") {
      return matchesSearch && !todo.completed;
    }
    return matchesSearch;
  });

  // Pagination Logic
  const [currentPage, setCurrentPage] = React.useState(1);
  const todosPerPage = 5;

  // Reset pagination page on search or filter change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, filter]);

  const totalPages = Math.ceil(searchedTodos.length / todosPerPage);
  const paginatedTodos = searchedTodos.slice((currentPage - 1) * todosPerPage, currentPage * todosPerPage);

  // Editing state
  const [editingTodo, setEditingTodo] = React.useState(null);

  // Focus state
  const [focusedTodo, setFocusedTodo] = React.useState(null);

  //TodoList delete & check
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    
    if (newTodos[todoIndex].completed) {
      sendBrowserNotification("✅ ¡Tarea Completada!", `Has completado la tarea: "${text}"`);
    }
    
    if (focusedTodo && focusedTodo.text === text) {
      setFocusedTodo(null);
    }
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

    if (focusedTodo && focusedTodo.text === text) {
      setFocusedTodo(null);
    }
  };

  const updateTodo = (oldText, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.text === oldText);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);

    if (focusedTodo && focusedTodo.text === oldText) {
      setFocusedTodo(newTodos[todoIndex]);
    }
  };

  const reorderTodos = (draggedText, targetText) => {
    const draggedIndex = todos.findIndex((todo) => todo.text === draggedText);
    const targetIndex = todos.findIndex((todo) => todo.text === targetText);
    
    if (draggedIndex === -1 || targetIndex === -1) return;
    
    const newTodos = [...todos];
    const [removed] = newTodos.splice(draggedIndex, 1);
    newTodos.splice(targetIndex, 0, removed);
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

  
  return (
    {
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
        filter,
        setFilter,
        theme,
        toggleTheme,
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedTodos,
        editingTodo,
        setEditingTodo,
        updateTodo,
        focusedTodo,
        setFocusedTodo,
        reorderTodos,
        sendBrowserNotification,
      }
  );
}

export { useTodos };
