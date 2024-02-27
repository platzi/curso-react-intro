import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch }  from './TodoSearch';
import { TodoList }    from './TodoList';
import { TodoItem }    from './TodoItem';
import { TodoCreate }  from './TodoCreate';
import React from 'react';

const defaultTodos = [
  { id: 1, text: 'Cortar cebolla', completed: false },
  { id: 2, text: 'Tomar curso de React Js', completed: true },
  { id: 3, text: 'Llorar con la llorona', completed: false },
  { id: 4, text: 'Renunciar a la chamba', completed: true }
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={3} total={10} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoCreate />

    </React.Fragment>
  );
}

export default App;
