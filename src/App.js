import React, { useState, useEffect } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Nadvar } from './Nadvar';
import { Footer } from './Footer';
import { Graficos } from './Graficos';
import './App.css';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Introcción a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'LALA', completed: true },
  { text: "el filtro de todos || completados || faltan", completed : false },
  { text: 'que pueda quitar el completado es decir desactivar', completed: false },
  { text: 'reto - diga felicidades ya terminaste todo', completed: false },
  { text: 'las leyendas e instrucciones', completed: false },
];

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
  //TodoSearch input
  const [searchValue, setSearchValue] = React.useState(''); 

  
  //TodoCounter P1 has completado N de N TODOs
  const [todos, setTodos] = React.useState(defaultTodos); //000000000000000000000000000000

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

    //TodoList delete & check
    //00000000000000000000000000000000000000000000000000000000000000000
    const completeTodo = (text) => { //se le manda text que es el iddentificador unico || esto es una funcion que espera parametros <<<<>>>>
      const newTodos = [...todos]; //copia del array de todos
      const todoIndex = newTodos.findIndex( //encontrar por indice cada todo
        (todo) => todo.text === text //el todo que en su text sea = al texto clave
      );
      newTodos[todoIndex].completed = true; //se marca como completados
      setTodos(newTodos); //se actualiza el estado
    }

    const deleteTodo = (text) => { //se le manda text que es el iddentificador unico || esto es una funcion que espera parametros <<<<>>>>
      const newTodos = [...todos]; //copia del array de todos
      const todoIndex = newTodos.findIndex( //encontrar por indice cada todo
        (todo) => todo.text === text //el todo que en su text sea = al texto clave
      );
      newTodos.splice(todoIndex, 1);// del texto clave elimina solo ese, es decir 1 todo
      setTodos(newTodos); //se actualiza el estado
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



  return (
    // Ract.Fragments = <> </>
    <> 
      <div>
        <Nadvar/>
        <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
        motivationalPhrase={motivationalPhrase}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <div className="container1">
          <TodoList> 
          {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} //0000000000000000000000000000000000 recuerda el identificador único 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} //la función se debe ejecutar al suceder el evento, por eso se encapsula en arrow function <<<<>>>>
            onDelete={() => deleteTodo(todo.text)} //la función se debe ejecutar al suceder el evento, por eso se encapsula en arrow function <<<<>>>>
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
