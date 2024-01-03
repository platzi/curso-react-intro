import { TodoCount } from '../TodoCount';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';

function AppUI({
    completeTodo,
    totalTodos,
    searchValue, setSearchValue,
    searchedTodos,
    completedTodos, deleteTodo,
}) {
    return ( // a partir de aqui no estamos incorporando html, sino JSX
        <> {/* → este "codigo" sin declaracion alguna es igual o hace la misma funcion que React.Fragment*/}
        {/* ¿ Cómo llamo a un componente? Escribiendo su nombre con la siguiente sintáxis < Componente1 />  */}
            <TodoCount completed={completedTodos} total={totalTodos}/>
            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />

            <TodoList>
            {searchedTodos.map(todo =>(
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)} //evento del onClick del archivo TodoItem
                onDelete={() => deleteTodo(todo.text)} //evento del onClick del archivo TodoItem
                />
            ))}
            </TodoList>
            
            <TodoButton/>
        </>
    );
}

export { AppUI }