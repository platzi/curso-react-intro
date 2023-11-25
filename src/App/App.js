import React from "react";
import "./App.css"
import { CreateToDoButton } from "../Componentes/CreateToDoButton/CreateToDoButton";
import { ToDoCounter } from "../Componentes/ToDoCounter/ToDoCounter";
import { ToDoList } from "../Componentes/ToDoList/ToDoList";
import { ToDoSearch } from "../Componentes/ToDoSearch/ToDoSearch";
import { ToDoItem } from "../Componentes/TodoItem/ToDoItem";


  const arrayToDos = [
  {text: "sacar a noah", completed: true},
  {text: "cortar cebolla", completed: false},
  {text: "terminar curso de manip arrays", completed: false},
  {text: "mimir", completed: true},
  {text: "leer", completed: true},
  {text: "COCINAR", completed: false},
  {text: "Entrenar", completed: true},
]

function App() {

  const [todos, setTodos] = React.useState(arrayToDos); 

  const [searchValue, setSearchValue ] = React.useState(""); 
  console.log("Los usuarios buscan todos de " + searchValue);

  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  const completeTodo = (text) => {

    const newTodosList = [...todos];
    const todoIndex = newTodosList.findIndex((todo)=>todo.text === text); 
    newTodosList[todoIndex].completed = true; // aca lo que estoy diciendo es que en el indice del array donde la propiedad todo.text sea igual al texto que yo le estoy enviando por parametro, ya que ese texto es el identificador unico de ese elemento. entonces, que a ese indice en su propiedad completed la cambie a true cuando ocurra todo lo que pasa en todoIndex. 
    setTodos(newTodosList); 
  }

  const deleteTodo = (text) => {
    const newTodosList = [...todos];
    const todoIndex = newTodosList.findIndex((todo)=>todo.text === text); 
    newTodosList.splice(todoIndex, 1);
    setTodos(newTodosList); 
  }

  return (
    <div className="MainContainer">

      <ToDoCounter completed={completedTodos} total={totalTodos}/>
      <ToDoSearch  searchValue={searchValue} setSearchValue={setSearchValue}/> 

      <ToDoList>
       {searchedTodos.map((todo) => <ToDoItem key={todo.text} completed={todo.completed} text={todo.text} onComplete={()=>{completeTodo (todo.text)}} onDelete={()=>{deleteTodo(todo.text)}}/> )}
      </ToDoList>    

      <CreateToDoButton/>

    </div>
  );
}

export default App;
