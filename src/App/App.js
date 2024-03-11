import { useContext } from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { useLocalStorage } from '../App/useLocalStorage';
import '../Styles/App.css';
import { TodoContext, TodoProvider } from '../Components/Context';

function App() {
  const {loading,
    error,
    searchedTodos,
    entireTodo,
    deleteTodo} = useContext(TodoContext)

  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {loading && 
          <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
          </>
        }
        {error && <TodosError/>}
        {!loading && searchedTodos.length === 0 && <EmptyTodos/>}
        {searchedTodos.map((todo, index) => (
          <TodoItem 
            key={index} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => entireTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
