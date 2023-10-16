import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Nadvar } from '../Nadvar';
import { Footer } from '../Footer';
import { Graficos } from '../Graficos';


function AppUI({ 
    loading,
    error,
    completedTodos,
    totalTodos,
    motivationalPhrase,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
 }){
    return (
    
        <> 
          <div>
            <Nadvar/>
            <TodoCounter 
            completed={completedTodos}
            total={totalTodos}
            motivationalPhrase={motivationalPhrase}
            />
            
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            
    
            <div className="container1">
              <TodoList> 
              {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)} 
              />))}
              </TodoList>
              {loading && <p>Estamos cargando</p> }
              {error && <p>Hubo un error</p> }
              {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!</p>}
              <Graficos
                completed={completedTodos}
                total={totalTodos}
              />
            </div>
          </div>
          <CreateTodoButton/>
          <Footer/>
        </>
      );
};

export {AppUI};