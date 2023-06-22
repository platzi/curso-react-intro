import {React} from 'react'
import TodoIcon from './todoIcon';
const deleteIcon = ({onDelete}) => {
    return (
        <TodoIcon type="delete"  color="gray" click={onDelete}/>
    );
}

export  default deleteIcon