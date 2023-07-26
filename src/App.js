import { TodoTitle } from'./TodoTitle' // De esta manera es como importamos los componentes que estamos creando
import { TodoSearch } from'./TodoSearch'
import { TodoList } from'./TodoList'
import { TodoItem } from'./TodoItem'
import { BotonCreateTodo } from'./BotonCreateTodo'
import './App.css';

function App() { // Con react las funciones empiezan con una letra mayusculas y estas funciones toman el nombre de complemetos. Lo que hay dentro de la funcion(complemento) se llama elemento, que es una combinacion de sintaxis html con js
  return (
    <div className="App">

      <TodoTitle />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <BotonCreateTodo />

    </div>
  );
  }

export default App;
