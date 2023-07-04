function TodoList(props) {
    return (
        <ul>
            <li>
                {props.children}
            </li>
        </ul>
    )
}

export { TodoList };