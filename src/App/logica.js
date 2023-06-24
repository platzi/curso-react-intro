import {NameCounter} from "../Components/NameCounter/index";
import { TodoFilter } from "../Components/TodoFilter/index";
import { TodoList } from "../Components/TodoList/index";
import {TodoItem} from "../Components/TodoItem/index";
import { CreateButton } from "../Components/CreateButton/index";

const Logica = ({todos,completeTodo,deleteTodo,newtodo,setState})=>{
    return(  <>
        <NameCounter total={todos.length} completed={todos.filter(e=> !!e.completed ).length}/>
       <TodoFilter setState={setState}/>
       <TodoList>
       </TodoList>
       {newtodo.map(e=> (<TodoItem element={e} key={e.text} completed={e.completed} onComplete={()=>completeTodo(e.text)}
       onDelete={()=>deleteTodo(e.text)}/> ))}
       <CreateButton/>
    </>)
}

export {Logica}