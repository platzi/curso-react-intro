import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";

function TodoItem(props){
    return(
      <li className="flex items-center">
        <IoCheckmarkCircleOutline
         onClick={props.onComplete}
         className={`cursor-pointer font-bold ${props.completed && "text-lime-500" }`}
         />

        <p className={`grow text-center ${props.completed && "line-through"}`}>{props.text}</p>
    
        <IoCloseCircleSharp 
        onClick={props.onDelete}
        className={`cursor-pointer font-bold text-red-600`}
        />

      </li>
    );
  }

  export {TodoItem};