import React from "react";
import { TodoCounter } from '../Components/TodoCounter'
import { TodoSearch } from '../Components/TodoSearch'
import { TodoImage } from '../Components/TodoImage'
import { TodoList } from '../Components/TodoList'
import { TodoItem } from '../Components/TodoItem'
import { CreateTodoButton } from '../Components/CreateTodoButton'
import { TodosLoading } from '../Components/TodosLoading'
import { TodosError} from '../Components/TodosError'
import { TodosCreate} from '../Components/TodosCreate'
import { TodoContext } from "../Components/TodoContext";
import { Modal } from '../Components/Modal'

function AppUI() {
    const {
        loading,
        error,
        filteredTodos,
        todoCompleted,
        todoDelete,
        openModal,
        
    } = React.useContext(TodoContext);
return (
    <>
    <TodoCounter/>
    <TodoImage />
    <TodoSearch />
    <TodoList>
        {loading && 
        <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
        </>
        }
        {(!loading && filteredTodos.length === 0 ) && <TodosCreate />}
        {error && <TodosError />}
    
        {filteredTodos.map((todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => todoCompleted(todo.text)}
            onDelete={() => todoDelete(todo.text)}/>
            )))}
    </TodoList>
    <CreateTodoButton />
    {openModal && (
        <Modal>
            Add TODO
        </Modal>
    )}
    </>
    )
}
export { AppUI }