import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Nadvar } from '../Nadvar';
import { Footer } from '../Footer';
import { Graficos } from '../Graficos';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';



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
            
{/* Arreglar los estilos */}
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
              {loading && 
                <>
                <TodosLoading/>
                {/* circle grafich skeleton */}
                </>
               }
              {error && <TodosError/> }
              {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
              <Graficos
                completed={completedTodos}
                total={totalTodos}
              />
            </div>

{/* Arreglar los estilos */}
          </div>
          <CreateTodoButton/>
          <Footer/>
        </>
      );
};

export {AppUI};