
import { TodoCounter } from './TodoCounter';
import { TodoItems } from './TodoItems';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

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
