import React from 'react'
import { useNavigate } from 'react-router-dom'
import {TodoHeader } from '../../Components/TodoHeader'
import { TodoCounter } from '../../Components/TodoCounter'
import { TodoSearch } from '../../Components/TodoSearch'
import { TodoList } from '../../Components/TodoList'
import { TodoItem } from '../../Components/TodoItem'
import { CreateTodoButton } from '../../Components/CreateTodoButton'
import { TodosLoading } from '../../Components/TodosLoading'
import { TodosError} from '../../Components/TodosError'
import { TodosCreate} from '../../Components/TodosCreate'
//import { TodoCongratulation } from '../../Components/TodoCongratulation'
import { useTodos } from '../../routes/useTodos'
//import { Modal } from '../../Components/Modal'
//import { TodoForm } from '../../Components/TodoForm'
import { ChangeAlert } from '../../Components/ChangeAlert'


function HomePage() {
    const navigate = useNavigate()
    const { state, stateUpdaters } = useTodos()

    const {
    totalTodos,
    completedTodos,
    loading,
    error,
    filteredTodos,
    //openModal,
    searchValue,
    } = state
    
    const {
    setSearchValue,
    //addTodo,
    //setOpenModal,
    todoCompleted,
    todoDelete,
    sincronizeTodos
} = stateUpdaters;
return (
    <React.Fragment >
        <TodoHeader loading={loading}>
        <TodoCounter
            totalTodos={totalTodos} 
            completedTodos={completedTodos}
            //loading={loading}
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            //loading={loading}
        />
    </TodoHeader>

    <TodoList
        loading={loading}
        error={error}
        filteredTodos={filteredTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <><TodosLoading /><TodosLoading /><TodosLoading /></>}
        onCreate={() => <TodosCreate />}
        onEmptySearchResults={
            (searchText) => <p>No results found to "{searchText}"</p>}
        render={todo => (
                <TodoItem 
                    key={todo.id} 
                    text={todo.text}
                    completed={todo.completed}
                    onEdit={() => 
                        navigate(
                            '/edit/' + todo.id,
                            {
                                state: {todo}
                            } 
                        )} //dynamic route
                    onComplete={() => todoCompleted(todo.id)}
                    onDelete={() => todoDelete(todo.id)}
                />
            )}
    >
        {/*{todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => todoCompleted(todo.text)}
                onDelete={() => todoDelete(todo.text)}
                />
            )
        }*/}
    </TodoList>

    {/* {!!openModal && (
        <Modal>
            <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}/>
        </Modal>
    )}*/}

    <CreateTodoButton
        onClick={() => navigate('/new')}
        //setOpenModal={setOpenModal}
    />

    <ChangeAlert
        sincronize={sincronizeTodos}  />
    </React.Fragment>
    )
}
export { HomePage }
