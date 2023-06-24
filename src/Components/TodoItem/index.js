import CompleteIcon from "../todoIcon/completeIcon.js";
import DeleteIcon from "../todoIcon/deleteIcon.js";
import "../../styles/todoItem.css";

const TodoItem = ({element, completed,onComplete, onDelete})=>{
    return(
      <li className="TodoItem">
        <CompleteIcon complete={completed}  oncomplete={onComplete}/>
        <p className={`TodoItem-p ${element.completed&&"TodoItem-p--complete"}`}>{element.text}</p>
        <DeleteIcon  onDelete={onDelete}/>
      </li>
    )    
  
}

export {TodoItem}