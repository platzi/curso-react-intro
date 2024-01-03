/* eslint-disable eqeqeq */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocalStorage } from './useLocalStorage'
import { AppUI } from './AppUX'

function App() {
  // Usa la función useLocalStorage para gestionar un elemento llamado 'TODOS_V1' en el localStorage
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); // Los corchetes vacíos indican que el valor inicial es un arreglo vacío
  // 'todos' almacena el estado actual del elemento 'TODOS_V1' en el localStorage
  // 'saveTodos' es la función que permite actualizar el estado de 'todos' y el localStorage

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; 
        //Para filtrar un elemento de un array (manipulacion de arrays) existen dos formas: find y filter. Find te permite filtrar un elemento, UN solo eelemento lo cual va a ser el primero de una lista, en cambio del filter; te filtrara TODOS los elemntos de una lista 
        //segundo; se hace una arrowFutsion; '(todo => todo.completed)' se llama -todo- a aquellos todos que tengan el estado -completed- como true. Pero a simple vista se ve que va a llamar es a un valor, y nosotros necesitamos un buleano, por lo tanto se escribe con doble explamacion, para que esos valores se transformen en boleano '(todo => !!todo.completed)'
        //tercero; se pone la propiedad 'lwngth' para recibir las cantidades del array que se quiere filtrar
  const totalTodos = todos.length; //contador de todos en total
        
  
  const searchedTodos = todos.filter(           //estado derivado de buscar todos
    (todo) => {                                 //arrow futsion
      //return todo.text.toLowerCase().includes(searchValue.toLowerCase()) 
          //aqui estamos preguntando si por cada 'todo'; si el texto (text) de ese todo incluye (includes) en alñguna parte ese texto que forma parte del searchValue
          //el  codigo '.toLowerCase()' convuerte toda aquellas minusculas a mayusculas y viceversa, o mejor dicho hace mas facil la busqueda de todos
          //esta es una linea de codigo larga o mejor dicho de JavaScript moderno, para ordenarnos mas nos guiamos con la de abajo ↓
      
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );
  
  const completeTodo = (text) => {
    console.log('click');                       // Imprime 'click' en la consola cada vez que se llama a la función
  
    const newTodos = [...todos];                // Crea una copia de la matriz todos con '...'
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );                                          // Encuentra el índice en la matriz newTodos donde el texto de la tarea coincide con el argumento text proporcionado
  
    newTodos[todoIndex].completed = true;       // Marca la tarea encontrada como completada
    saveTodos(newTodos);                        // Guarda y actualiza la lista de tareas
  };
  
  const deleteTodo = (text) => {
    console.log('click delete');                // Imprime 'click delete' en la consola
  
    const newTodos = [...todos];                // Crea una copia de la matriz todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );                                          // Encuentra el índice en la matriz newTodos donde el texto de la tarea coincide con el argumento text proporcionado
  
    newTodos.splice(todoIndex, 1);              // Elimina la tarea en el índice todoIndex de la matriz newTodos
    saveTodos(newTodos);                        // Guarda y actualiza la lista de tareas
  };
  
  return (                                      // Devuelve un elemento JSX
    <AppUI 
      completeTodo={completeTodo}               // Prop completeTodo se asigna a la función completeTodo
      totalTodos={totalTodos}                   // Prop totalTodos se asigna a la variable totalTodos
      searchValue={searchValue}                 // Prop searchValue se asigna a la variable searchValue
      setSearchValue={setSearchValue}           // Prop setSearchValue se asigna a la función setSearchValue
      searchedTodos={searchedTodos}             // Prop searchedTodos se asigna a la variable searchedTodos
      completedTodos={completedTodos}           // Prop completedTodos se asigna a la variable completedTodos
      deleteTodo={deleteTodo}                   // Prop deleteTodo se asigna a la función deleteTodo
    />
  );

}

export default App;
