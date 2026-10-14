import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('Todos_V1');

// const defaultTools = [
//   {text : 'Actualiacion De Sistema Operativo', completed: true },
//   {text : 'Validar Bases De Datos', completed: false },
//   {text : 'Realizar Consultas SQL', completed: false },
//   {text : 'Instalar paquetes npm javascript', completed: false },
// ];

// localStorage.setItem('Todos_V1', JSON.stringify(defaultTools));


function App() {

  const {
    item: todos,
    saveItem: saveTools,
    loading,
    error,
  } = useLocalStorage('Todos_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.length;

  const searchTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  //Completar  tarea
  const completeTodo = (text)  => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTools (newTodos);
  };

  //Eliminar tarea
  const deleteTodo = (text)  => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTools (newTodos);
  };

  //Agregar nueva tarea
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false
    });
    saveTools(newTodos);
    setOpenModal(false);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={ completedTodos }
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={ searchTodos }      
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      openModal={openModal}
      setOpenModal={setOpenModal}
      addTodo={addTodo}
    />
  );
}

export default App;
