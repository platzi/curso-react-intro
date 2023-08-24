// import logo from './platzi.webp';
// un componente en React se tiene que importar como un objeto 
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';

function App() {
  return (
    // Fijense que al momento de crear la aplicacion se colocan todos los componentes para declararlos y saber o tener una idea de como se va a crear la aplicacion 
    <div className="App">
      {/* se usa KebabCase para la creacion y denominacion de componentes  */}
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
      </TodoList>
      {/* clase 2 creando la aplicacion */}
      <CreateTodoButton />
    </div>
  );
}




export default App;
