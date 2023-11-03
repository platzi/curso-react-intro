import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Nadvar } from "../Nadvar";
import { Footer } from "../Footer";
import { Graficos } from "../Graficos";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoSearchLoading } from "../TodoSearchLoading";
import { TodoCounterLoading } from "../TodoCounterLoading";
import { TodoGraphicLoading } from "../TodoGraphicLoading";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    showSearch,
    showCounter,
    showGraphic,
    openModal,
    setOpenModal
    } = React.useContext(TodoContext);
  return (
    <>
      <Nadvar />

          <div className="SuperiorContainerAll">
          {loading && (
            <>
              <TodoCounterLoading />
            </>
          )}
          {showCounter && <TodoCounter />}
          {loading && (
            <>
              <TodoSearchLoading />
            </>
          )}
          {showSearch && <TodoSearch />}

          {/* Arreglar los estilos */}
          <div className="container1">
            <TodoList>
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
            {loading && (
              <>
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

            {loading && (
              <>
                <TodoGraphicLoading />
              </>
            )}
            {showGraphic && (
              <Graficos completed={completedTodos} total={totalTodos} />
            )}
          </div>

          {/* Arreglar los estilos */}
        </div>

      <CreateTodoButton />
      {openModal && (
        <Modal>
        <TodoForm/>
      </Modal>
      )}
      <Footer />
    </>
  );
}

export { AppUI };
