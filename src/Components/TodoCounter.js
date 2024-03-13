import { useContext } from 'react';
import { TodoContext } from '../Components/Context';
import '../Styles/TodoCounter.css';

function TodoCounter() {
  const {completedTodos, totalTodos} =useContext(TodoContext)
  if(totalTodos<completedTodos){
    let acu = totalTodos;
    totalTodos=completedTodos;
    completedTodos=acu;
  }
  return(
    <h1 className={!(totalTodos === completedTodos)? "TodoCounter": "TodoCounter--completed"}>
      {totalTodos === completedTodos? 
        `All tasks were completed!`: 
        `${completedTodos} of ${totalTodos} tasks to go`}
    </h1>
  )
}

export {TodoCounter};