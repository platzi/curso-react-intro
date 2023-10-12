import React, { useState, useEffect } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Nadvar } from './Nadvar';
import { Footer } from './Footer';
import { Graficos } from './Graficos';
import { Filtros } from './Filtros';
import './App.css';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Introcción a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'LALA', completed: true },
//   { text: "el filtro de todos || completados || faltan", completed : false },
//   { text: 'reto - diga felicidades ya terminaste todo', completed: false },
//   { text: 'las leyendas e instrucciones', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


const frasesMotivacionales = [
  "Cree en ti, todo es posible.",
  "El éxito es la suma de esfuerzos.",
  "La perseverancia lleva a la victoria.",
  "Si puedes soñarlo, puedes lograrlo.",
  "El cambio comienza con una decisión.",
  "Crea, rompe, aprende, repite, evoluciona, persiste.",
  "Cada día es una nueva oportunidad.",
  "Persiste con fuerza, la meta te espera.",
  "Si puedes imaginarlo, puedes crearlo.",
  'Código limpio: como arte, simple y efectivo.',
  "Debuggear es el arte de ser paciente.",
  "La mejor documentación es un código claro.",
  "Programar es como resolver un rompecabezas.",
  "No reinventes la rueda, a menos que aprendas.",
  "Códigos buenos son poesía, no aburridos prosa.",
  "Siempre hay espacio para mejorar tu código.",
  "Piensa antes de programar, después hazlo simple.",
  "Escribe código que otros amen leer.",
];


function App() {
  //localStorage
  const localStorageTodos = localStorage.getItem('TODOS_V1'); //00000000000000000000000
  
  let parsedTodos;

  if(!localStorageTodos){ //si está vacío
    localStorage.setItem('TODOS_V1', JSON.stringify([])); //un usuario entra por primera vez a la app y hay un string vacio []
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos); //si no está vacío tendra un string con los items o tareas
  }


  //TodoSearch input
  const [searchValue, setSearchValue] = React.useState(''); 

  
  //TodoCounter P1 has completado N de N TODOs
  const [todos, setTodos] = React.useState(parsedTodos); //000000000000000000000000000000 revisar si hay algo en localStorage información

  const completedTodos = todos.filter(
    todo=> !!todo.completed 
    ).length;

    const totalTodos = todos.length;

    //TodoList
    const searchedTodos = todos.filter(

      (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText)
      }
    );

    //función que actualiza al estado y al localStorage al mismo tiempo | nuevos TODOS que se van a guardar en el estado y en el storage
    const saveTodos = (newTodos) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
      
      setTodos(newTodos);
    };
    //TodoList delete & check
    const completeTodo = (text) => {
      
      const todoIndex = todos.findIndex( 
      (todo) => todo.text === text
      );
      const newTodos = [...todos]; 
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed; 
      saveTodos(newTodos); 
    }

   const deleteTodo = (text) => { 
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex( 
        (todo) => todo.text === text 
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos); 
    }

  //TodoCounter P2 Frases random
  const [motivationalPhrase, setMotivationalPhrase] = React.useState(''); 
  const generateRandomMotivationalPhrase = () => {
    const randomPhrase = frasesMotivacionales[Math.floor(Math.random() * frasesMotivacionales.length)];
    setMotivationalPhrase(randomPhrase);
  };
  useEffect(() => {
    generateRandomMotivationalPhrase();
  }, []); 

// Mi componente Filter
  const filterTodosAll = parsedTodos;
  const filterTodoCompleted = parsedTodos.filter(
    todo => todo.completed === true
  );
 
  const filterTodoNoCompleted = parsedTodos.filter(
    todo => todo.completed === false
  );
 
  return (
    
    <> 
      <div>
        <Nadvar/>
        <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
        motivationalPhrase={motivationalPhrase}
        />
        
        <Filtros 
          onTodos={() => setTodos(parsedTodos)}//todos los elementos
          onCompletados={() => setTodos(filterTodoCompleted)}
          onNoCompletados={() => setTodos(filterTodoNoCompleted)}
        />
        
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        

        <div className="container1">
          <TodoList> 
          {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)} 
          />))}
          </TodoList>
          <Graficos
            completed={completedTodos}
            total={totalTodos}
          />
        </div>
      </div>
      <CreateTodoButton/>
      <Footer/>
    </>
  );
}



export default App;
