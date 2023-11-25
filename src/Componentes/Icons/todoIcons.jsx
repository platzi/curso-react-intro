import {AiFillCheckCircle } from "react-icons/ai"; 
import { AiFillDelete } from "react-icons/ai";

const iconTypes = { //Creo un objeto con los tipos de iconos que voy a querer renderizar
    "check":<AiFillCheckCircle/>,
    "delete": <AiFillDelete/>
}

function TodoIcons ({type}){
    return(
        <span className={`Icon Icon-${type}`}>

        {iconTypes[type]} 
        </span>
    )
}

export {TodoIcons}; 