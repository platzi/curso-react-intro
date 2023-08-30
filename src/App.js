import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoList} from './TodoList';
import {TodoSerch} from './TodoSerch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem';
import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla',completed:false},
  {text: 'Cortar ajo',completed:true},
  {text: 'Cortar morron',completed:false},
  {text: 'Cortar panz',completed:false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={5}/>
      <TodoSerch/>
      <TodoList>
        {defaultTodos.map( todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
