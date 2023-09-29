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
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
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
  //TodoSearch
  const [searchValue, setSearchValue] = React.useState(''); //estado inicia en '' y se va actualizar
  console.log(searchValue);

  //TodoCounter
  const [motivationalPhrase, setMotivationalPhrase] = React.useState(''); //actual y atualización
  const generateRandomMotivationalPhrase = () => {//función con la actualización la frase random
    const randomPhrase = frasesMotivacionales[Math.floor(Math.random() * frasesMotivacionales.length)];
    setMotivationalPhrase(randomPhrase);
  };
  useEffect(() => {//estado que hace posible el reenderizado
    generateRandomMotivationalPhrase();
  }, []); // Este efecto se ejecutará una vez al montar el componente


  return (
    // Ract.Fragments = <> </>
    <> 
      <Nadvar/>
      <TodoCounter completed={16} total={25} motivationalPhrase={motivationalPhrase} /> {/*aqui se pasa la actualización */}
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className="container">
        <TodoList> 
        {defaultTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
        />))}
        </TodoList>
        <Graficos/>
      </div>
      <CreateTodoButton/>
      <Footer/>
    </>
  );
}





export default App;
