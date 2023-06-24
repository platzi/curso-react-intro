import {React} from 'react';
import { ReactComponent as CheckIcon} from '../../icons/check.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import "../../styles/todoIcon.css"
const todoIcon = ({type, color, click}) => {
    const iconType = {
        "check": color=><CheckIcon className="Icon-svg" fill={color}/>,
        "delete": color =><DeleteIcon className="Icon-svg" fill={color}/>
    }
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={()=>click()}>
            {iconType[type](color)}
        </span>
    );
}

export  default todoIcon;