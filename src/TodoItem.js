import CompleteIcon from "./completeIcon.js";
import DeleteIcon from "./deleteIcon.js";
import "./todoItem.css";

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