import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoList} from './TodoList';
import {TodoSerch} from './TodoSerch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoItem} from './TodoItem';
import './global.css';

const defaultTodos = [
  {text: 'Cortar cebolla',completed:false},
  {text: 'Cortar ajo',completed:true},
  {text: 'Cortar morron',completed:false},
  {text: 'Cortar panz',completed:false}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos =  todos.filter(todo => !!todo.completed).length;
  const totalTodos =  todos.length;

  const [serchValue, setSerchValue] = React.useState('');
  console.log("Se están comunicando de manera correcta" + serchValue);

  const serchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const serchText = serchValue.toLocaleLowerCase();
    return todoText.includes(serchText);
  });

  const deleteTodo = (textToDelete) => {
    const newTodos = todos.filter(todo => todo.text !== textToDelete);
    setTodos(newTodos);
  };

  const checkTodo = (idText) => {
    const check = todos.map(todo => 
      todo.text === idText 
      ? { ...todo, completed : !todo.completed } // Cambia el valor de completed
      : todo
      );
      setTodos(check);
    };

    const handleSaveNote = (note) => {
      const newTodos = [...todos, { text: note, completed: false }];
      setTodos(newTodos);
    };

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSerch 
        serchValue={serchValue}
        setSerchValue={setSerchValue}
      />
      <TodoList>
        {serchedTodos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            deleteTodo={deleteTodo}
            todoCompleted={checkTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton saveNote={handleSaveNote} /> {/* Pasa la función saveNote como prop */}
    </React.Fragment>
  );
}

export default App;
