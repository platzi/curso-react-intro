import './TodoItem.css'
import { BsFillDashCircleFill, BsCheckSquareFill } from "react-icons/bs";

function TodoItem(props) {
    return (
      <li className="list-group-item list-group-item-action list-group-item-dark TodoItem">

        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}><BsCheckSquareFill/></span> 

        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

        <span className="Icon Icon-delete"><BsFillDashCircleFill/></span>
      </li>
    );
  }

export { TodoItem };
 