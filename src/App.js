/* eslint-disable eqeqeq */
// eslint-disable-next-line no-unused-vars
import logo from './platzi.webp';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Usar estados derivados', completed: true },
  { text: 'Cortar berenjena', completed: true },
  { text: 'Tomar la ruta de JavaScript a pronfundidad', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  {text: 'cortarte las uñas', completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos); //nuevo estado
  
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan todos de ' + searchValue) //concatenacion de un console.log, se mostaa el codigo ejecutado gacias a la linea 20 del componente TodoSearch

  const completedTodos = todos.filter(todo => !!todo.completed).length; 
        //Para filtrar un elemento de un array (manipulacion de arrays) existen dos formas: find y filter. Find te permite filtrar un elemento, UN solo eelemento lo cual va a ser el primero de una lista, en cambio del filter; te filtrara TODOS los elemntos de una lista 
        //segundo; se hace una arrowFutsion; '(todo => todo.completed)' se llama -todo- a aquellos todos que tengan el estado -completed- como true. Pero a simple vista se ve que va a llamar es a un valor, y nosotros necesitamos un buleano, por lo tanto se escribe con doble explamacion, para que esos valores se transformen en boleano '(todo => !!todo.completed)'
        //tercero; se pone la propiedad 'lwngth' para recibir las cantidades del array que se quiere filtrar
  const totalTodos = todos.length; //contador de todos en total
        
  
  const searchedTodos = todos.filter( //estado derivado de buscar todos
    (todo) => { //arrow futsion
      //return todo.text.toLowerCase().includes(searchValue.toLowerCase()) 
          //aqui estamos preguntando si por cada 'todo'; si el texto (text) de ese todo incluye (includes) en alñguna parte ese texto que forma parte del searchValue
          //el  codigo '.toLowerCase()' convuerte toda aquellas minusculas a mayusculas y viceversa, o mejor dicho hace mas facil la busqueda de todos
          //esta es una linea de codigo larga o mejor dicho de JavaScript moderno, para ordenarnos mas nos guiamos con la de abajo ↓
      
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => { // text que representa el texto de la tarea que se va a completar.
    console.log('click') //Esta línea imprime 'click' en la consola cada vez que se llama a la función completeTodo. Esto podría ser útil para depurar o entender cuándo se activa esta función.

    const newTodos = [...todos]; //Crea una copia de la matriz todos utilizando el operador de propagación (...). Esto es importante para no mutar directamente la matriz original.
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );//Encuentra el índice en el arreglo newTodos donde el texto de la tarea coincide con el argumento text proporcionado.

    newTodos[todoIndex].completed = true; //Cambia la propiedad completed de la tarea encontrada en el paso anterior a true, lo que indica que la tarea ha sido completada.
    setTodos(newTodos); //Actualiza el estado de todos con la nueva matriz de tareas donde la tarea indicada se marca como completada.
  }

  return ( // a partir de aqui no estamos incorporando html, sino JSX
    <> {/* → este "codigo" sin declaracion alguna es igual o hace la misma funcion que React.Fragment*/}
      {/* ¿ Cómo llamo a un componente? Escribiendo su nombre con la siguiente sintáxis < Componente1 />  */}
        <TodoCount completed={completedTodos} total={totalTodos}/>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          {searchedTodos.map(todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)} //evento del onClick del archivo TodoItem
            />
          ))}
        </TodoList>
        
        <TodoButton/>
    </>
  );
}

export default App;
