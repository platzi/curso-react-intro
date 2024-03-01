import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

function TodoItem(props){
    return(
      <li className="flex items-center p-3">
        <IoCheckmarkCircleOutline
         onClick={props.onComplete}
         className={`cursor-pointer h-7 w-7 ${props.completed && "text-white" }`}
         />

        <p className={`grow text-center text-2xl font-bold text-white ${props.completed && "line-through"}`}>{props.text}</p>
    
        <MdDeleteOutline 
        onClick={props.onDelete}
        className={`cursor-pointer h-7 w-7 text-white`}
        />

      </li>
    );
  }

  export {TodoItem};