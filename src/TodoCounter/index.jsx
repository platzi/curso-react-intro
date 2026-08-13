import "./TodoCounter.css";

function TodoCounter({totalTodos, completedTodos, motivationalPhrase}){

    return(
        <div className="TodoCounter">
            <h3 className="fs-5 fw-medium mb-2">
              Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
            </h3>
            <p className="TodoCounter-phrase">{motivationalPhrase}</p>
        </div>
    );
}


export { TodoCounter };