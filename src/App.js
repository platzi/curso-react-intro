import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>

      <TodoList> 
        <TodoItem/>
        <TodoItem/>
        <TodoItem />
      </TodoList>
      <CreateTodoButton/>
    </div>
  );
}





export default App;
