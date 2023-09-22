import '../css/todoList.css';
function TodoList({ children }) {
    return (
        <ul className='TodoList'>
            {children}
        </ul>
    );
}
export { TodoList };
