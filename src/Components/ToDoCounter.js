import './ToDoCounter.css';

function ToDoCounter({total, completed}) {
    return (
        <h1 className='ToDoCounter'>
            Has completado <span>{completed}</span> de  los <span>{total}</span> TODOs
        </h1>
    );
}

export { ToDoCounter };