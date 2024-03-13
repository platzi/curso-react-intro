import { useState, createContext } from 'react';
import { useLocalStorage } from '../App/useLocalStorage';

const TodoContext = createContext()

function TodoProvider( {children} ) {
  const {
    item: todos, 
    saveItem: setTodos, 
    loading, 
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  
  const searchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  })
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({text, completed: false});
    setTodos(newTodos);
  }

  const entireTodo = (index) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === index);
    if (todoIndex !== -1) {
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      setTodos(newTodos);
    }
  }
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === index);
    if (todoIndex !== -1) {
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
    }
  }
  return(
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      entireTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider}