function TodoItem(props){ //componente
    return( //elemento
        <li>
            <span>V</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export {TodoItem}