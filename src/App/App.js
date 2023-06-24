import React from "react";
import {useLocalStorage} from "../hooks/useLocalStorage"
import { Logica } from "./logica";

function App() {
  const [todos, saveItem] = useLocalStorage("TODOS_V1",[])
  const [state, setState] = React.useState("")
  const newtodo = todos.filter(e=>e.text.toLocaleLowerCase().includes(state.toLocaleLowerCase()))
  //tolocalelowercase no distingue entre acentos

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveItem(newTodos);
  };

  const deleteTodo = (i)=>{
    const newT = [...todos,]
    const find = newT.findIndex(e=> e.text === i)
    newT.splice(find, 1)
    saveItem(newT)
  }
  //se separan entre statefull y stateless
  return (
 <Logica todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} newtodo={newtodo} setState={setState} />
   
  );
}

export default App;
