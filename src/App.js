// eslint-disable-next-line no-unused-vars
import logo from './platzi.webp';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css';

function App() {
  return ( // a partir de aqui no estamos incorporando html, sino JSX
    <div className="App">

      {/* ¿ Cómo llamo a un componente? Escribiendo su nombre con la siguiente sintáxis < Componente1 />  */}
      <TodoCount
        completed={3}
        total={5}
      />
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      
      <TodoButton/>
      
    </div>
  );
}

export default App;
