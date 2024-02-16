import './App.css';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoCounter } from './TodoCounter/TodoCounter.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton.js'
import React from 'react';

const defaultTodos = [
  {text: 'item1', completed: true},
  {text: 'item2', completed: true},
  {text: 'item3', completed: true},
  {text: 'item4', completed: true}]

function App() {
  return (
    <React.Fragment className='App'>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.completed}
          text={todo.text}
          completed={todo.completed}
          />

        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
