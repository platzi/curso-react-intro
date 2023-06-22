import {NameCounter} from "./NameCounter";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import {TodoItem} from "./TodoItem";
import { CreateButton } from "./CreateButton";
import React from "react";

const localStorageTodos = localStorage.getItem("TODOS_V1")
let parsedTodos;
if(!localStorageTodos){
  localStorage.setItem("TODOS_V1",JSON.stringify([]))
  parsedTodos = []
}else{
  parsedTodos = JSON.parse(localStorageTodos)
}


function App() {
  const [todos, setTodos] = React.useState(parsedTodos)
  const [state, setState] = React.useState("")
  const newtodo = todos.filter(e=>e.text.toLocaleLowerCase().includes(state.toLocaleLowerCase()))
  //tolocalelowercase no distingue entre acentos
  const savedTodos = (newTodos)=>{
      localStorage.setItem("TODOS_V1", JSON.stringify(newTodos))
      setTodos(newTodos)
  }
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    savedTodos(newTodos);
  };

  const deleteTodo = (i)=>{
    const newT = [...todos,]
    const find = newT.findIndex(e=> e.text === i)
    newT.splice(find, 1)
    savedTodos(newT)
  }
  return (
    
   <>
       <NameCounter total={todos.length} completed={todos.filter(e=> !!e.completed ).length}/>
      <TodoFilter setState={setState}/>
      <TodoList>
      </TodoList>
      {newtodo.map(e=> (<TodoItem element={e} key={e.text} completed={e.completed} onComplete={()=>completeTodo(e.text)}
      onDelete={()=>deleteTodo(e.text)}/> ))}
      <CreateButton/>
   </>
   
  );
}

export default App;
