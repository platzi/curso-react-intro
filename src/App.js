import './App.css';
// -----------------------------
// Importaciones de componentes
// -----------------------------
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

// Lista de tareas "hardcodeada"
const todos = [
  { text: 'Aprender JSX', completed: true },
  { text: 'Crear componentes', completed: false },
  { text: 'Aprender sobre Props', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={1} total={3} />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;

