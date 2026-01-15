import React, { useState, useEffect } from 'react';
import { TodoCounter } from '../components/todoCounter/TodoCounter';
import { TodoSearch } from '../components/todoSearch/TodoSearch';
import { TodoList } from '../components/todoList/TodoList';
import { TodoItem } from '../components/todoItem/TodoItem';
import { TodosLoading } from '../todosLoading/TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../components/modal/TodoOpenModal';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => setInitialLoading(false), 1000);
    return () => clearTimeout(time);
  }, []);

  if (initialLoading) {
    return <div style={{
      backgroundImage: "url('/img/task-up-background.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw'
    }}>
    </div>;
  }

  return (
    <div className='container'>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      {openModal && (
        <Modal>
        </Modal>
      )}

    </div>
  );
}

export { AppUI };
