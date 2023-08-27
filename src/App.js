import { TodoCounter } from "./components/TodoCounter";
import { CreateTodoInput } from "./components/CreateTodoInput";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { SectionContainer } from "./components/SectionContainer";
import { SimpleText } from "./components/SimpleText";
import { ImgItem } from "./components/ImgItem";
import React from "react";
import programmer from "./img/programmer.svg";
import sendImg from "./img/send.svg";
import "./css/body.css";
import "./css/button-input.css";
import { TodoInputSearch } from "./components/TodoInputSearch";

const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Website en React", completed: true },
  { text: "Website using node", completed: true },
  { text: "SISII", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    // <React.Fragment>
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <div className="body-wrapper">
        <SectionContainer className={"principal-container"}>
          <SimpleText type={"header"} text={"Create a new TODO"} />
          <SectionContainer className={"secondary-container"}>
            <div className="button-input">
              <CreateTodoInput />
              <CreateTodoButton>
                <ImgItem className="send-img" url={sendImg} />
              </CreateTodoButton>
            </div>
            <SimpleText
              type={"light-text"}
              text={"I gotta study how to use react :)"}
            />
            <ImgItem className="programmer-img" url={programmer} />
          </SectionContainer>
        </SectionContainer>

        <SectionContainer className="principal-container">
          <SimpleText type={"header"} text={"Actual TODOs"} />
          <TodoInputSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <SectionContainer className={"secondary-container"}>
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </SectionContainer>
        </SectionContainer>
      </div>
    </>
    // </React.Fragment>
  );
}

export default App;
