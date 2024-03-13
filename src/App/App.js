import { useContext } from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { TodoContext } from '../Components/Context';
import { TodoForm } from '../Components/TodoForm';
import { Modal } from '../Components/Modal';
import '../Styles/App.css';

function App() {
  const {loading,
    error,
    searchedTodos,
    entireTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)

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
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  );
}

export default App;
