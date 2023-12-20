// eslint-disable-next-line no-unused-vars
import logo from './platzi.webp';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'lorem ipsut, lorem ipsut, lorem ipsut, lorem ipsut, lorem ipsut, lorem ipsut, lorem ipsut, lorem ipsut, lorem ipsut', completed: true},
  {text: 'cortar el papel tuales', completed: false},
  {text: 'cortarte las uñas', completed: true},
  {text: 'cortate el acbello', completed: false},
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  {text: 'cortarte las uñas', completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos) //nuevo estado

  const completedTodos = todos.filter(todo => !!todo.completed).length; 
        //Para filtrar un elemento de un array (manipulacion de arrays) existen dos formas: find y filter. Find te permite filtrar un elemento, UN solo eelemento lo cual va a ser el primero de una lista, en cambio del filter; te filtrara TODOS los elemntos de una lista 
        //segundo; se hace una arrowFutsion; '(todo => todo.completed)' se llama -todo- a aquellos todos que tengan el estado -completed- como true. Pero a simple vista se ve que va a llamar es a un valor, y nosotros necesitamos un buleano, por lo tanto se escribe con doble explamacion, para que esos valores se transformen en boleano '(todo => !!todo.completed)'
        //tercero; se pone la propiedad 'lwngth' para recibir las cantidades del array que se quiere filtrar
  const totalTodos = todos.length; //contador de todos en total

  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan todos de ' + searchValue) //concatenacion de un console.log, se mostaa el codigo ejecutado gacias a la linea 20 del componente TodoSearch

  return ( // a partir de aqui no estamos incorporando html, sino JSX
    <> {/*→este "codigo" sin declaracion alguna es igual o hace la misma funcion que React.Fragment*/}
      {/* ¿ Cómo llamo a un componente? Escribiendo su nombre con la siguiente sintáxis < Componente1 />  */}
        <TodoCount completed={completedTodos} total={totalTodos}/>
        <TodoSearch
          searchValue={searchValue}
          seSearchValue={setSearchValue}
        />

        <TodoList>
          {defaultTodos.map(todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        
        <TodoButton/>
    </>
  );
}

export default App;
