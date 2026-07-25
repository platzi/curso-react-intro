function TodoList(props) {
    return(
        <ul>
            {props.children}
        </ul>
    );
}

export { TodoList };