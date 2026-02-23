import './App.css';
// -----------------------------
// Importaciones de componentes
// Nota: Los paths apuntan a las subcarpetas de cada componente
// -----------------------------
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

// Lista de tareas "hardcodeada"
const todos = [
  { text: 'Aprender JSX', completed: true },
  { text: 'Crear componentes', completed: false },
  { text: 'Aprender sobre Props', completed: false },
  { text: 'Aprender a manipular arrays', completed: true },
];

// Formateamos la fecha actual para mostrarla en el header
const today = new Date().toLocaleDateString('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

function App() {
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <>
      {/* Header: Good morning */}
      <header className="AppHeader">
        <div className="AppHeader__text">
          <h2>Good<br />morning</h2>
          <p>{today}</p>
        </div>
        <div className="AppHeader__dot" />
      </header>

      {/* Tarjetas de estadísticas */}
      <TodoCounter completed={completedCount} total={todos.length} />

      {/* Buscador */}
      <TodoSearch />

      {/* -----------------------------
      Renderizado de la lista de tareas
      ----------------------------- */}
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      {/* Botón para crear tareas */}
      <CreateTodoButton />
    </>
  );
}

export default App;
