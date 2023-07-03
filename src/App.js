import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';



const defaultTodos =[
  {text: 'cortar cebolla', completed: true},
  {text: 'completar el curso de React', completed: false},
  {text: 'encontrar un trabajo IT', completed: false},
  {text: 'comenzar la dieta', completed: true},
];

function App() {
  return (
   <>
      <h1 className='TodoCounter-title'>Tareas Pendientes</h1>
      <TodoCounter completed={16} total={25}/>
      
      <TodoSearch/>

      <TodoList >
        {defaultTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    

   </>

      
    
  );
}



export default App;
