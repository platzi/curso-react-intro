import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch }  from './TodoSearch';
import { TodoList }    from './TodoList';
import { TodoItem }    from './TodoItem';
import { TodoCreate }  from './TodoCreate';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <TodoCreate />

    </div>
  );
}

export default App;
