import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Nadvar } from '../Nadvar';
import { Footer } from '../Footer';
import { Graficos } from '../Graficos';
import { Filtros } from '../Filtros';


function AppUI({ 
    completedTodos,
    totalTodos,
    motivationalPhrase,
    parsedTodos,
    filterTodoCompleted,
    filterTodoNoCompleted,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    setTodos,
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
            
            <Filtros 
              onTodos={() => setTodos(parsedTodos)}//todos los elementos
              onCompletados={() => setTodos(filterTodoCompleted)}
              onNoCompletados={() => setTodos(filterTodoNoCompleted)}
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