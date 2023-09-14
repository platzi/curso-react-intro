import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Nadvar } from './Nadvar';
import { Footer } from './Footer';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  return (
    // Ract.Fragments = <> </>
    <> 
      <Nadvar/>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

      <TodoList> 
      {defaultTodos.map(todo => (
      <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
      />))}
      </TodoList>
      <CreateTodoButton/>
      <Footer/>
    </>
  );
}





export default App;
