import {React} from 'react'
import TodoIcon from '.';
const completeIcon = ({complete, oncomplete}) => {
    return (
        <TodoIcon type="check" click={oncomplete} color={complete?"green":"gray"}/>
    );
}

export default completeIcon