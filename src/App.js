import {NameCounter} from "./NameCounter";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import {TodoItem} from "./TodoItem";
import { CreateButton } from "./CreateButton";
import React from "react";
const todo =[{
    text:"visitar alemania", completed: false
},
{
  text:"completar el curso fullstack", completed: false
},
{
  text:"renderizar un array", completed: true
},
{
  text:"agregar todo", completed: true
},]


function App() {
  const [todos, setTodos] = React.useState(todo)
  const [state, setState] = React.useState("")
  const newtodo = todos.filter(e=>e.text.toLocaleLowerCase().includes(state.toLocaleLowerCase()))
  //tolocalelowercase no distingue entre acentos
  const completedTodo = (i)=>{
    const newT = [...todos,]
    const find = newT.findIndex(e=> e.text === i)
    newT[find].completed = true
   return setTodos(newT)
  }
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (i)=>{
    const newT = [...todos,]
    const find = newT.findIndex(e=> e.text === i)
    newT.splice(find, 1)
     setTodos(newT)
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
