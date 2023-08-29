import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { CreateTodoInput } from "../components/CreateTodoInput/CreateTodoInput";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { SimpleText } from "../components/SimpleText/SimpleText";
import { ImgItem } from "../components/ImgItem/ImgItem";
import { useLocalStorage } from "./customHooks/useLocalStorage";
import React from "react";
import programmer from "./img/programmer.svg";
import sendImg from "./img/send.svg";
import "./css/body.css";
import "./css/button-input.css";
import { TodoInputSearch } from "../components/TodoInputSearch/TodoInputSearch";

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
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

export { AppUI };
