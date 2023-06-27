import {NameCounter} from "../Components/NameCounter/index";
import { TodoFilter } from "../Components/TodoFilter/index";
import { TodoList } from "../Components/TodoList/index";
import {TodoItem} from "../Components/TodoItem/index";
import { CreateButton } from "../Components/CreateButton/index";
import {TodosLoading} from "./TodosLoading"
import {TodosError} from "./TodosError"
import {EmptyTodos} from "./EmptyTodos"

const Logica = ({todos,completeTodo,deleteTodo,newtodo,setState, loading, error})=>{
    return(  <>
        <NameCounter total={todos.length} completed={todos.filter(e=> !!e.completed ).length}/>
       <TodoFilter setState={setState}/>
       <TodoList>
       {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError/>}
        {(!loading && newtodo.length === 0) && <EmptyTodos />}

        {newtodo.map(todo => (
          <TodoItem
            key={todo.text}
            element={todo}
            completed={todo.completed}
            oncomplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
       <CreateButton/>
       </TodoList>
    </>)
}

export {Logica}