import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItem';
import { CreateTodoButton } from './CreateTodobutton';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItems />
        <TodoItems />
        <TodoItems />
      </TodoList>
      
      <CreateTodoButton />
    </div>
  );
}

export default App;
