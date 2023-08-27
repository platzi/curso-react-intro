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
// const defaultTodos = [
//   { text: "Cortar Cebolla", completed: true },
//   { text: "Website en React", completed: false },
//   { text: "Website using node", completed: false },
//   { text: "SISII", completed: false },
// ];

function App() {
  return (
    // <React.Fragment>
    <>
      <TodoCounter completed={16} />

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
          <SectionContainer className={"secondary-container"}>
            <TodoItem text={"Prueba de Todoitem"} completed={false} />
            <TodoItem text={"Prueba de Todoitem"} completed={false} />
            <TodoItem
              text={
                " Texto demasiasdo grandeTexto demasiasdoTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandeTexto demasiasdo grandes grande"
              }
              completed={false}
            />
            <TodoItem text={"Prueba de Todoitem"} completed={false} />
            <TodoItem text={"Prueba de Todoitem"} completed={false} />
            <TodoItem text={"Prueba de Todoitem"} completed={false} />
            <TodoItem text={"Prueba de Todoitem"} completed={false} />
            <TodoItem text={"Prueba de Todoitem"} completed={false} />
            <TodoItem text={"Prueba de Todoitem"} completed={false} />
            <TodoItem text={"Prueba de Todoitem"} completed={false} />
          </SectionContainer>
        </SectionContainer>
      </div>

      {/* <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList> */}
    </>
    // </React.Fragment>
  );
}

export default App;
