// eslint-disable-next-line no-unused-vars
import logo from './platzi.webp';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: 'cortar las hojas', completed: true},
  {text: 'cortar el papel tuales', completed: false},
  {text: 'cortarte las uñas', completed: true},
  {text: 'cortate el acbello', completed: false},
]

function App() {
  return ( // a partir de aqui no estamos incorporando html, sino JSX
    <React.Fragment>

      {/* ¿ Cómo llamo a un componente? Escribiendo su nombre con la siguiente sintáxis < Componente1 />  */}
      <TodoCount completed={2} total={6}
      />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <TodoButton/>
      
    </React.Fragment>
  );
}

export default App;
