import React from 'react';
import { useTodos } from './useTodos';
import './App.css';
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
import { TodoForm } from "../TodoForm";
import { Filtros } from "../Filtros";
import { TodoPagination } from "../TodoPagination";
import { TodoFocusPanel } from "../TodoFocusPanel";

function App() {

  const {
      loading,
      error,
      completedTodos,
      totalTodos,
      motivationalPhrase, 
      searchedTodos,
      completeTodo,
      deleteTodo,
      showSearch,
      showCounter,
      showGraphic,
      openModal,
      paginatedTodos,
      setEditingTodo,
      setOpenModal,
      focusedTodo,
      setFocusedTodo,
      reorderTodos,
      searchValue,
      setSearchValue,
      addTodo,
      editingTodo,
      updateTodo,
      filter, 
      setFilter,
      theme,
      toggleTheme,
      total,
      completed,
      currentPage, 
      setCurrentPage,
      totalPages,
    } = useTodos();

  const [draggedText, setDraggedText] = React.useState(null);
  const [dragOverText, setDragOverText] = React.useState(null);

  const handleDragStart = (e, text) => {
    setDraggedText(text);
  };

  const handleDragOver = (e, text) => {
    e.preventDefault();
    if (dragOverText !== text) {
      setDragOverText(text);
    }
  };

  const handleDrop = (e, targetText) => {
    e.preventDefault();
    setDragOverText(null);
    if (draggedText && draggedText !== targetText) {
      reorderTodos(draggedText, targetText);
    }
  };

  const handleDragEnd = () => {
    setDraggedText(null);
    setDragOverText(null);
  };

  return (
    <>
      <Nadvar theme={theme} toggleTheme={toggleTheme}/>

      <main className="dashboard-container container-fluid py-4 px-md-5">
        <div className="row g-4">
          
          {/* Left Column: Progress & Stats */}
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="glass p-4 rounded-4 h-100 d-flex flex-column gap-4">
              <div>
                <h2 className="fs-4 fw-bold mb-1 text-primary">Tu Progreso</h2>
                <p className="text-secondary small">Estadísticas y resumen de tus metas actuales</p>
              </div>

              {loading ? (
                <TodoCounterLoading />
              ) : (
                showCounter && <TodoCounter 
                                  totalTodos={totalTodos} 
                                  completedTodos={completedTodos} 
                                  motivationalPhrase={motivationalPhrase}
                                />
              )}

              {loading ? (
                <TodoGraphicLoading />
              ) : (
                showGraphic && <Graficos completed={completedTodos} total={totalTodos} theme={theme}/>
              )}
            </div>
          </div>

          {/* Right Column: Search, Filter & List */}
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="glass p-4 rounded-4 h-100 d-flex flex-column gap-4">
              {!loading && <TodoFocusPanel  focusedTodo={focusedTodo} setFocusedTodo={setFocusedTodo} completeTodo={completeTodo} />}
              <div>
                <h2 className="fs-4 fw-bold mb-1 text-primary">Lista de Tareas</h2>
                <p className="text-secondary small">Busca, filtra y gestiona tus actividades diarias</p>
              </div>

              <div className="d-flex flex-column gap-2">
                {loading ? (
                  <TodoSearchLoading />
                ) : (
                  showSearch && <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
                )}
                
                {!loading && <Filtros filter={filter} setFilter={setFilter}/>}
              </div>

              <div className="todo-list-wrapper">
                <TodoList
                  error={error}
                  loading={loading}
                  searchedTodos={searchedTodos}
                  onError={()=> <TodosError/>}
                  onLoading={()=> <TodosLoading/>}
                  onEmpty={()=> <EmptyTodos/>}
                  render={todo =>(
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                      onEdit={() => {
                        setEditingTodo(todo);
                        setOpenModal(true);
                      }}
                      isFocused={focusedTodo && focusedTodo.text === todo.text}
                      onFocus={() => {
                        const nextFocus = focusedTodo && focusedTodo.text === todo.text ? null : todo;
                        setFocusedTodo(nextFocus);
                        if (nextFocus) {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      isDragging={draggedText === todo.text}
                      isDragOver={dragOverText === todo.text}
                      onDragStart={(e) => handleDragStart(e, todo.text)}
                      onDragOver={(e) => handleDragOver(e, todo.text)}
                      onDrop={(e) => handleDrop(e, todo.text)}
                      onDragEnd={handleDragEnd}
                    />
                  )}
                />
                
              </div>
            </div>
          </div>

        </div>
      </main>

      <CreateTodoButton
       setOpenModal={setOpenModal} 
       setEditingTodo={setEditingTodo} 
      />

      {openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal} 
            setEditingTodo={setEditingTodo}  
            editingTodo={editingTodo}    
            updateTodo={updateTodo}
            />
        </Modal>
      )}

      <Footer />
    </>
  );
}



export default App;

//:0